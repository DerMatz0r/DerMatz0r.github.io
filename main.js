"use strict";
(self["webpackChunkngx_barcode_scanner_demo"] = self["webpackChunkngx_barcode_scanner_demo"] || []).push([["main"],{

/***/ 1377:
/*!*******************************************************************************!*\
  !*** ./projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxBarcodeScannerComponent": () => (/* binding */ NgxBarcodeScannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 7952);
/* harmony import */ var _ngx_barcode_scanner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-barcode-scanner.service */ 2328);




class NgxBarcodeScannerComponent {
    constructor(service) {
        this.service = service;
        this.codes = [
            'code_128', 'ean', 'ean_8', 'code_39', 'code_39_vin',
            'codabar', 'upc', 'upc_e', 'i2of5', '2of5', 'code_93'
        ];
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.exception = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    setConfig() {
        if (!this.config) {
            this.config = {
                ...this.service.defaultConfig(), decoder: {
                    readers: this.readers()
                }
            };
        }
        if (!this.config.inputStream) {
            this.config.inputStream = {};
        }
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.setOrDefault(this.config.inputStream, 'name', 'Live');
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.setOrDefault(this.config.inputStream, 'type', 'LiveStream');
        if (!this.config.locator) {
            this.config.locator = {};
        }
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.setOrDefault(this.config.locator, 'patchSize', 'medium');
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.setOrDefault(this.config.locator, 'halfSample', false);
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.setOrDefault(this.config, 'locate', true);
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.setOrDefault(this.config, 'numOfWorkers', 8);
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.setOrDefault(this.config, 'frequency', 10);
        if (!this.config.decoder) {
            this.config.decoder = {};
        }
        _utils__WEBPACK_IMPORTED_MODULE_0__.Utils.setOrDefault(this.config.decoder, 'readers', this.readers());
    }
    ngOnInit() {
        this.setConfig();
        const threshold = isNaN(this.errorThreshold) ? 0.1 : this.errorThreshold;
        this.service.start(this.config, threshold).subscribe((value) => {
            this.valueChange.emit(value);
        }, error => {
            this.exception.emit(error);
        });
    }
    ngOnDestroy() {
        this.service.stop();
    }
    readers() {
        const types = (typeof this.codes === 'string') ? [this.codes] : this.codes;
        return types.map(it => it + '_reader');
    }
}
NgxBarcodeScannerComponent.ɵfac = function NgxBarcodeScannerComponent_Factory(t) { return new (t || NgxBarcodeScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_barcode_scanner_service__WEBPACK_IMPORTED_MODULE_1__.NgxBarcodeScannerService)); };
NgxBarcodeScannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NgxBarcodeScannerComponent, selectors: [["ngx-barcode-scanner"]], inputs: { codes: "codes", config: "config", errorThreshold: "errorThreshold", value: "value" }, outputs: { valueChange: "valueChange", exception: "exception" }, decls: 1, vars: 0, consts: [["id", "interactive", 1, "viewport"]], template: function NgxBarcodeScannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#interactive.viewport {\r\n  position: relative;\r\n  width: 100%;\r\n  height: auto;\r\n  overflow: hidden;\r\n  text-align: center;\r\n}\r\n\r\n  #interactive.viewport > canvas,   #interactive.viewport > video {\r\n  max-width: 100%;\r\n  width: 100%;\r\n}\r\n\r\n  canvas.drawing,   canvas.drawingBuffer {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n  video {\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n  position: static;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1iYXJjb2RlLXNjYW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07QUFDUjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiIiwiZmlsZSI6Im5neC1iYXJjb2RlLXNjYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAjaW50ZXJhY3RpdmUudmlld3BvcnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAjaW50ZXJhY3RpdmUudmlld3BvcnQgPiBjYW52YXMsXHJcbjo6bmctZGVlcCAjaW50ZXJhY3RpdmUudmlld3BvcnQgPiB2aWRlbyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgY2FudmFzLmRyYXdpbmcsXHJcbjo6bmctZGVlcCBjYW52YXMuZHJhd2luZ0J1ZmZlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgdmlkZW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8424:
/*!****************************************************************************!*\
  !*** ./projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxBarcodeScannerModule": () => (/* binding */ NgxBarcodeScannerModule)
