import { Component, transition, style } from '@angular/core';
import { FilesService } from 'services/files.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { last } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { timeout } from 'q';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {

  files: any[];
  activeFile: any;
  searchStr = '';
  addingUnit = false;
  addedUnits = [];
  editedUnits = [];
  editUnit = {
    idx: -1,
    id: '',
    source: '',
    target: ''
  };
  scrollTimeout = null;

  constructor(private filesService: FilesService, private router: Router) { }

  ngOnInit(): void {
    this.files = this.filesService.getFiles();

    if (this.files.length === 0) {
      this.router.navigateByUrl('/upload');

    } else {
      this.setActiveFile(0);
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

  setActiveFile(idx): void {
    this.activeFile = this.files[idx];
    this.clearEditUnit();
  }

  clearEditUnit(): void {
    this.editUnit.idx = -1;
    this.editUnit.id = '';
    this.editUnit.source = '';
    this.editUnit.target = '';
  }

  saveEdit(): void {
    this.updateTranslationUnit();
    this.editedUnits.push(this.editUnit.id);
    this.clearEditUnit();
  }

  private updateTranslationUnit(): void {
    const translationUnits = this.getTranslationUnits(this.activeFile.name);

    const unit = translationUnits[this.editUnit.idx];
    unit['$']['id'] = this.editUnit.id;
    unit.source[0] = this.editUnit.source;
    unit.target[0] = this.editUnit.target;
  }

  cancelEdit(): void {
    this.clearEditUnit();
  }

  getFileTranslationUnits(file: any, filter: boolean): any[] {
    if (!file) {
      return;
    }

    const translationUnits = this.getTranslationUnits(file.name);

    return translationUnits.filter(unit => {
      return filter && this.searchStr.length ? unit['source'][0].indexOf(this.searchStr) !== -1 : true;
    });
  }

  getTranslationUnits(fileName: string): any[] {
    const data = this.files.filter(item => item.name === fileName)[0].data;
    const xliffFile = data['xliff']['file'][0];
    const body = xliffFile['body'][0];
    const translationUnits = body['trans-unit'];

    return translationUnits;
  };

  edit(translationUnit: any, idx: number): void {
    this.editUnit.idx = idx;
    this.editUnit.id = translationUnit['$']['id']
    this.editUnit.source = translationUnit.source[0];
    this.editUnit.target = translationUnit.target[0];
  }

  deleteEdit(): void {
    const translationUnits = this.getTranslationUnits(this.activeFile.name);

    translationUnits.splice(this.editUnit.idx, 1);
    this.clearEditUnit();
  };

  generateXliff(): void {
    const xliff = this.files.filter(item => item.name === this.activeFile.name)[0];
    this.filesService.generateXliff(xliff);
  };

  addUnit(): void {
    this.addingUnit = true;

    this.cancelEdit();
  }

  cancelAdd(): void {
    this.addingUnit = false;
  }

  saveAdd(): void {
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

    this.addedUnits.push(this.editUnit.id);
    translationUnits.push(newTranslationUnit);

    this.cancelAdd();
  }

  isAdded(unit: any): boolean {
    return this.addedUnits.filter(id => unit['$'].id === id).length > 0;
  }

  isEdited(unit: any): boolean {
    return this.editedUnits.filter(id => unit['$'].id === id).length > 0;
  }
}
