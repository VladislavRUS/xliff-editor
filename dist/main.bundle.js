webpackJsonp([2,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(168)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_services_localization_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_upload_upload_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_editor_editor_component__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_8_upload_upload_component__["a" /* UploadComponent */] },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_9_editor_editor_component__["a" /* EditorComponent */] },
    { path: '', redirectTo: 'upload', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_8_upload_upload_component__["a" /* UploadComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7_services_localization_service__["a" /* LocalizationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_services_localization_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditorComponent = (function () {
    function EditorComponent(localizationService, router) {
        this.localizationService = localizationService;
        this.router = router;
        this.searchStr = '';
        this.addingUnit = false;
        this.editUnit = {
            idx: -1,
            source: '',
            target: ''
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.files = this.localizationService.getFiles();
        if (this.files.length === 0) {
            this.router.navigateByUrl('/upload');
        }
        else {
            this.setActiveFile(0);
        }
    };
    EditorComponent.prototype.setActiveFile = function (idx) {
        this.activeFile = this.files[idx];
        this.clearEditUnit();
    };
    EditorComponent.prototype.clearEditUnit = function () {
        this.editUnit.idx = -1;
        this.editUnit.source = '';
        this.editUnit.target = '';
    };
    EditorComponent.prototype.saveEdit = function () {
        this.updateTranslationUnit();
        this.clearEditUnit();
    };
    EditorComponent.prototype.updateTranslationUnit = function () {
        var _this = this;
        var data = this.files.filter(function (item) { return item.name === _this.activeFile.name; })[0].data;
        var file = data['xliff']['file'][0];
        var body = file['body'][0];
        var translationUnits = body['trans-unit'];
        var unit = translationUnits[this.editUnit.idx];
        unit.source[0] = this.editUnit.source;
        unit.target[0] = this.editUnit.target;
    };
    EditorComponent.prototype.cancelEdit = function () {
        this.clearEditUnit();
    };
    EditorComponent.prototype.getFileTranslationUnits = function (file, filter) {
        var _this = this;
        var data = this.files.filter(function (item) { return item.name === file.name; })[0].data;
        var xliffFile = data['xliff']['file'][0];
        var body = xliffFile['body'][0];
        var translationUnits = body['trans-unit'];
        return translationUnits.filter(function (unit) {
            return filter && _this.searchStr.length ? unit['source'][0].indexOf(_this.searchStr) !== -1 : true;
        });
    };
    EditorComponent.prototype.edit = function (translationUnit, idx) {
        this.editUnit.idx = idx;
        this.editUnit.source = translationUnit.source[0];
        this.editUnit.target = translationUnit.target[0];
    };
    EditorComponent.prototype.generateXliff = function () {
        var _this = this;
        var xliff = this.files.filter(function (item) { return item.name === _this.activeFile.name; })[0];
        this.localizationService.generateXliff(xliff);
    };
    ;
    EditorComponent.prototype.addUnit = function () {
        this.addingUnit = true;
    };
    EditorComponent.prototype.cancelAdd = function () {
        this.addingUnit = false;
    };
    EditorComponent.prototype.saveAdd = function () {
        this.addingUnit = false;
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'editor',
        template: __webpack_require__(169)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_services_localization_service__["a" /* LocalizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_services_localization_service__["a" /* LocalizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EditorComponent);

var _a, _b;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_services_localization_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = (function () {
    function UploadComponent(localizationService, router) {
        this.localizationService = localizationService;
        this.router = router;
        this.url = '/upload';
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.itemsNumber = 0;
        this.counter = 0;
        this.preparing = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: this.url });
    }
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onAfterAddingFile = (function (item) {
            item.withCredentials = false;
        });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.counter++;
            _this.localizationService.addLocalization({
                name: item.file.name,
                data: JSON.parse(response)
            });
            if (_this.counter == _this.itemsNumber) {
                _this.router.navigateByUrl('/editor');
            }
        };
    };
    UploadComponent.prototype.ngOnDestroy = function () {
        this.counter = 0;
        this.itemsNumber = 0;
        this.preparing = false;
    };
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    UploadComponent.prototype.startEditing = function () {
        this.itemsNumber = this.uploader.queue.length;
        this.counter = 0;
        this.preparing = true;
        this.localizationService.localizations = [];
        this.uploader.uploadAll();
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'upload',
        template: __webpack_require__(170)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_services_localization_service__["a" /* LocalizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_services_localization_service__["a" /* LocalizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UploadComponent);

var _a, _b;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui stackable menu\">\r\n  <div class=\"item\">\r\n    <img src=\"/assets/xliff-editor-logo.png\">\r\n  </div>\r\n  <a class=\"item\" routerLink=\"upload\">Upload file</a>\r\n  <a class=\"item\" routerLink=\"editor\">Editor</a>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui padded container segment\">\r\n    <div class=\"ui segment\">\r\n      <h2 class=\"ui header\">\r\n        <i class=\"settings icon\"></i>\r\n        <div class=\"content\">\r\n          XLIFF Editor\r\n          <div class=\"sub header\">Manage your translations</div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n  \r\n    <div class=\"ui grid\">\r\n      <div class=\"four wide column\">\r\n        <div class=\"ui fluid vertical menu\">\r\n          <a class=\"item\" *ngFor=\"let file of files; let idx = index\" (click)=\"setActiveFile(idx)\" [ngClass]=\"{'active': file.name === activeFile.name, 'teal': file.name === activeFile.name}\">\r\n            {{file.name}}\r\n            <div class=\"ui label\" [ngClass]=\"{'teal': file.name === activeFile.name, 'left': file.name === activeFile.name, 'pointing': file.name === activeFile.name}\">\r\n              {{getFileTranslationUnits(file, false).length}}\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div class=\"ui fluid icon input\">\r\n          <input type=\"text\" placeholder=\"Search...\" [(ngModel)]=\"searchStr\">\r\n          <i class=\"search icon\"></i>\r\n        </div>\r\n        <div class=\"ui divider\"></div>\r\n  \r\n        <div class=\"ui fluid buttons\">\r\n          <button class=\"ui primary button\" (click)=\"generateXliff()\">Generate XLIFF</button>\r\n        </div>\r\n        <div class=\"ui divider\"></div>\r\n  \r\n        <div class=\"ui fluid buttons\">\r\n          <button class=\"ui positive button\" (click)=\"addUnit()\">Add translation unit</button>\r\n        </div>\r\n        <div class=\"ui divider\"></div>\r\n  \r\n        <div class=\"ui fluid buttons\" *ngIf=\"editUnit.idx !== -1\">\r\n          <button class=\"ui teal button\" (click)=\"saveEdit()\">Save</button>\r\n          <button class=\"ui button\" (click)=\"cancelEdit()\">Cancel</button>\r\n        </div>\r\n  \r\n      </div>\r\n      <div class=\"twelve wide column\">\r\n        <div class=\"ui container segment\" *ngIf=\"addingUnit\">\r\n          <form class=\"ui form\">\r\n            <div class=\"field\">\r\n              <label>Source</label>\r\n              <input type=\"text\" name=\"first-name\" placeholder=\"First Name\">\r\n            </div>\r\n            <div class=\"field\">\r\n              <label>Last Name</label>\r\n              <input type=\"text\" name=\"last-name\" placeholder=\"Last Name\">\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"ui checkbox\">\r\n                <input type=\"checkbox\" tabindex=\"0\" class=\"hidden\">\r\n                <label>I agree to the Terms and Conditions</label>\r\n              </div>\r\n            </div>\r\n            <button class=\"ui positive button\" (click)=\"saveAdd()\">Save</button>\r\n            <button class=\"ui button\" (click)=\"cancelAdd()\">Cancel</button>\r\n          </form>\r\n        </div>\r\n        <table class=\"ui selectable celled table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Source</th>\r\n              <th>Target</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\"top aligned\" *ngFor=\"let translationUnit of getFileTranslationUnits(activeFile, true), let idx = index\"\r\n              (click)=\"edit(translationUnit, idx)\" [ngClass]=\"{'active': editUnit.idx === idx}\">\r\n              <ng-template [ngIf]=\"editUnit.idx !== idx\">\r\n                <td>{{translationUnit['source'][0]}}</td>\r\n                <td>{{translationUnit['target'][0]}}</td>\r\n              </ng-template>\r\n              <ng-template [ngIf]=\"editUnit.idx === idx\">\r\n                <td>\r\n                  <div class=\"ui form\">\r\n                    <div class=\"field\">\r\n                      <textarea type=\"text\" rows=\"2\" [(ngModel)]=\"editUnit.source\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"ui form\">\r\n                    <div class=\"field\">\r\n                      <textarea type=\"text\" rows=\"2\" [(ngModel)]=\"editUnit.target\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </ng-template>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"_overlay\" *ngIf=\"preparing\">\r\n  <div class=\"ui active dimmer\">\r\n    <div class=\"ui indeterminate text loader\">Preparing Files</div>\r\n  </div>\r\n  <p></p>\r\n</div>\r\n\r\n<div class=\"ui padded container segment\">\r\n  <div ng2FileDrop [ngClass]=\"{'_over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\" class=\"ui dropzone\">\r\n    <h2 class=\"ui header\">\r\n      Drop files here\r\n    </h2>\r\n  </div>\r\n\r\n  <table class=\"ui celled striped table\">\r\n    <thead>\r\n      <tr>\r\n        <th>\r\n          Name\r\n        </th>\r\n        <th>\r\n          Size\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of uploader.queue\">\r\n        <td>\r\n          <strong>{{ item?.file?.name }}</strong>\r\n        </td>\r\n        <td>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <button class=\"ui button teal\" *ngIf=\"uploader.queue.length\" (click)=\"startEditing()\">Start editing</button>\r\n  <button class=\"ui button\" *ngIf=\"uploader.queue.length\" (click)=\"uploader.clearQueue()\">Clear</button>\r\n</div>\r\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocalizationService = (function () {
    function LocalizationService(http) {
        this.http = http;
        this.localizations = [];
    }
    LocalizationService.prototype.getFiles = function () {
        return this.localizations;
    };
    LocalizationService.prototype.addLocalization = function (localization) {
        this.localizations.push(localization);
    };
    LocalizationService.prototype.generateXliff = function (xliff) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/xml' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post('/xliffs', xliff.data, options).subscribe(function (resp) {
            var blob = new Blob([resp.text()]);
            __WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"](blob, xliff.name);
        });
    };
    return LocalizationService;
}());
LocalizationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LocalizationService);

var _a;
//# sourceMappingURL=localization.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 97;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(108);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.bundle.js.map