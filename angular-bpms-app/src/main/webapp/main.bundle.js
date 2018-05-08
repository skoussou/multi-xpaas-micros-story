webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kie_containers_kie_containers_component__ = __webpack_require__("./src/app/kie-containers/kie-containers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__processes_processes_component__ = __webpack_require__("./src/app/processes/processes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__process_detail_process_detail_component__ = __webpack_require__("./src/app/process-detail/process-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__process_definitions_process_definitions_component__ = __webpack_require__("./src/app/process-definitions/process-definitions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__payee_details_payee_details_component__ = __webpack_require__("./src/app/payee-details/payee-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bill_payments_bill_payments_component__ = __webpack_require__("./src/app/bill-payments/bill-payments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'kie-containers', component: __WEBPACK_IMPORTED_MODULE_5__kie_containers_kie_containers_component__["a" /* KieContainersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'processes', component: __WEBPACK_IMPORTED_MODULE_6__processes_processes_component__["a" /* ProcessesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'processDefinitions', component: __WEBPACK_IMPORTED_MODULE_8__process_definitions_process_definitions_component__["a" /* ProcessDefinitionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'process-detail/:id', component: __WEBPACK_IMPORTED_MODULE_7__process_detail_process_detail_component__["a" /* ProcessDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'payee-details', component: __WEBPACK_IMPORTED_MODULE_9__payee_details_payee_details_component__["a" /* PayeeDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'bill-payments', component: __WEBPACK_IMPORTED_MODULE_10__bill_payments_bill_payments_component__["a" /* BillPaymentsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: '**', redirectTo: '/dashboard' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid \" id=\"main\">\n\n  <div class=\"row row-cards-pf\">\n    \n    <router-outlet></router-outlet>\n    <!-- <app-messages></app-messages> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__kie_containers_kie_containers_component__ = __webpack_require__("./src/app/kie-containers/kie-containers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services__ = __webpack_require__("./src/app/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__messages_messages_component__ = __webpack_require__("./src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_patternfly_ng__ = __webpack_require__("./node_modules/patternfly-ng/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__processes_processes_component__ = __webpack_require__("./src/app/processes/processes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__process_detail_process_detail_component__ = __webpack_require__("./src/app/process-detail/process-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__process_definitions_process_definitions_component__ = __webpack_require__("./src/app/process-definitions/process-definitions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__process_definition_detail_process_definition_detail_component__ = __webpack_require__("./src/app/process-definition-detail/process-definition-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_inline_svg__ = __webpack_require__("./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_inline_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng_inline_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components__ = __webpack_require__("./src/app/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes__ = __webpack_require__("./src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__payee_details_payee_details_component__ = __webpack_require__("./src/app/payee-details/payee-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__bill_payments_bill_payments_component__ = __webpack_require__("./src/app/bill-payments/bill-payments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './dummy-data/in-memory-data.service';






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_15_patternfly_ng__["a" /* NotificationModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_21__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_20_ng_inline_svg__["InlineSVGModule"]
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                // HttpClientInMemoryWebApiModule.forRoot(
                //  InMemoryDataService, { dataEncapsulation: false }
                // )
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__kie_containers_kie_containers_component__["a" /* KieContainersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__processes_processes_component__["a" /* ProcessesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__process_detail_process_detail_component__["a" /* ProcessDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__process_definitions_process_definitions_component__["a" /* ProcessDefinitionsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__process_definition_detail_process_definition_detail_component__["a" /* ProcessDefinitionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components__["b" /* ModalContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components__["c" /* ModalProcessDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components__["d" /* ModalSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components__["g" /* SortComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components__["a" /* FilterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components__["f" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components__["e" /* NavHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pipes__["c" /* SortArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_24__pipes__["a" /* FilterArrayPipe */],
                __WEBPACK_IMPORTED_MODULE_24__pipes__["b" /* ProcessStatusPipe */],
                __WEBPACK_IMPORTED_MODULE_25__payee_details_payee_details_component__["a" /* PayeeDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__bill_payments_bill_payments_component__["a" /* BillPaymentsComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__components__["b" /* ModalContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components__["c" /* ModalProcessDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components__["d" /* ModalSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_11__services__["a" /* KieContainersService */],
                __WEBPACK_IMPORTED_MODULE_11__services__["b" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap__["a" /* BsDropdownConfig */],
                __WEBPACK_IMPORTED_MODULE_24__pipes__["a" /* FilterArrayPipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["HashLocationStrategy"] },
                { provide: Window, useValue: window }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bill-payments/bill-payments.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bill-payments/bill-payments.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-header></nav-header>\n<h3>Bill Payments</h3>\n\n<div class=\"container-fluid container-cards-pf\">\n\n\n<div class=\"block\">\n    <label>Payee</label>\n   <input type=\"text\" name=\"firstname\"><br>\n</div>\n<div class=\"block\">\n    <label>Amount</label>\n    <input type=\"text\" name=\"lastname\"><br>\n</div>\n\n<button type=\"submit\" value=\"Submit\">Submit</button>\n<button type=\"submit\" value=\"Cancel\">Cancel</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/bill-payments/bill-payments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillPaymentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillPaymentsComponent = /** @class */ (function () {
    function BillPaymentsComponent() {
    }
    BillPaymentsComponent.prototype.ngOnInit = function () {
    };
    BillPaymentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bill-payments',
            template: __webpack_require__("./src/app/bill-payments/bill-payments.component.html"),
            styles: [__webpack_require__("./src/app/bill-payments/bill-payments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BillPaymentsComponent);
    return BillPaymentsComponent;
}());



/***/ }),

/***/ "./src/app/components/filter/filter.component.css":
/***/ (function(module, exports) {

module.exports = "\n.sort-pf .btn-link {\n    margin-left: 10px;\n    padding: 4px 0;\n    min-width: 0;\n    color: pink;\n    font-size: 16px;\n    line-height: 1;\n}\n\n.sort-pf .btn-link:hover {\n    margin-left: 10px;\n    padding: 4px 0;\n    min-width: 0;\n    color: yellow;\n    font-size: 16px;\n    line-height: 1;\n}"

/***/ }),

/***/ "./src/app/components/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group order-right-off pad-right-0 toolbar-pf-filter\">\n    <label class=\"sr-only\" for=\"filter\">Name</label>\n\n    <div class=\"input-group sort-pf\">\n      <div class=\"input-group-btn btn-group dropdown\" dropdown>\n        <button  type=\"button\" class=\"btn btn-default dropdown-toggle\"  aria-haspopup=\"true\"\n          aria-expanded=\"false\" dropdownToggle>{{currentFilterField?.title}}\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\"  *dropdownMenu>\n          <li role=\"menuitem\" *ngFor=\"let item of config.fields; let i = index\" (click)=\"selectFilter(i)\" [ngClass]=\"{'selected': item === currentFilterField}\">\n            <a class=\"sortfield sort-field dropdown-item\" tabindex=\"-1\" >{{item?.title}}</a>\n          </li>\n        </ul>\n      </div>\n      <input type=\"text\" [(ngModel)]=\"filterText\" class=\"form-control\" id=\"filter\" placeholder=\"Filter By Name...\">\n    </div>\n  </div>\n\n  <!-- SET BUTTON -->\n  <div class=\"form-group border-left-off margin-left-0 border-left-off pad-left-0\">\n    <button type=\"button\" class=\"btn btn-default\" *ngIf=\"this.filterText\" (click)=\"setFilter()\" aria-haspopup=\"true\" aria-expanded=\"false\">Set\n    </button>\n  </div>"

/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_sort__ = __webpack_require__("./src/app/models/sort.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Sort component
 */
var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        /**
         * The event emitted when the sort has changed
         */
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * Setup component configuration upon initialization
     */
    FilterComponent.prototype.ngOnInit = function () {
        this.currentFilterField = this.config.fields[0];
    };
    FilterComponent.prototype.selectFilter = function (idx) {
        this.currentFilterField = this.config.fields[idx];
    };
    FilterComponent.prototype.setFilter = function () {
        if (this.filterText && this.filterText.length >= 1) {
            var filter = {
                filterType: this.currentFilterField,
                text: this.filterText
            };
            this.filters.push(filter);
            this.filterText = '';
        }
        this.onChange.emit({
            currentFilterField: this.currentFilterField,
            filters: this.filters
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_sort__["a" /* SortConfig */])
    ], FilterComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "filters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onChange'),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "onChange", void 0);
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'custom-filter',
            template: __webpack_require__("./src/app/components/filter/filter.component.html"),
            styles: [__webpack_require__("./src/app/components/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_container_modal_container_component__ = __webpack_require__("./src/app/components/modal-container/modal-container.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_container_modal_container_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_process_details_modal_process_details_component__ = __webpack_require__("./src/app/components/modal-process-details/modal-process-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__modal_process_details_modal_process_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort_component__ = __webpack_require__("./src/app/components/sort/sort.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__sort_sort_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter_component__ = __webpack_require__("./src/app/components/filter/filter.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__filter_filter_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__ = __webpack_require__("./src/app/components/pagination/pagination.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__pagination_pagination_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_settings_modal_settings_component__ = __webpack_require__("./src/app/components/modal-settings/modal-settings.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__modal_settings_modal_settings_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_header_nav_header_component__ = __webpack_require__("./src/app/components/nav-header/nav-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__nav_header_nav_header_component__["a"]; });








/***/ }),

/***/ "./src/app/components/modal-container/modal-container.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-backdrop.fade\n   {\n     opacity: 0.5;\n   }\n   .modal-open .modal\n   {\n     opacity: 1;\n   }"

/***/ }),

/***/ "./src/app/components/modal-container/modal-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalService.dismiss('cancel')\">\n      <span class=\"pficon pficon-close\"></span>\n    </button>\n    <h4 *ngIf=\"!deleteContainer\" class=\"modal-title\" id=\"myModalLabel\">Create Container</h4>\n    <h4 *ngIf=\"deleteContainer\" class=\"modal-title\" id=\"myModalLabel\">Delete Container</h4>\n  </div>\n\n\n  <div *ngIf=\"!deleteContainer\" class=\"modal-body\">\n\n    <form class=\"form-horizontal\" [formGroup]=\"containerForm\" (ngSubmit)=\"doCreateContainer()\">\n      <p text-center>All Fields are Required</p>\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"textInput-markup\">Name</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" id=\"textInput-markup\" class=\"form-control\" formControlName=\"name\">\n        </div>\n        <div *ngIf=\"containerForm.hasError()\">Please enter valid data</div>\n      </div>\n      <div *ngIf=\"containerForm.controls?.name?.hasError('whitespace')\">\n          <div class=\"col-sm-3\"></div>\n          <div class=\"col-sm-9 alert alert-danger\" >\n              <span class=\"pficon pficon-error-circle-o\"></span>\n              <strong>Invalid Name, please remove spaces</strong>.\n            </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"textInputDisabled-markup\">Group Name</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" id=\"textInputDisabled-markup\" class=\"form-control\" formControlName=\"group\">\n        </div>\n      </div>\n      <div *ngIf=\"containerForm.controls?.group?.hasError('whitespace')\">\n          <div class=\"col-sm-3\"></div>\n          <div class=\"col-sm-9 alert alert-danger\" >\n              <span class=\"pficon pficon-error-circle-o\"></span>\n              <strong>Invalid Group name, please remove spaces</strong>.\n            </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"textInputDisabled-markup\">Artifact Id</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" id=\"textInputDisabled-markup\" class=\"form-control\" formControlName=\"artifact\">\n        </div>\n      </div>\n      <div *ngIf=\"containerForm.controls?.artifact?.hasError('whitespace')\">\n          <div class=\"col-sm-3\"></div>\n          <div class=\"col-sm-9 alert alert-danger\" >\n              <span class=\"pficon pficon-error-circle-o\"></span>\n              <strong>Invalid Artifact name, please remove spaces</strong>.\n            </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"textInputDisabled-markup\">Version</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" id=\"textInputDisabled-markup\" class=\"form-control\" formControlName=\"version\">\n        </div>\n      </div>\n      <div *ngIf=\"containerForm.controls?.version?.hasError('whitespace')\">\n          <div class=\"col-sm-3\"></div>\n          <div class=\"col-sm-9 alert alert-danger\" >\n              <span class=\"pficon pficon-error-circle-o\"></span>\n              <strong>Invalid Version name, please remove spaces</strong>.\n            </div>\n      </div>\n\n\n      <div class=\"alert alert-danger cursor-pointer\" *ngIf=\"errMsg\" (click)=\"errMsg=null;\">\n        <span class=\"pficon pficon-error-circle-o\"></span>\n        <strong>{{errMsg}}</strong>.\n      </div>\n\n      <div class=\"alert alert-success cursor-pointer\" *ngIf=\"createOK\" (click)=\"close()\">\n        <span class=\"pficon pficon-ok\"></span>\n        <strong>Container Created Successfully</strong>.\n      </div>\n\n    </form>\n\n\n  </div>\n\n  <div *ngIf=\"deleteContainer\" class=\"modal-body\">\n    <h3>OK to permanently delete container <strong>{{containerName}}</strong> ?</h3>\n  </div>\n\n  <div *ngIf=\"!deleteContainer\" class=\"modal-footer\">\n      <button *ngIf=\"!inProgress\" type=\"button\" class=\"btn top-align btn-warning\" (click)=\"modalService.dismiss('cancel')\">cancel</button>\n      <span  *ngIf=\"inProgress\" class=\"spinner spinner-md spinner-inline\"></span>\n      <button *ngIf=\"!createOK\"  [disabled]=\"containerForm.invalid || errMsg || inProgress\"   type=\"button\" class=\"btn top-align btn-success\" (click)=\"doCreateContainer()\">Create</button>\n      <button *ngIf=\"createOK\" type=\"button\" class=\"btn top-align btn-success\" (click)=\"close()\">OK</button>\n\n    </div>\n\n\n\n  <div *ngIf=\"deleteContainer\" class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"modalService.dismiss('cancel')\">cancel</button>\n    <button type=\"button\" class=\"btn btn-success\"  (click)=\"close()\">Confirm Delete</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/modal-container/modal-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/app/services/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(modalService, formBuilder, kieContainerService) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.kieContainerService = kieContainerService;
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        this.initContainerForm();
    };
    ModalContainerComponent.prototype.initContainerForm = function () {
        this.containerForm = this.formBuilder.group({
            name: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.noWhitespaceValidator])
            ],
            group: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.noWhitespaceValidator])
            ],
            artifact: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.noWhitespaceValidator])
            ],
            version: [
                '',
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.noWhitespaceValidator])
            ]
        });
    };
    ModalContainerComponent.prototype.noWhitespaceValidator = function (control) {
        console.log('QQQQQ ', control.value);
        if (/\s/.test(control.value)) {
            console.log('true');
            return { 'whitespace': true };
        }
        console.log('false');
        return null;
    };
    ModalContainerComponent.prototype.doCreateContainer = function () {
        var _this = this;
        debugger;
        this.errMsg = null; // reset error message
        this.createOK = false;
        this.inProgress = true;
        var body = {
            'container-id': this.containerForm.value.name,
            'release-id': {
                'version': this.containerForm.value.version,
                'group-id': this.containerForm.value.group,
                'artifact-id': this.containerForm.value.artifact
            }
        };
        this.kieContainerService.createContainer(body)
            .subscribe(function (container) {
            _this.inProgress = false;
            if (container.error) {
                _this.errMsg = 'Oh no, unable to create your Container.  Check console logs for error message';
            }
            else {
                _this.createOK = true; // show success message and OK button
            }
            console.log('Got container ', JSON.stringify(container));
        });
    };
    ModalContainerComponent.prototype.close = function () {
        this.modalService.close('close after success');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalContainerComponent.prototype, "deleteContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalContainerComponent.prototype, "containerName", void 0);
    ModalContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-container',
            template: __webpack_require__("./src/app/components/modal-container/modal-container.component.html"),
            styles: [__webpack_require__("./src/app/components/modal-container/modal-container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* KieContainersService */]])
    ], ModalContainerComponent);
    return ModalContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-process-details/modal-process-details.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-backdrop.fade {\n    opacity: 0.5;\n}\n\n.modal-open .modal {\n    opacity: 1;\n}\n\n.svg-image {\n    overflow: scroll;\n}\n"

/***/ }),