/* harmony export */ });
/* harmony import */ var _ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-barcode-scanner.component */ 1377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class NgxBarcodeScannerModule {
}
NgxBarcodeScannerModule.ɵfac = function NgxBarcodeScannerModule_Factory(t) { return new (t || NgxBarcodeScannerModule)(); };
NgxBarcodeScannerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxBarcodeScannerModule });
NgxBarcodeScannerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxBarcodeScannerModule, { declarations: [_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_0__.NgxBarcodeScannerComponent], exports: [_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_0__.NgxBarcodeScannerComponent] }); })();


/***/ }),

/***/ 2328:
/*!*****************************************************************************!*\
  !*** ./projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxBarcodeScannerService": () => (/* binding */ NgxBarcodeScannerService)
/* harmony export */ });
/* harmony import */ var C_Gorleben_Angular_bScanner_robotron_barcodescanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ericblade/quagga2 */ 2846);
/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);




class NgxBarcodeScannerService {
  constructor() {}

  defaultConfig() {
    return {
      inputStream: {
        name: 'Live',
        type: 'LiveStream'
      },
      locator: {
        patchSize: 'medium',
        halfSample: false
      },
      locate: true,
      numOfWorkers: 8,
      frequency: 10
    };
  }

  isScanMatch(scanResult, errorThresholdPercentage) {
    const avgErrors = this.meanBy(scanResult.codeResult.decodedCodes, 'error');
    return !!avgErrors && avgErrors < errorThresholdPercentage;
  }

  start(config, errorThresholdPercentage) {
    var _this = this;

    if (typeof this.scanResult === 'undefined') {
      this.scanResult = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }

    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().onProcessed(scanResult => {
      this.onProcessed(scanResult);
    });
    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().onDetected(result => {
      const barcode = result.codeResult.code;

      if (this.isScanMatch(result, errorThresholdPercentage)) {
        this.scanResult?.next(barcode + '');
      }
    });
    _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().init(config, /*#__PURE__*/function () {
      var _ref = (0,C_Gorleben_Angular_bScanner_robotron_barcodescanner_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
        if (error) {
          _this.scanResult?.error(error);
          yield _this.stop();
        } else {
          _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().start();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    return this.scanResult;
  }

  stop() {
    if (typeof this.scanResult !== 'undefined') {
      this.scanResult?.unsubscribe();
      this.scanResult = undefined;
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().stop());
  }
  /* eslint-disable */


  meanBy(arr, property) {
    if (!arr) {
      return undefined;
    }

    return arr.reduce((acc, item) => property in item ? acc + item[property] : acc, 0) / arr.length;
  }

  onProcessed(result) {
    const drawingCtx = (_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().canvas.ctx.overlay);
    const drawingCanvas = (_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().canvas.dom.overlay);

    if (result) {
      if (result.boxes) {
        const canvasWidth = drawingCanvas.getAttribute('width') ?? '0';
        const canvasHeight = drawingCanvas.getAttribute('height') ?? '0';
        const width = parseInt(canvasWidth, 10);
        const height = parseInt(canvasHeight, 10);
        drawingCtx.clearRect(0, 0, width, height);
        result.boxes.filter(box => box !== result.box).forEach(box => {
          _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().ImageDebug.drawPath(box, {
            x: 0,
            y: 1
          }, drawingCtx, {
            color: 'green',
            lineWidth: 2
          });
        });
      }

      if (result.box) {
        _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().ImageDebug.drawPath(result.box, {
          x: 0,
          y: 1
        }, drawingCtx, {
          color: '#00F',
          lineWidth: 2
        });
      }

      if (result.codeResult && result.codeResult.code) {
        _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1___default().ImageDebug.drawPath(result.line, {
          x: 'x',
          y: 'y'
        }, drawingCtx, {
          color: 'red',
          lineWidth: 3
        });
      }
    }
  }

}

NgxBarcodeScannerService.ɵfac = function NgxBarcodeScannerService_Factory(t) {
  return new (t || NgxBarcodeScannerService)();
};

NgxBarcodeScannerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: NgxBarcodeScannerService,
  factory: NgxBarcodeScannerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7952:
/*!*******************************************************!*\
  !*** ./projects/ngx-barcode-scanner/src/lib/utils.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
class Utils {
    /* eslint-disable */
    static setOrDefault(object, path, value) {
        if (typeof object[path] === 'undefined') {
            object[path] = value;
        }
    }
}


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_saeule_saeule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/saeule/saeule.component */ 8288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: ":id", component: _app_saeule_saeule_component__WEBPACK_IMPORTED_MODULE_0__.SaeuleComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
            useHash: true,
            relativeLinkResolution: 'corrected',
        }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent),
/* harmony export */   "NgbdModalContent": () => (/* binding */ NgbdModalContent)
/* harmony export */ });
/* harmony import */ var _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.module */ 8424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 1502);
/* harmony import */ var _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.component */ 1377);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 4097);








