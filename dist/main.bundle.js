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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_services_files_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_upload_upload_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_editor_editor_component__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_9_upload_upload_component__["a" /* UploadComponent */] },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_10_editor_editor_component__["a" /* EditorComponent */] },
    { path: '', redirectTo: 'upload', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9_upload_upload_component__["a" /* UploadComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_9_upload_upload_component__["a" /* UploadComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8_services_files_service__["a" /* FilesService */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["HashLocationStrategy"] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_services_files_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
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
    function EditorComponent(filesService, router) {
        this.filesService = filesService;
        this.router = router;
        this.searchStr = '';
        this.addingUnit = false;
        this.editingUnit = false;
        this.editUnit = {
            previous: null,
            idx: -1,
            id: '',
            source: '',
            target: ''
        };
        this.scrollTimeout = null;
        this.maxPageElements = 50;
        this.currentPage = 0;
        this.showErrorMessage = false;
        this.generating = false;
        this.unitsTracking = {};
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.files = this.filesService.getFiles();
        if (this.files.length === 0) {
            this.router.navigateByUrl('/upload');
        }
        else {
            this.setActiveFile(0);
            this.updatePages(this.getFileTranslationUnits(this.activeFile, false, false));
            this.files.forEach(function (file) {
                _this.unitsTracking[file.name] = {
                    addedUnits: [],
                    editedUnits: []
                };
            });
        }
        window.addEventListener('scroll', function (event) {
            if (_this.scrollTimeout !== null) {
                clearTimeout(_this.scrollTimeout);
            }
            _this.scrollTimeout = setTimeout(function () {
                var stickyClass = 'sticky-el';
                var sticky = document.getElementById('sticky');
                if (window.scrollY > 100) {
                    sticky.style.transform = "translateY(" + window.scrollY + "px)";
                }
                else {
                    sticky.style.transform = 'translateY(0px)';
                }
            }, 500);
        });
    };
    EditorComponent.prototype.updatePages = function (translationUnits) {
        this.cancelAdd();
        this.cancelEdit();
        this.clearEditUnit();
        this.currentPage = 0;
        this.pages = [];
        var pagesNumber = Math.floor(translationUnits.length / this.maxPageElements);
        for (var i = 0; i <= pagesNumber; i++) {
            this.pages.push(i);
        }
    };
    EditorComponent.prototype.setActivePage = function (page) {
        this.currentPage = page;
    };
    EditorComponent.prototype.incPage = function () {
        if (this.currentPage < this.pages.length) {
            this.currentPage++;
        }
    };
    EditorComponent.prototype.decPage = function () {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    };
    EditorComponent.prototype.setActiveFile = function (idx) {
        this.activeFile = this.files[idx];
        this.updatePages(this.getFileTranslationUnits(this.activeFile, false, false));
    };
    EditorComponent.prototype.clearEditUnit = function () {
        this.editUnit.previous = null;
        this.editUnit.idx = -1;
        this.editUnit.id = '';
        this.editUnit.source = '';
        this.editUnit.target = '';
    };
    EditorComponent.prototype.showError = function () {
        var _this = this;
        this.showErrorMessage = true;
        setTimeout(function () {
            _this.showErrorMessage = false;
        }, 3000);
    };
    EditorComponent.prototype.isExisting = function () {
        var _this = this;
        return this.getFileTranslationUnits(this.activeFile, false, false).filter(function (unit) {
            return _this.editUnit.id === _this.getUnitId(unit);
        }).length > 0;
    };
    EditorComponent.prototype.isNotEmpty = function () {
        return this.editUnit.id !== '' && this.editUnit.source !== '' && this.editUnit.target !== '';
    };
    EditorComponent.prototype.updateTranslationUnit = function () {
        var translationUnits = this.getTranslationUnits(this.activeFile.name);
        var unit = translationUnits[this.getUnitIdxById(this.getUnitId(this.editUnit.previous))];
        unit['$']['id'] = this.editUnit.id;
        unit.source[0] = this.editUnit.source;
        unit.target[0] = this.editUnit.target;
    };
    EditorComponent.prototype.getFileTranslationUnits = function (file, paged, withSearch) {
        if (!file) {
            return;
        }
        var translationUnits = this.getTranslationUnits(file.name);
        if (withSearch && this.searchStr.length) {
            var searchStr_1 = this.searchStr.toLowerCase();
            translationUnits = translationUnits.filter(function (unit) {
                var source = unit.source[0].toLowerCase();
                var id = unit['$']['id'].toLowerCase();
                return source.indexOf(searchStr_1) > -1 || id.indexOf(searchStr_1) > -1;
            });
        }
        if (!paged) {
            return translationUnits;
        }
        else {
            var startElement = this.currentPage * this.maxPageElements;
            var endElement = (startElement + this.maxPageElements) > translationUnits.length
                ? (translationUnits.length)
                : startElement + this.maxPageElements;
            return translationUnits.slice(startElement, endElement);
        }
    };
    EditorComponent.prototype.getTranslationUnits = function (fileName) {
        var _this = this;
        var data = this.files.filter(function (item) { return item.name === fileName; })[0].data;
        var xliffFile = data['xliff']['file'][0];
        var body = xliffFile['body'][0];
        var translationUnits = body['trans-unit'];
        return translationUnits.sort(function (first, second) {
            var firstId = _this.getUnitId(first);
            var secondId = _this.getUnitId(second);
            return firstId.localeCompare(secondId);
        });
    };
    ;
    EditorComponent.prototype.edit = function (translationUnit, idx) {
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
    };
    EditorComponent.prototype.saveEdit = function () {
        if (this.isNotEmpty()) {
            this.updateTranslationUnit();
            this.unitsTracking[this.activeFile.name].editedUnits.push(this.editUnit.id);
            this.cancelEdit();
            this.clearEditUnit();
        }
        else {
            this.showError();
        }
    };
    EditorComponent.prototype.deleteEdit = function () {
        var translationUnits = this.getTranslationUnits(this.activeFile.name);
        translationUnits.splice(this.getUnitIdxById(this.editUnit.id), 1);
        this.clearEditUnit();
        this.cancelEdit();
    };
    ;
    EditorComponent.prototype.cancelEdit = function () {
        this.editingUnit = false;
    };
    EditorComponent.prototype.addUnit = function () {
        this.addingUnit = true;
        this.editingUnit = false;
        this.clearEditUnit();
    };
    EditorComponent.prototype.saveAdd = function () {
        if (this.isNotEmpty() && !this.isExisting()) {
            var translationUnits = this.getTranslationUnits(this.activeFile.name);
            var newTranslationUnit = {
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
        }
        else {
            this.showError();
        }
    };
    EditorComponent.prototype.cancelAdd = function () {
        this.addingUnit = false;
    };
    EditorComponent.prototype.isAdded = function (unit) {
        return this.unitsTracking[this.activeFile.name].addedUnits.filter(function (id) { return unit['$'].id === id; }).length > 0;
    };
    EditorComponent.prototype.isEdited = function (unit) {
        return this.unitsTracking[this.activeFile.name].editedUnits.filter(function (id) { return unit['$'].id === id; }).length > 0;
    };
    EditorComponent.prototype.isTheSame = function () {
        var previous = this.editUnit.previous;
        return this.editUnit.id === this.getUnitId(previous) &&
            this.editUnit.source === previous.source[0] &&
            this.editUnit.target === previous.target;
    };
    EditorComponent.prototype.getUnitId = function (translationUnit) {
        return translationUnit['$'].id;
    };
    EditorComponent.prototype.getUnitIdxById = function (id) {
        return this.getFileTranslationUnits(this.activeFile, false, false).findIndex(function (unit) {
            return unit['$'].id === id;
        });
    };
    ;
    EditorComponent.prototype.generateXliff = function () {
        var _this = this;
        this.generating = true;
        var xliff = this.files.filter(function (item) { return item.name === _this.activeFile.name; })[0];
        this.filesService.generateXliff(xliff).subscribe(function (resp) {
            var blob = new Blob([resp.text()]);
            __WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"](blob, xliff.name);
            _this.generating = false;
        });
    };
    ;
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'editor',
        template: __webpack_require__(169)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_services_files_service__["a" /* FilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_services_files_service__["a" /* FilesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_services_files_service__ = __webpack_require__(34);
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
    function UploadComponent(fileService, router) {
        this.fileService = fileService;
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
            _this.fileService.addFile({
                name: item.file.name,
                data: JSON.parse(response)
            });
            if (_this.counter === _this.itemsNumber) {
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
        this.fileService.clearFiles();
        this.uploader.uploadAll();
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'upload',
        template: __webpack_require__(170)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_services_files_service__["a" /* FilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_services_files_service__["a" /* FilesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
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

module.exports = "<div class=\"_overlay\" *ngIf=\"generating\">\r\n  <div class=\"ui active inverted dimmer\">\r\n    <div class=\"ui indeterminate text loader\">Generating</div>\r\n  </div>\r\n  <p></p>\r\n</div>\r\n\r\n<div class=\"ui padded container segment\">\r\n  <div class=\"ui segment\">\r\n    <h2 class=\"ui header\">\r\n      <i class=\"settings icon\"></i>\r\n      <div class=\"content\">\r\n        XLIFF Editor\r\n        <div class=\"sub header\">Manage your translations</div>\r\n      </div>\r\n    </h2>\r\n  </div>\r\n\r\n  <div class=\"ui grid left\">\r\n    <div class=\"three wide column\">\r\n      <div class=\"ui fluid vertical menu\" id=\"sticky\">\r\n\r\n        <a class=\"item\" *ngFor=\"let file of files; let idx = index\" (click)=\"setActiveFile(idx)\" [ngClass]=\"{'active': file.name === activeFile.name, 'teal': file.name === activeFile.name}\">\r\n          {{file.name}}\r\n          <div class=\"ui label\" [ngClass]=\"{'teal': file.name === activeFile.name, 'left': file.name === activeFile.name, 'pointing': file.name === activeFile.name}\">\r\n            {{getFileTranslationUnits(file, false, false).length}}\r\n          </div>\r\n        </a>\r\n\r\n        <div class=\"item\">\r\n          <div class=\"ui fluid icon input transparent\">\r\n            <input type=\"text\" placeholder=\"Search...\" [(ngModel)]=\"searchStr\" (ngModelChange)=\"updatePages(getFileTranslationUnits(activeFile, false, true))\">\r\n            <i class=\"search icon\"></i>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n          <div class=\"ui fluid buttons\">\r\n            <button class=\"ui primary button\" (click)=\"generateXliff()\">Generate XLIFF</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"item\">\r\n          <div class=\"ui fluid buttons\">\r\n            <button class=\"ui positive button\" (click)=\"addUnit()\">Add unit</button>\r\n          </div>\r\n        </div>\r\n\r\n        <ng-template [ngIf]=\"editingUnit\">\r\n          <div class=\"item\">\r\n            <div class=\"ui fluid buttons\">\r\n              <button class=\"ui teal button\" (click)=\"saveEdit()\">Save</button>\r\n              <button class=\"ui button\" (click)=\"cancelEdit(); clearEditUnit()\">Cancel</button>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"ui fluid buttons\">\r\n              <button class=\"ui negative button\" (click)=\"deleteEdit()\">Delete</button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"thirteen wide column\" id=\"stickyContext\">\r\n      <div class=\"ui error message animated\" *ngIf=\"showErrorMessage\">\r\n        <i class=\"close icon\" (click)=\"showErrorMessage = false\"></i>\r\n        <div class=\"header\">\r\n          Translation unit is incorrect\r\n        </div>\r\n        <ul class=\"list\">\r\n          <li>Please fill all the fields</li>\r\n          <li>Translation unit with the same id already exists</li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"ui container segment\" *ngIf=\"addingUnit\">\r\n        <form class=\"ui form\">\r\n          <div class=\"field\">\r\n            <label>ID</label>\r\n            <input type=\"text\" name=\"id\" placeholder=\"Enter id\" [(ngModel)]=\"editUnit.id\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>Source</label>\r\n            <input type=\"text\" name=\"source\" placeholder=\"Enter source\" [(ngModel)]=\"editUnit.source\">\r\n          </div>\r\n          <div class=\"field\">\r\n            <label>Target</label>\r\n            <input type=\"text\" name=\"target\" placeholder=\"Enter target\" [(ngModel)]=\"editUnit.target\">\r\n          </div>\r\n          <button class=\"ui positive button\" (click)=\"saveAdd()\">Save</button>\r\n          <button class=\"ui button\" (click)=\"cancelAdd()\">Cancel</button>\r\n        </form>\r\n      </div>\r\n      <table class=\"ui fixed single line selectable compact table\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"3\">\r\n              <div class=\"ui right floated pagination menu\">\r\n                <a class=\"icon item\" (click)=\"decPage()\">\r\n                  <i class=\"left chevron icon\"></i>\r\n                </a>\r\n                <a class=\"item\" *ngFor=\"let page of pages\" (click)=\"setActivePage(page)\" [ngClass]=\"{'active': page === currentPage}\">\r\n                  {{page + 1}}\r\n                </a>\r\n                <a class=\"icon item\" (click)=\"incPage()\">\r\n                  <i class=\"right chevron icon\"></i>\r\n                </a>\r\n              </div>\r\n            </th>\r\n          </tr>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Source</th>\r\n            <th>Target</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"top aligned pointer\" *ngFor=\"let translationUnit of getFileTranslationUnits(activeFile, true, true), let idx = index\"\r\n            (click)=\"edit(translationUnit, idx)\" [ngClass]=\"{'active': editUnit.idx === idx}\">\r\n            <ng-template [ngIf]=\"editUnit.idx !== idx\">\r\n              <td>\r\n                <div class=\"ui ribbon label teal\" *ngIf=\"isAdded(translationUnit) && !isEdited(translationUnit)\">New</div>\r\n                <div class=\"ui ribbon label orange\" *ngIf=\"isEdited(translationUnit)\">Edited</div>\r\n                {{translationUnit['$']['id']}}</td>\r\n              <td>{{translationUnit['source'][0]}}</td>\r\n              <td>{{translationUnit['target'][0]}}</td>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"editUnit.idx === idx && editingUnit\">\r\n              <td>\r\n                <div class=\"ui form\">\r\n                  <div class=\"field\">\r\n                    <textarea type=\"text\" rows=\"3\" [(ngModel)]=\"editUnit.id\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"ui form\">\r\n                  <div class=\"field\">\r\n                    <textarea type=\"text\" rows=\"3\" [(ngModel)]=\"editUnit.source\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"ui form\">\r\n                  <div class=\"field\">\r\n                    <textarea type=\"text\" rows=\"3\" [(ngModel)]=\"editUnit.target\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </ng-template>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"_overlay\" *ngIf=\"preparing\">\r\n  <div class=\"ui active inverted dimmer\">\r\n    <div class=\"ui indeterminate text loader\">Preparing Files</div>\r\n  </div>\r\n  <p></p>\r\n</div>\r\n\r\n<div class=\"ui padded container segment\">\r\n  <div ng2FileDrop [ngClass]=\"{'_over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\" class=\"ui dropzone\">\r\n    <h2 class=\"ui header\">\r\n      Drop file here\r\n    </h2>\r\n  </div>\r\n\r\n  <table class=\"ui celled striped table\">\r\n    <thead>\r\n      <tr>\r\n        <th>\r\n          Name\r\n        </th>\r\n        <th>\r\n          Size\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of uploader.queue\">\r\n        <td>\r\n          <strong>{{ item?.file?.name }}</strong>\r\n        </td>\r\n        <td>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <button class=\"ui button teal\" *ngIf=\"uploader.queue.length\" (click)=\"startEditing()\">Start editing</button>\r\n  <button class=\"ui button\" *ngIf=\"uploader.queue.length\" (click)=\"uploader.clearQueue()\">Clear</button>\r\n</div>\r\n"

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilesService = (function () {
    function FilesService(http) {
        this.http = http;
        this.files = [];
    }
    FilesService.prototype.getFiles = function () {
        return this.files;
    };
    FilesService.prototype.addFile = function (file) {
        this.files.push(file);
    };
    FilesService.prototype.clearFiles = function () {
        this.files = [];
    };
    FilesService.prototype.generateXliff = function (xliff) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/xml' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('/xliffs', xliff.data, options);
    };
    return FilesService;
}());
FilesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], FilesService);

var _a;
//# sourceMappingURL=files.service.js.map

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