/***/ "./src/app/components/modal-process-details/modal-process-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalService.dismiss('cancel')\">\n      <span class=\"pficon pficon-close\"></span>\n    </button>\n    <h4 class=\"modal-title\" id=\"myModalLabel\">Process Details</h4>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"svg-image\">\n      <div class=\"process-img\" aria-label=\"Process Image\" [inlineSVG]=\"svgUrl\"></div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn top-align btn-success\" (click)=\"close()\">OK</button>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/modal-process-details/modal-process-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProcessDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalProcessDetailsComponent = /** @class */ (function () {
    function ModalProcessDetailsComponent(modalService, settings) {
        this.modalService = modalService;
        this.settings = settings;
    }
    ModalProcessDetailsComponent.prototype.ngOnInit = function () {
        if (this.definition['process-instance-id']) {
            this.svgUrl = this.settings.getHost() +
                "/kie-server/services/rest/server" +
                ("/containers/" + this.definition['container-id'] + "/images/processes/instances/" + this.definition['process-instance-id']);
        }
        else {
            this.svgUrl = this.settings.getHost() +
                "/kie-server/services/rest/server" +
                ("/containers/" + this.definition['container-id'] + "/images/processes/" + this.definition['process-id']);
        }
    };
    ModalProcessDetailsComponent.prototype.close = function () {
        this.modalService.close('close after success');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalProcessDetailsComponent.prototype, "definition", void 0);
    ModalProcessDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-process-details',
            template: __webpack_require__("./src/app/components/modal-process-details/modal-process-details.component.html"),
            styles: [__webpack_require__("./src/app/components/modal-process-details/modal-process-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]])
    ], ModalProcessDetailsComponent);
    return ModalProcessDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-settings/modal-settings.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-backdrop.fade\n   {\n     opacity: 0.5;\n   }\n   .modal-open .modal\n   {\n     opacity: 1;\n   }"

/***/ }),

/***/ "./src/app/components/modal-settings/modal-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalService.dismiss('cancel')\">\n      <span class=\"pficon pficon-close\"></span>\n    </button>\n    <h4 class=\"modal-title\" id=\"myModalLabel\">Change Settings</h4>\n  </div>\n\n\n  <div *ngIf=\"!deleteContainer\" class=\"modal-body\">\n\n    <form class=\"form-horizontal\" [formGroup]=\"settingsForm\"  (ngSubmit)=\"saveSettings()\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"textInput-markup\">Host</label>\n        <div class=\"col-sm-9\">\n          <input  type=\"text\" id=\"textInput-markup\" class=\"form-control\" formControlName=\"host\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"textInputDisabled-markup\">BPMS Username</label>\n        <div class=\"col-sm-9\">\n          <input  type=\"text\" id=\"textInputDisabled-markup\" class=\"form-control\" formControlName=\"username\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 control-label\" for=\"textInputDisabled-markup\">BPMS Password</label>\n        <div class=\"col-sm-9\">\n          <input  type=\"text\" id=\"textInputDisabled-markup\" class=\"form-control\" formControlName=\"password\">\n        </div>\n      </div>\n\n\n\n      <div class=\"alert alert-danger cursor-pointer\" *ngIf=\"errMsg\" >\n        <span class=\"pficon pficon-error-circle-o\"></span>\n        <strong>{{errMsg}}</strong>.\n      </div>\n\n      <!-- <div class=\"alert alert-success cursor-pointer\" *ngIf=\"createOK\" (click)=\"close()\">\n        <span class=\"pficon pficon-ok\"></span>\n        <strong>Container Created Successfully</strong>.\n      </div> -->\n\n\n    </form>\n\n\n  </div>\n\n\n  <div *ngIf=\"!deleteContainer\" class=\"modal-footer\">\n    <button *ngIf=\"!inProgress\" type=\"button\" class=\"btn top-align btn-default\" (click)=\"modalService.dismiss('cancel')\">cancel</button>\n\n    <span *ngIf=\"inProgress\" class=\"spinner spinner-md spinner-inline\"></span>\n\n    <button type=\"button\" *ngIf=\"!errMsg\" [disabled]=\"settingsForm.invalid || settingsForm.pristine || errMsg || inProgress\"\n      class=\"btn top-align btn-success\" (click)=\"saveSettings()\">Save New Settings</button>\n\n    <button type=\"button\" *ngIf=\"errMsg\" [disabled]=\"settingsForm.invalid || settingsForm.pristine  || inProgress\" class=\"btn top-align btn-success\"\n      (click)=\"errMsg=null;settingsForm.enable()\">Re Enter Settings</button>\n    <button type=\"button\" *ngIf=\"errMsg\" [disabled]=\"settingsForm.invalid || settingsForm.pristine || inProgress\" class=\"btn top-align btn-success\"\n      (click)=\"updateSettings();close();\">Save Settings Anyway</button>\n\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/modal-settings/modal-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/app/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalSettingsComponent = /** @class */ (function () {
    // @Input() deleteContainer:boolean;
    // @Input() containerName:boolean;
    function ModalSettingsComponent(modalService, formBuilder, settings, kieContainerService) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.settings = settings;
        this.kieContainerService = kieContainerService;
    }
    ModalSettingsComponent.prototype.ngOnInit = function () {
        this.bpmsCreds = this.settings.getBpmsCreds();
        this.initSettingsForm();
    };
    ModalSettingsComponent.prototype.initSettingsForm = function () {
        this.settingsForm = this.formBuilder.group({
            host: [
                {
                    value: this.settings.getHost(),
                    disabled: this.disable
                },
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
            ],
            username: [
                {
                    value: this.bpmsCreds.username,
                    disabled: this.disable
                },
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
            ],
            password: [
                {
                    value: this.bpmsCreds.password,
                    disabled: this.disable
                },
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
            ]
        });
    };
    ModalSettingsComponent.prototype.saveSettings = function () {
        var _this = this;
        this.errMsg = null;
        this.inProgress = true;
        this.kieContainerService.checkConnection(this.settingsForm.value.host, this.settingsForm.value.username, this.settingsForm.value.password)
            .subscribe(function (server) {
            console.log(new Date() + ' Connection call returned success ');
            _this.inProgress = false;
            _this.updateSettings();
            _this.close();
        }, function (err) {
            // this.pollingUnsubscribe();
            _this.inProgress = false;
            _this.settingsForm.disable();
            console.log('oh no, connect to server fail');
            if (err.status === 401) {
                _this.errMsg = 'Error: Status:401. Authorisation failed on connection to server';
            }
            else if (err.status) {
                _this.errMsg = "Error: Status:" + err.status + ". Unable to connect to kie server";
            }
            else {
                _this.errMsg = "Error:  Unable to connect to kie server";
            }
        });
    };
    ModalSettingsComponent.prototype.updateSettings = function () {
        this.settings.setBpmsCreds({
            username: this.settingsForm.value.username,
            password: this.settingsForm.value.password
        });
        this.settings.setHost(this.settingsForm.value.host);
    };
    ModalSettingsComponent.prototype.close = function () {
        this.modalService.close('close after success');
    };
    ModalSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-settings',
            template: __webpack_require__("./src/app/components/modal-settings/modal-settings.component.html"),
            styles: [__webpack_require__("./src/app/components/modal-settings/modal-settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* KieContainersService */]])
    ], ModalSettingsComponent);
    return ModalSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-header/nav-header.component.css":
/***/ (function(module, exports) {

module.exports = ".drop-down {\n    color: white;\n    background-color: black;\n    text-align: right;\n    cursor: pointer;\n    border: none;\n    margin-right: 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/nav-header/nav-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-pf row-cards-pf\" role=\"navigation\">\n<!--  <div class=\"container\">-->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" (click)=\"isCollapsed = !isCollapsed\" data-target=\"#navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/dashboard\">\n        <!--div class=\"rh-logo\"></div-->\n        <div class=\"exchange-logo\"></div>\n        <!-- <img src=\"../assets/img/rh-black.png\" alt=\"PatternFly Enterprise Application\" /> -->\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-1\" [ngbCollapse]=\"isCollapsed\">\n      <ul class=\"nav navbar-nav navbar-utility\">\n        <li title=\"Configure Settings\">\n          <a (click)=\"showSettings()\">\n            <span class=\"fa fa-cog\"></span>\n          </a>\n        </li>\n\n\n        <li class=\"dropdown\" dropdown>\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle>\n            <span class=\"pficon pficon-user\"></span>\n            User: {{user}}\n            <b class=\"caret\"></b>\n          </a>\n\n          <ul class=\"dropdown-menu drop-down\" *dropdownMenu>\n            <li (click)=\"doLogout()\">\n              <span>Logout</span>\n            </li>\n          </ul>\n\n\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-primary\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" >Dashboard</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/kie-containers\" >Kie-Containers</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/processDefinitions\" >Process Defintions</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/processes\">Processes</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/payee-details\">Add Payee</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/bill-payments\">Pay Bill</a>\n        </li>\n\n      </ul>\n    </div>\n<!--  </div>-->\n\n</nav>\n"

/***/ }),

