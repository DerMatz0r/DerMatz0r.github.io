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
NgxBarcodeScannerComponent.??fac = function NgxBarcodeScannerComponent_Factory(t) { return new (t || NgxBarcodeScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngx_barcode_scanner_service__WEBPACK_IMPORTED_MODULE_1__.NgxBarcodeScannerService)); };
NgxBarcodeScannerComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: NgxBarcodeScannerComponent, selectors: [["ngx-barcode-scanner"]], inputs: { codes: "codes", config: "config", errorThreshold: "errorThreshold", value: "value" }, outputs: { valueChange: "valueChange", exception: "exception" }, decls: 1, vars: 0, consts: [["id", "interactive", 1, "viewport"]], template: function NgxBarcodeScannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "div", 0);
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
NgxBarcodeScannerModule.??fac = function NgxBarcodeScannerModule_Factory(t) { return new (t || NgxBarcodeScannerModule)(); };
NgxBarcodeScannerModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: NgxBarcodeScannerModule });
NgxBarcodeScannerModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](NgxBarcodeScannerModule, { declarations: [_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_0__.NgxBarcodeScannerComponent], exports: [_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_0__.NgxBarcodeScannerComponent] }); })();


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
/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ericblade/quagga2 */ 1386);
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

NgxBarcodeScannerService.??fac = function NgxBarcodeScannerService_Factory(t) {
  return new (t || NgxBarcodeScannerService)();
};

NgxBarcodeScannerService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
  token: NgxBarcodeScannerService,
  factory: NgxBarcodeScannerService.??fac,
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_barcode_formular_barcode_formular_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/barcode-formular/barcode-formular.component */ 3322);
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impressum/impressum.component */ 2579);
/* harmony import */ var _datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datenschutz/datenschutz.component */ 5638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: ":id", component: _app_barcode_formular_barcode_formular_component__WEBPACK_IMPORTED_MODULE_0__.BarcodeFormularComponent },
    //{ path: '**',  component: BarcodeFormularComponent },
    { path: 'sonstiges/Impressum', component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_1__.ImpressumComponent },
    { path: 'sonstiges/Datenschutz', component: _datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_2__.DatenschutzComponent },
    { path: '', redirectTo: '0', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
            useHash: true,
            relativeLinkResolution: 'corrected',
        }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 4097);






const _c0 = function (a0) { return { "is-phone-portrait": a0 }; };
class AppComponent {
    constructor(responsive) {
        this.responsive = responsive;
        this.isError = false;
        this.scannerSichtbar = true;
        this.fehlermeldung = "Bitte Barcode scannen oder eingeben.";
        this.isPhonePortrait = false;
        this.myscreen = window.screen.orientation;
    }
    ngOnInit() {
        this.responsive.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.HandsetPortrait)
            .subscribe(result => {
            this.isPhonePortrait = false;
            if (result.matches) {
                this.isPhonePortrait = true;
            }
        });
        screen.orientation.lock("portrait-primary"); //um screen im potrait modus zu locken
        this.getScreenWidth = window.innerWidth;
        this.getScreenHeight = window.innerHeight;
        console.log("Handy: ", this.isPhonePortrait);
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 5, consts: [["name", "viewport", 3, "content"], [1, "alles"], [1, "container-fluid"], [1, "row"], [1, "container-fluid", "p-0", "min-vh-100", "d-flex", "flex-column"], [1, "mittlereZeile", 3, "ngClass"], [1, "container-fluid", "p-0"], [1, "footerRobotron"], ["id", "sticky-footer", 1, "flex-shrink-0", "py-4", "text-white-50"], [1, "container", "text-center"], [1, "d-flex", "justify-content-center"], [1, "col"], ["routerLink", "sonstiges/Impressum", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "sonstiges/Datenschutz", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 5)(7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 3)(10, "div", 6)(11, "div", 7)(12, "footer", 8)(13, "div", 9)(14, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Copyright \u00A9 Robotron Datenbank Software GmbH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 9)(17, "div", 10)(18, "div", 3)(19, "div", 11)(20, "small")(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 11)(24, "small")(25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Datenschutz");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate2"]("content", "width=", ctx.getScreenWidth, ",height=", ctx.getScreenHeight, ", initial-scale=1.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](3, _c0, ctx.isPhonePortrait));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent], styles: [".footerRobotron[_ngcontent-%COMP%]{\r\n  background: #314869;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\ncolor: white;\r\nopacity: 0.5;\r\n}\r\n\r\n.mittlereZeile[_ngcontent-%COMP%]{\r\n  margin-bottom: -4.65%;\r\n\r\n}\r\n\r\n.mittlereZeile.is-phone-portrait[_ngcontent-%COMP%]{\r\n  margin-bottom:-23%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUIsQ0FBQyxxQkFBcUI7O0FBRTdDOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb290ZXJSb2JvdHJvbntcclxuICBiYWNrZ3JvdW5kOiAjMzE0ODY5O1xyXG59XHJcblxyXG5he1xyXG5jb2xvcjogd2hpdGU7XHJcbm9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLm1pdHRsZXJlWmVpbGV7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTQuNjUlOy8qLTUuOTUlOyBmw7xyIExhcHRvcCovXHJcblxyXG59XHJcbi5taXR0bGVyZVplaWxlLmlzLXBob25lLXBvcnRyYWl0e1xyXG4gIG1hcmdpbi1ib3R0b206LTIzJTtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.module */ 8424);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _saeule_saeule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saeule/saeule.component */ 8288);
/* harmony import */ var _barcode_formular_barcode_formular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./barcode-formular/barcode-formular.component */ 3322);
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-bar/top-bar.component */ 4097);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);




















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_1__.NgxBarcodeScannerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _saeule_saeule_component__WEBPACK_IMPORTED_MODULE_2__.SaeuleComponent,
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__.TopBarComponent,
        _barcode_formular_barcode_formular_component__WEBPACK_IMPORTED_MODULE_3__.BarcodeFormularComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_1__.NgxBarcodeScannerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule] }); })();