const _c0 = function () { return ["i2of5"]; };
//TODO
//Modal auf Fullscreen machen --> siehe DOku https://ng-bootstrap.github.io/#/components/modal/api
//Torch irgendwie anbekommen https://github.com/ericblade/quagga2#api
//Irgenwie dafür sorgen das man den gescannten Barcode aus dem Modalfenster in die Hauptanwendung bekommt check
// NGonchange hier implementieren
//Fenster auf Smartphone gößer machen
//Neues TODO
//IPhone: Fenster verschiebt sich nach oben --> beheben
//Fenster soll sich an Bildschirmgröße anpassen
//Footer einfügen mit Impressum und Datenschutz check
//Layout an bootstrap anpassen:Tabelle mit drei Rows
//Datenschutzseite und Impressumseite einfügen
//Icon für Button einfügen
//Buttonlänge an restliche Komponenten anpassen
//Torch einfügen
class NgbdModalContent {
    constructor(activeModal, data) {
        this.activeModal = activeModal;
        this.data = data;
        this.isError = false;
    }
    onValueChange() {
        this.data.changeBarcode(this.value);
        console.log(this.value);
        this.activeModal.close();
    }
    onError(error) {
        console.error(error);
        this.isError = true;
    }
}
NgbdModalContent.ɵfac = function NgbdModalContent_Factory(t) { return new (t || NgbdModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
NgbdModalContent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NgbdModalContent, selectors: [["ngbd-modal-content"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]], decls: 6, vars: 4, consts: [["fullscreen", "true", 1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["fullscreen", "true", 1, "modal-body"], [3, "value", "codes", "errorThreshold", "valueChange", "exception"]], template: function NgbdModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Bitte Barcode in Kamera halten");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NgbdModalContent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "ngx-barcode-scanner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function NgbdModalContent_Template_ngx_barcode_scanner_valueChange_5_listener($event) { return ctx.value = $event; })("valueChange", function NgbdModalContent_Template_ngx_barcode_scanner_valueChange_5_listener() { return ctx.onValueChange(); })("exception", function NgbdModalContent_Template_ngx_barcode_scanner_exception_5_listener($event) { return ctx.onError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.value)("codes", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0))("errorThreshold", 0.1);
    } }, dependencies: [_projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_0__.NgxBarcodeScannerModule, _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_2__.NgxBarcodeScannerComponent], encapsulation: 2 });