/***/ "./src/app/components/nav-header/nav-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modal_settings_modal_settings_component__ = __webpack_require__("./src/app/components/modal-settings/modal-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavHeaderComponent = /** @class */ (function () {
    function NavHeaderComponent(modal, authService, router) {
        this.modal = modal;
        this.authService = authService;
        this.router = router;
        this.isCollapsed = false;
    }
    NavHeaderComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getUsername();
    };
    NavHeaderComponent.prototype.showSettings = function () {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_3__components_modal_settings_modal_settings_component__["a" /* ModalSettingsComponent */]).result
            .then(function (result) {
            console.log('success from modal ', result);
            // this.getKieContainers()
        }, function (reason) {
            console.log('modal dismissed ', reason);
            // this.getKieContainers()
        });
    };
    NavHeaderComponent.prototype.doLogout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    NavHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nav-header',
            template: __webpack_require__("./src/app/components/nav-header/nav-header.component.html"),
            styles: [__webpack_require__("./src/app/components/nav-header/nav-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NavHeaderComponent);
    return NavHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.css":
/***/ (function(module, exports) {

module.exports = ".kbc-format{\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: -20px -20px 20px -20px;\n}"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"config\" class=\"content-view-pf-pagination list-view-pf-pagination clearfix kbc-format\">\n  <div class=\"form-group\">\n    <div class=\"padding-right-10\">\n      <div class=\"btn-group dropdown\" dropdown>\n        <button #pageSizeMenu type=\"button\" class=\"btn btn-default dropdown-toggle\" dropdownToggle>\n        {{config.pageSize}}<span class=\"caret\"></span>\n      </button>\n        <ul class=\"dropdown-menu\" *dropdownMenu>\n          <li class=\"display-length-increment\"\n              [ngClass]=\"{'selected': increment === config?.pageSize}\"\n              *ngFor=\"let increment of config?.pageSizeIncrements\">\n            <a role=\"menuitem\" (click)=\"onPageSizeUpdate($event, increment)\">{{increment}}</a></li>\n        </ul>\n      </div>\n    </div>\n    <span for=\"pageSizeMenu\" class=\"per-page-label\">per page</span>\n  </div>\n  <div class=\"form-group\">\n    <span>\n      <span class=\"pagination-pf-item-current\">{{getCurrentPage()}}</span>&nbsp;of&nbsp;\n      <span class=\"pagination-pf-items-total\">{{config.totalItems}}</span>\n    </span>\n    <ul class=\"pagination pagination-pf-back\">\n      <li [ngClass]=\"{'disabled': config.pageNumber === 1}\">\n        <a class=\"goto-first-page\" title=\"First Page\" (click)=\"gotoFirstPage()\">\n          <span class=\"i fa fa-angle-double-left\"></span>\n        </a>\n      </li>\n      <li [ngClass]=\"{'disabled': config.pageNumber === 1}\">\n        <a class=\"goto-prev-page\" title=\"Previous Page\" (click)=\"gotoPreviousPage()\">\n          <span class=\"i fa fa-angle-left\"></span>\n        </a>\n      </li>\n    </ul>\n    <input class=\"pagination-pf-page\" name=\"pageNumber\" type=\"text\"\n           [(ngModel)]=\"pageNumber\"\n           (blur)=\"onPageNumberBlur($event)\"\n           (keyup.enter)=\"onPageNumberKeyup($event)\"/>\n    <span>of&nbsp;<span class=\"pagination-pf-pages\">{{lastPageNumber}}</span></span>\n    <ul class=\"pagination pagination-pf-forward\">\n      <li [ngClass]=\"{'disabled': config.pageNumber === lastPageNumber}\">\n        <a class=\"goto-next-page\" title=\"Next Page\" (click)=\"gotoNextPage()\">\n          <span class=\"i fa fa-angle-right\"></span>\n        </a>\n      </li>\n      <li [ngClass]=\"{'disabled': config.pageNumber === lastPageNumber}\">\n        <a class=\"goto-last-page\" title=\"Last Page\" (click)=\"gotoLastPage()\">\n          <span class=\"i fa fa-angle-double-right\"></span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_pagination__ = __webpack_require__("./src/app/models/pagination.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Component for rendering pagination
 */
var PaginationComponent = /** @class */ (function () {
    /**
     * The default constructor
     */
    function PaginationComponent() {
        /**
         * The Event is emitted when Page Size is changed
         */
        this.onPageSizeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * The Event is emitted when Page Number is Changed
         */
        this.onPageNumberChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.defaultConfig = {
            pageNumber: 1,
            pageSizeIncrements: [5, 10, 20, 40, 80, 100],
            pageSize: 5
        };
    }
    // Initialization
    /**
     * Setup component configuration upon initialization
     */
    PaginationComponent.prototype.ngOnInit = function () {
        this.setupConfig();
        this.lastPageNumber = this.getLastPageNumber();
    };
    /**
     * Check if the component config has changed
     */
    PaginationComponent.prototype.ngDoCheck = function () {
        // Do a deep compare on config
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["isEqual"])(this.config, this.prevConfig)) {
            this.setupConfig();
        }
    };
    /**
     * Setup default config
     */
    PaginationComponent.prototype.setupConfig = function () {
        if (this.config !== undefined) {
            Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["defaults"])(this.config, this.defaultConfig);
        }
        else {
            this.config = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"])(this.defaultConfig);
        }
        this.lastPageNumber = this.getLastPageNumber();
        this.pageNumber = this.config.pageNumber;
        this.prevConfig = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"])(this.config);
    };
    Object.defineProperty(PaginationComponent.prototype, "pageNumber", {
        // Accessors
        get: function () {
            return (this.config.totalItems !== undefined && this.config.totalItems > 0) ? this._pageNumber : 0;
        },
        set: function (pageNumber) {
            this._pageNumber = pageNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "lastPageNumber", {
        /**
         * Return last page number
         */
        get: function () {
            return (this.config.totalItems !== undefined && this.config.totalItems > 0) ? this._lastPageNumber : 0;
        },
        /**
         * Update Last page Number
         */
        set: function (value) {
            this._lastPageNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    // Actions
    /**
     * Jump to First Page
     */
    PaginationComponent.prototype.gotoFirstPage = function () {
        if (this.config.pageNumber !== 1) {
            this.updatePageNumber(1);
        }
    };
    /**
     * Go to Previous Page
     */
    PaginationComponent.prototype.gotoPreviousPage = function () {
        if (this.config.pageNumber !== 1) {
            this.updatePageNumber(this.config.pageNumber - 1);
        }
    };
    /**
     * Go to Next Page
     */
    PaginationComponent.prototype.gotoNextPage = function () {
        if (this.config.pageNumber < this.lastPageNumber) {
            this.updatePageNumber(this.config.pageNumber + 1);
        }
    };
    /**
     * Jump to Last Page
     */
    PaginationComponent.prototype.gotoLastPage = function () {
        if (this.config.pageNumber < this.lastPageNumber) {
            this.updatePageNumber(this.lastPageNumber);
        }
    };
    /**
     * Return start index and end index of current page
     */
    PaginationComponent.prototype.getCurrentPage = function () {
        return this.getStartIndex() + ' - ' + this.getEndIndex();
    };
    /**
     * Start Index of Current Page
     */
    PaginationComponent.prototype.getStartIndex = function () {
        return (this.config.totalItems !== undefined && this.config.totalItems > 0)
            ? this.config.pageSize * (this.config.pageNumber - 1) + 1 : 0;
    };
    /**
     * End Index of Current Page
     */
    PaginationComponent.prototype.getEndIndex = function () {
        var numFullPages = Math.floor(this.config.totalItems / this.config.pageSize);
        var numItemsOnLastPage = this.config.totalItems - (numFullPages * this.config.pageSize) || this.config.pageSize;
        var numItemsOnPage = this.isLastPage() ? numItemsOnLastPage : this.config.pageSize;
        return (this.config.totalItems !== undefined && this.config.totalItems > 0)
            ? (this.getStartIndex() + numItemsOnPage - 1) : 0;
    };
    /**
     * Page number is changed via input field's focus event
     */
    PaginationComponent.prototype.onPageNumberBlur = function ($event) {
        var newPageNumber = parseInt(String(this.pageNumber), 10);
        if (isNaN(newPageNumber)) {
            newPageNumber = this.pageNumber = this.config.pageNumber;
        }
        if (newPageNumber > this.lastPageNumber) {
            this.updatePageNumber(this.lastPageNumber);
        }
        else if (newPageNumber < 1) {
            this.updatePageNumber(1);
        }
        else {
            this.updatePageNumber(newPageNumber);
        }
    };
    /**
     * Page number is changed via input field's keyboard event
     */
    PaginationComponent.prototype.onPageNumberKeyup = function ($event) {
        var keycode = $event.keyCode ? $event.keyCode : $event.which;
        if (keycode === 13) {
            this.onPageNumberBlur(null);
        }
    };
    // Private
    /**
     * Page size is changed
     * @param newPageSize new page size
     */
    PaginationComponent.prototype.onPageSizeUpdate = function ($event, newPageSize) {
        this.config.pageSize = newPageSize;
        this.lastPageNumber = this.getLastPageNumber();
        this.gotoFirstPage();
        this.onPageSizeChange.emit({
            pageSize: newPageSize
        });
    };
    /**
     * Update the Page Number
     * @param newPageNumber new page number
     */
    PaginationComponent.prototype.updatePageNumber = function (newPageNumber) {
        this.config.pageNumber = this.pageNumber = newPageNumber;
        this.onPageNumberChange.emit({
            pageNumber: newPageNumber
        });
    };
    /**
     * Get Last Page Number
     */
    PaginationComponent.prototype.getLastPageNumber = function () {
        return Math.ceil(this.config.totalItems / this.config.pageSize);
    };
    /**
     * Check if current Page is Last Page
     */
    PaginationComponent.prototype.isLastPage = function () {
        return (this.config.pageNumber === this.lastPageNumber);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_pagination__["a" /* PaginationConfig */])
    ], PaginationComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onPageSizeChange'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "onPageSizeChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onPageNumberChange'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "onPageNumberChange", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'pfng-pagination',
            template: __webpack_require__("./src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/components/pagination/pagination.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/sort/sort.component.css":
/***/ (function(module, exports) {

module.exports = ".sort-pf .btn-link {\n    margin-left: 10px;\n    padding: 4px 0;\n    min-width: 0;\n    color: pink;\n    font-size: 16px;\n    line-height: 1;\n}\n\n.sort-pf .btn-link:hover {\n    margin-left: 10px;\n    padding: 4px 0;\n    min-width: 0;\n    color: yellow;\n    font-size: 16px;\n    line-height: 1;\n}\n"

/***/ }),

/***/ "./src/app/components/sort/sort.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sort-pf\" *ngIf=\"config?.visible !== false\">\n  <div class=\"btn-group dropdown\" dropdown>\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" dropdownToggle [disabled]=\"config.disabled === true\">\n      {{currentField?.title}}\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\" *dropdownMenu>\n      <li role=\"menuitem\" *ngFor=\"let item of config?.fields\" [ngClass]=\"{'selected': item === currentField}\">\n        <a  class=\"sortfield sort-field dropdown-item\" tabindex=\"-1\" (click)=\"selectField(item)\">{{item?.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <button class=\"btn btn-link\" type=\"button\" [disabled]=\"config.disabled === true\" (click)=\"onChangeDirection()\">\n    <span class=\"sort-direction\" [ngClass]=\"getIconStyleClass()\"></span>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/components/sort/sort.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_sort__ = __webpack_require__("./src/app/models/sort.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Sort component
 */
var SortComponent = /** @class */ (function () {
    /**
     * The default constructor
     */
    function SortComponent() {
        /**
         * The event emitted when the sort has changed
         */
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.defaultConfig = {
            isAscending: true,
            visible: true
        };
    }
    /**
     * Setup component configuration upon initialization
     */
    SortComponent.prototype.ngOnInit = function () {
        this.setupConfig();
    };
    /**
     * Check if the component config has changed
     */
    SortComponent.prototype.ngDoCheck = function () {
        // Do a deep compare on config
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["isEqual"])(this.config, this.prevConfig)) {
            this.setupConfig();
        }
    };
    /**
     * Set up default config
     */
    SortComponent.prototype.setupConfig = function () {
        if (this.config !== undefined) {
            Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["defaults"])(this.config, this.defaultConfig);
        }
        else {
            this.config = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"])(this.defaultConfig);
        }
        if (this.config && this.config.fields && this.config.fields.length > 0) {
            if (this.currentField === undefined) {
                this.currentField = this.config.fields[0];
            }
            if (this.config.isAscending === undefined) {
                this.config.isAscending = true;
            }
        }
        this.prevConfig = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"])(this.config);
    };
    // Actions
    SortComponent.prototype.getIconStyleClass = function () {
        var iconStyleClass;
        if (this.currentField && this.currentField.sortType
            && this.currentField.sortType === 'numeric') {
            if (this.config.isAscending) {
                iconStyleClass = 'fa fa-sort-numeric-asc';
            }
            else {
                iconStyleClass = 'fa fa-sort-numeric-desc';
            }
        }
        else {
            if (this.config.isAscending) {
                iconStyleClass = 'fa fa-sort-alpha-asc';
            }
            else {
                iconStyleClass = 'fa fa-sort-alpha-desc';
            }
        }
        return iconStyleClass;
    };
    SortComponent.prototype.onChangeDirection = function () {
        this.config.isAscending = !this.config.isAscending;
        this.onChange.emit({
            field: this.currentField,
            isAscending: this.config.isAscending
        });
    };
    SortComponent.prototype.selectField = function (field) {
        this.currentField = field;
        this.onChange.emit({
            field: this.currentField,
            isAscending: this.config.isAscending
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_sort__["a" /* SortConfig */])
    ], SortComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('onChange'),
        __metadata("design:type", Object)
    ], SortComponent.prototype, "onChange", void 0);
    SortComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'pfng-sort',
            template: __webpack_require__("./src/app/components/sort/sort.component.html"),
            styles: [__webpack_require__("./src/app/components/sort/sort.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SortComponent);
    return SortComponent;
}());



/***/ }),

/***/ "./src/app/constants/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONSTANTS; });
var CONSTANTS = /** @class */ (function () {
    function CONSTANTS() {
    }
    // public static AUTHORIZATION: string = 'Basic dXNlcjE6cGFzc3dvcmQxIQ==';
    CONSTANTS.CONTAINER_ID = 'test-project-1.4';
    // public static HOST: string = 'http://localhost:8080/';
    CONSTANTS.POLLING_INTERVAL = 30000;
    return CONSTANTS;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-header></nav-header>\n<h3>Dashboard</h3>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(kieContainersService) {
        this.kieContainersService = kieContainersService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getKieContainers();
    };
    DashboardComponent.prototype.getKieContainers = function () {
        var _this = this;
        this.kieContainersService.getKieContainers()
            .subscribe(function (kieContainers) { return _this.kieContainers = kieContainers; });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["a" /* KieContainersService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/kie-containers/kie-containers.component.css":
/***/ (function(module, exports) {

module.exports = "/* Kie Container's private CSS styles */\n.kiecontainer {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 25em;\n}\n.kiecontainer li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.kiecontainer li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.kiecontainer a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 350px;\n}\n.kiecontainer a:hover {\n  color:#607D8B;\n}\n.kiecontainer .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n.button {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n.card-pf-aggregate-status-mini {\n  padding-left: 46px\n}\n.card-pf-aggregate-status-mini {\n  overflow-x: hidden\n}\n.card-pf-info {\n  margin-top: 2px\n}\n.row-flex {\n  display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.row-center {\n  -webkit-box-pack: center !important;\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n}\n.row-height {\n  height: 31em;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/kie-containers/kie-containers.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-header></nav-header>\n<div class=\"container-fluid container-cards-pf\">\n  <div>\n    <div class=\"row row-flex row-center row-cards-pf\">\n\n      <div class=\"col-xs-4 col-sm-3 col-lg-2\">\n        <div (click)=\"setStatusFilter('TOTAL')\" class=\"cursor-pointer card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini centre\">\n          <h2 class=\"card-pf-title\">\n            <span class=\"pficon pficon-on\"></span>\n            <span *ngIf=\"kieContainers\" class=\"card-pf-aggregate-status-count\">{{runningContainers + failedContainers}}</span>\n            <p>Total</p>\n          </h2>\n        </div>\n      </div>\n\n      <div class=\"col-xs-4 col-sm-3 col-lg-2\">\n        <div (click)=\"setStatusFilter('STARTED')\" class=\"cursor-pointer card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini\">\n          <h2 class=\"card-pf-title\">\n            <span class=\"pficon pficon-ok\"></span>\n            <span class=\"card-pf-aggregate-status-count\">{{runningContainers}}</span>\n            <p>Running</p>\n          </h2>\n        </div>\n      </div>\n\n      <div class=\"col-xs-4 col-sm-3 col-lg-2\">\n        <div (click)=\"setStatusFilter('FAILED')\" class=\"cursor-pointer card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini\">\n          <h2 class=\"card-pf-title\">\n            <span class=\"pficon pficon-error-circle-o\"></span>\n            <span class=\"card-pf-aggregate-status-count\">{{failedContainers}}</span>\n            <p>Failed</p>\n          </h2>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- FILTER -->\n<div class=\"cards-pf\">\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row toolbar-pf\">\n      <div class=\"col-sm-12\">\n        <div class=\"toolbar-pf-actions\">\n\n          <!-- FILTER -->\n          <custom-filter [config]=\"sortConfig\" [filters]=\"filters\" (onChange)=\"filterChange($event)\"></custom-filter>\n\n          <!-- SORT -->\n          <div class=\"form-group border-left-on\">\n            <pfng-sort [config]=\"sortConfig\" (onChange)=\"sortChange($event)\"></pfng-sort>\n          </div>\n\n          <!-- CREATE CONTAINER BUTTON -->\n          <div class=\"toolbar-pf-action-right\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"openCreateModal()\">Create Container &nbsp;\n                <span class=\"fa fa-plus\"></span>\n              </button>\n            </div>\n          </div>\n        </div>\n\n\n        <!-- FILTERS -->\n        <div *ngIf=\"filters?.length>0\" class=\"row toolbar-pf-results\">\n          <div class=\"col-sm-12\">\n            <h5>{{kieContainersFiltered?.length}} Results</h5>\n            <p>Active filters:</p>\n            <ul class=\"list-inline\">\n              <li *ngFor=\"let filter of filters\">\n                <span class=\"label label-info\">\n                  {{filter?.filterType?.title}}: {{filter?.text}} &nbsp;\n                  <span class=\"pficon pficon-close cursor-pointer\" (click)=\"clearFilter(filter)\"></span>\n                </span>\n              </li>\n            </ul>\n            <p *ngIf=\"filters.length>0\" (click)=clearFilters()>\n              <a>Clear All Filters</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- CONTAINERS -->\n  <div class=\"container-fluid container-cards-pf \" *ngIf=\"kieContainers\">\n\n    <pfng-pagination *ngIf=\"kieContainersFiltered.length > 5\" [config]='paginationConfig' (onPageSizeChange)=\"handlePageSize($event)\"\n      (onPageNumberChange)=\"handlePageNumber($event)\"></pfng-pagination>\n\n    <div class=\"row row-cards-pf \">\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let kieContainer of kieContainersFiltered \n      | sortArray: currentSortField.sortField:isAscendingSort\n      | slice:((paginationConfig.pageNumber - 1) * paginationConfig.pageSize):paginationConfig.totalItems\n      | slice:0:paginationConfig.pageSize; let i = index \">\n        <div class=\"row-height card-pf card-pf-view  \">\n          <div class=\"card-pf-body\">\n            <div class=\"card-pf-top-element\">\n              <span class=\"pficon pficon-server card-pf-icon-circle\"></span>\n            </div>\n            <h2 class=\"card-pf-title text-center\">\n              <Strong>Name: </Strong> {{kieContainer[\"container-id\"]}}\n            </h2>\n            <div class=\"card-pf-items text-center\">\n              <div class=\"card-pf-item\">\n                <span class=\"pficon pficon-screen\"></span>\n                <span class=\"card-pf-item-text\">\n                  <Strong>Status: </Strong> {{kieContainer.status}}</span>\n              </div>\n              <div class=\"card-pf-item\">\n                <span *ngIf=\"kieContainer.status==='STARTED'\" class=\"pficon pficon-ok\"></span>\n                <span *ngIf=\"kieContainer.status==='FAILED'\" class=\"pficon pficon-error-circle-o\"></span>\n              </div>\n            </div>\n            <div class=\"card-pf-info text-center row top8\">\n\n              <strong>Release Info:</strong>\n\n              <br/> </div>\n\n\n            <div class=\"card-pf-info row  \">\n              <div class=\"col-xs-4 text-right no-gutter\">\n                <strong>Version:</strong>\n              </div>\n              <div class=\"col-xs-8 no-gutter overflow-hide-x\">{{kieContainer[\"version\"] }} </div>\n            </div>\n            <div class=\"card-pf-info text-left row\">\n              <div class=\"col-xs-4 text-right no-gutter\">\n                <strong>Group Id:</strong>\n              </div>\n              <div class=\"col-xs-8 no-gutter overflow-hide-x\">{{kieContainer[\"group-id\"] }} </div>\n            </div>\n            <div class=\"card-pf-info text-left row\">\n              <div class=\"col-xs-4 text-right no-gutter\">\n                <strong>Artifact Id:</strong>\n              </div>\n              <div class=\"col-xs-8 no-gutter overflow-hide-x\">{{kieContainer[\"artifact-id\"] }} </div>\n            </div>\n\n            <div class=\"card-pf-info row\">\n              <div class=\"cursor-pointer col-xs-4 text-center\">\n                <button (click)=\"gotoDefs(kieContainer['container-id'])\" title=\"View Definitions\" [disabled]=\"kieContainer.status==='FAILED'\" class=\"btn btn-link\"  type=\"button\">\n                  <span class=\"pficon pficon-blueprint\"></span>\n                </button>\n              </div>\n              <div class=\"cursor-pointer col-xs-4 text-center\" >\n                <button (click)=\"gotoProcesses(kieContainer['container-id'])\" title=\"View Processes\" [disabled]=\"kieContainer.status==='FAILED'\" class=\"btn btn-link\" type=\"button\">\n                  <span class=\"pficon pficon-image\"></span>\n                </button>\n              </div>\n              <div class=\"cursor-pointer col-xs-4 text-center\">\n                <button class=\"btn btn-link\" title=\"Delete Container\"  type=\"button\" (click)=\"deleteContainer(kieContainer)\">\n                  <span class=\"pficon pficon-delete\"></span>\n                </button>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/kie-containers/kie-containers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KieContainersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modal_container_modal_container_component__ = __webpack_require__("./src/app/components/modal-container/modal-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("./src/app/constants/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes__ = __webpack_require__("./src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var KieContainersComponent = /** @class */ (function () {
    function KieContainersComponent(kieContainerService, modal, filterArrayPipe, router) {
        this.kieContainerService = kieContainerService;
        this.modal = modal;
        this.filterArrayPipe = filterArrayPipe;
        this.router = router;
        this.runningContainers = 0;
        this.failedContainers = 0;
        this.showFilterDD = false;
        this.showSortDD = false;
        this.sortType = 'Name';
        this.filters = [];
        this.sortOrder = "ASC";
        this.isAscendingSort = true;
        this.actionsText = '';
    }
    KieContainersComponent.prototype.ngOnInit = function () {
        this.sortConfig = {
            fields: [{
                    id: 'name',
                    title: 'Name',
                    sortType: 'alpha',
                    sortField: 'container-id'
                }, {
                    id: 'group',
                    title: 'Group',
                    sortType: 'alpha',
                    sortField: 'group-id'
                }, {
                    id: 'artifact',
                    title: 'Artifact',
                    sortType: 'alpha',
                    sortField: 'artifact-id'
                }, {
                    id: 'version',
                    title: 'Version',
                    sortType: 'alpha',
                    sortField: 'version'
                }],
            isAscending: this.isAscendingSort
        };
        this.currentSortField = this.sortConfig.fields[0]; // init sort order
        this.currentFilterField = this.sortConfig.fields[0];
        this.getKieContainers();
    };
    KieContainersComponent.prototype.ngOnDestroy = function () {
        console.log('stop container polling');
        this.pollingUnsubscribe();
    };
    KieContainersComponent.prototype.doPagination = function () {
        if (this.paginationConfig) {
            this.paginationConfig.totalItems = this.kieContainersFiltered ? this.kieContainersFiltered.length : 0;
        }
        else {
            this.paginationConfig = {
                pageSize: 10,
                pageNumber: 1,
                totalItems: this.kieContainersFiltered ? this.kieContainersFiltered.length : 0
            };
        }
    };
    KieContainersComponent.prototype.doFilter = function () {
        this.kieContainersFiltered = this.filterArrayPipe.transform(this.kieContainers, this.filters);
    };
    KieContainersComponent.prototype.handlePageSize = function ($event) {
        this.actionsText = 'Page Size: ' + $event.pageSize + ' Selected' + '\n' + this.actionsText;
    };
    KieContainersComponent.prototype.handlePageNumber = function ($event) {
        this.actionsText = 'Page Number: ' + $event.pageNumber + ' Selected' + '\n' + this.actionsText;
    };
    KieContainersComponent.prototype.sortChange = function ($event) {
        this.currentSortField = $event.field;
        this.isAscendingSort = $event.isAscending;
    };
    KieContainersComponent.prototype.getKieContainers = function () {
        var _this = this;
        var polling = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].timer(0, __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* CONSTANTS */].POLLING_INTERVAL);
        //unsubscribe first in case we're already polling
        this.pollingUnsubscribe();
        this.polling = polling.subscribe(function (t) {
            console.log("start containers poll ", t);
            _this.kieContainerService.getKieContainers()
                .subscribe(function (kieContainers) {
                console.log(new Date() + ' Got Containers ', kieContainers.length);
                if (kieContainers) {
                    // console.log(kieContainers);
                    //flatten version/group/artifact
                    _this.kieContainers = __WEBPACK_IMPORTED_MODULE_8_lodash__["map"](kieContainers, (function (c) {
                        return __WEBPACK_IMPORTED_MODULE_8_lodash__["omit"](__WEBPACK_IMPORTED_MODULE_8_lodash__["extend"](c, c['release-id']), ['release-id']);
                    }));
                    _this.updateUI();
                    _this.updateSummaries();
                }
            }, function (err) {
                // this.pollingUnsubscribe();
                console.log('oh no, get container fail');
                // this.handleError("appViewSettingAlertTitle",
                //   "appViewGetAppointmentsErr");
            });
        }, function (err) { return console.error("error from getKieContainers ", err); }, function () { return console.log("polling complete "); }), function (err) {
            // this.pollingUnsubscribe();
            console.log('oh no, get container polling fail');
            // this.handleError("appViewSettingAlertTitle",
            //   "appViewGetAppointmentsErr");
        };
    };
    KieContainersComponent.prototype.pollingUnsubscribe = function () {
        if (this.polling) {
            this.polling.unsubscribe();
        }
    };
    KieContainersComponent.prototype.updateSummaries = function () {
        this.runningContainers = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](this.kieContainers, ["status", "STARTED"]).length;
        this.failedContainers = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](this.kieContainers, ["status", "FAILED"]).length;
    };
    KieContainersComponent.prototype.openCreateModal = function () {
        var _this = this;
        this.modal.open(__WEBPACK_IMPORTED_MODULE_3__components_modal_container_modal_container_component__["a" /* ModalContainerComponent */]).result
            .then(function (result) {
            console.log('success from modal ', result);
            _this.getKieContainers();
        }, function (reason) {
            console.log('modal dismissed ', reason);
            _this.getKieContainers();
        });
    };
    KieContainersComponent.prototype.setStatusFilter = function (status) {
        var _filters = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](this.filters);
        __WEBPACK_IMPORTED_MODULE_8_lodash__["remove"](_filters, (function (f) {
            return f.filterType.sortField === 'status';
        }));
        if (status !== 'TOTAL') {
            var filter = {
                filterType: {
                    sortField: 'status',
                    title: 'Status',
                },
                text: status
            };
            _filters.push(filter);
        }
        this.filters = _filters;
        this.updateUI();
    };
    KieContainersComponent.prototype.filterChange = function ($event) {
        this.currentFilterField = $event.currentFilterField;
        this.filters = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"]($event.filters);
        this.updateUI();
    };
    KieContainersComponent.prototype.clearFilters = function () {
        this.filters = [];
        this.updateUI();
    };
    KieContainersComponent.prototype.clearFilter = function (filter) {
        __WEBPACK_IMPORTED_MODULE_8_lodash__["remove"](this.filters, filter);
        this.filters = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](this.filters);
        this.updateUI();
    };
    KieContainersComponent.prototype.selectSort = function (type) {
        this.sortType = type;
    };
    KieContainersComponent.prototype.updateUI = function () {
        this.doFilter();
        this.doPagination();
    };
    KieContainersComponent.prototype.deleteContainer = function (container) {
        var _this = this;
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__components_modal_container_modal_container_component__["a" /* ModalContainerComponent */]);
        modalRef.componentInstance.deleteContainer = 'true';
        modalRef.componentInstance.containerName = container["container-id"];
        modalRef.result
            .then(function (result) {
            console.log('success from modal ', result);
            _this.doDelete(container["container-id"]);
        }, function (reason) {
            console.log('modal dismissed ', reason);
        });
    };
    KieContainersComponent.prototype.doDelete = function (containerID) {
        var _this = this;
        this.kieContainerService.deleteKieContainer(containerID)
            .subscribe(function (res) {
            console.log(new Date() + ' Got Containers ', res);
            _this.getKieContainers();
        }, function (err) {
            // this.pollingUnsubscribe();
            console.log('oh no, delete container fail');
        });
    };
    KieContainersComponent.prototype.gotoDefs = function (containerID) {
        this.router.navigate(['./processDefinitions', { container: containerID }]);
    };
    KieContainersComponent.prototype.gotoProcesses = function (containerID) {
        this.router.navigate(['./processes', { container: containerID }]);
    };
    KieContainersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kie-containers',
            template: __webpack_require__("./src/app/kie-containers/kie-containers.component.html"),
            styles: [__webpack_require__("./src/app/kie-containers/kie-containers.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["a" /* KieContainersService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6__pipes__["a" /* FilterArrayPipe */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]])
    ], KieContainersComponent);
    return KieContainersComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-bg {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #030303 url(/kie-management/assets/img/bg-login.jpg) repeat-x 50% 0;\n  background-size: auto;\n}\n\n.login-bg2 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #ffffff;\n  background-size: auto;\n}\n\n.rh-logo {\n  margin: 20px auto 0;\n  height: 60px;\n  width: 185px;\n  background: url('/kie-management/assets/img/rh-black.png');\n  background-repeat: no-repeat;\n  background-size: 185px 60px;\n}\n\n.exchange-logo  {\n  margin: 20px auto 0;\n  height: 100px;\n  width: 185px;\n  background: url('/kie-management/assets/img/uae-exchange-logo.png');\n  background-repeat: no-repeat;\n  background-size: 185px 100px;\n}\n\n.exchange-logo2 {\n  margin: 20px auto 0;\n  height: 50px;\n  width: 700px;\n  background: url('/kie-management/assets/img/UAEXchange-Header.png');\n  background-repeat: no-repeat;\n  background-size: 700px 50px;\n}\n\nfooter {\n  min-height:50px;\n  background: url('/kie-management/assets/img/powered-by-openshift-banner-narrow.png');\n  height: 50px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-pf-page login-bg2\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3\">\n        <header class=\"login-pf-page-header\">\n          <div class=\"exchange-logo2\"></div>\n        </header>\n        <div class=\"row\">\n          <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2\">\n            <div class=\"card-pf\">\n              <header class=\"login-pf-header\">\n                <h1>UAE Exchange Bill Payments - Login</h1>\n                <!-- <p>Log in to\n                  <strong>Application</strong>\n                </p> -->\n              </header>\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                <div class=\"form-group\" >\n                  <label class=\"sr-only\" for=\"exampleInputEmail1\">Username</label>\n                  <input type=\"email\" class=\"form-control input-lg\" id=\"exampleInputEmail1\" placeholder=\"Username\" formControlName=\"username\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"sr-only\" for=\"exampleInputPassword1\">Password\n                  </label>\n                  <input type=\"password\" class=\"form-control input-lg\" id=\"exampleInputPassword1\" placeholder=\"Password\" formControlName=\"password\">\n                </div>\n                <div class=\"form-group login-pf-settings\">\n                  <label class=\"checkbox-label\">\n                    <!-- <input type=\"checkbox\"> Keep me logged in for 30 days -->\n                  </label>\n                  <a href=\"#\">Forgot password?</a>\n                </div>\n              </form>\n              <button [disabled]=\"loginForm.invalid\"  class=\"btn btn-primary btn-block btn-lg\" (click)=\"login()\">Log In</button>\n          \n              <!-- <p class=\"login-pf-signup\">Need an account?\n                <a href=\"#\">Sign up</a>\n              </p> -->\n            </div>\n            <!-- card -->\n            <footer class=\"login-pf-page-footer\">\n              <!-- <div class=\"login-pf-page-footer-sso-services\">\n                <p>One account for all your company services</p>\n                <ul class=\"login-pf-page-footer-sso-services-logos\">\n                  <li>\n                    <img src=\"/assets/img/google-drive.svg\" alt=\"google drive icon\" />\n                  </li>\n                  <li>\n                    <img src=\"/assets/img/gmail.svg\" alt=\"gmail icon\" />\n                  </li>\n                  <li>\n                    <img src=\"/assets/img/google-calendar.svg\" alt=\"google calendar icon\" />\n                  </li>\n                </ul>\n              </div>\n              <ul class=\"login-pf-page-footer-links list-unstyled\">\n                <li>\n                  <a class=\"login-pf-page-footer-link\" href=\"#\">Terms of Use</a>\n                </li>\n                <li>\n                  <a class=\"login-pf-page-footer-link\" href=\"#\">Help</a>\n                </li>\n                <li>\n                  <a class=\"login-pf-page-footer-link\" href=\"#\">Privacy Policy</a>\n                </li>\n              </ul> -->\n            </footer>\n          </div>\n          <!-- col -->\n        </div>\n        <!-- row -->\n      </div>\n      <!-- col -->\n    </div>\n    <!-- login-pf-page -->\n  </div>\n  <!--row-->\n</div>\n<!--container-->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
        }
        this.initLoginForm();
    };
    LoginComponent.prototype.initLoginForm = function () {
        this.loginForm = this.formBuilder.group({
            username: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ],
            password: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.doLogin(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(function (res) {
            console.log('login ok ');
            _this.router.navigate(['dashboard']);
        }, function (err) { return console.log("login error ", "err"); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-page',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["b" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/models/pagination.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationConfig; });
/* unused harmony export PaginationEvent */
/**
 * A config containing properties for Pagination
 */
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
    }
    return PaginationConfig;
}());

/**
* An object containing properties for pagination events
*/
var PaginationEvent = /** @class */ (function () {
    function PaginationEvent() {
    }
    return PaginationEvent;
}());



/***/ }),

/***/ "./src/app/models/sort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SortField */
/* unused harmony export SortEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortConfig; });
/**
 * An object containing properties for a sortable field, used to select categories of sorting
 */
var SortField = /** @class */ (function () {
    function SortField() {
    }
    return SortField;
}());

/**
* An object containing properties for sort events
*/
var SortEvent = /** @class */ (function () {
    function SortEvent() {
    }
    return SortEvent;
}());

/**
* A config containing properties for sort
*/
var SortConfig = /** @class */ (function () {
    function SortConfig() {
    }
    return SortConfig;
}());



/***/ }),

/***/ "./src/app/payee-details/payee-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payee-details/payee-details.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-header></nav-header>\n<h3>Add Payee</h3>\n\n<div class=\"container-fluid container-cards-pf\">\n\n<div class=\"block\">\n   <label>Payee Name</label>\n   <input type=\"text\" name=\"firstname\"><br>\n</div>\n<div class=\"block\">\n    <label>Bank Name</label>\n    <input type=\"text\" name=\"bankname\"><br>\n</div>\n<div class=\"block\">\n    <label>Account Number</label>\n    <input type=\"text\" name=\"accountnumber\"><br>\n</div>\n\n<button type=\"submit\" value=\"Submit\">Submit</button>\n<button type=\"submit\" value=\"Cancel\">Cancel</button>\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/payee-details/payee-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayeeDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PayeeDetailsComponent = /** @class */ (function () {
    function PayeeDetailsComponent() {
    }
    PayeeDetailsComponent.prototype.ngOnInit = function () {
    };
    PayeeDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payee-details',
            template: __webpack_require__("./src/app/payee-details/payee-details.component.html"),
            styles: [__webpack_require__("./src/app/payee-details/payee-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PayeeDetailsComponent);
    return PayeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter-array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Filter array pipe
 *
 * This is currently used with the pin feature of the list component
 *
 * Example:
 * <div *ngFor="let item of (items | sortPin: 'name': true)">
 */
var FilterArrayPipe = /** @class */ (function () {
    function FilterArrayPipe() {
    }
    /**
     * Sort array by property
     *
     * @param {Array<any>} arr Array to filter
     * @param prop Property name to sort by
     * @param filterText descending True to sort descending
     * @returns {any} Returns sorted array
     */
    FilterArrayPipe.prototype.transform = function (arr, filters) {
        if (arr === undefined || filters.length <= 0) {
            return arr;
        }
        var _loop_1 = function (index) {
            arr = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(arr, (function (c) {
                return c[filters[index].filterType.sortField].toString().toLowerCase().indexOf(filters[index].text.toString().toLowerCase()) > -1;
            }));
        };
        for (var index = 0; index < filters.length; index++) {
            _loop_1(index);
        }
        return arr;
    };
    FilterArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filterArray' })
    ], FilterArrayPipe);
    return FilterArrayPipe;
}());



/***/ }),

/***/ "./src/app/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sort_array_pipe__ = __webpack_require__("./src/app/pipes/sort-array.pipe.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__sort_array_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_array_pipe__ = __webpack_require__("./src/app/pipes/filter-array.pipe.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__filter_array_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_status_pipe__ = __webpack_require__("./src/app/pipes/process-status.pipe.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__process_status_pipe__["a"]; });