/***/ }),

/***/ 3322:
/*!****************************************************************!*\
  !*** ./src/app/barcode-formular/barcode-formular.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeFormularComponent": () => (/* binding */ BarcodeFormularComponent),
/* harmony export */   "NgbdModalContent": () => (/* binding */ NgbdModalContent)
/* harmony export */ });
/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ericblade/quagga2 */ 1386);
/* harmony import */ var _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ericblade_quagga2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.module */ 8424);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 1502);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../projects/ngx-barcode-scanner/src/lib/ngx-barcode-scanner.component */ 1377);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);














function NgbdModalContent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function NgbdModalContent_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["????resetView"](ctx_r1.lichtSchalter()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
} }
const _c0 = function () { return ["i2of5"]; };
const _c1 = function (a0) { return { "is-phone-portrait": a0 }; };
class NgbdModalContent {
    constructor(activeModal, data, platform) {
        this.activeModal = activeModal;
        this.data = data;
        this.platform = platform;
        this.isError = false;
        this.lichtSchalterZustand = false;
        this.lichtSchalterEinblenden = true;
        this.iphone = false;
        //Da iOS Torch nicht unterst??tzt wird der Button der Lichtschalter ausgeblendet
        if (this.platform.IOS) {
            this.lichtSchalterEinblenden = false;
            this.iphone = true;
        }
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
    lichtSchalter() {
        if (this.lichtSchalterZustand == false) {
            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_0___default().CameraAccess.enableTorch();
            this.lichtSchalterZustand = true;
        }
        else {
            _ericblade_quagga2__WEBPACK_IMPORTED_MODULE_0___default().CameraAccess.disableTorch();
            this.lichtSchalterZustand = false;
        }
    }
}
NgbdModalContent.??fac = function NgbdModalContent_Factory(t) { return new (t || NgbdModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform)); };
NgbdModalContent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: NgbdModalContent, selectors: [["ngbd-modal-content"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????StandaloneFeature"]], decls: 7, vars: 5, consts: [["fullscreen", "true", 1, "modal-header"], [4, "ngIf"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["fullscreen", "true", 1, "modal-body"], [3, "value", "codes", "errorThreshold", "valueChange", "exception"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["src", "assets/graphics/torch.png", "width", "30"]], template: function NgbdModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, NgbdModalContent_ng_container_1_Template, 3, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "Kamera auf Barcode richten");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function NgbdModalContent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "div", 4)(6, "ngx-barcode-scanner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("valueChange", function NgbdModalContent_Template_ngx_barcode_scanner_valueChange_6_listener($event) { return ctx.value = $event; })("valueChange", function NgbdModalContent_Template_ngx_barcode_scanner_valueChange_6_listener() { return ctx.onValueChange(); })("exception", function NgbdModalContent_Template_ngx_barcode_scanner_exception_6_listener($event) { return ctx.onError($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.lichtSchalterEinblenden);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", ctx.value)("codes", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction0"](4, _c0))("errorThreshold", 0.1);
    } }, dependencies: [_projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_module__WEBPACK_IMPORTED_MODULE_1__.NgxBarcodeScannerModule, _projects_ngx_barcode_scanner_src_lib_ngx_barcode_scanner_component__WEBPACK_IMPORTED_MODULE_3__.NgxBarcodeScannerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".modal-title[_ngcontent-%COMP%]{\r\n  margin-left: 20px;\r\n  margin-top: 20px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0FBRWxCIiwiZmlsZSI6Im1vZGFsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC10aXRsZXtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxufVxyXG4iXX0= */"] });