class AppComponent {
    constructor(data, modalService) {
        this.data = data;
        this.modalService = modalService;
        this.isError = false;
        this.scannerSichtbar = true;
        this.fehlermeldung = "Bitte Barcode scannen oder eingeben.";
        this.data.currentBarcode.subscribe(barcode => this.value = barcode);
        this.data.currentSaeuleID.subscribe(saeuleID => this.saeuleID = saeuleID);
    }
    ngOnInit() {
        this.data.currentSaeuleID.subscribe(saeuleID => this.saeuleID = saeuleID);
    }
    ngAfterContentInit() {
        this.data.currentSaeuleID.subscribe(saeuleID => this.saeuleID = saeuleID);
    }
    onError(error) {
        console.error(error);
        this.isError = true;
    }
    onValueChange() {
        this.scannerSichtbar = false;
    }
    erneutScannen() {
        this.scannerSichtbar = true;
    }
    abschicken() {
        console.log('ID Säule:');
        console.log(this.saeuleID);
        console.log('Barcode:');
        console.log(document.getElementById("inputBarcodeScanner").value); //Inhalt des Matinputfield wird hier abgerufen
    }
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 46, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "container-fluid", "p-0", "min-vh-100", "d-flex", "flex-column"], [1, "d-flex", "justify-content-center"], [1, "card"], [1, "card-body"], [1, "content"], [3, "dismissible"], [1, "content2"], ["for", "inputPassword5", 1, "form-label"], [1, "input-group", "mb-3"], ["type", "text", "id", "inputBarcodeScanner", "aria-label", "Erkannter Barcode", "aria-describedby", "button-addon2", 1, "form-control", 3, "value"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary", 3, "click"], ["src", "assets/graphics/camera.svg", "width", "30"], [1, "row", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "container-fluid", "p-0"], [1, "footerRobotron"], ["id", "sticky-footer", 1, "flex-shrink-0", "py-4", "text-white-50"], [1, "container", "text-center"], [1, "col"], ["href", "url"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "h2")(10, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Lades\u00E4ule:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p")(14, "ngb-alert", 7)(15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8)(18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Erkannter Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_22_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() { return ctx.abschicken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Ladevorgang Best\u00E4tigen");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 1)(28, "div", 16)(29, "div", 17)(30, "footer", 18)(31, "div", 19)(32, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Copyright \u00A9 Robotron Datenbank Software GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 19)(35, "div", 3)(36, "div", 1)(37, "div", 20)(38, "small")(39, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 20)(42, "small")(43, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Datenschutz");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.saeuleID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.fehlermeldung, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.value);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAlert, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__.TopBarComponent], styles: ["ngx-barcode-scanner[_ngcontent-%COMP%]{\r\n  padding: 5px;\r\n  margin-right: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n\r\n  width: 50%;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n  }\r\n\r\n[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    position: absolute;\r\n    top: 10%;\r\n\r\n  }\r\n\r\n.reihe-button-row[_ngcontent-%COMP%]{\r\n  float:left\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  }\r\n\r\n.content2[_ngcontent-%COMP%]{\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.footerRobotron[_ngcontent-%COMP%]{\r\n  background: #314869;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  width: 75%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtFQUNiOztBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7O0VBRVY7O0FBRUY7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCOztBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LWJhcmNvZGUtc2Nhbm5lcntcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuXHJcbiAgd2lkdGg6IDUwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMCU7XHJcblxyXG4gIH1cclxuXHJcbi5yZWloZS1idXR0b24tcm93e1xyXG4gIGZsb2F0OmxlZnRcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbi5jb250ZW50MntcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb290ZXJSb2JvdHJvbntcclxuICBiYWNrZ3JvdW5kOiAjMzE0ODY5O1xyXG59XHJcbi5jYXJke1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.module */ 8424);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _saeule_saeule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saeule/saeule.component */ 8288);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 4097);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_1__.NgxBarcodeScannerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _saeule_saeule_component__WEBPACK_IMPORTED_MODULE_2__.SaeuleComponent,
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_3__.TopBarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_1__.NgxBarcodeScannerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule] }); })();