/***/ }),

/***/ "./src/app/pipes/process-status.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Sort array pipe
 *
 * This is currently used with the pin feature of the list component
 *
 * Example:
 * <div *ngFor="let item of (items | sortPin: 'name': true)">
 */
var ProcessStatusPipe = /** @class */ (function () {
    function ProcessStatusPipe() {
    }
    /**
     * Sort array by property
     *
     * @param {string} Property name to sort by
     * @returns {any} Returns sorted array
     */
    ProcessStatusPipe.prototype.transform = function (status) {
        var _status = status.toString();
        switch (_status) {
            case "0":
                _status = "Pending";
                break;
            case "1":
                _status = "Acitve";
                break;
            case "2":
                _status = "Complete";
                break;
            case "3":
                _status = "Aborted";
                break;
            case "4":
                _status = "Suspended";
                break;
            default:
                break;
        }
        return _status;
    };
    ProcessStatusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'processStatus' })
    ], ProcessStatusPipe);
    return ProcessStatusPipe;
}());

// public static final int 	STATE_ABORTED 	3
// public static final int 	STATE_ACTIVE 	1
// public static final int 	STATE_COMPLETED 	2
// public static final int 	STATE_PENDING 	0
// public static final int 	STATE_SUSPENDED 	4 


/***/ }),

