import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as FileSaver from 'file-saver';

@Injectable()
export class LocalizationService {
    constructor(private http: Http) { }
    localizations = [];

    getFiles(): any[] {
        return this.localizations;
    }

    addLocalization(localization: any): void {
        this.localizations.push(localization);
    }

    generateXliff(xliff: any): void {
        const headers = new Headers({ 'Accept': 'application/xml' });

        const options = new RequestOptions({ headers: headers });

        this.http.post('/xliffs', xliff.data, options).subscribe(resp => {
            const blob = new Blob([resp.text()]);
            FileSaver.saveAs(blob, xliff.name);
        });
    }
}
