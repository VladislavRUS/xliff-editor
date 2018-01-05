import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  { RouterModule, Routes } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { LocalizationService } from 'services/localization.service';
import { UploadComponent } from 'upload/upload.component';
import { EditorComponent } from 'editor/editor.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'editor', component: EditorComponent },
  { path: '', redirectTo: 'upload', pathMatch: 'full' }
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
    LocalizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