/***/ "./src/app/pipes/sort-array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Sort array pipe
 *
 * This is currently used with the pin feature of the list component
 *
 * Example:
 * <div *ngFor="let item of (items | sortPin: 'name': true)">
 */
var SortArrayPipe = /** @class */ (function () {
    function SortArrayPipe() {
    }
    /**
     * Sort array by property
     *
     * @param {Array<any>} arr Array to sort
     * @param prop Property name to sort by
     * @param {boolean} descending True to sort descending
     * @returns {any} Returns sorted array
     */
    SortArrayPipe.prototype.transform = function (arr, prop, ascending) {
        if (arr === undefined) {
            return arr;
        }
        var sortOrder = ascending ? 'asc' : 'desc';
        var sortedArray = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["orderBy"])(arr, [prop.toLowerCase()], [sortOrder]);
        return sortedArray;
    };
    SortArrayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'sortArray' })
    ], SortArrayPipe);
    return SortArrayPipe;
}());



/***/ }),

/***/ "./src/app/process-definition-detail/process-definition-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/process-definition-detail/process-definition-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\n <strong> Process Defintion Details </strong>\n</h3>\n\n\n<div class=\"container-fluid \">\n    <div class=\"row\">\n       <div class=\"col-md-2 text-align-left \">\n            <div >\n                <strong>Process Id:</strong>\n            </div>\n           <div >\n                <strong>Process Name:</strong>\n            </div>\n           <div >\n                <strong>Process Version:</strong>\n            </div>\n              <div >\n                <strong>Process Package:</strong>\n            </div>\n              <div >\n                <strong>Process Container Id:</strong>\n            </div>\n              <div >\n                <strong>Process Variables:</strong>\n            </div>\n            <div >\n                <strong>Process SubProcesses:</strong>\n            </div>\n           <div >\n                <strong>Process Service Tasks:</strong>\n            </div>\n           <div >\n                <strong>Process User Tasks:</strong>\n            </div>\n           \n        </div>\n    \n        <div class=\"col-md-2\">\n            <div >\n               {{processDefinitionDetail['process-id']}}\n            </div>\n            <div >\n               {{processDefinitionDetail['process-name']}}\n            </div>\n             <div>\n               {{processDefinitionDetail['process-version']}}\n            </div>\n            <div>\n               {{processDefinitionDetail['package']}}\n            </div>\n            <div>\n               {{processDefinitionDetail['container-id']}}\n            </div>\n        </div>\n        <div class=\"col-md-8\">\n            <div><img src=\"../../assets/img/TestProject.simple1-svg.svg\">\n             \n            </div>\n            \n        </div>\n    </div>\n</div>\n\n<!--ul class=\"heroes\">\n  <li *ngFor=\"let processDefinitionDetails of processDefinitionDetail\">\n    <a>\n      <span class=\"badge\">{{processDefinitionDetails['process-id']}}</span> \n    </a>\n  </li>\n</ul-->"

