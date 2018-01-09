import { Component, OnDestroy, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { LocalizationService } from 'services/localization.service';
import { Router } from '@angular/router';
import { fail } from 'assert';

@Component({
  selector: 'upload',
  templateUrl: 'upload.component.html'
})

export class UploadComponent implements OnInit, OnDestroy {
  

  url = '/upload';
  hasBaseDropZoneOver: boolean = false;
  hasAnotherDropZoneOver: boolean = false;
  itemsNumber = 0;
  counter = 0;
  preparing = false;
  uploader: FileUploader;

  constructor(private localizationService: LocalizationService, private router: Router) {
    this.uploader = new FileUploader({ url: this.url });
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false;
    });

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.counter++;

      this.localizationService.addLocalization({
        name: item.file.name,
        data: JSON.parse(response)
      });

      if (this.counter == this.itemsNumber) {
        this.router.navigateByUrl('/editor');
      }
    };
  }

  ngOnDestroy(): void {
    this.counter = 0;
    this.itemsNumber = 0;
    this.preparing = false;
  }
  
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  startEditing(): void {
    this.itemsNumber = this.uploader.queue.length;
    this.counter = 0;
    this.preparing = true;
    this.localizationService.localizations = [];

    this.uploader.uploadAll();
  }
}