class BarcodeFormularComponent {
    constructor(modalService, data, route, responsive) {
        this.modalService = modalService;
        this.data = data;
        this.route = route;
        this.responsive = responsive;
        this.isError = false;
        this.scannerSichtbar = true;
        this.saeuleID = this.route.snapshot.paramMap.get('id');
        this.fehlermeldung = "Bitte Barcode scannen oder eingeben.";
        this.isPhonePortrait = false;
        this.data.currentBarcode.subscribe(barcode => this.value = barcode);
    }
    ngOnInit() {
        this.responsive.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.Breakpoints.HandsetPortrait)
            .subscribe(result => {
            this.isPhonePortrait = false;
            if (result.matches) {
                this.isPhonePortrait = true;
            }
        });
    }
    abschicken() {
        console.log('ID S??ule:');
        console.log(this.saeuleID);
        console.log('Barcode:');
        console.log(document.getElementById("inputBarcodeScanner").value); //Inhalt des inputfield wird hier abgerufen
    }
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
    ngOnDestroy() {
        //Um Speicherleck zu verhindern wird beim zerst??ren der Komponente auch der Service beendet
        this.data.currentBarcode.subscribe(barcode => this.value = barcode).unsubscribe();
    }
}
BarcodeFormularComponent.??fac = function BarcodeFormularComponent_Factory(t) { return new (t || BarcodeFormularComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.BreakpointObserver)); };
BarcodeFormularComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: BarcodeFormularComponent, selectors: [["app-barcode-formular"]], decls: 23, vars: 7, consts: [[1, "d-flex", "justify-content-center"], [1, "card", 3, "ngClass"], [1, "shadow"], [1, "card-body"], [1, "content"], [3, "dismissible"], [1, "content2"], ["for", "inputPassword5", 1, "form-label"], [1, "input-group", "mb-3"], ["type", "text", "id", "inputBarcodeScanner", "aria-label", "Erkannter Barcode", "aria-describedby", "button-addon2", 1, "form-control", 3, "value"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary", 3, "click"], ["src", "assets/graphics/camera.svg", "width", "30"], [1, "buttonzeile", "row", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"]], template: function BarcodeFormularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2")(6, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7, "Lades\u00E4ule:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "p")(10, "ngb-alert", 5)(11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 6)(14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15, "Erkannter Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BarcodeFormularComponent_Template_button_click_18_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "div", 12)(21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function BarcodeFormularComponent_Template_button_click_21_listener() { return ctx.abschicken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22, "Ladevorgang starten");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](5, _c1, ctx.isPhonePortrait));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", ctx.saeuleID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", ctx.fehlermeldung, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("value", ctx.value);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAlert], styles: [".buttonzeile[_ngcontent-%COMP%]{\r\n  width: 99.99%;\r\n  margin-left:0.5px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  position: absolute;\r\n  top: 25%;\r\n\r\n\r\n}\r\n.card.is-phone-portrait[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  position: absolute;\r\n  top: 25%;\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcmNvZGUtZm9ybXVsYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTs7O0FBR1Y7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTs7O0FBR1YiLCJmaWxlIjoiYmFyY29kZS1mb3JtdWxhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnplaWxle1xyXG4gIHdpZHRoOiA5OS45OSU7XHJcbiAgbWFyZ2luLWxlZnQ6MC41cHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNSU7XHJcblxyXG5cclxufVxyXG5cclxuLmNhcmQuaXMtcGhvbmUtcG9ydHJhaXR7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyNSU7XHJcblxyXG5cclxufVxyXG4iXX0= */"] });


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
DataService.??fac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: DataService, factory: DataService.??fac, providedIn: 'root' });


/***/ }),

