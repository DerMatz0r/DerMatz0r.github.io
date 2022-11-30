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
    } }, styles: ["#interactive.viewport {\n  position: relative;\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  text-align: center;\n}\n\n  #interactive.viewport > canvas,   #interactive.viewport > video {\n  max-width: 100%;\n  width: 100%;\n}\n\n  canvas.drawing,   canvas.drawingBuffer {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n  video {\n  width: 100%;\n  object-fit: cover;\n}\n\n[_nghost-%COMP%] {\n  position: static;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neC1iYXJjb2RlLXNjYW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07QUFDUjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiIiwiZmlsZSI6Im5neC1iYXJjb2RlLXNjYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAjaW50ZXJhY3RpdmUudmlld3BvcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwICNpbnRlcmFjdGl2ZS52aWV3cG9ydCA+IGNhbnZhcyxcbjo6bmctZGVlcCAjaW50ZXJhY3RpdmUudmlld3BvcnQgPiB2aWRlbyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBjYW52YXMuZHJhd2luZyxcbjo6bmctZGVlcCBjYW52YXMuZHJhd2luZ0J1ZmZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG46Om5nLWRlZXAgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


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
/* harmony import */ var C_Gorleben_Angular_ngx_barcode_scanner_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
      var _ref = (0,C_Gorleben_Angular_ngx_barcode_scanner_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
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
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 1502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.component */ 1377);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 4097);







function AppComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Barcode scan is not available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["i2of5"]; };
class AppComponent {
    constructor(data) {
        this.data = data;
        this.isError = false;
        this.scannerSichtbar = true; //Schalter um Video Livestream ein- oder aus zu blenden
        //disableScroll.on(); //Deaktiviert scrollen, falls nicht erwünscht
        this.data.currentMessage.subscribe(message => this.message = message); //Bis jetzt noch Platzhalter, hier muss REST Aufruf hin
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
        console.log(this.message);
        console.log('Barcode:');
        console.log(document.getElementById("inputBarcodeScanner").value); //Inhalt des Matinputfield wird hier abgerufen
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 8, consts: [[1, "container-fluid", "p-0", "min-vh-100", "d-flex", "flex-column"], [1, "content"], [3, "dismissible"], ["for", "inputPassword5", 1, "form-label"], ["type", "text", "id", "inputBarcodeScanner", "aria-describedby", "passwordHelpBlock", 1, "form-control", 3, "value"], ["id", "passwordHelpBlock", 1, "form-text"], [1, "row", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], ["style", "color:red", 4, "ngIf"], [3, "value", "codes", "errorThreshold", "valueChange", "exception"], [2, "color", "red"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "p")(4, "ngb-alert", 2)(5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "S\u00E4ule: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Bitte Barcode scannen oder eingeben\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.abschicken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Ladevorgang Best\u00E4tigen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AppComponent_p_17_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ngx-barcode-scanner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AppComponent_Template_ngx_barcode_scanner_valueChange_18_listener($event) { return ctx.value = $event; })("valueChange", function AppComponent_Template_ngx_barcode_scanner_valueChange_18_listener() { return ctx.onValueChange(); })("exception", function AppComponent_Template_ngx_barcode_scanner_exception_18_listener($event) { return ctx.onError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isError == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.value)("codes", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0))("errorThreshold", 0.1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_1__.NgxBarcodeScannerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__.TopBarComponent], styles: ["ngx-barcode-scanner[_ngcontent-%COMP%]{\r\n  padding: 5px;\r\n  margin-right: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n\r\n  width: 50%;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n  }\r\n\r\n[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n\r\n  }\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.reihe-button-row[_ngcontent-%COMP%]{\r\n  float:left\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtFQUNiOztBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxhQUFhOztFQUVmOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBRVIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5neC1iYXJjb2RlLXNjYW5uZXJ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcblxyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIGgxe1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgfVxyXG5cclxuaDJ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4ucmVpaGUtYnV0dG9uLXJvd3tcclxuICBmbG9hdDpsZWZ0XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiJdfQ== */"] });


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
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('0');
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
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




//Leere Komponente um :id Parameter zu bekommen
class SaeuleComponent {
    constructor(route, data) {
        this.route = route;
        this.data = data;
        this.id = this.route.snapshot.paramMap.get('id'); //Url Parameter id bekommen
    }
    ngOnInit() {
        this.data.changeMessage(String(this.id)); //Id weiter senden mithilfe DataService an Top-Bar Component
    }
}
SaeuleComponent.ɵfac = function SaeuleComponent_Factory(t) { return new (t || SaeuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
SaeuleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SaeuleComponent, selectors: [["app-saeule"]], decls: 0, vars: 0, template: function SaeuleComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWV1bGUuY29tcG9uZW50LmNzcyJ9 */"] });


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



//Komponente die Säulen Nummern anzeigt
class TopBarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message); //Url Parameter ID von der Componente Saeule bekommen
    }
    showAboutClick() { }
    showDebugAreaClick() { }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 4, vars: 0, consts: [[1, "navbar", "navbar-default", "navbar-dark", "backg-roboblue"], ["id", "imgwrapper"], ["id", "imgwrapper2", "href", "/", 1, "d-inline-flex", "mr-2", "ms-4", "py-075rem"], ["id", "robologo", "src", "assets\\graphics\\logo_robotron.svg", "width", "411", "height", "70", "alt", "Robotron Datenbank-Software GmbH Firmenlogo", "title", "Robotron Datenbank-Software GmbH", 1, "img-fluid"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
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