/***/ }),

/***/ "./src/app/process-definition-detail/process-definition-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDefinitionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessDefinitionDetailComponent = /** @class */ (function () {
    function ProcessDefinitionDetailComponent(kieContainerService) {
        this.kieContainerService = kieContainerService;
        this.processDefinitionDetail = '';
    }
    ProcessDefinitionDetailComponent.prototype.ngOnInit = function () {
        // this.getProcessDefinitionDetail();
    };
    ProcessDefinitionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-process-definition-detail',
            template: __webpack_require__("./src/app/process-definition-detail/process-definition-detail.component.html"),
            styles: [__webpack_require__("./src/app/process-definition-detail/process-definition-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["a" /* KieContainersService */]])
    ], ProcessDefinitionDetailComponent);
    return ProcessDefinitionDetailComponent;
}());



/***/ }),

/***/ "./src/app/process-definitions/process-definitions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/process-definitions/process-definitions.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-header></nav-header>\n<div class=\"container-fluid container-cards-pf\">\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row toolbar-pf\">\n      <div class=\"col-sm-12\">\n        <div class=\"toolbar-pf-actions\">\n\n          <!-- FILTER -->\n          <custom-filter [config]=\"sortConfig\" [filters]=\"filters\" (onChange)=\"filterChange($event)\"></custom-filter>\n\n          <!-- SORT -->\n          <div class=\"form-group border-left-on\">\n            <pfng-sort [config]=\"sortConfig\" (onChange)=\"sortChange($event)\"></pfng-sort>\n          </div>\n\n        </div>\n\n\n        <!-- FILTERS -->\n        <div *ngIf=\"filters?.length>0\" class=\"row toolbar-pf-results\">\n          <div class=\"col-sm-12\">\n            <h5>{{filteredProcessDefinitions?.length}} Results</h5>\n            <p>Active filters:</p>\n            <ul class=\"list-inline\">\n              <li *ngFor=\"let filter of filters\">\n                <span class=\"label label-info\">\n                  {{filter?.filterType?.title}}: {{filter?.text}} &nbsp;\n                  <span class=\"pficon pficon-close cursor-pointer\" (click)=\"clearFilter(filter)\"></span>\n                </span>\n              </li>\n            </ul>\n            <p *ngIf=\"filters.length>0\" (click)=clearFilters()>\n              <a>Clear All Filters</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /container -->\n  <div class=\"list-group list-view-pf list-view-pf-view\">\n\n    <div class=\"table-responsive-lg\">\n      <div class=\"container-fluid container-cards-pf\">\n        <pfng-pagination *ngIf=\"paginationConfig\" [config]='paginationConfig' (onPageSizeChange)=\"handlePageSize($event)\" (onPageNumberChange)=\"handlePageNumber($event)\"></pfng-pagination>\n      </div>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Process ID</th>\n            <th scope=\"col\">Process Name</th>\n            <th scope=\"col\">Process Version</th>\n            <th scope=\"col\">Package</th>\n            <th scope=\"col\">Container ID</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"filteredProcessDefinitions?.length>0\">\n          <tr *ngFor=\"let processDefinition of filteredProcessDefinitions\n          | sortArray: currentSortField.sortField:isAscendingSort\n          | slice:((paginationConfig.pageNumber - 1) * paginationConfig.pageSize):paginationConfig.totalItems\n          | slice:0:paginationConfig.pageSize; let i = index\">\n\n            <td>{{ i+1 }}</td>\n            <td>{{ processDefinition['process-id'] }}</td>\n            <td>{{ processDefinition['process-name'] }}</td>\n            <td>{{ processDefinition['process-version'] }}</td>\n            <td>{{ processDefinition['package'] }}</td>\n            <td>{{ processDefinition['container-id'] }}</td>\n            <td>\n              <div>\n                <button class=\"btn btn-default\" (click)=\"viewProcessDetails(processDefinition)\">View Process</button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/process-definitions/process-definitions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDefinitionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./src/app/constants/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes__ = __webpack_require__("./src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("./src/app/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProcessDefinitionsComponent = /** @class */ (function () {
    function ProcessDefinitionsComponent(filterArrayPipe, kieContainerService, modal, route) {
        this.filterArrayPipe = filterArrayPipe;
        this.kieContainerService = kieContainerService;
        this.modal = modal;
        this.route = route;
        this.isAscendingSort = true;
        this.filters = [];
        this.actionsText = '';
    }
    ProcessDefinitionsComponent.prototype.ngOnInit = function () {
        // {
        //     "processes": [
        //         {
        //             "process-id": "checklist.CheckListProcess",
        //             "process-name": "CheckListProcess",
        //             "process-version": "1.0",
        //             "package": "org.jbpm",
        //             "container-id": "questionare"
        //         }
        //     ]
        // }
        var _this = this;
        this.sortConfig = {
            fields: [{
                    id: 'processID',
                    title: 'Process ID',
                    sortType: 'alpha',
                    sortField: 'process-id'
                }, {
                    id: 'processName',
                    title: 'Process Name',
                    sortType: 'alpha',
                    sortField: 'process-name'
                }, {
                    id: 'processVersion',
                    title: 'Process Version',
                    sortType: 'alpha',
                    sortField: 'process-version'
                }, {
                    id: 'package',
                    title: 'Package',
                    sortType: 'alpha',
                    sortField: 'package'
                }, {
                    id: 'container',
                    title: 'Container',
                    sortType: 'alpha',
                    sortField: 'container-id'
                }],
            isAscending: this.isAscendingSort
        };
        this.currentSortField = this.sortConfig.fields[0]; // init sort order
        this.currentFilterField = this.sortConfig.fields[0];
        this.getDataIn = this.route.params.subscribe(function (params) {
            // if navigation from containers pag, set initial filter from route params
            if (params.container) {
                var filter = {
                    filterType: __WEBPACK_IMPORTED_MODULE_8_lodash__["find"](_this.sortConfig.fields, ['id', 'container']),
                    text: params.container
                };
                _this.filters.push(filter);
            }
            _this.getProcessDefinitions();
        });
    };
    ProcessDefinitionsComponent.prototype.ngOnDestroy = function () {
        console.log('stop process definitions polling');
        this.pollingUnsubscribe();
        this.getDataIn.unsubscribe();
    };
    ProcessDefinitionsComponent.prototype.getProcessDefinitions = function () {
        var _this = this;
        var polling = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].timer(0, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* CONSTANTS */].POLLING_INTERVAL);
        //unsubscribe first in case we're already polling
        this.pollingUnsubscribe();
        this.polling = polling.subscribe(function (t) {
            console.log("start process definitions poll ", t);
            _this.kieContainerService.getProcessDefinitions()
                .subscribe(function (processDefinitions) {
                if (processDefinitions) {
                    // console.log(kieContainers);
                    //flatten version/group/artifact
                    _this.processDefinitions = processDefinitions ? processDefinitions.processes : [];
                    // console.log('JSON String Returned: ', JSON.stringify(processDefinitions))
                    _this.updateUI();
                }
            }, function (err) {
                _this.pollingUnsubscribe();
                console.log('oh no, get container fail');
                // this.handleError("appViewSettingAlertTitle",
                //   "appViewGetAppointmentsErr");
            });
        }, function (err) { return console.error("error from kieContainerService.getProcessDefinitions ", err); }, function () { return console.log("polling complete "); }), function (err) {
            _this.pollingUnsubscribe();
            console.log('oh no, get getProcessDefinitions polling fail');
            // this.handleError("appViewSettingAlertTitle",
            //   "appViewGetAppointmentsErr");
        };
    };
    ProcessDefinitionsComponent.prototype.pollingUnsubscribe = function () {
        if (this.polling) {
            this.polling.unsubscribe();
        }
    };
    ProcessDefinitionsComponent.prototype.handlePageSize = function ($event) {
        this.actionsText = 'Page Size: ' + $event.pageSize + ' Selected' + '\n' + this.actionsText;
    };
    ProcessDefinitionsComponent.prototype.sortChange = function ($event) {
        this.currentSortField = $event.field;
        this.isAscendingSort = $event.isAscending;
    };
    ProcessDefinitionsComponent.prototype.filterChange = function ($event) {
        console.log("Filter Change ", $event);
        this.currentFilterField = $event.currentFilterField;
        this.filters = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"]($event.filters);
        this.updateUI();
    };
    ProcessDefinitionsComponent.prototype.updateUI = function () {
        this.doFilter();
        // this.doPagination();
    };
    ProcessDefinitionsComponent.prototype.clearFilters = function () {
        this.filters = [];
        this.updateUI();
    };
    ProcessDefinitionsComponent.prototype.clearFilter = function (filter) {
        __WEBPACK_IMPORTED_MODULE_8_lodash__["remove"](this.filters, filter);
        this.filters = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](this.filters);
        this.updateUI();
    };
    ProcessDefinitionsComponent.prototype.doPagination = function () {
        if (this.paginationConfig) {
            this.paginationConfig.totalItems = this.filteredProcessDefinitions ? this.filteredProcessDefinitions.length : 0;
        }
        else {
            this.paginationConfig = {
                pageSize: 10,
                pageNumber: 1,
                totalItems: this.filteredProcessDefinitions ? this.filteredProcessDefinitions.length : 0
            };
        }
    };
    ProcessDefinitionsComponent.prototype.doFilter = function () {
        this.filteredProcessDefinitions = this.filterArrayPipe.transform(this.processDefinitions, this.filters);
        this.doPagination();
    };
    ProcessDefinitionsComponent.prototype.viewProcessDetails = function (processDef) {
        var _this = this;
        console.log("PROCESS ", JSON.stringify(processDef));
        var pid = processDef['process-id'];
        var cid = processDef['container-id'];
        this.kieContainerService.getProcessDefinitionDetail(cid, pid)
            .subscribe(function (processDef) {
            console.log('IMAGE String Returned: ', JSON.stringify(processDef));
            _this.openProcessDetailsModal(processDef);
        });
    };
    ProcessDefinitionsComponent.prototype.openProcessDetailsModal = function (processDef) {
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_6__components__["c" /* ModalProcessDetailsComponent */], { windowClass: 'process-details' });
        modalRef.componentInstance.definition = processDef;
        modalRef.result
            .then(function (result) {
            console.log('success from modal ', result);
            // this.getKieContainers()
        }, function (reason) {
            console.log('modal dismissed ', reason);
            // this.getKieContainers()
        });
    };
    ProcessDefinitionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-process-definitions',
            template: __webpack_require__("./src/app/process-definitions/process-definitions.component.html"),
            styles: [__webpack_require__("./src/app/process-definitions/process-definitions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__pipes__["a" /* FilterArrayPipe */],
            __WEBPACK_IMPORTED_MODULE_1__services__["a" /* KieContainersService */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]])
    ], ProcessDefinitionsComponent);
    return ProcessDefinitionsComponent;
}());