/***/ }),

/***/ 1502:
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


//Data Service ist dafuer da Nachrichten zwischen Komponenten auszutauschen
class DataService {
    constructor() {
        this.saeuleIDSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.barcodeSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.currentSaeuleID = this.saeuleIDSource.asObservable();
        this.currentBarcode = this.barcodeSource.asObservable();
    }
    changeSaeuleID(saeuleID) {
        this.saeuleIDSource.next(saeuleID);
    }
    changeBarcode(barcode) {
        this.barcodeSource.next(barcode);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8288:
/*!********************************************!*\
  !*** ./src/app/saeule/saeule.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaeuleComponent": () => (/* binding */ SaeuleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.service */ 1502);




class SaeuleComponent {
    constructor(route, data) {
        this.route = route;
        this.data = data;
        this.id = this.route.snapshot.paramMap.get('id'); //Url Parameter id bekommen
    }
    ngOnInit() {
        this.data.changeSaeuleID(String(this.id)); //Id weiter senden mithilfe DataService an Top-Bar Component
    }
}
SaeuleComponent.ɵfac = function SaeuleComponent_Factory(t) { return new (t || SaeuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
SaeuleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SaeuleComponent, selectors: [["app-saeule"]], decls: 0, vars: 0, template: function SaeuleComponent_Template(rf, ctx) { }, styles: ["ngx-barcode-scanner[_ngcontent-%COMP%]{\r\n  max-width: 95%;\r\n  padding: 5px;\r\n  margin-right: 10px;\r\n  border-style: solid;\r\n  border-radius: 5px;\r\n  border-color: lightgray;\r\n\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n\r\n  width: 50%;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n  }\r\n\r\n[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n\r\n  }\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZXVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7O0FBRXpCOztBQUVBOztFQUVFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtFQUNiOztBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxhQUFhOztFQUVmOztBQUVGO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNhZXVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LWJhcmNvZGUtc2Nhbm5lcntcclxuICBtYXgtd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xyXG5cclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG5cclxuICB3aWR0aDogNTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICBoMXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbmgye1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4097:
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.service */ 1502);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);



class TopBarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 6, vars: 0, consts: [[1, "navbar", "navbar-default", "navbar-dark", "backg-roboblue"], ["id", "imgwrapper"], ["id", "imgwrapper2", "href", "/", 1, "d-inline-flex", "mr-2", "ms-4", "py-075rem"], ["id", "robologo", "src", "assets\\graphics\\logo_robotron.svg", "width", "411", "height", "70", "alt", "Robotron Datenbank-Software GmbH Firmenlogo", "title", "Robotron Datenbank-Software GmbH", 1, "img-fluid"], [1, "navbar-nav", "mx-5", "navbar-brand", "ms-auto"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Barcode Scanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar], styles: [".backg-roboblue[_ngcontent-%COMP%] {\r\n  background-color: #314969;\r\n}\r\n\r\n.py-075rem[_ngcontent-%COMP%] {\r\n  padding-top: 0.75rem ;\r\n  padding-bottom: 0.75rem;\r\n}\r\n\r\n#imgwrapper[_ngcontent-%COMP%]{\r\n  height:3.2rem;\r\n}\r\n\r\n#imgwrapper2[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  line-height: inherit;\r\n}\r\n\r\n#robologo[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n  width: 1000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJ0b3AtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2ctcm9ib2JsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTQ5Njk7XHJcbn1cclxuXHJcbi5weS0wNzVyZW0ge1xyXG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtIDtcclxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcclxufVxyXG5cclxuI2ltZ3dyYXBwZXJ7XHJcbiAgaGVpZ2h0OjMuMnJlbTtcclxufVxyXG4jaW1nd3JhcHBlcjJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcbiNyb2JvbG9nb3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgd2lkdGg6IDEwMDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map