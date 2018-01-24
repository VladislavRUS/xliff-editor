import { Component, transition, style, SimpleChanges } from '@angular/core';
import { FilesService } from 'services/files.service';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { } from '@angular/core/src/animation/dsl';
import * as FileSaver from 'file-saver';
import { fail } from 'assert';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {

  files: any[];
  activeFile: any;
  searchStr = '';
  addingUnit = false;
  editingUnit = false;
  editUnit = {
    previous: null,
    idx: -1,
    id: '',
    source: '',
    target: ''
  };
  scrollTimeout = null;
  pages: number[];
  maxPageElements = 50;
  currentPage = 0;
  showErrorMessage = false;
  generating = false;
  unitsTracking = {};

  constructor(private filesService: FilesService, private router: Router) { }

  ngOnInit(): void {
    this.files = this.filesService.getFiles();

    if (this.files.length === 0) {
      this.router.navigateByUrl('/upload');

    } else {
      this.setActiveFile(0);
      this.updatePages(this.getFileTranslationUnits(this.activeFile, false, false));

      this.files.forEach(file => {
        this.unitsTracking[file.name] = {
          addedUnits: [],
          editedUnits: []
        }
      });
    }

    window.addEventListener('scroll', event => {
      if (this.scrollTimeout !== null) {
        clearTimeout(this.scrollTimeout);
      }

      this.scrollTimeout = setTimeout(() => {
        const stickyClass = 'sticky-el';

        const sticky = document.getElementById('sticky');

        if (window.scrollY > 100) {
          sticky.style.transform = `translateY(${window.scrollY}px)`;

        } else {
          sticky.style.transform = 'translateY(0px)';
        }
      }, 500);
    });
  }

  updatePages(translationUnits: any[]): void {
    this.cancelAdd();
    this.cancelEdit();
    this.clearEditUnit();

    this.currentPage = 0;
    this.pages = [];

    const pagesNumber = Math.floor(translationUnits.length / this.maxPageElements);

    for (let i = 0; i <= pagesNumber; i++) {
      this.pages.push(i);
    }
  }

  setActivePage(page: number) {
    this.currentPage = page;
  }

  incPage(): void {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
    }
  }

  decPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  setActiveFile(idx): void {
    this.activeFile = this.files[idx];
    this.searchStr = '';
    this.updatePages(this.getFileTranslationUnits(this.activeFile, false, false));
  }

  clearEditUnit(): void {
    this.editUnit.previous = null;
    this.editUnit.idx = -1;
    this.editUnit.id = '';
    this.editUnit.source = '';
    this.editUnit.target = '';
  }

  showError(): void {
    this.showErrorMessage = true;
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 3000);
  }

  isExisting(): boolean {
    return this.getFileTranslationUnits(this.activeFile, false, false).filter(unit => {
      return this.editUnit.id === this.getUnitId(unit);

    }).length > 0;
  }

  isNotEmpty(): boolean {
    return this.editUnit.id !== '' && this.editUnit.source !== '' && this.editUnit.target !== '';
  }

  private updateTranslationUnit(): void {
    const translationUnits = this.getTranslationUnits(this.activeFile.name);

    const unit = translationUnits[this.getUnitIdxById(this.getUnitId(this.editUnit.previous))];
    unit['$']['id'] = this.editUnit.id;
    unit.source[0] = this.editUnit.source;
    unit.target[0] = this.editUnit.target;
  }

  getFileTranslationUnits(file: any, paged: boolean, withSearch: boolean): any[] {
    if (!file) {
      return;
    }

    let translationUnits = this.getTranslationUnits(file.name);
    if (withSearch && this.searchStr.length) {
      const searchStr = this.searchStr.toLowerCase();

      translationUnits = translationUnits.filter(unit => {
        const source = unit.source[0].toLowerCase();
        const target = unit.target[0].toLowerCase();
        const id = unit['$']['id'].toLowerCase();

        return id.indexOf(searchStr) > -1 || source.indexOf(searchStr) > -1 || target.indexOf(searchStr) > -1;
      });
    }

    if (!paged) {
      return translationUnits;

    } else {
      const startElement = this.currentPage * this.maxPageElements;
      const endElement = (startElement + this.maxPageElements) > translationUnits.length
        ? (translationUnits.length)
        : startElement + this.maxPageElements;

      return translationUnits.slice(startElement, endElement);
    }
  }

  getTranslationUnits(fileName: string): any[] {
    const data = this.files.filter(item => item.name === fileName)[0].data;
    const xliffFile = data['xliff']['file'][0];
    const body = xliffFile['body'][0];
    const translationUnits = body['trans-unit'];

    return translationUnits.sort((first, second) => {
      const firstId = this.getUnitId(first);
      const secondId = this.getUnitId(second);

      return firstId.localeCompare(secondId);
    });
  };

  edit(translationUnit: any, idx: number): void {
    if (this.editUnit.idx === idx) {
      return;
    }

    this.editingUnit = true;
    this.cancelAdd();
    this.clearEditUnit();

    this.editUnit.previous = Object.assign({}, translationUnit);
    this.editUnit.idx = idx;
    this.editUnit.id = translationUnit['$']['id'];
    this.editUnit.source = translationUnit.source[0];
    this.editUnit.target = translationUnit.target[0];
  }

  saveEdit(): void {
    if (this.isNotEmpty()) {
      this.updateTranslationUnit();
      this.unitsTracking[this.activeFile.name].editedUnits.push(this.editUnit.id);

      this.cancelEdit();
      this.clearEditUnit();

    } else {
      this.showError();
    }
  }

  deleteEdit(): void {
    const translationUnits = this.getTranslationUnits(this.activeFile.name);
    translationUnits.splice(this.getUnitIdxById(this.editUnit.id), 1);

    this.clearEditUnit();
    this.cancelEdit();
  };

  cancelEdit(): void {
    this.editingUnit = false;
  }

  addUnit(): void {
    this.addingUnit = true;
    this.editingUnit = false;
    this.clearEditUnit();
  }

  saveAdd(): void {
    if (this.isNotEmpty() && !this.isExisting()) {
      const translationUnits = this.getTranslationUnits(this.activeFile.name);
      const newTranslationUnit = {
        $: {
          datatype: 'html',
          id: this.editUnit.id
        },
        source: [this.editUnit.source],
        target: [this.editUnit.target],
        note: [
          {
            $: {
              from: 'description',
              priority: 1
            }
          }
        ]
      };

      this.unitsTracking[this.activeFile.name].addedUnits.push(newTranslationUnit['$'].id);
      translationUnits.push(newTranslationUnit);

      this.cancelAdd();
      this.clearEditUnit();

    } else {
      this.showError();
    }
  }

  cancelAdd(): void {
    this.addingUnit = false;
  }

  isAdded(unit: any): boolean {
    return this.unitsTracking[this.activeFile.name].addedUnits.filter(id => unit['$'].id === id).length > 0;
  }

  isEdited(unit: any): boolean {
    return this.unitsTracking[this.activeFile.name].editedUnits.filter(id => unit['$'].id === id).length > 0;
  }

  isTheSame(): boolean {
    const previous = this.editUnit.previous;

    return this.editUnit.id === this.getUnitId(previous) &&
      this.editUnit.source === previous.source[0] &&
      this.editUnit.target === previous.target;
  }

  getUnitId(translationUnit: any) {
    return translationUnit['$'].id;
  }

  getUnitIdxById(id: string) {
    return this.getFileTranslationUnits(this.activeFile, false, false).findIndex(unit => {
      return unit['$'].id === id;
    });
  };

  generateXliff(): void {
    this.generating = true;

    const xliff = this.files.filter(item => item.name === this.activeFile.name)[0];

    this.filesService.generateXliff(xliff).subscribe(resp => {
      const blob = new Blob([resp.text()]);
      FileSaver.saveAs(blob, xliff.name);

      this.generating = false;
    });
  };
}