/***/ }),

/***/ "./src/app/process-detail/process-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/process-detail/process-detail.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"list-group list-view-pf list-view-pf-view\">\n    \n        <div class=\"table-responsive-lg\">\n            <table class=\"table table-striped table-hover\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Process Inst Id</th>\n                  <th scope=\"col\">Initiator</th>\n                  <th scope=\"col\">Process ID</th>\n                  <th scope=\"col\">Process Name</th>\n                  <th scope=\"col\">Process Version</th>\n                  <th scope=\"col\">Process Inst State</th>\n                  <th scope=\"col\">Process Inst Description</th>\n                  <th scope=\"col\">Container ID</th>\n                  <th scope=\"col\">Start Date</th>  \n                  <th scope=\"col\">Correlation Key</th>\n                  <th scope=\"col\">Parent Instance ID</th>                 \n                </tr>\n              </thead>\n              <tbody>\n                <tr >\n                  <td>{{ processInstance['process-instance-id']}}</td>\n                  <td>{{ processInstance['initiator'] }}</td>\n                  <td>{{ processInstance['process-id'] }}</td>\n                  <td>{{ processInstance['process-name'] }}</td>\n                  <td>{{ processInstance['process-version'] }}</td>\n                  <td>{{ processInstance['process-instance-state'] }}</td>\n                  <td>{{ processInstance['process-instance-desc'] }}</td>\n                  <td>{{ processInstance['container-id'] }}</td>\n                  <td>{{ processInstance['start-date'] }}</td>\n                  <td>{{ processInstance['correlation-key'] }}</td>\n                  <td>{{ processInstance['parent-instance-id'] }}</td>\n                </tr>\n\n                \n              </tbody>\n            </table>\n          </div>\n      </div>\n"

/***/ }),

/***/ "./src/app/process-detail/process-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("./src/app/services/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessDetailComponent = /** @class */ (function () {
    function ProcessDetailComponent(route, kieContainerService, location) {
        this.route = route;
        this.kieContainerService = kieContainerService;
        this.location = location;
    }
    ProcessDetailComponent.prototype.ngOnInit = function () {
        //this.getProcessInstanceDetail();
    };
    ProcessDetailComponent.prototype.getProcesses = function () {
        var _this = this;
        this.kieContainerService.getProcesses()
            .subscribe(function (processInstances) { _this.processInstances = processInstances, console.log(JSON.stringify(processInstances)); });
    };
    ProcessDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-process-detail',
            template: __webpack_require__("./src/app/process-detail/process-detail.component.html"),
            styles: [__webpack_require__("./src/app/process-detail/process-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* KieContainersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], ProcessDetailComponent);
    return ProcessDetailComponent;
}());



/***/ }),

/***/ "./src/app/processes/processes.component.css":
/***/ (function(module, exports) {

module.exports = ".card-pf-aggregate-status-mini {\n    padding-left: 46px\n  }\n  \n  .card-pf-aggregate-status-mini {\n    overflow-x: hidden\n  }\n  \n  .card-pf-info {\n    margin-top: 2px\n  }\n  \n  .row-flex {\n    display: flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n  }\n  \n  .row-center {\n    -webkit-box-pack: center !important;\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  \n  .row-height {\n    height: 31em;\n  }"

/***/ }),

