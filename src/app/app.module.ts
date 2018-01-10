import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  { RouterModule, Routes } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { FilesService } from 'services/files.service';
import { UploadComponent } from 'upload/upload.component';
import { EditorComponent } from 'editor/editor.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'editor', component: EditorComponent },
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
  { path: '**', component: UploadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FilesService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
