import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FilesService {
    private files = [];
    constructor(private http: Http) { }

    getFiles(): any[] {
        return this.files;
    }

    addFile(file: any): void {
        this.files.push(file);
    }

    clearFiles(): void {
        this.files = [];
    }

    generateXliff(xliff: any): Observable<any> {
        const headers = new Headers({ 'Accept': 'application/xml' });

        const options = new RequestOptions({ headers: headers });

        return this.http.post('/xliffs', xliff.data, options);
    }
}