/***/ "./src/app/processes/processes.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-header></nav-header>\n<div class=\"container-fluid container-cards-pf\">\n\n  <div>\n\n<div class=\"row row-flex row-center row-cards-pf\">\n\n  <div *ngFor=\"let item of summaryData\" class=\"col-xs-6 col-sm-4 col-md-2\">\n    <div (click)=\"setStatusFilter(item)\" class=\"cursor-pointer card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini centre\">\n      <h2 class=\"card-pf-title\">\n          <span [class]=\"item.icon\"></span>\n          <span class=\"card-pf-aggregate-status-count\">{{item.value}}</span> \n          {{item.name}}\n      </h2>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n</div>\n\n\n\n<!-- FILTER -->\n<div class=\"cards-pf\">\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row toolbar-pf\">\n      <div class=\"col-sm-12\">\n        <div class=\"toolbar-pf-actions\">\n\n          <!-- FILTER -->\n          <custom-filter [config]=\"sortConfig\" [filters]=\"filters\" (onChange)=\"filterChange($event)\"></custom-filter>\n\n          <!-- SORT -->\n          <div class=\"form-group border-left-on\">\n            <pfng-sort [config]=\"sortConfig\" (onChange)=\"sortChange($event)\"></pfng-sort>\n          </div>\n\n        </div>\n\n        <!-- FILTERS -->\n        <div *ngIf=\"filters?.length>0\" class=\"row toolbar-pf-results\">\n          <div class=\"col-sm-12\">\n            <h5>{{filteredProcessInstances?.length}} Results</h5>\n            <p>Active filters:</p>\n            <ul class=\"list-inline\">\n              <li *ngFor=\"let filter of filters\">\n                <span class=\"label label-info\">\n                  {{filter?.filterType?.title}}: {{filter?.display ? filter?.display : filter?.text}} &nbsp;\n                  <span class=\"pficon pficon-close cursor-pointer\" (click)=\"clearFilter(filter)\"></span>\n                </span>\n              </li>\n            </ul>\n            <p *ngIf=\"filters.length>0\" (click)=clearFilters()>\n              <a>Clear All Filters</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- /container -->\n<div class=\"list-group list-view-pf list-view-pf-view\">\n\n  <div class=\"table-responsive-lg\">\n    <div class=\"container-fluid container-cards-pf\">\n      <pfng-pagination *ngIf=\"paginationConfig\" [config]='paginationConfig' (onPageSizeChange)=\"handlePageSize($event)\" (onPageNumberChange)=\"handlePageNumber($event)\"></pfng-pagination>\n    </div>\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Id</th>\n          <th scope=\"col\">Initiator</th>\n          <th scope=\"col\">Process Id</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Version</th>\n          <th scope=\"col\">State</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Container</th>\n          <th scope=\"col\">Start Date</th>\n          <!-- <th scope=\"col\">Parent Id</th> -->\n          <th scope=\"col\"></th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"filteredProcessInstances?.length\">\n        <tr *ngFor=\"let processInstance of filteredProcessInstances\n        | sortArray: currentSortField.sortField:isAscendingSort\n        | slice:((paginationConfig.pageNumber - 1) * paginationConfig.pageSize):paginationConfig.totalItems\n        | slice:0:paginationConfig.pageSize; let i = index\">\n          <!-- <td>\n            <a routerLink=\"/processDetail/{{ processInstance['container-id'] }}/{{ processInstance['process-instance-id']}}\">{{ processInstance['process-instance-id']}}</a>\n          </td> -->\n          <td>{{ processInstance['process-instance-id'] }}</td>\n          <td>{{ processInstance['initiator'] }}</td>\n          <td>{{ processInstance['process-id'] }}</td>\n          <td>{{ processInstance['process-name'] }}</td>\n          <td>{{ processInstance['process-version'] }}</td>\n          <td>{{ processInstance['process-instance-state'] | processStatus }}</td>\n          <td>{{ processInstance['process-instance-desc'] }}</td>\n          <td>{{ processInstance['container-id'] }}</td>\n          <td>{{ processInstance['start-date'] | date:'short'}}</td>\n          <!-- <td>{{ processInstance['parent-instance-id'] }}</td> -->\n          <td>\n            <div>\n              <button class=\"btn btn-default\" (click)=\"viewProcessDetails(processInstance)\">View Process</button>\n            </div>\n          </td>\n          <td>&nbsp;</td>\n        </tr>\n\n\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/processes/processes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/services/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes__ = __webpack_require__("./src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("./src/app/constants/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("./src/app/components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProcessesComponent = /** @class */ (function () {
    function ProcessesComponent(kieContainerService, modal, filterArrayPipe, route) {
        this.kieContainerService = kieContainerService;
        this.modal = modal;
        this.filterArrayPipe = filterArrayPipe;
        this.route = route;
        this.sortType = 'Name';
        this.filters = [];
        this.sortOrder = "ASC";
        this.actionsText = '';
        this.isAscendingSort = true;
    }
    ProcessesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sortConfig = {
            fields: [{
                    id: 'initiator',
                    title: 'Initiator',
                    sortType: 'alpha',
                    sortField: 'initiator'
                }, {
                    id: 'processId',
                    title: 'Process Id',
                    sortType: 'alpha',
                    sortField: 'process-instance-id'
                }, {
                    id: 'name',
                    title: 'Name',
                    sortType: 'alpha',
                    sortField: 'process-name'
                }, {
                    id: 'version',
                    title: 'Version',
                    sortType: 'alpha',
                    sortField: 'process-version'
                }, {
                    id: 'state',
                    title: 'State',
                    sortType: 'alpha',
                    sortField: 'process-instance-state'
                }, {
                    id: 'description',
                    title: 'Description',
                    sortType: 'alpha',
                    sortField: 'process-instance-desc'
                }, {
                    id: 'container',
                    title: 'Container',
                    sortType: 'alpha',
                    sortField: 'container-id'
                }, {
                    id: 'startDate',
                    title: 'Start Date',
                    sortType: 'alpha',
                    sortField: 'start-date'
                }, {
                    id: 'parentId',
                    title: 'Parent Id',
                    sortType: 'alpha',
                    sortField: 'parent-instance-id'
                }],
            isAscending: this.isAscendingSort
        };
        this.currentSortField = this.sortConfig.fields[0]; // init sort order
        this.currentFilterField = this.sortConfig.fields[0];
        this.getDataIn = this.route.params.subscribe(function (params) {
            // if navigation from containers pag, set initial filter from route params
            if (params.container) {
                var filter = {
                    filterType: __WEBPACK_IMPORTED_MODULE_8_lodash__["find"](_this.sortConfig.fields, ['id', 'container']),
                    text: params.container
                };
                _this.filters.push(filter);
            }
            _this.getProcesses();
        });
    };
    ProcessesComponent.prototype.ngOnDestroy = function () {
        console.log('stop processes polling');
        this.pollingUnsubscribe();
        this.getDataIn.unsubscribe();
    };
    ProcessesComponent.prototype.getProcesses = function () {
        var _this = this;
        var polling = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(0, __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* CONSTANTS */].POLLING_INTERVAL);
        //unsubscribe first in case we're already polling
        this.pollingUnsubscribe();
        this.polling = polling.subscribe(function (t) {
            console.log("start processes poll ", t);
            _this.kieContainerService.getProcesses()
                .subscribe(function (processInstances) {
                console.log(new Date() + ' Got Containers ', processInstances.length);
                if (processInstances) {
                    _this.processInstances = processInstances;
                    _this.updateUI();
                    _this.updateSummaries();
                }
            }, function (err) {
                // this.pollingUnsubscribe();
                console.log('oh no, get container fail');
                // this.handleError("appViewSettingAlertTitle",
                //   "appViewGetAppointmentsErr");
            });
        }, function (err) { return console.error("error from getKieContainers ", err); }, function () { return console.log("polling complete "); }), function (err) {
            // this.pollingUnsubscribe();
            console.log('oh no, get container polling fail');
            // this.handleError("appViewSettingAlertTitle",
            //   "appViewGetAppointmentsErr");
        };
    };
    ProcessesComponent.prototype.updateUI = function () {
        this.doFilter();
        this.doPagination();
    };
    ProcessesComponent.prototype.updateSummaries = function () {
        var statusArr = ['Pending', 'Active', 'Compete', 'Aborted', 'Suspended'];
        var iconArray = [
            'pficon-pending',
            'pficon-on-running',
            'pficon-ok',
            'pficon-error-circle-o',
            'pficon-paused'
        ];
        this.summaryData = [];
        for (var index = 0; index < statusArr.length; index++) {
            this.summaryData.push({
                id: index,
                icon: "pficon " + iconArray[index],
                name: statusArr[index],
                value: __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](this.processInstances, [['process-instance-state'], index]).length
            });
        }
    };
    ProcessesComponent.prototype.pollingUnsubscribe = function () {
        if (this.polling) {
            this.polling.unsubscribe();
        }
    };
    ProcessesComponent.prototype.doPagination = function () {
        if (this.paginationConfig) {
            this.paginationConfig.totalItems = this.filteredProcessInstances ? this.filteredProcessInstances.length : 0;
        }
        else {
            this.paginationConfig = {
                pageSize: 10,
                pageNumber: 1,
                totalItems: this.filteredProcessInstances ? this.filteredProcessInstances.length : 0
            };
        }
    };
    ProcessesComponent.prototype.doFilter = function () {
        this.filteredProcessInstances = this.filterArrayPipe.transform(this.processInstances, this.filters);
    };
    ProcessesComponent.prototype.handlePageSize = function ($event) {
        this.actionsText = 'Page Size: ' + $event.pageSize + ' Selected' + '\n' + this.actionsText;
    };
    ProcessesComponent.prototype.handlePageNumber = function ($event) {
        this.actionsText = 'Page Number: ' + $event.pageNumber + ' Selected' + '\n' + this.actionsText;
    };
    ProcessesComponent.prototype.sortChange = function ($event) {
        this.currentSortField = $event.field;
        this.isAscendingSort = $event.isAscending;
    };
    ProcessesComponent.prototype.filterChange = function ($event) {
        console.log("BACk FROM FILTER ", $event);
        this.currentFilterField = $event.currentFilterField;
        this.filters = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"]($event.filters);
        this.updateUI();
    };
    ProcessesComponent.prototype.clearFilters = function () {
        this.filters = [];
        this.updateUI();
    };
    ProcessesComponent.prototype.clearFilter = function (filter) {
        __WEBPACK_IMPORTED_MODULE_8_lodash__["remove"](this.filters, filter);
        this.filters = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](this.filters);
        this.updateUI();
    };
    ProcessesComponent.prototype.selectSort = function (type) {
        this.sortType = type;
    };
    ProcessesComponent.prototype.viewProcessDetails = function (processInstance) {
        console.log("PROCESS ", JSON.stringify(processInstance));
        this.openProcessDetailsModal(processInstance);
    };
    ProcessesComponent.prototype.openProcessDetailsModal = function (processDef) {
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_6__components__["c" /* ModalProcessDetailsComponent */], { windowClass: 'process-details' });
        modalRef.componentInstance.definition = processDef;
        modalRef.result
            .then(function (result) {
            console.log('success from modal ', result);
            // this.getKieContainers()
        }, function (reason) {
            console.log('modal dismissed ', reason);
            // this.getKieContainers()
        });
    };
    ProcessesComponent.prototype.setStatusFilter = function (item) {
        var _filters = __WEBPACK_IMPORTED_MODULE_8_lodash__["clone"](this.filters);
        __WEBPACK_IMPORTED_MODULE_8_lodash__["remove"](_filters, (function (f) {
            return f.filterType.sortField === 'process-instance-state';
        }));
        var filter = {
            filterType: {
                sortField: 'process-instance-state',
                title: 'Status'
            },
            text: item.id,
            display: item.name
        };
        _filters.push(filter);
        this.filters = _filters;
        this.updateUI();
    };
    ProcessesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-processes',
            template: __webpack_require__("./src/app/processes/processes.component.html"),
            styles: [__webpack_require__("./src/app/processes/processes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* KieContainersService */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__pipes__["a" /* FilterArrayPipe */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */]])
    ], ProcessesComponent);
    return ProcessesComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AuthService = /** @class */ (function () {
    function AuthService(settings, _window) {
        this.settings = settings;
        this._window = _window;
    }
    AuthService.prototype.doLogin = function (username, password) {
        this.username = username;
        this.loginOK = true;
        // bpm host and credentials should come back in auth call
        // for now hardcode:
        this.settings.setBpmsCreds({
            username: 'kieserver',
            password: 'password1!'
        });
        this.hostname = this._window.location.hostname;
        this.port = +this._window.location.port;
        this.protocol = this._window.location.protocol;
        // Account for localhost.. its pretty brittle right now...
        if (this.hostname === 'localhost') {
            this.qualifiedHost = this.protocol + '//' + this.hostname + ':' + 8080;
        }
        else {
            this.qualifiedHost = this.protocol + '//' + this.hostname + ':' + this.port;
        }
        console.log('Using Hostname: ' + this.qualifiedHost);
        this.settings.setHost(this.qualifiedHost);
        //this.settings.setHost('http://localhost:8080');
        // TODO make auth call here
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(true);
    };
    AuthService.prototype.getUsername = function () {
        return this.username;
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.loginOK;
    };
    AuthService.prototype.logout = function () {
        this.username = null;
        this.password = null;
        this.loginOK = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(Window)),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */],
            Window])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kie_containers_service__ = __webpack_require__("./src/app/services/kie-containers.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__kie_containers_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__message_service__["a"]; });
    
    


/***/ }),

/***/ "./src/app/services/kie-containers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KieContainersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_settings_service__ = __webpack_require__("./src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KieContainersService = /** @class */ (function () {
    function KieContainersService(http, messageService, settings) {
        this.http = http;
        this.messageService = messageService;
        this.settings = settings;
        // private httpOptions:HeaderOptions;
        // private kieServerUrl = 'api/kieContainers';  // URL to web api
        // private  kieServerUrl:string ;  // URL to web api
        this.containerId = 'test-project-1.4';
        this.processId = 'TestProject.simple1';
    }
    KieContainersService.prototype.getHeader = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': this.settings.getAuth()
            }),
            withCredentials: false
        };
    };
    KieContainersService.prototype.getUrl = function () {
        return this.settings.getHost() + '/kie-server/services/rest/server';
    };
    /** GET kie containers from the server */
    KieContainersService.prototype.checkConnection = function (host, username, pw) {
        var _url = host + "/kie-server/services/rest/server";
        var _header = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ":" + pw)
            }),
            withCredentials: false
        };
        return this.http.get(_url, _header)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (res) { return console.log("check connection call. ", res); }));
    };
    /** GET kie containers from the server */
    KieContainersService.prototype.getKieContainers = function () {
        return this.http.get(this.getUrl() + '/containers', this.getHeader())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (kieContainers) {
            if (kieContainers
                && kieContainers.result
                && kieContainers.result['kie-containers']
                && kieContainers.result['kie-containers']['kie-container']) {
                return kieContainers.result['kie-containers']['kie-container'];
            }
            else {
                return [];
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('getKieContainers', [])));
    };
    KieContainersService.prototype.createContainer = function (body) {
        return this.http.put(this.getUrl() + '/containers/' + body['container-id'], body, this.getHeader())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (container) {
            if (container
                && container.result
                && container.result['kie-container']) {
                return container.result['kie-container'];
            }
            else {
                return null;
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('getProcesses', { error: true })));
    };
    KieContainersService.prototype.deleteKieContainer = function (containerID) {
        console.log('DELETE ', this.getUrl() + '/containers/' + containerID);
        return this.http.delete(this.getUrl() + '/containers/' + containerID, this.getHeader())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (res) { return console.log("deleted container. ", res); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('getProcesses', { error: true })));
    };
    KieContainersService.prototype.getProcesses = function () {
        var _this = this;
        return this.http.get(this.getUrl() + '/queries/processes/instances', this.getHeader())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (processInstances) {
            if (processInstances
                && processInstances['process-instance']) {
                return processInstances['process-instance'];
            }
            else {
                return [];
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (processInstances) { return _this.log("fetched kie processes."); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('getProcesses', [])));
    };
    /** GET ProcessInstance by id. Will 404 if id not found */
    KieContainersService.prototype.getProcessInstance = function () {
        var _this = this;
        var url = this.getUrl() + "/containers/" + this.containerId + "/instances/" + this.processId;
        return this.http.get(url, this.getHeader()).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("fetched process instance id=1"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError("getProcessInstance id=1")));
    };
    /** GET ProcessDefinitions. Will 404 if id not found */
    KieContainersService.prototype.getProcessDefinitions = function () {
        var _this = this;
        var url = this.getUrl() + "/queries/processes/definitions";
        return this.http.get(url, this.getHeader())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("fetched process definitions. "); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError("getProcessDefinitions")));
    };
    /** GET ProcessDefinitions. Will 404 if id not found */
    KieContainersService.prototype.getProcessDefinitionDetail = function (cid, pid) {
        var _this = this;
        var url = this.getUrl() + "/containers/" + cid + "/processes/definitions/" + pid;
        return this.http.get(url, this.getHeader())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("fetched process definition detail. "); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError("getProcessDefinitionDetail")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    KieContainersService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /** Log a KieContainersService message with the MessageService */
    KieContainersService.prototype.log = function (message) {
        this.messageService.add('KieContainerService: ' + message);
    };
    KieContainersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_settings_service__["a" /* SettingsService */]])
    ], KieContainersService);
    return KieContainersService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = /** @class */ (function () {
    function SettingsService() {
        // host and credentials should be initialised in auth service
        // this.host = 'http://localhost:8080'; //default for dev
        // this.bpmsUsername = 'kieserver'; //default for dev
        // this.bpmsPassword = 'password1!' //default for dev
    }
    SettingsService.prototype.setHost = function (host) {
        this.host = host;
    };
    SettingsService.prototype.getHost = function () {
        return this.host;
    };
    SettingsService.prototype.setBpmsCreds = function (creds) {
        this.bpmsUsername = creds.username;
        this.bpmsPassword = creds.password;
    };
    SettingsService.prototype.getBpmsCreds = function () {
        return {
            username: this.bpmsUsername,
            password: this.bpmsPassword
        };
    };
    SettingsService.prototype.getAuth = function () {
        return 'Basic ' + btoa(this.bpmsUsername + ":" + this.bpmsPassword);
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map