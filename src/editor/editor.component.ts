import { Component, transition } from '@angular/core';
import { LocalizationService } from 'services/localization.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { last } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {

  files: any[];
  activeFile: any;
  searchStr = '';
  addingUnit = false;
  editUnit = {
    idx: -1,
    id: '',
    source: '',
    target: ''
  }
  constructor(private localizationService: LocalizationService, private router: Router) { }

  ngOnInit(): void {
    this.files = this.localizationService.getFiles();

    if (this.files.length === 0) {
      this.router.navigateByUrl('/upload');
      
    } else {
      this.setActiveFile(0);
    }
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
    this.clearEditUnit();
  }

  private updateTranslationUnit(): void {
    const data = this.files.filter(item => item.name === this.activeFile.name)[0].data;
    const file = data['xliff']['file'][0];
    const body = file['body'][0];
    const translationUnits = body['trans-unit'];

    const unit = translationUnits[this.editUnit.idx];
    unit['$']['id'] = this.editUnit.id;
    unit.source[0] = this.editUnit.source;
    unit.target[0] = this.editUnit.target;
  }

  cancelEdit(): void {
    this.clearEditUnit();
  }

  getFileTranslationUnits(file: any, filter: boolean): any[] {
    const data = this.files.filter(item => item.name === file.name)[0].data;
    const xliffFile = data['xliff']['file'][0];
    const body = xliffFile['body'][0];
    const translationUnits = body['trans-unit'];

    return translationUnits.filter(unit => {
      return filter && this.searchStr.length ? unit['source'][0].indexOf(this.searchStr) !== -1 : true;
    });
  }

  edit(translationUnit: any, idx: number): void {
    this.editUnit.idx = idx;
    this.editUnit.id = translationUnit['$']['id']
    this.editUnit.source = translationUnit.source[0];
    this.editUnit.target = translationUnit.target[0];
  }

  generateXliff(): void {
    const xliff = this.files.filter(item => item.name === this.activeFile.name)[0];
    this.localizationService.generateXliff(xliff);
  };

  addUnit(): void {
    this.addingUnit = true;
  }

  cancelAdd(): void {
    this.addingUnit = false;
  }

  saveAdd(): void {
    this.addingUnit = false;
  }
}