/***/ 5638:
/*!******************************************************!*\
  !*** ./src/app/datenschutz/datenschutz.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatenschutzComponent": () => (/* binding */ DatenschutzComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DatenschutzComponent {
    constructor() { }
    ngOnInit() {
    }
}
DatenschutzComponent.??fac = function DatenschutzComponent_Factory(t) { return new (t || DatenschutzComponent)(); };
DatenschutzComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DatenschutzComponent, selectors: [["app-datenschutz"]], decls: 2, vars: 0, template: function DatenschutzComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "datenschutz works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlbnNjaHV0ei5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2579:
/*!**************************************************!*\
  !*** ./src/app/impressum/impressum.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpressumComponent": () => (/* binding */ ImpressumComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ImpressumComponent {
    constructor() { }
    ngOnInit() {
    }
}
ImpressumComponent.??fac = function ImpressumComponent_Factory(t) { return new (t || ImpressumComponent)(); };
ImpressumComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ImpressumComponent, selectors: [["app-impressum"]], decls: 2, vars: 0, template: function ImpressumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "impressum works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXByZXNzdW0uY29tcG9uZW50LmNzcyJ9 */"] });


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
        console.log("Abgegriffene ID");
        console.log(this.id);
    }
}
SaeuleComponent.??fac = function SaeuleComponent_Factory(t) { return new (t || SaeuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
SaeuleComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SaeuleComponent, selectors: [["app-saeule"]], decls: 0, vars: 0, template: function SaeuleComponent_Template(rf, ctx) { }, styles: ["ngx-barcode-scanner[_ngcontent-%COMP%]{\r\n  max-width: 95%;\r\n  padding: 5px;\r\n  margin-right: 10px;\r\n  border-style: solid;\r\n  border-radius: 5px;\r\n  border-color: lightgray;\r\n\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n\r\n  width: 50%;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n  }\r\n\r\n[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n\r\n  }\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZXVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7O0FBRXpCOztBQUVBOztFQUVFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtFQUNiOztBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxhQUFhOztFQUVmOztBQUVGO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNhZXVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LWJhcmNvZGUtc2Nhbm5lcntcclxuICBtYXgtd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogbGlnaHRncmF5O1xyXG5cclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG5cclxuICB3aWR0aDogNTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICBoMXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbmgye1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);




const _c0 = function (a0) { return { "smallWidth": a0 }; };
class TopBarComponent {
    constructor(data) {
        this.data = data;
        this.smallWidth = false;
        this.url = document.URL; //Damit man zur??ck zum Anfang kommt falls man auf die Datenschutz Seite oder Impressum Seite gegangen ist und statt auf zur??ck das Robotron Logo anklickt
    }
    ngOnInit() {
        if (window.innerWidth <= 375) { //sonst verschiebt sich der Schriftzug bei kleinen Bildschirmen nach unten und soll hiermit vermieden werden
            this.smallWidth = true;
        }
    }
}
TopBarComponent.??fac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
TopBarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 7, vars: 4, consts: [[1, "navbar", "navbar-default", "navbar-dark", "backg-roboblue"], ["id", "imgwrapper"], ["id", "imgwrapper2", 1, "d-inline-flex", "mr-2", "ms-4", "py-075rem", 3, "href"], ["id", "robologo", "src", "assets\\graphics\\logo_robotron.svg", "width", "411", "height", "70", "alt", "Robotron Datenbank-Software GmbH Firmenlogo", "title", "Robotron Datenbank-Software GmbH", 1, "img-fluid"], [1, "navbar-nav", "mx-5", "navbar-brand", "ms-auto"], [1, "Schriftzug", 3, "ngClass"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "li", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Barcode Scanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](2, _c0, ctx.smallWidth));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar], styles: [".backg-roboblue[_ngcontent-%COMP%] {\r\n  background-color: #314969;\r\n}\r\n\r\n.py-075rem[_ngcontent-%COMP%] {\r\n  padding-top: 0.75rem ;\r\n  padding-bottom: 0.75rem;\r\n}\r\n\r\n#imgwrapper[_ngcontent-%COMP%]{\r\n  height:3.2rem;\r\n}\r\n\r\n#imgwrapper2[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  line-height: inherit;\r\n}\r\n\r\n#robologo[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: auto;\r\n\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n  width: 1000;\r\n}\r\n\r\n.Schriftzug.smallWidth[_ngcontent-%COMP%]{\r\n  margin-left: 200px;\r\n  margin-top: -35px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InRvcC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZy1yb2JvYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNDk2OTtcclxufVxyXG5cclxuLnB5LTA3NXJlbSB7XHJcbiAgcGFkZGluZy10b3A6IDAuNzVyZW0gO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcblxyXG4jaW1nd3JhcHBlcntcclxuICBoZWlnaHQ6My4ycmVtO1xyXG59XHJcbiNpbWd3cmFwcGVyMntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuI3JvYm9sb2dve1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgd2lkdGg6IDEwMDA7XHJcbn1cclxuXHJcbi5TY2hyaWZ0enVnLnNtYWxsV2lkdGh7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0zNXB4O1xyXG59XHJcbiJdfQ== */"] });


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