(self["webpackChunkexample_app"] = self["webpackChunkexample_app"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _vms_components_booking_booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vms-components/booking/booking.component */ 2414);
/* harmony import */ var _auth_authorized_authorized_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/authorized/authorized.component */ 4140);
/* harmony import */ var _vms_components_entity_entity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vms-components/entity/entity.component */ 7032);
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ 4649);
/* harmony import */ var _vms_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vms-components/home/home.component */ 9097);
/* harmony import */ var _vms_components_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vms-components/booking-form/booking-form.component */ 6234);
/* harmony import */ var _vms_components_vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vms-components/vehicle-form/vehicle-form.component */ 1729);
/* harmony import */ var _vms_components_vehicle_table_vehicle_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vms-components/vehicle-table/vehicle-table.component */ 8658);
/* harmony import */ var _vms_components_driver_form_driver_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vms-components/driver-form/driver-form.component */ 868);
/* harmony import */ var _vms_components_driver_table_driver_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vms-components/driver-table/driver-table.component */ 6155);
/* harmony import */ var _vms_components_entity_cards_entity_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vms-components/entity-cards/entity-cards.component */ 8603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);




// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';










const routes = [
// {path:'login',component:LoginComponent},
{
  path: 'sign-up',
  component: _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__.SignUpComponent
},
// {path:'home',component:HomeComponent},
// {path:'vehicleDetails',component:CommonTableComponent},
{
  path: 'bookingForm',
  component: _vms_components_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_5__.BookingFormComponent
}, {
  path: 'bookingDetails',
  component: _vms_components_booking_booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent
}, {
  path: 'entity',
  component: _vms_components_entity_entity_component__WEBPACK_IMPORTED_MODULE_2__.EntityComponent
}, {
  path: 'vehicleForm',
  component: _vms_components_vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_6__.VehicleFormComponent
}, {
  path: 'vehicleDetails',
  component: _vms_components_vehicle_table_vehicle_table_component__WEBPACK_IMPORTED_MODULE_7__.VehicleTableComponent
}, {
  path: 'driverForm',
  component: _vms_components_driver_form_driver_form_component__WEBPACK_IMPORTED_MODULE_8__.DriverFormComponent
}, {
  path: 'driverDetails',
  component: _vms_components_driver_table_driver_table_component__WEBPACK_IMPORTED_MODULE_9__.DriverTableComponent
}, {
  path: 'entityCards',
  component: _vms_components_entity_cards_entity_cards_component__WEBPACK_IMPORTED_MODULE_10__.EntityCardsComponent
}, {
  path: '',
  component: _vms_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
}, {
  path: 'authorized',
  component: _auth_authorized_authorized_component__WEBPACK_IMPORTED_MODULE_1__.AuthorizedComponent
}, {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 6552);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/token.service */ 6988);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _top_menu_bar_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-menu-bar/top-menu-bar.component */ 4491);







const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
class AppComponent {
  constructor(tokenService) {
    this.tokenService = tokenService;
    this.title = 'management-portal-ui';
    this.authorize_uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authorize_uri;
    this.params = {
      client_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.client_id,
      redirect_uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.redirect_uri,
      scope: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.scope,
      response_type: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.response_type,
      response_mode: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.response_mode,
      code_challenge_method: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.code_challenge_method
    };
  }
  isUserLoggedIn() {
    if (localStorage.getItem("isUserLoggedIn")) return true;
    return false;
  }
  ngOnInit() {
    if (!localStorage.getItem('isLoggedIn')) {
      const code_verifier = this.generateCodeVerifier();
      this.tokenService.setVerifier(code_verifier);
      this.params.code_challenge = this.generateCodeChallenge(code_verifier);
      const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams({
        fromObject: this.params
      });
      const codeUrl = this.authorize_uri + httpParams.toString();
      location.href = codeUrl;
    }
  }
  generateCodeChallenge(code_verifier) {
    const codeverifierHash = crypto_js__WEBPACK_IMPORTED_MODULE_1__.SHA256(code_verifier).toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Base64);
    const code_challenge = codeverifierHash.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    return code_challenge;
  }
  generateCodeVerifier() {
    let result = '';
    const char_length = CHARACTERS.length;
    for (let i = 0; i < 44; i++) {
      result += CHARACTERS.charAt(Math.floor(Math.random() * char_length));
    }
    return result;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_2__.TokenService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 6,
    vars: 0,
    consts: [[1, "row", "m-0", "cus-clr"], [1, "col-12", "p-0"], ["menu", ""], ["offset", "0", 1, "col-12", "p-0", "mt-7"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-top-menu-bar", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _top_menu_bar_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_3__.TopMenuBarComponent],
    styles: [".cus-clr[_ngcontent-%COMP%] {\n  background-color: rgba(219, 219, 219, 0.388);\n  min-height: 780px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSxpQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cy1jbHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTksIDIxOSwgMjE5LCAwLjM4OCk7XG4gICAgbWluLWhlaWdodDogNzgwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _reusable_payment_gateway_payment_gateway_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reusable/payment-gateway/payment-gateway.component */ 2706);
/* harmony import */ var _top_menu_bar_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-menu-bar/top-menu-bar.component */ 4491);
/* harmony import */ var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/transaction-service.service */ 5025);
/* harmony import */ var _reusable_common_form_common_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reusable/common-form/common-form.component */ 206);
/* harmony import */ var _vms_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vms-components/home/home.component */ 9097);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/accordion */ 3295);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/autocomplete */ 4823);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/avatar */ 7889);
/* harmony import */ var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/avatargroup */ 1009);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/badge */ 7650);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/breadcrumb */ 1500);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/calendar */ 7411);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/carousel */ 1720);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/cascadeselect */ 824);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/chart */ 3530);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/checkbox */ 1580);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/chip */ 3500);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/chips */ 8061);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/confirmdialog */ 4123);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/confirmpopup */ 4895);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/colorpicker */ 7326);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/contextmenu */ 104);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/dataview */ 3197);
/* harmony import */ var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/virtualscroller */ 5599);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/divider */ 920);
/* harmony import */ var primeng_dock__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/dock */ 5463);
/* harmony import */ var primeng_dragdrop__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/dragdrop */ 7764);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/dynamicdialog */ 4436);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/editor */ 2435);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/fieldset */ 6681);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/fileupload */ 8285);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! primeng/galleria */ 3821);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! primeng/inplace */ 1236);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! primeng/inputmask */ 6948);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! primeng/inputswitch */ 1763);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! primeng/inputnumber */ 5362);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
/* harmony import */ var primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! primeng/inputgroupaddon */ 6179);
/* harmony import */ var primeng_inputgroup__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! primeng/inputgroup */ 6763);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! primeng/image */ 1266);
/* harmony import */ var primeng_knob__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! primeng/knob */ 1762);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! primeng/listbox */ 9605);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! primeng/megamenu */ 8518);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! primeng/menu */ 5518);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! primeng/menubar */ 499);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! primeng/messages */ 9404);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! primeng/multiselect */ 7524);
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! primeng/orderlist */ 7880);
/* harmony import */ var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! primeng/organizationchart */ 7472);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! primeng/overlaypanel */ 7830);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! primeng/paginator */ 5302);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! primeng/panel */ 6110);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! primeng/panelmenu */ 5897);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! primeng/password */ 3219);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! primeng/picklist */ 4177);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! primeng/progressbar */ 2506);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! primeng/radiobutton */ 3313);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! primeng/rating */ 5583);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! primeng/scroller */ 1422);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! primeng/scrollpanel */ 8788);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! primeng/scrolltop */ 1944);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! primeng/selectbutton */ 8574);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! primeng/sidebar */ 5026);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! primeng/skeleton */ 2953);
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! primeng/slidemenu */ 5885);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! primeng/slider */ 2464);
/* harmony import */ var primeng_speeddial__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! primeng/speeddial */ 126);
/* harmony import */ var primeng_spinner__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! primeng/spinner */ 115);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! primeng/splitbutton */ 4323);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! primeng/splitter */ 1367);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! primeng/steps */ 4745);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! primeng/tabmenu */ 9048);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! primeng/tabview */ 1820);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! primeng/tag */ 2455);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! primeng/terminal */ 9924);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! primeng/tieredmenu */ 3462);
/* harmony import */ var primeng_timeline__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! primeng/timeline */ 3429);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! primeng/toast */ 8313);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! primeng/togglebutton */ 5688);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! primeng/toolbar */ 9177);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! primeng/tooltip */ 1251);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! primeng/tristatecheckbox */ 4843);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! primeng/tree */ 4044);
/* harmony import */ var primeng_treeselect__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! primeng/treeselect */ 5288);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! primeng/treetable */ 2957);
/* harmony import */ var primeng_animate__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! primeng/animate */ 9988);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! primeng/card */ 4722);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/blockui */ 7345);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! primeng/progressspinner */ 7355);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! primeng/ripple */ 1339);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! primeng/styleclass */ 152);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _interceptor_resource_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptor/resource.interceptor */ 3808);
/* harmony import */ var _auth_authorized_authorized_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/authorized/authorized.component */ 4140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);












// Import PrimeNG modules





























































































// import { AuthInterceptor } from './interceptor/auth.interceptor';



class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_4__.TransactionService, primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
      useClass: _interceptor_resource_interceptor__WEBPACK_IMPORTED_MODULE_7__.ResourceInterceptor,
      multi: true
    }],
    imports: [primeng_avatar__WEBPACK_IMPORTED_MODULE_12__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_13__.AvatarGroupModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_17__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_18__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_19__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_20__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_21__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_22__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_24__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_25__.CascadeSelectModule, primeng_chart__WEBPACK_IMPORTED_MODULE_26__.ChartModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_27__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_28__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_29__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_30__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__.ConfirmDialogModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_32__.ConfirmPopupModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_33__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_34__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_35__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_36__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_37__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_38__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_39__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_40__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_41__.DynamicDialogModule, primeng_editor__WEBPACK_IMPORTED_MODULE_42__.EditorModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_43__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_44__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_45__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_46__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_47__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_48__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_49__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_50__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_51__.InputNumberModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_52__.InputGroupModule, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_53__.InputGroupAddonModule, primeng_image__WEBPACK_IMPORTED_MODULE_54__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_55__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_56__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_57__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_58__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_59__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_60__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_61__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_62__.MultiSelectModule, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_63__.OrganizationChartModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_64__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_65__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_66__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_67__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_68__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_69__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_70__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_71__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_72__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_73__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_74__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_75__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_76__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_77__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_78__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_79__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_80__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_81__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_82__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_83__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_84__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_85__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_86__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_87__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_88__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_89__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_90__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_91__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_92__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_93__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_94__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_95__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_96__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_97__.ToolbarModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_98__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_99__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_100__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_101__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_102__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_103__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_104__.CardModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_105__.RippleModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_106__.StyleClassModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, primeng_table__WEBPACK_IMPORTED_MODULE_88__.TableModule, primeng_button__WEBPACK_IMPORTED_MODULE_22__.ButtonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_49__.InputTextModule, _angular_router__WEBPACK_IMPORTED_MODULE_107__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _reusable_payment_gateway_payment_gateway_component__WEBPACK_IMPORTED_MODULE_2__.PaymentGatewayComponent, _top_menu_bar_top_menu_bar_component__WEBPACK_IMPORTED_MODULE_3__.TopMenuBarComponent, _reusable_common_form_common_form_component__WEBPACK_IMPORTED_MODULE_5__.CommonFormComponent, _vms_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _vms_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _auth_authorized_authorized_component__WEBPACK_IMPORTED_MODULE_8__.AuthorizedComponent
    // CommonFormsComponent
    ],
    imports: [primeng_avatar__WEBPACK_IMPORTED_MODULE_12__.AvatarModule, primeng_avatargroup__WEBPACK_IMPORTED_MODULE_13__.AvatarGroupModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_17__.AccordionModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_18__.AutoCompleteModule, primeng_badge__WEBPACK_IMPORTED_MODULE_19__.BadgeModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_20__.BreadcrumbModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_21__.BlockUIModule, primeng_button__WEBPACK_IMPORTED_MODULE_22__.ButtonModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_24__.CarouselModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_25__.CascadeSelectModule, primeng_chart__WEBPACK_IMPORTED_MODULE_26__.ChartModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_27__.CheckboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_28__.ChipsModule, primeng_chip__WEBPACK_IMPORTED_MODULE_29__.ChipModule, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_30__.ColorPickerModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__.ConfirmDialogModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_32__.ConfirmPopupModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_33__.ContextMenuModule, primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_34__.VirtualScrollerModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_35__.DataViewModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_36__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_37__.DividerModule, primeng_dock__WEBPACK_IMPORTED_MODULE_38__.DockModule, primeng_dragdrop__WEBPACK_IMPORTED_MODULE_39__.DragDropModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_40__.DropdownModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_41__.DynamicDialogModule, primeng_editor__WEBPACK_IMPORTED_MODULE_42__.EditorModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_43__.FieldsetModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_44__.FileUploadModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_45__.GalleriaModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_46__.InplaceModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_47__.InputMaskModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_48__.InputSwitchModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_49__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_50__.InputTextareaModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_51__.InputNumberModule, primeng_inputgroup__WEBPACK_IMPORTED_MODULE_52__.InputGroupModule, primeng_inputgroupaddon__WEBPACK_IMPORTED_MODULE_53__.InputGroupAddonModule, primeng_image__WEBPACK_IMPORTED_MODULE_54__.ImageModule, primeng_knob__WEBPACK_IMPORTED_MODULE_55__.KnobModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_56__.ListboxModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_57__.MegaMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_58__.MenuModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_59__.MenubarModule, primeng_message__WEBPACK_IMPORTED_MODULE_60__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_61__.MessagesModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_62__.MultiSelectModule, primeng_organizationchart__WEBPACK_IMPORTED_MODULE_63__.OrganizationChartModule, primeng_orderlist__WEBPACK_IMPORTED_MODULE_64__.OrderListModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_65__.OverlayPanelModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_66__.PaginatorModule, primeng_panel__WEBPACK_IMPORTED_MODULE_67__.PanelModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_68__.PanelMenuModule, primeng_password__WEBPACK_IMPORTED_MODULE_69__.PasswordModule, primeng_picklist__WEBPACK_IMPORTED_MODULE_70__.PickListModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_71__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_72__.ProgressBarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_73__.RadioButtonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_74__.RatingModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_75__.SelectButtonModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_76__.SidebarModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_77__.ScrollerModule, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_78__.ScrollPanelModule, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_79__.ScrollTopModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_80__.SkeletonModule, primeng_slidemenu__WEBPACK_IMPORTED_MODULE_81__.SlideMenuModule, primeng_slider__WEBPACK_IMPORTED_MODULE_82__.SliderModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_83__.SpeedDialModule, primeng_spinner__WEBPACK_IMPORTED_MODULE_84__.SpinnerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_85__.SplitterModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_86__.SplitButtonModule, primeng_steps__WEBPACK_IMPORTED_MODULE_87__.StepsModule, primeng_table__WEBPACK_IMPORTED_MODULE_88__.TableModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_89__.TabMenuModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_90__.TabViewModule, primeng_tag__WEBPACK_IMPORTED_MODULE_91__.TagModule, primeng_terminal__WEBPACK_IMPORTED_MODULE_92__.TerminalModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_93__.TieredMenuModule, primeng_timeline__WEBPACK_IMPORTED_MODULE_94__.TimelineModule, primeng_toast__WEBPACK_IMPORTED_MODULE_95__.ToastModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_96__.ToggleButtonModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_97__.ToolbarModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_98__.TooltipModule, primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_99__.TriStateCheckboxModule, primeng_tree__WEBPACK_IMPORTED_MODULE_100__.TreeModule, primeng_treeselect__WEBPACK_IMPORTED_MODULE_101__.TreeSelectModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_102__.TreeTableModule, primeng_animate__WEBPACK_IMPORTED_MODULE_103__.AnimateModule, primeng_card__WEBPACK_IMPORTED_MODULE_104__.CardModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_105__.RippleModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_106__.StyleClassModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, primeng_table__WEBPACK_IMPORTED_MODULE_88__.TableModule, primeng_button__WEBPACK_IMPORTED_MODULE_22__.ButtonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_49__.InputTextModule, _angular_router__WEBPACK_IMPORTED_MODULE_107__.RouterModule]
  });
})();

/***/ }),

/***/ 4140:
/*!*********************************************************!*\
  !*** ./src/app/auth/authorized/authorized.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorizedComponent: () => (/* binding */ AuthorizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth-service.service */ 185);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/token.service */ 6988);




class AuthorizedComponent {
  constructor(activatedRoute, authService, tokenService, router) {
    this.activatedRoute = activatedRoute;
    this.authService = authService;
    this.tokenService = tokenService;
    this.router = router;
    this.code = '';
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      localStorage.setItem("isLoggedIn", "true");
      this.code = data['code'];
      const code_verifier = this.tokenService.getVerifier();
      setTimeout(() => this.tokenService.deleteVerifier(), 1000);
      this.getToken(this.code, code_verifier);
    });
  }
  getToken(code, code_verifier) {
    this.authService.getToken(code, code_verifier).subscribe(data => {
      console.log("test get token");
      this.tokenService.setTokens(data.access_token, data.refresh_token);
      console.log(data.access_token + " \n REFERSH_TOKEN :" + data.refresh_token);
      this.router.navigate(['']);
    }, err => {
      console.log(err);
    });
  }
  static #_ = this.ɵfac = function AuthorizedComponent_Factory(t) {
    return new (t || AuthorizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_1__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AuthorizedComponent,
    selectors: [["app-authorized"]],
    decls: 2,
    vars: 0,
    template: function AuthorizedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Logging you in......");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4649:
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class SignUpComponent {
  constructor(_router) {
    this._router = _router;
  }
  navigateToLogin() {
    this._router.navigate(['login']);
  }
  static #_ = this.ɵfac = function SignUpComponent_Factory(t) {
    return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SignUpComponent,
    selectors: [["app-sign-up"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 36,
    vars: 0,
    consts: [[1, "bg-light", "ml-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-10", "col-md-8", "col-lg-6", "col-xl-5", "col-xxl-4"], [1, "card", "border", "border-light-subtle", "rounded-3", "shadow-sm"], [1, "card-body", "p-1"], [1, "text-center", "mb-3", "fw-bold", "fs-1"], [1, "fs-6", "fw-normal", "text-center", "text-secondary", "mb-4"], ["action", "#!"], [1, "row", "gy-2", "overflow-hidden"], [1, "col-12"], [1, "form-floating", "mb-3"], ["type", "email", "name", "email", "id", "email", "placeholder", "name@example.com", "required", "", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "password", "name", "password", "id", "password", "value", "", "placeholder", "Password", "required", "", 1, "form-control"], ["for", "password", 1, "form-label"], [1, "d-grid", "my-3"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg"], [1, "m-0", "text-secondary", "text-center"], ["href", "javascript:void(0)", 1, "link-primary", "text-decoration-none", 3, "click"]],
    template: function SignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " VMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10)(23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10)(28, "div", 16)(29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10)(32, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_a_click_34_listener() {
          return ctx.navigateToLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3808:
/*!*****************************************************!*\
  !*** ./src/app/interceptor/resource.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceInterceptor: () => (/* binding */ ResourceInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/token.service */ 6988);




class ResourceInterceptor {
  constructor(tokenService) {
    this.tokenService = tokenService;
  }
  intercept(request, next) {
    let intReq = request;
    const token = this.tokenService.getAccessToken();
    if (token != null && (request.url.includes('resource') || request.url.includes('booking'))) {
      // request.headers.set('ngrok-skip-browser-warning', 'true');
      intReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token).set('ngrok-skip-browser-warning', 'true')
      });
    }
    return next.handle(intReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {}, err => {
      if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
        if (err.status !== 401) {
          return;
        }
        alert("Your session expired ! Please login again");
      }
    }));
  }
  static #_ = this.ɵfac = function ResourceInterceptor_Factory(t) {
    return new (t || ResourceInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ResourceInterceptor,
    factory: ResourceInterceptor.ɵfac
  });
}

/***/ }),

/***/ 4567:
/*!**********************************!*\
  !*** ./src/app/model/Booking.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Answer: () => (/* binding */ Answer),
/* harmony export */   QueAnsRequest: () => (/* binding */ QueAnsRequest)
/* harmony export */ });
class Answer {}
class QueAnsRequest {
  constructor() {
    this.quesAnswers = new Array();
  }
}

/***/ }),

/***/ 5111:
/*!**********************************************!*\
  !*** ./src/app/model/QuestionnaireAnswer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionnaireAnswer: () => (/* binding */ QuestionnaireAnswer)
/* harmony export */ });
class QuestionnaireAnswer {}
// private Long questionId;
// 	private String questionText;
// 	private String questionDesc;
// 	private String possibleAnswers;
// 	private String questionType;
// 	private String questionDataType;
// 	private Boolean isMainMandatory;
// 	private String questionCode;
// 	private String parentQuestionCode;
// 	private String fkEntityCode;
// 	private Integer questionVersion;
// 	private String questionCategory;
// 	private boolean isActiveInd;
// 	private Integer columnOrderId;

/***/ }),

/***/ 1488:
/*!*********************************!*\
  !*** ./src/app/model/entity.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Entity: () => (/* binding */ Entity)
/* harmony export */ });
class Entity {}

/***/ }),

/***/ 206:
/*!***************************************************************!*\
  !*** ./src/app/reusable/common-form/common-form.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonFormComponent: () => (/* binding */ CommonFormComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _model_Booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/Booking */ 4567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_booking_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/booking-service.service */ 8049);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 1251);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmdialog */ 4123);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 8313);













function CommonFormComponent_span_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CommonFormComponent_span_2_span_1_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](qs_r1.answer = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", qs_r1.questionDataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", qs_r1.questionDataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", qs_r1.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("htmlFor", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](qs_r1.questionText);
  }
}
const _c0 = () => ({
  "width": "100%"
});
function CommonFormComponent_span_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6)(1, "p-dropdown", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CommonFormComponent_span_2_span_2_Template_p_dropdown_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](qs_r1.answer = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", qs_r1.questionDataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3.getdropdownOptions(qs_r1.questionId))("ngModel", qs_r1.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("htmlFor", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](qs_r1.questionText);
  }
}
function CommonFormComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CommonFormComponent_span_2_span_1_Template, 4, 6, "span", 5)(2, CommonFormComponent_span_2_span_2_Template, 4, 9, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const qs_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", qs_r1.questionDataType != "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", qs_r1.questionDataType === "dropdown");
  }
}
// import { QuestionnaireAnswer } from './model';
class CommonFormComponent {
  constructor(_bookingService, confirmationService, messageService) {
    this._bookingService = _bookingService;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
    this.loading = false;
    this.position = 'center';
    this.optionsMap = new Map();
  }
  ngOnInit() {
    this.getQuestionByEntityCode();
  }
  getQuestionByEntityCode() {
    this._bookingService.getQuestionsByEntityCode('1').subscribe({
      next: res => {
        console.log(res);
        this.mapBookingData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  mapBookingData(res) {
    this.data = res['data'];
    this.data.forEach(element => {
      if (element.questionDataType === 'dropdown') {
        let options = [];
        element.possibleAnswers.split("|").forEach(e => options.push({
          label: e,
          value: e
        }));
        this.optionsMap.set(element['questionId'], options);
      }
    });
    console.log(this.data);
  }
  submit() {
    console.log("inside submit");
    let bookingReq = new _model_Booking__WEBPACK_IMPORTED_MODULE_0__.QueAnsRequest();
    bookingReq.fkEntityCode = this.data[0].fkEntityCode;
    this.data.forEach(ans => {
      let answer = new _model_Booking__WEBPACK_IMPORTED_MODULE_0__.Answer();
      answer.questionCode = ans.questionCode;
      answer.questionText = ans.questionText;
      answer.parentQuestionCode = ans.parentQuestionCode;
      answer.answer = ans.answer;
      bookingReq.quesAnswers.push(answer);
    });
    this._bookingService.saveBookingDetails(bookingReq).subscribe({
      next: res => {
        console.log(res);
        this.loading = false;
        // this.mapBookingData(res)
      },
      error: err => {
        console.log(err);
        this.loading = false;
      }
    });
  }
  load() {
    this.loading = true;
    console.log(this.data);
    this.submit();
    // setTimeout(() => {
    //   this.loading = false
    // }, 2000);
  }
  confirmPosition(position) {
    this.position = position;
    console.log("testing log");
    this.confirmationService.confirm({
      message: 'Are you sure you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Request submitted'
        });
        this.load();
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Process incomplete',
          life: 3000
        });
      },
      key: 'positionDialog'
    });
  }
  getdropdownOptions(id) {
    console.log(this.optionsMap);
    return this.optionsMap.get(id);
  }
  static #_ = this.ɵfac = function CommonFormComponent_Factory(t) {
    return new (t || CommonFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_booking_service_service__WEBPACK_IMPORTED_MODULE_1__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CommonFormComponent,
    selectors: [["app-common-form"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService, primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService])],
    decls: 8,
    vars: 3,
    consts: [[1, "card"], [1, "flex", "flex-wrap", "justify-content-left", "gap-5"], [4, "ngFor", "ngForOf"], ["key", "positionDialog", "rejectButtonStyleClass", "p-button-primary", 3, "position"], ["label", "Sumbit", "styleClass", "p-button-info", 3, "loading", "click"], ["class", "p-float-label", 4, "ngIf"], [1, "p-float-label"], ["pInputText", "", 3, "type", "id", "ngModel", "pTooltip", "ngModelChange"], [3, "htmlFor"], ["appendTo", "body", 3, "id", "pTooltip", "options", "ngModel", "ngModelChange"]],
    template: function CommonFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CommonFormComponent_span_2_Template, 3, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p-toast")(6, "p-confirmDialog", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CommonFormComponent_Template_p_button_click_7_listener() {
          return ctx.confirmPosition("top");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialog, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2706:
/*!***********************************************************************!*\
  !*** ./src/app/reusable/payment-gateway/payment-gateway.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentGatewayComponent: () => (/* binding */ PaymentGatewayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/transaction-service.service */ 5025);


class PaymentGatewayComponent {
  constructor(_transactionService) {
    this._transactionService = _transactionService;
  }
  createTransaction() {
    this._transactionService.createTransaction(1000).subscribe({
      next: res => {
        console.log(res);
        this.openTransactionModal(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  openTransactionModal(res) {
    var options = {
      order_id: res['transactionId'],
      key: res['key'],
      amount: res['amount'],
      currency: res['currency'],
      name: "Payment",
      description: "Payment gateway",
      handler: res => {
        this.processTransaction(res);
      },
      prefill: {
        name: "PaymentGateway",
        email: "sample@gmail.com",
        contact: "100111111"
      },
      notes: {
        address: "ERODE"
      },
      theme: {
        color: "#F37254"
      }
    };
    var res = new Razorpay(options);
    res.open();
  }
  processTransaction(res) {
    console.log("Success response ........" + res);
    console.log(res);
  }
  static #_ = this.ɵfac = function PaymentGatewayComponent_Factory(t) {
    return new (t || PaymentGatewayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PaymentGatewayComponent,
    selectors: [["app-payment-gateway"]],
    decls: 2,
    vars: 0,
    consts: [[1, "btn", "btn-success", 3, "click"]],
    template: function PaymentGatewayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentGatewayComponent_Template_button_click_0_listener() {
          return ctx.createTransaction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PAY NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2405:
/*!*******************************************************!*\
  !*** ./src/app/reusable/ru-form/ru-form.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuFormComponent: () => (/* binding */ RuFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/autocomplete */ 4823);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ 7411);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 4123);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 8313);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 1251);
/* harmony import */ var src_app_model_Booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/Booking */ 4567);
/* harmony import */ var src_app_services_booking_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/booking-service.service */ 8049);

























function RuFormComponent_span_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RuFormComponent_span_2_span_1_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](qs_r1.answer = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", qs_r1.questionDataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", qs_r1.questionDataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", qs_r1.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("htmlFor", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](qs_r1.questionText);
  }
}
const _c0 = () => ({
  "width": "20rem",
  "border-top": "0px",
  "border-left": "0px",
  "border-right": "0px",
  "border-radius": "0px",
  "background-color": "#d9d9d9",
  "border-color": "black",
  "box-shadow": "inset 0 -1px 0 #ddd"
});
function RuFormComponent_span_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6)(1, "p-dropdown", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RuFormComponent_span_2_span_2_Template_p_dropdown_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](qs_r1.answer = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", qs_r1.questionDataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3.getdropdownOptions(qs_r1.questionId))("ngModel", qs_r1.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("htmlFor", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](qs_r1.questionText);
  }
}
function RuFormComponent_span_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 6)(1, "p-calendar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RuFormComponent_span_2_span_3_Template_p_calendar_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](qs_r1.answer = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const qs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", qs_r1.answer)("iconDisplay", "input")("showIcon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("htmlFor", qs_r1.questionCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](qs_r1.questionText);
  }
}
function RuFormComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RuFormComponent_span_2_span_1_Template, 4, 6, "span", 5)(2, RuFormComponent_span_2_span_2_Template, 4, 9, "span", 5)(3, RuFormComponent_span_2_span_3_Template, 4, 6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const qs_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", qs_r1.questionDataType === "text" || qs_r1.questionDataType === "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", qs_r1.questionDataType === "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", qs_r1.questionDataType === "date");
  }
}
class RuFormComponent {
  constructor(_bookingService, confirmationService, messageService) {
    this._bookingService = _bookingService;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
    this.loading = false;
    this.optionsMap = new Map();
    this.position = 'center';
    this.postQuesAns = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnChanges(changes) {
    // this.loading = changes['loading']!.currentValue;
    // console.log(changes);
  }
  submit() {
    let req = new src_app_model_Booking__WEBPACK_IMPORTED_MODULE_0__.QueAnsRequest();
    req.fkEntityCode = this.data[0].fkEntityCode;
    this.data.forEach(ans => {
      let answer = new src_app_model_Booking__WEBPACK_IMPORTED_MODULE_0__.Answer();
      answer.questionCode = ans.questionCode;
      answer.questionText = ans.questionText;
      answer.parentQuestionCode = ans.parentQuestionCode;
      answer.answer = ans.answer;
      req.quesAnswers.push(answer);
    });
    this.postQuesAns.emit(req);
  }
  load() {
    // this.loading = true;
    this.submit();
  }
  confirmPosition(position) {
    this.position = position;
    this.confirmationService.confirm({
      message: 'Are you sure you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Request submitted'
        });
        this.load();
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'Process incomplete',
          life: 3000
        });
      },
      key: 'positionDialog'
    });
  }
  getdropdownOptions(id) {
    return this.optionsMap.get(id);
  }
  static #_ = this.ɵfac = function RuFormComponent_Factory(t) {
    return new (t || RuFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_booking_service_service__WEBPACK_IMPORTED_MODULE_1__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RuFormComponent,
    selectors: [["app-ru-form"]],
    inputs: {
      data: "data",
      loading: "loading",
      optionsMap: "optionsMap"
    },
    outputs: {
      postQuesAns: "postQuesAns"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService, primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 3,
    consts: [[1, "table-card", "m-2", "p-3"], [1, "flex", "flex-wrap", "justify-content-left", "gap-5"], [4, "ngFor", "ngForOf"], ["key", "positionDialog", "rejectButtonStyleClass", "p-button-primary", 3, "position"], ["label", "Sumbit", "styleClass", "p-button-info", 3, "loading", "click"], ["class", "p-float-label", 4, "ngIf"], [1, "p-float-label"], ["pInputText", "", 1, "decor", 3, "type", "id", "ngModel", "pTooltip", "ngModelChange"], [3, "htmlFor"], ["appendTo", "body", 3, "id", "pTooltip", "options", "ngModel", "ngModelChange"], [3, "ngModel", "iconDisplay", "showIcon", "id", "ngModelChange"]],
    template: function RuFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RuFormComponent_span_2_Template, 4, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p-toast")(6, "p-confirmDialog", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RuFormComponent_Template_p_button_click_7_listener() {
          return ctx.confirmPosition("top");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading);
      }
    },
    dependencies: [primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.Dropdown, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button, primeng_toast__WEBPACK_IMPORTED_MODULE_6__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__.AutoCompleteModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.Tooltip, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.Calendar],
    styles: [".decor[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n  border-color: black;\n  background-color: #d9d9d9;\n  width: 20rem;\n}\n\n[_nghost-%COMP%]     .p-inputtext {\n  border-radius: 0;\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n  border-color: black;\n  background-color: #d9d9d9;\n  width: 20rem;\n  box-shadow: inset 0 -1px 0 #ddd;\n}\n\n.table-card[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 5px 1px #a0a8ab;\n}\n\ntextarea[_ngcontent-%COMP%]:focus, textarea.form-control[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus, input[type=email][_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus, [type=text].form-control[_ngcontent-%COMP%]:focus, [type=password].form-control[_ngcontent-%COMP%]:focus, [type=email].form-control[_ngcontent-%COMP%]:focus, [type=tel].form-control[_ngcontent-%COMP%]:focus, [contenteditable].form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: inset 0 -1px 0 #ddd;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmV1c2FibGUvcnUtZm9ybS9ydS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUNBQUE7QUFDSjs7QUFFQTs7Ozs7Ozs7Ozs7O0VBWUUsK0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kZWNvcntcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3A6IDBweDtcbiAgICBib3JkZXItbGVmdDogMHB4O1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcbiAgICB3aWR0aDogMjByZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAucC1pbnB1dHRleHR7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICNkZGQ7XG59XG5cbi50YWJsZS1jYXJke1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCAjYTBhOGFiO1xufVxuXG50ZXh0YXJlYTpmb2N1cywgXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2w6Zm9jdXMsIFxuaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzLCBcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIFxuaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIFxuaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsIFxuaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLCBcblt0eXBlPXRleHRdLmZvcm0tY29udHJvbDpmb2N1cywgXG5bdHlwZT1wYXNzd29yZF0uZm9ybS1jb250cm9sOmZvY3VzLCBcblt0eXBlPWVtYWlsXS5mb3JtLWNvbnRyb2w6Zm9jdXMsIFxuW3R5cGU9dGVsXS5mb3JtLWNvbnRyb2w6Zm9jdXMsIFxuW2NvbnRlbnRlZGl0YWJsZV0uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2RkZDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 29:
/*!*********************************************************!*\
  !*** ./src/app/reusable/ru-table/ru-table.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuTableComponent: () => (/* binding */ RuTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/autocomplete */ 4823);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 3311);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/message */ 7736);
/* harmony import */ var primeng_speeddial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/speeddial */ 126);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 8313);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 8026);





















function RuTableComponent_p_table_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 14)(4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function RuTableComponent_p_table_1_ng_template_3_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r10, " ");
  }
}
function RuTableComponent_p_table_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RuTableComponent_p_table_1_ng_template_3_th_3_Template, 2, 1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r8);
  }
}
function RuTableComponent_p_table_1_ng_template_4_td_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RuTableComponent_p_table_1_ng_template_4_td_5_ng_template_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const colIdx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const rowData_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](rowData_r11[colIdx_r17] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colIdx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const rowData_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", rowData_r11[colIdx_r17]);
  }
}
function RuTableComponent_p_table_1_ng_template_4_td_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const colIdx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const rowData_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", rowData_r11[colIdx_r17], " ");
  }
}
function RuTableComponent_p_table_1_ng_template_4_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21)(1, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RuTableComponent_p_table_1_ng_template_4_td_5_ng_template_2_Template, 1, 1, "ng-template", 22)(3, RuTableComponent_p_table_1_ng_template_4_td_5_ng_template_3_Template, 1, 1, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const colIdx_r17 = ctx.index;
    const rowData_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pEditableColumn", rowData_r11[colIdx_r17]);
  }
}
function RuTableComponent_p_table_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-toast");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-speedDial", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function RuTableComponent_p_table_1_ng_template_4_Template_p_speedDial_onClick_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const rowData_r11 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.speedDialCLick(rowData_r11[0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RuTableComponent_p_table_1_ng_template_4_td_5_Template, 4, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colData_r13 = ctx.columns;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r5.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colData_r13)("ngForColIdx", +1);
  }
}
function RuTableComponent_p_table_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-button", 25);
  }
}
function RuTableComponent_p_table_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-button", 26);
  }
}
const _c0 = () => ({
  "min-width": "50rem"
});
const _c1 = () => [10, 25, 50];
function RuTableComponent_p_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RuTableComponent_p_table_1_ng_template_2_Template, 5, 0, "ng-template", 6)(3, RuTableComponent_p_table_1_ng_template_3_Template, 4, 1, "ng-template", 7)(4, RuTableComponent_p_table_1_ng_template_4_Template, 6, 3, "ng-template", 8)(5, RuTableComponent_p_table_1_ng_template_5_Template, 1, 0, "ng-template", 9)(6, RuTableComponent_p_table_1_ng_template_6_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r0.headers)("value", ctx_r0.tableData)("scrollable", true)("paginator", true)("rows", 5)("showCurrentPageReport", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
  }
}
function RuTableComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span")(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ans_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ans_r31.questionText, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ans_r31.answer);
  }
}
const _c2 = () => ({
  width: "80vw",
  height: "800px"
});
class RuTableComponent {
  constructor(messageService) {
    this.messageService = messageService;
    this.speedDial = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.visible = false;
    this.flag = false;
    this.first = 0;
    this.rows = 10;
    this.idx = 0;
  }
  showDialog(opt) {
    this.visible = true;
    this.speedDial.emit({
      opt: opt,
      bookingId: this.sBookId
    });
  }
  speedDialCLick(id) {
    this.sBookId = id;
  }
  next() {
    this.first = this.first + this.rows;
  }
  prev() {
    this.first = this.first - this.rows;
  }
  reset() {
    this.first = 0;
  }
  pageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }
  isLastPage() {
    return this.tableData ? this.first === this.tableData.length - this.rows : true;
  }
  isFirstPage() {
    return this.tableData ? this.first === 0 : true;
  }
  ngOnInit() {
    this.items = [{
      icon: 'pi pi-pencil',
      command: () => {
        // console.log(this.);
        this.showDialog('EDIT');
        this.messageService.add({
          severity: 'info',
          summary: 'Add',
          detail: 'Data Added'
        });
      }
    }, {
      icon: 'pi pi-refresh',
      command: () => {
        this.showDialog('REFRESH');
        this.messageService.add({
          severity: 'success',
          summary: 'Update',
          detail: 'Data Updated'
        });
      }
    }, {
      icon: 'pi pi-trash',
      command: () => {
        this.showDialog('DELETE');
        this.messageService.add({
          severity: 'error',
          summary: 'Delete',
          detail: 'Data Deleted'
        });
      }
    }, {
      icon: 'pi pi-upload',
      routerLink: ['/fileupload']
    }, {
      icon: 'pi pi-external-link',
      target: '_blank',
      url: 'http://angular.io'
    }];
  }
  static #_ = this.ɵfac = function RuTableComponent_Factory(t) {
    return new (t || RuTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RuTableComponent,
    selectors: [["app-ru-table"]],
    inputs: {
      headers: "headers",
      flag: "flag",
      tableData: "tableData"
    },
    outputs: {
      speedDial: "speedDial"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 6,
    consts: [[1, "table-card", "m-2", "p-3"], ["scrollHeight", "500px", "dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "tableStyle", "rowsPerPageOptions", 4, "ngIf"], ["header", "Long Content", 3, "visible", "visibleChange"], [4, "ngFor", "ngForOf"], ["scrollHeight", "500px", "dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "columns", "value", "scrollable", "paginator", "rows", "showCurrentPageReport", "tableStyle", "rowsPerPageOptions"], ["dt1", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "paginatorleft"], ["pTemplate", "paginatorright"], [1, "flex"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined"], [1, "p-input-icon-left", "ml-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search keyword"], ["pFrozenColumn", ""], ["pFrozenColumn", "", 2, "width", "100px"], [1, "speeddial-linear-demo", 2, "position", "relative"], ["direction", "right", 3, "model", "onClick"], ["pEditableColumnField", "colIdx", 3, "pEditableColumn", 4, "ngFor", "ngForOf", "ngForColIdx"], ["pEditableColumnField", "colIdx", 3, "pEditableColumn"], ["pTemplate", "input"], ["pTemplate", "output"], ["pInputText", "", "type", "text", 3, "ngModel", "ngModelChange"], ["type", "button", "icon", "pi pi-plus", "styleClass", "p-button-text"], ["type", "button", "icon", "pi pi-cloud", "styleClass", "p-button-text"]],
    template: function RuTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RuTableComponent_p_table_1_Template, 7, 10, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-dialog", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function RuTableComponent_Template_p_dialog_visibleChange_2_listener($event) {
          return ctx.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RuTableComponent_div_3_Template, 6, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.queAns);
      }
    },
    dependencies: [primeng_table__WEBPACK_IMPORTED_MODULE_2__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_2__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_2__.FrozenColumn, primeng_table__WEBPACK_IMPORTED_MODULE_2__.EditableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_2__.CellEditor, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_speeddial__WEBPACK_IMPORTED_MODULE_4__.SpeedDialModule, primeng_speeddial__WEBPACK_IMPORTED_MODULE_4__.SpeedDial, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__.AutoCompleteModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.Dialog, primeng_message__WEBPACK_IMPORTED_MODULE_11__.MessageModule],
    styles: [".p-datatable .p-datatable-thead > tr > th {\n  color: #131314;\n  font-size: 14px !important;\n  border-bottom: 1px solid #efefef !important;\n  padding: 10px 3px;\n}\n\n  .p-datatable .p-datatable-tbody > tr > td {\n  font-size: 12px !important;\n  border-bottom: 1px solid #efefef !important;\n  padding: 10px 3px;\n}\n\n.table-card[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 5px 1px #a0a8ab;\n  position: absolute;\n  top: 60px;\n}\n\n.custom-filter-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff !important;\n  background-color: #6D5BD0 !important;\n}\n\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n[_nghost-%COMP%]     .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n\n[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-right {\n  left: 0;\n  top: calc(50% - 2rem);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmV1c2FibGUvcnUtdGFibGUvcnUtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwwQkFBQTtFQUNBLDJDQUFBO0VBRUEsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0FBR0o7O0FBQ0k7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFFUjtBQUFRO0VBQ0kseUJBQUE7QUFFWjs7QUFNUTtFQUNJLE9BQUE7RUFDQSxxQkFBQTtBQUhaIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5wLWRhdGF0YWJsZSAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoe1xuICAgIGNvbG9yOiAjMTMxMzE0O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAzcHg7XG59XG46Om5nLWRlZXAgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGR7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWYgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZmVmZWYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDNweDtcbn1cbi50YWJsZS1jYXJke1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCAjYTBhOGFiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NjBweDtcbn1cbi5jdXN0b20tZmlsdGVyLWJ0bjpob3ZlcntcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RDVCRDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAucC1wcm9ncmVzc2JhciB7XG4gICAgICAgIGhlaWdodDogLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEOERBREM7XG4gICAgXG4gICAgICAgIC5wLXByb2dyZXNzYmFyLXZhbHVlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gICAgLnNwZWVkZGlhbC1saW5lYXItZGVtbyB7XG5cbiAgICAgICAgLnAtc3BlZWRkaWFsLWRpcmVjdGlvbi1yaWdodCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDJyZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 185:
/*!**************************************************!*\
  !*** ./src/app/services/auth-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class AuthService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.tokne_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.token_url;
  }
  getToken(code, code_verifier) {
    let body = new URLSearchParams();
    body.set('grant_type', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.grant_type);
    body.set('client_id', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.client_id);
    body.set('redirect_uri', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.redirect_uri);
    body.set('scope', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.scope);
    body.set('code_verifier', code_verifier);
    body.set('code', code);
    const basic_auth = 'Basic ' + btoa('vms-client:vms-secret');
    const headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Authorization': basic_auth
    });
    const httpOptions = {
      headers: headers_object
    };
    return this.httpClient.post(this.tokne_url, body, httpOptions);
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8049:
/*!*****************************************************!*\
  !*** ./src/app/services/booking-service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingService: () => (/* binding */ BookingService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class BookingService {
  constructor(http) {
    this.http = http;
    this.getBookingDetailsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getBookingDetailsByEntityCode";
    this.getQuestions = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getQuestionsByEntityCode";
    this.getAllEntity = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getAllEntityList";
    this.saveBooking = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/saveBookingDetails";
    this.getBookingDetlById = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getBookingDetailsById";
  }
  getBookingDetailsByEntityCode(entityCode) {
    return this.http.get(`${this.getBookingDetailsUrl}/${entityCode}`);
  }
  getQuestionsByEntityCode(entityCode) {
    return this.http.get(`${this.getQuestions}/${entityCode}?questionCategory=BOOKING`);
  }
  getAllEntityList() {
    return this.http.get(`${this.getAllEntity}`);
  }
  saveBookingDetails(bookingReq) {
    return this.http.post(`${this.saveBooking}`, bookingReq);
  }
  getBookingDetailById(id) {
    return this.http.get(`${this.getBookingDetlById}/${id}`);
  }
  static #_ = this.ɵfac = function BookingService_Factory(t) {
    return new (t || BookingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BookingService,
    factory: BookingService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7277:
/*!****************************************************!*\
  !*** ./src/app/services/driver-service.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DriverService: () => (/* binding */ DriverService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class DriverService {
  constructor(http) {
    this.http = http;
    this.getBookingDetailsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getDriverDetailsByEntityCode";
    this.getQuestions = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getQuestionsByEntityCode";
    this.getAllEntity = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getAllEntityList";
    this.saveBooking = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/saveDriverDetails";
  }
  getDriverDetailsByEntityCode(entityCode) {
    return this.http.get(`${this.getBookingDetailsUrl}/${entityCode}`);
  }
  getQuestionsByEntityCode(entityCode) {
    return this.http.get(`${this.getQuestions}/${entityCode}?questionCategory=DRIVER`);
  }
  getAllEntityList() {
    return this.http.get(`${this.getAllEntity}`);
  }
  saveDriverDetails(bookingReq) {
    return this.http.post(`${this.saveBooking}`, bookingReq);
  }
  static #_ = this.ɵfac = function DriverService_Factory(t) {
    return new (t || DriverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DriverService,
    factory: DriverService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1240:
/*!****************************************************!*\
  !*** ./src/app/services/entity-service.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityService: () => (/* binding */ EntityService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class EntityService {
  constructor(http) {
    this.http = http;
    this.saveEntityUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/saveEntityDetails";
    this.getEntityUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getEntityDetails";
    this.getEntityCard = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getAllEntityCards";
  }
  saveEntityDetails(entity) {
    console.log(entity);
    return this.http.post(`${this.saveEntityUrl}`, entity);
  }
  getEntityDetails(entityCode) {
    return this.http.get(`${this.getEntityUrl}/${entityCode}`);
  }
  getAllEntityCards() {
    return this.http.get(`${this.getEntityCard}`);
  }
  static #_ = this.ɵfac = function EntityService_Factory(t) {
    return new (t || EntityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: EntityService,
    factory: EntityService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6988:
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenService: () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 6552);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const CODE_VERIFIER = 'code_verifier';
class TokenService {
  constructor() {}
  setTokens(access_token, refresh_token) {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.setItem(ACCESS_TOKEN, access_token);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.setItem(REFRESH_TOKEN, refresh_token);
  }
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  }
  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
  }
  clear() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }
  isLogged() {
    return localStorage.getItem(ACCESS_TOKEN) != null;
  }
  isAdmin() {
    if (!this.isLogged()) {
      return false;
    }
    const token = this.getAccessToken();
    const payload = token != null ? token.split(".")[1] : '';
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    if (roles.indexOf('ROLE_ADMIN') < 0) {
      return false;
    }
    return true;
  }
  setVerifier(code_verifier) {
    if (localStorage.getItem(CODE_VERIFIER)) {
      this.deleteVerifier();
    }
    const encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(code_verifier, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.secret_pkce);
    localStorage.setItem(CODE_VERIFIER, encrypted.toString());
  }
  getVerifier() {
    const encrypted = localStorage.getItem(CODE_VERIFIER);
    const decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(encrypted != null ? encrypted : '', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.secret_pkce).toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
    return decrypted;
  }
  deleteVerifier() {
    localStorage.removeItem(CODE_VERIFIER);
  }
  static #_ = this.ɵfac = function TokenService_Factory(t) {
    return new (t || TokenService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TokenService,
    factory: TokenService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5025:
/*!*********************************************************!*\
  !*** ./src/app/services/transaction-service.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionService: () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class TransactionService {
  constructor(http) {
    this.http = http;
    this.url = "http://localhost:8080/transaction";
  }
  createTransaction(amount) {
    return this.http.get(`${this.url}/${amount}`);
  }
  static #_ = this.ɵfac = function TransactionService_Factory(t) {
    return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: TransactionService,
    factory: TransactionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8493:
/*!*****************************************************!*\
  !*** ./src/app/services/vehicle-service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VehicleService: () => (/* binding */ VehicleService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class VehicleService {
  constructor(http) {
    this.http = http;
    this.getBookingDetailsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getVehicleDetailsByEntityCode";
    this.getQuestions = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getQuestionsByEntityCode";
    this.getAllEntity = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/getAllEntityList";
    this.saveBooking = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resource_url + "/booking/v1.0/saveVehicleDetails";
  }
  getVehicleDetailsByEntityCode(entityCode) {
    return this.http.get(`${this.getBookingDetailsUrl}/${entityCode}`);
  }
  getQuestionsByEntityCode(entityCode) {
    return this.http.get(`${this.getQuestions}/${entityCode}?questionCategory=VEHICLE`);
  }
  getAllEntityList() {
    return this.http.get(`${this.getAllEntity}`);
  }
  saveVehcileDetails(bookingReq) {
    return this.http.post(`${this.saveBooking}`, bookingReq);
  }
  static #_ = this.ɵfac = function VehicleService_Factory(t) {
    return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: VehicleService,
    factory: VehicleService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4491:
/*!********************************************************!*\
  !*** ./src/app/top-menu-bar/top-menu-bar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopMenuBarComponent: () => (/* binding */ TopMenuBarComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 6552);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/token.service */ 6988);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);







const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
class TopMenuBarComponent {
  constructor(tokenService) {
    this.tokenService = tokenService;
    this.authorize_uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authorize_uri;
    this.logout_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.logout_url;
    this.params = {
      client_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.client_id,
      redirect_uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.redirect_uri,
      scope: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.scope,
      response_type: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.response_type,
      response_mode: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.response_mode,
      code_challenge_method: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.code_challenge_method
    };
  }
  ngOnInit() {
    this.getLogged();
  }
  onLogin() {
    const code_verifier = this.generateCodeVerifier();
    this.tokenService.setVerifier(code_verifier);
    this.params.code_challenge = this.generateCodeChallenge(code_verifier);
    const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      fromObject: this.params
    });
    const codeUrl = this.authorize_uri + httpParams.toString();
    location.href = codeUrl;
  }
  onLogout() {
    localStorage.removeItem("isLoggedIn");
    location.href = this.logout_url;
  }
  getLogged() {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }
  generateCodeVerifier() {
    let result = '';
    const char_length = CHARACTERS.length;
    for (let i = 0; i < 44; i++) {
      result += CHARACTERS.charAt(Math.floor(Math.random() * char_length));
    }
    return result;
  }
  generateCodeChallenge(code_verifier) {
    const codeverifierHash = crypto_js__WEBPACK_IMPORTED_MODULE_1__.SHA256(code_verifier).toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Base64);
    const code_challenge = codeverifierHash.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    return code_challenge;
  }
  static #_ = this.ɵfac = function TopMenuBarComponent_Factory(t) {
    return new (t || TopMenuBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_2__.TokenService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TopMenuBarComponent,
    selectors: [["app-top-menu-bar"]],
    decls: 75,
    vars: 0,
    consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["href", "#", 1, "navbar-brand", "text-white", "fs-4", "pe-3", 2, "font-weight", "bolder"], ["id", "navbarTogglerDemo03", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item", "pe-4"], ["aria-current", "page", "routerLink", "/", 1, "nav-link"], [1, "nav-item", "pe-4", "dropdown"], ["href", "#", "id", "navbarDarkDropdownMenuLink", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDarkDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-light"], ["href", "/entityCards", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item"], ["href", "/vehicleDetails", 1, "dropdown-item"], ["href", "/vehicleForm", 1, "dropdown-item"], ["routerLink", "/bookingDetails", 1, "dropdown-item"], ["routerLink", "/bookingForm", 1, "dropdown-item"], ["routerLink", "/vehicleAvailability", 1, "dropdown-item"], ["href", "/driverDetails", 1, "dropdown-item"], ["href", "driverForm", 1, "dropdown-item"], ["role", "search", 1, "d-flex"], [1, "nav-item", "dropdown"], [1, "pi", "pi-user"], ["id", "profile", "aria-labelledby", "navbarDarkDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-light", 2, "right", "4px !important"], [1, "dropdown-item", 3, "click"]],
    template: function TopMenuBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "VMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 9)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Entity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul", 11)(15, "li")(16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li")(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Archieved");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 9)(22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Vehicle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ul", 11)(25, "li")(26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Vehicle Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "li")(29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Register Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li")(32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Vehicle Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "li")(35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Service History");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li", 9)(38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Booking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "ul", 11)(41, "li")(42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Booking Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "li")(45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Book Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li")(48, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Vehicle Avalability");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "li", 9)(51, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " Employees ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "ul", 11)(54, "li")(55, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Driver Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "li")(58, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Register Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "li")(61, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "form", 21)(64, "ul", 6)(65, "li", 22)(66, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "em", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "ul", 24)(69, "li")(70, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "li")(73, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopMenuBarComponent_Template_a_click_73_listener() {
          return ctx.onLogout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
    styles: [".dropdown-menu[data-bs-popper][_ngcontent-%COMP%] {\n  left: auto !important;\n  background-color: rgba(52, 52, 52, 0.589);\n  color: white;\n}\n\na[_ngcontent-%COMP%] {\n  color: rgb(221, 220, 220);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdG9wLW1lbnUtYmFyL3RvcC1tZW51LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudVtkYXRhLWJzLXBvcHBlcl17XG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDUyLCA1MiwgMC41ODkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYXtcbiAgICBjb2xvcjogcmdiKDIyMSwgMjIwLCAyMjApO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6234:
/*!***********************************************************************!*\
  !*** ./src/app/vms-components/booking-form/booking-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingFormComponent: () => (/* binding */ BookingFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_reusable_ru_form_ru_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/reusable/ru-form/ru-form.component */ 2405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_booking_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/booking-service.service */ 8049);



class BookingFormComponent {
  constructor(_bookingService, changeDetectorRef) {
    this._bookingService = _bookingService;
    this.changeDetectorRef = changeDetectorRef;
    this.pLoading = false;
    this.pOptionsMap = new Map();
  }
  ngOnInit() {
    this.getQuestionByEntityCode();
  }
  getQuestionByEntityCode() {
    this._bookingService.getQuestionsByEntityCode('1').subscribe({
      next: res => {
        this.mapBookingData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  mapBookingData(res) {
    this.pData = res['data'];
    this.pData.forEach(element => {
      if (element.questionDataType === 'dropdown') {
        let options = [];
        element.possibleAnswers.split("|").forEach(e => options.push({
          label: e,
          value: e
        }));
        this.pOptionsMap.set(element['questionId'], options);
      }
    });
  }
  getPostData(queAns) {
    this._bookingService.saveBookingDetails(queAns).subscribe({
      next: res => {
        console.log("inside postdata prent: ", res);
        // this.pLoading = false;
        // this.changeDetectorRef.detectChanges();
      },
      error: err => {
        console.log(err);
        // this.pLoading = false;
      }
    });
  }
  static #_ = this.ɵfac = function BookingFormComponent_Factory(t) {
    return new (t || BookingFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_booking_service_service__WEBPACK_IMPORTED_MODULE_1__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BookingFormComponent,
    selectors: [["app-booking-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 3,
    consts: [[3, "data", "loading", "optionsMap", "postQuesAns"]],
    template: function BookingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-ru-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("postQuesAns", function BookingFormComponent_Template_app_ru_form_postQuesAns_0_listener($event) {
          return ctx.getPostData($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.pData)("loading", ctx.pLoading)("optionsMap", ctx.pOptionsMap);
      }
    },
    dependencies: [src_app_reusable_ru_form_ru_form_component__WEBPACK_IMPORTED_MODULE_0__.RuFormComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2414:
/*!*************************************************************!*\
  !*** ./src/app/vms-components/booking/booking.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingComponent: () => (/* binding */ BookingComponent)
/* harmony export */ });
/* harmony import */ var _reusable_ru_table_ru_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reusable/ru-table/ru-table.component */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_booking_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/booking-service.service */ 8049);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 8026);




class BookingComponent {
  constructor(_bookingService, messageService) {
    this._bookingService = _bookingService;
    this.messageService = messageService;
    this.pFlag = false;
  }
  ngOnInit() {
    this.getBookingDetails();
  }
  getSpeedDialAction(data) {
    if (data.opt === 'EDIT') {
      this._bookingService.getBookingDetailById(data.bookingId).subscribe({
        next: res => {
          console.log(res);
          this.mapBookData(res);
          this.rutableComponent.queAns = this.booking.quesAnswers;
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
  mapBookData(res) {
    this.booking = res['data'];
  }
  getBookingDetails() {
    this._bookingService.getBookingDetailsByEntityCode('1').subscribe({
      next: res => {
        console.log(res);
        this.mapBookingData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  mapBookingData(res) {
    this.pTableData = res['data'];
    this.pHeaders = this.pTableData[0];
    this.pTableData = this.pTableData.slice(1, this.pTableData.length);
    const n = this.pTableData.length;
    this.pFlag = true;
  }
  static #_ = this.ɵfac = function BookingComponent_Factory(t) {
    return new (t || BookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_booking_service_service__WEBPACK_IMPORTED_MODULE_1__.BookingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BookingComponent,
    selectors: [["app-booking"]],
    viewQuery: function BookingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_reusable_ru_table_ru_table_component__WEBPACK_IMPORTED_MODULE_0__.RuTableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.rutableComponent = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 3,
    consts: [[3, "tableData", "flag", "headers", "speedDial"]],
    template: function BookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-ru-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("speedDial", function BookingComponent_Template_app_ru_table_speedDial_0_listener($event) {
          return ctx.getSpeedDialAction($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableData", ctx.pTableData)("flag", ctx.pFlag)("headers", ctx.pHeaders);
      }
    },
    dependencies: [_reusable_ru_table_ru_table_component__WEBPACK_IMPORTED_MODULE_0__.RuTableComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 868:
/*!*********************************************************************!*\
  !*** ./src/app/vms-components/driver-form/driver-form.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DriverFormComponent: () => (/* binding */ DriverFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_reusable_ru_form_ru_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/reusable/ru-form/ru-form.component */ 2405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_driver_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/driver-service.service */ 7277);



class DriverFormComponent {
  constructor(_service, changeDetectorRef) {
    this._service = _service;
    this.changeDetectorRef = changeDetectorRef;
    this.pLoading = false;
    this.pOptionsMap = new Map();
  }
  ngOnInit() {
    this.getQuestionByEntityCode();
  }
  getQuestionByEntityCode() {
    this._service.getQuestionsByEntityCode('1').subscribe({
      next: res => {
        this.mapBookingData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  mapBookingData(res) {
    this.pData = res['data'];
    this.pData.forEach(element => {
      if (element.questionDataType === 'dropdown') {
        let options = [];
        element.possibleAnswers.split("|").forEach(e => options.push({
          label: e,
          value: e
        }));
        this.pOptionsMap.set(element['questionId'], options);
      }
    });
  }
  getPostData(queAns) {
    this._service.saveDriverDetails(queAns).subscribe({
      next: res => {
        console.log("inside postdata prent: ", res);
        // this.pLoading = false;
        // this.changeDetectorRef.detectChanges();
      },
      error: err => {
        console.log(err);
        // this.pLoading = false;
      }
    });
  }
  static #_ = this.ɵfac = function DriverFormComponent_Factory(t) {
    return new (t || DriverFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_driver_service_service__WEBPACK_IMPORTED_MODULE_1__.DriverService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DriverFormComponent,
    selectors: [["app-driver-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 3,
    consts: [[3, "data", "loading", "optionsMap", "postQuesAns"]],
    template: function DriverFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-ru-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("postQuesAns", function DriverFormComponent_Template_app_ru_form_postQuesAns_0_listener($event) {
          return ctx.getPostData($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.pData)("loading", ctx.pLoading)("optionsMap", ctx.pOptionsMap);
      }
    },
    dependencies: [src_app_reusable_ru_form_ru_form_component__WEBPACK_IMPORTED_MODULE_0__.RuFormComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6155:
/*!***********************************************************************!*\
  !*** ./src/app/vms-components/driver-table/driver-table.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DriverTableComponent: () => (/* binding */ DriverTableComponent)
/* harmony export */ });
/* harmony import */ var src_app_reusable_ru_table_ru_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/reusable/ru-table/ru-table.component */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_driver_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/driver-service.service */ 7277);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 8026);




class DriverTableComponent {
  constructor(_service, messageService) {
    this._service = _service;
    this.messageService = messageService;
    this.pFlag = false;
  }
  ngOnInit() {
    this.getVehicleDetails();
  }
  getVehicleDetails() {
    this._service.getDriverDetailsByEntityCode('1').subscribe({
      next: res => {
        console.log(res);
        this.mapData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  mapData(res) {
    this.pTableData = res['data'];
    this.pHeaders = this.pTableData[0];
    this.pTableData = this.pTableData.slice(1, this.pTableData.length);
    const n = this.pTableData.length;
    this.pFlag = true;
  }
  static #_ = this.ɵfac = function DriverTableComponent_Factory(t) {
    return new (t || DriverTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_driver_service_service__WEBPACK_IMPORTED_MODULE_1__.DriverService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DriverTableComponent,
    selectors: [["app-driver-table"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 3,
    consts: [[3, "tableData", "flag", "headers"]],
    template: function DriverTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-ru-table", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableData", ctx.pTableData)("flag", ctx.pFlag)("headers", ctx.pHeaders);
      }
    },
    dependencies: [src_app_reusable_ru_table_ru_table_component__WEBPACK_IMPORTED_MODULE_0__.RuTableComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8603:
/*!***********************************************************************!*\
  !*** ./src/app/vms-components/entity-cards/entity-cards.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityCardsComponent: () => (/* binding */ EntityCardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/card */ 4722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_entity_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/entity-service.service */ 1240);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);






function EntityCardsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EntityCardsComponent_div_2_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const card_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.routeToEntity(card_r1.entityCode));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "em", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 11)(7, "div", 12)(8, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r1.entityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r1.entityType);
  }
}
class EntityCardsComponent {
  constructor(entityService, _route) {
    this.entityService = entityService;
    this._route = _route;
  }
  ngOnInit() {
    this.getEntityCards();
  }
  getEntityCards() {
    this.entityService.getAllEntityCards().subscribe({
      next: res => {
        console.log(res);
        this.mapData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  mapData(res) {
    this.data = res['data'];
    console.log(this.data);
  }
  routeToAddNewEntity() {
    this._route.navigate(['/entity']);
  }
  routeToEntity(entityCode) {
    this._route.navigate(['/entity'], {
      queryParams: {
        entityCode
      }
    });
  }
  static #_ = this.ɵfac = function EntityCardsComponent_Factory(t) {
    return new (t || EntityCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_entity_service_service__WEBPACK_IMPORTED_MODULE_0__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EntityCardsComponent,
    selectors: [["app-entity-cards"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 1,
    consts: [[1, "p-2"], [1, "flex", "flex-wrap", "gap-1"], [4, "ngFor", "ngForOf"], [1, "table-card", "m-2", "p-4", 2, "width", "24rem", "height", "10rem", "cursor", "pointer", "background-color", "#dadada", 3, "click"], [1, "card-body", "text-center"], [1, "pi-plus", "pi", "text-white", "fs-1", "mt-2"], [1, "table-card", "m-2", "p-4", 2, "width", "24rem", "height", "10rem", "cursor", "pointer", 3, "click"], [1, "row", "g-0"], [1, "pi-info-circle", "pi", "float-end", "text-primary", 2, "top", "1rem", "position", "absolute", "left", "90%"], [1, "col-md-4"], [1, "pi", "pi-car", "text-center", "pt-3", 2, "font-size", "4rem"], [1, "col-md-8"], [1, "card-body"], [1, "card-title"], [1, "text-secondary"]],
    template: function EntityCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EntityCardsComponent_div_2_Template, 12, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div")(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EntityCardsComponent_Template_div_click_4_listener() {
          return ctx.routeToAddNewEntity();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
      }
    },
    dependencies: [primeng_card__WEBPACK_IMPORTED_MODULE_3__.CardModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    styles: [".table-card[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 5px 1px #a0a8ab;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdm1zLWNvbXBvbmVudHMvZW50aXR5LWNhcmRzL2VudGl0eS1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLG1DQUFBO0FBUkoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwIHtcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuOyAgICAgXG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyB9XG5cbi50YWJsZS1jYXJke1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCAjYTBhOGFiO1xuICAgIC8vIGNvbG9yOiAjOWI5YTlhO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7032:
/*!***********************************************************!*\
  !*** ./src/app/vms-components/entity/entity.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityComponent: () => (/* binding */ EntityComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/autocomplete */ 4823);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 2947);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 4553);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/editor */ 2435);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 873);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtextarea */ 652);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/radiobutton */ 3313);
/* harmony import */ var primeng_speeddial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/speeddial */ 126);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 6192);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 8313);
/* harmony import */ var _model_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/entity */ 1488);
/* harmony import */ var _model_QuestionnaireAnswer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/QuestionnaireAnswer */ 5111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_entity_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/entity-service.service */ 1240);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 8026);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 1251);




























function EntityComponent_p_table_23_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Booking Questionnaires");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_23_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.addQuestion("BOOKING"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "em", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function EntityComponent_p_table_23_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 20)(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Question Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Question Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " version");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "DataType");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Order Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Possible Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.questionId, " ");
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.questionId, " ");
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_23_ng_template_3_ng_template_7_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r8.questionCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r8.questionCode);
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.questionCode, " ");
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_23_ng_template_3_ng_template_11_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r8.questionText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r8.questionText);
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.questionText, " ");
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_23_ng_template_3_ng_template_15_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r8.questionVersion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r8.questionVersion);
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.questionVersion, " ");
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_23_ng_template_3_ng_template_19_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r8.questionDesc = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r8.questionDesc);
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.questionDesc, " ");
  }
}
const _c0 = () => ({
  "width": "100%"
});
function EntityComponent_p_table_23_ng_template_3_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dropdown", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_23_ng_template_3_ng_template_23_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r8.questionDataType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r21.dataTypes)("ngModel", product_r8.questionDataType);
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.questionDataType, " ");
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_23_ng_template_3_ng_template_27_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r8.columnOrderId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r8.columnOrderId);
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.columnOrderId, " ");
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "p-radioButton", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_23_ng_template_3_ng_template_31_Template_p_radioButton_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r66);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r8.isActiveInd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 40)(6, "p-radioButton", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_23_ng_template_3_ng_template_31_Template_p_radioButton_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r66);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r8.isActiveInd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r8.isActiveInd);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r8.isActiveInd);
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.isActiveInd, " ");
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 2)(1, "textarea", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_23_ng_template_3_ng_template_35_Template_textarea_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r73);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r8.possibleAnswers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "answers in pipe(|) separated format");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r8.possibleAnswers);
  }
}
function EntityComponent_p_table_23_ng_template_3_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r8.possibleAnswers, " ");
  }
}
function EntityComponent_p_table_23_ng_template_3_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_23_ng_template_3_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r76.onRowEditInit(product_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntityComponent_p_table_23_ng_template_3_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_23_ng_template_3_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r81);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r79.onRowEditSave(product_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntityComponent_p_table_23_ng_template_3_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_23_ng_template_3_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const product_r8 = ctx_r83.$implicit;
      const ri_r10 = ctx_r83.rowIndex;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r82.onRowEditCancel(product_r8, ri_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntityComponent_p_table_23_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28)(2, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EntityComponent_p_table_23_ng_template_3_ng_template_3_Template, 1, 1, "ng-template", 29)(4, EntityComponent_p_table_23_ng_template_3_ng_template_4_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 31)(6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, EntityComponent_p_table_23_ng_template_3_ng_template_7_Template, 1, 1, "ng-template", 29)(8, EntityComponent_p_table_23_ng_template_3_ng_template_8_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 31)(10, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EntityComponent_p_table_23_ng_template_3_ng_template_11_Template, 1, 1, "ng-template", 29)(12, EntityComponent_p_table_23_ng_template_3_ng_template_12_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 31)(14, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EntityComponent_p_table_23_ng_template_3_ng_template_15_Template, 1, 1, "ng-template", 29)(16, EntityComponent_p_table_23_ng_template_3_ng_template_16_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 31)(18, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EntityComponent_p_table_23_ng_template_3_ng_template_19_Template, 1, 1, "ng-template", 29)(20, EntityComponent_p_table_23_ng_template_3_ng_template_20_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 31)(22, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EntityComponent_p_table_23_ng_template_3_ng_template_23_Template, 1, 5, "ng-template", 29)(24, EntityComponent_p_table_23_ng_template_3_ng_template_24_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 31)(26, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, EntityComponent_p_table_23_ng_template_3_ng_template_27_Template, 1, 1, "ng-template", 29)(28, EntityComponent_p_table_23_ng_template_3_ng_template_28_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td", 31)(30, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, EntityComponent_p_table_23_ng_template_3_ng_template_31_Template, 9, 2, "ng-template", 29)(32, EntityComponent_p_table_23_ng_template_3_ng_template_32_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td", 31)(34, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, EntityComponent_p_table_23_ng_template_3_ng_template_35_Template, 4, 1, "ng-template", 29)(36, EntityComponent_p_table_23_ng_template_3_ng_template_36_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td", 28)(38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, EntityComponent_p_table_23_ng_template_3_button_39_Template, 1, 0, "button", 33)(40, EntityComponent_p_table_23_ng_template_3_button_40_Template, 1, 0, "button", 34)(41, EntityComponent_p_table_23_ng_template_3_button_41_Template, 1, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const editing_r9 = ctx.editing;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pEditableRow", product_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !editing_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", editing_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", editing_r9);
  }
}
const _c1 = () => ({
  "min-width": "50rem"
});
function EntityComponent_p_table_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EntityComponent_p_table_23_ng_template_1_Template, 7, 0, "ng-template", 12)(2, EntityComponent_p_table_23_ng_template_2_Template, 21, 0, "ng-template", 13)(3, EntityComponent_p_table_23_ng_template_3_Template, 42, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.bookingProducts)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
  }
}
function EntityComponent_p_table_24_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Vehicle Questionnaires");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_24_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r89);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r88.addQuestion("VEHICLE"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "em", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function EntityComponent_p_table_24_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 20)(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Question Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Question Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " version");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "DataType");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Order Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Possible Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.questionId, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.questionId, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_24_ng_template_3_ng_template_7_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r118);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r90.questionCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r90.questionCode);
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.questionCode, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_24_ng_template_3_ng_template_11_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r123);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r90.questionText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r90.questionText);
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.questionText, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_24_ng_template_3_ng_template_15_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r128);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r90.questionVersion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r90.questionVersion);
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.questionVersion, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_24_ng_template_3_ng_template_19_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r133);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r90.questionDesc = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r90.questionDesc);
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.questionDesc, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dropdown", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_24_ng_template_3_ng_template_23_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r138);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r90.questionDataType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r103.dataTypes)("ngModel", product_r90.questionDataType);
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.questionDataType, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_24_ng_template_3_ng_template_27_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r143);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r90.columnOrderId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r90.columnOrderId);
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.columnOrderId, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "p-radioButton", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_24_ng_template_3_ng_template_31_Template_p_radioButton_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r148);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r90.isActiveInd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 40)(6, "p-radioButton", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_24_ng_template_3_ng_template_31_Template_p_radioButton_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r148);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r90.isActiveInd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r90.isActiveInd);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r90.isActiveInd);
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.isActiveInd, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 2)(1, "textarea", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_24_ng_template_3_ng_template_35_Template_textarea_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r155);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r90.possibleAnswers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "answers in pipe(|) separated format");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r90.possibleAnswers);
  }
}
function EntityComponent_p_table_24_ng_template_3_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r90.possibleAnswers, " ");
  }
}
function EntityComponent_p_table_24_ng_template_3_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_24_ng_template_3_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r160);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r158.onRowEditInit(product_r90));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntityComponent_p_table_24_ng_template_3_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_24_ng_template_3_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r163);
      const product_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r161.onRowEditSave(product_r90));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntityComponent_p_table_24_ng_template_3_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_24_ng_template_3_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r166);
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const product_r90 = ctx_r165.$implicit;
      const ri_r92 = ctx_r165.rowIndex;
      const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r164.onRowEditCancel(product_r90, ri_r92));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntityComponent_p_table_24_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28)(2, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EntityComponent_p_table_24_ng_template_3_ng_template_3_Template, 1, 1, "ng-template", 29)(4, EntityComponent_p_table_24_ng_template_3_ng_template_4_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 31)(6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, EntityComponent_p_table_24_ng_template_3_ng_template_7_Template, 1, 1, "ng-template", 29)(8, EntityComponent_p_table_24_ng_template_3_ng_template_8_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 31)(10, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EntityComponent_p_table_24_ng_template_3_ng_template_11_Template, 1, 1, "ng-template", 29)(12, EntityComponent_p_table_24_ng_template_3_ng_template_12_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 31)(14, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EntityComponent_p_table_24_ng_template_3_ng_template_15_Template, 1, 1, "ng-template", 29)(16, EntityComponent_p_table_24_ng_template_3_ng_template_16_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 31)(18, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EntityComponent_p_table_24_ng_template_3_ng_template_19_Template, 1, 1, "ng-template", 29)(20, EntityComponent_p_table_24_ng_template_3_ng_template_20_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 31)(22, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EntityComponent_p_table_24_ng_template_3_ng_template_23_Template, 1, 5, "ng-template", 29)(24, EntityComponent_p_table_24_ng_template_3_ng_template_24_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 31)(26, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, EntityComponent_p_table_24_ng_template_3_ng_template_27_Template, 1, 1, "ng-template", 29)(28, EntityComponent_p_table_24_ng_template_3_ng_template_28_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td", 31)(30, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, EntityComponent_p_table_24_ng_template_3_ng_template_31_Template, 9, 2, "ng-template", 29)(32, EntityComponent_p_table_24_ng_template_3_ng_template_32_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td", 31)(34, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, EntityComponent_p_table_24_ng_template_3_ng_template_35_Template, 4, 1, "ng-template", 29)(36, EntityComponent_p_table_24_ng_template_3_ng_template_36_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td", 28)(38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, EntityComponent_p_table_24_ng_template_3_button_39_Template, 1, 0, "button", 33)(40, EntityComponent_p_table_24_ng_template_3_button_40_Template, 1, 0, "button", 34)(41, EntityComponent_p_table_24_ng_template_3_button_41_Template, 1, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r90 = ctx.$implicit;
    const editing_r91 = ctx.editing;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pEditableRow", product_r90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !editing_r91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", editing_r91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", editing_r91);
  }
}
function EntityComponent_p_table_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EntityComponent_p_table_24_ng_template_1_Template, 7, 0, "ng-template", 12)(2, EntityComponent_p_table_24_ng_template_2_Template, 21, 0, "ng-template", 13)(3, EntityComponent_p_table_24_ng_template_3_Template, 42, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.vehicleProducts)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
  }
}
function EntityComponent_p_table_25_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Driver Questionnaires");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_25_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r171);
      const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r170.addQuestion("DRIVER"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "em", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function EntityComponent_p_table_25_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 20)(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Question Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Question Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " version");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "DataType");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Order Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Possible Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.questionId, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.questionId, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_25_ng_template_3_ng_template_7_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r200);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r172.questionCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r172.questionCode);
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.questionCode, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r205 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_25_ng_template_3_ng_template_11_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r205);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r172.questionText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r172.questionText);
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.questionText, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_25_ng_template_3_ng_template_15_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r210);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r172.questionVersion = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r172.questionVersion);
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.questionVersion, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_25_ng_template_3_ng_template_19_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r215);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r172.questionDesc = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r172.questionDesc);
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.questionDesc, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-dropdown", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_25_ng_template_3_ng_template_23_Template_p_dropdown_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r220);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r172.questionDataType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r185.dataTypes)("ngModel", product_r172.questionDataType);
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.questionDataType, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_25_ng_template_3_ng_template_27_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r225);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r172.columnOrderId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r172.columnOrderId);
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.columnOrderId, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "p-radioButton", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_25_ng_template_3_ng_template_31_Template_p_radioButton_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r230);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r172.isActiveInd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 40)(6, "p-radioButton", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_25_ng_template_3_ng_template_31_Template_p_radioButton_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r230);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r172.isActiveInd = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r172.isActiveInd);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r172.isActiveInd);
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.isActiveInd, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 2)(1, "textarea", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_p_table_25_ng_template_3_ng_template_35_Template_textarea_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r237);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](product_r172.possibleAnswers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "answers in pipe(|) separated format");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", product_r172.possibleAnswers);
  }
}
function EntityComponent_p_table_25_ng_template_3_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r172.possibleAnswers, " ");
  }
}
function EntityComponent_p_table_25_ng_template_3_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_25_ng_template_3_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r242);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r240.onRowEditInit(product_r172));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntityComponent_p_table_25_ng_template_3_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_25_ng_template_3_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r245);
      const product_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r243.onRowEditSave(product_r172));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntityComponent_p_table_25_ng_template_3_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_p_table_25_ng_template_3_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r248);
      const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const product_r172 = ctx_r247.$implicit;
      const ri_r174 = ctx_r247.rowIndex;
      const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r246.onRowEditCancel(product_r172, ri_r174));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function EntityComponent_p_table_25_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 27)(1, "td", 28)(2, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EntityComponent_p_table_25_ng_template_3_ng_template_3_Template, 1, 1, "ng-template", 29)(4, EntityComponent_p_table_25_ng_template_3_ng_template_4_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 31)(6, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, EntityComponent_p_table_25_ng_template_3_ng_template_7_Template, 1, 1, "ng-template", 29)(8, EntityComponent_p_table_25_ng_template_3_ng_template_8_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 31)(10, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EntityComponent_p_table_25_ng_template_3_ng_template_11_Template, 1, 1, "ng-template", 29)(12, EntityComponent_p_table_25_ng_template_3_ng_template_12_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 31)(14, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EntityComponent_p_table_25_ng_template_3_ng_template_15_Template, 1, 1, "ng-template", 29)(16, EntityComponent_p_table_25_ng_template_3_ng_template_16_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 31)(18, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EntityComponent_p_table_25_ng_template_3_ng_template_19_Template, 1, 1, "ng-template", 29)(20, EntityComponent_p_table_25_ng_template_3_ng_template_20_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 31)(22, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EntityComponent_p_table_25_ng_template_3_ng_template_23_Template, 1, 5, "ng-template", 29)(24, EntityComponent_p_table_25_ng_template_3_ng_template_24_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 31)(26, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, EntityComponent_p_table_25_ng_template_3_ng_template_27_Template, 1, 1, "ng-template", 29)(28, EntityComponent_p_table_25_ng_template_3_ng_template_28_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td", 31)(30, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, EntityComponent_p_table_25_ng_template_3_ng_template_31_Template, 9, 2, "ng-template", 29)(32, EntityComponent_p_table_25_ng_template_3_ng_template_32_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td", 31)(34, "p-cellEditor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, EntityComponent_p_table_25_ng_template_3_ng_template_35_Template, 4, 1, "ng-template", 29)(36, EntityComponent_p_table_25_ng_template_3_ng_template_36_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td", 28)(38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, EntityComponent_p_table_25_ng_template_3_button_39_Template, 1, 0, "button", 33)(40, EntityComponent_p_table_25_ng_template_3_button_40_Template, 1, 0, "button", 34)(41, EntityComponent_p_table_25_ng_template_3_button_41_Template, 1, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r172 = ctx.$implicit;
    const editing_r173 = ctx.editing;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pEditableRow", product_r172);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !editing_r173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", editing_r173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", editing_r173);
  }
}
function EntityComponent_p_table_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EntityComponent_p_table_25_ng_template_1_Template, 7, 0, "ng-template", 12)(2, EntityComponent_p_table_25_ng_template_2_Template, 21, 0, "ng-template", 13)(3, EntityComponent_p_table_25_ng_template_3_Template, 42, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.driverProducts)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
  }
}
class EntityComponent {
  constructor(entityService, messageService, activatedRoute) {
    this.entityService = entityService;
    this.messageService = messageService;
    this.activatedRoute = activatedRoute;
    this.entity = new _model_entity__WEBPACK_IMPORTED_MODULE_0__.Entity();
    this.clonedProducts = {};
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedEntity = params['entityCode'];
      console.log(params['entityCode']);
    });
  }
  ngOnInit() {
    if (this.selectedEntity) this.getEntityDetails();else this.entity.entityCode = this.generateRandomEntityCode();
    this.dataTypes = [{
      label: 'Text',
      value: 'text'
    }, {
      label: 'Number',
      value: 'number'
    }, {
      label: 'Email',
      value: 'email'
    }, {
      label: 'Check Box',
      value: 'checkbox'
    }, {
      label: 'Dropdown',
      value: 'dropdown'
    }];
  }
  getEntityDetails() {
    this.entityService.getEntityDetails(this.selectedEntity).subscribe({
      next: res => {
        console.log(res);
        this.mapBookingData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  saveEntityDetails() {
    console.log(this.entity);
    if (!this.selectedEntity) this.entity.questions = [];
    this.entityService.saveEntityDetails(this.entity).subscribe({
      next: res => {
        console.log(res);
        this.selectedEntity = res['entityCode'];
        this.mapBookingData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  mapBookingData(res) {
    this.entity = res;
    if (this.entity.questions != undefined) {
      this.products = this.entity.questions.sort((a, b) => b.questionId - a.questionId);
      this.bookingProducts = this.products.filter(p => p.questionCategory === 'BOOKING');
      this.vehicleProducts = this.products.filter(p => p.questionCategory === 'VEHICLE');
      this.driverProducts = this.products.filter(p => p.questionCategory === 'DRIVER');
    }
  }
  addQuestion(type) {
    if (this.products == undefined) {
      this.products = new Array();
      this.bookingProducts = new Array();
      this.vehicleProducts = new Array();
      this.driverProducts = new Array();
      this.entity.questions = this.products;
    }
    var ques = new _model_QuestionnaireAnswer__WEBPACK_IMPORTED_MODULE_1__.QuestionnaireAnswer();
    const idArr = this.products.map(p => p.questionId);
    ques.questionId = idArr.length == 0 ? 1 : Math.max(...idArr) + 1;
    ques.questionDataType = 'text';
    ques.questionCategory = type;
    this.products.push(ques);
    if (type === 'BOOKING') {
      this.bookingProducts.push(ques);
      this.bookingProducts.sort((a, b) => b.questionId - a.questionId);
    } else if (type === 'VEHICLE') {
      this.vehicleProducts.push(ques);
      this.vehicleProducts.sort((a, b) => b.questionId - a.questionId);
    } else if (type === 'DRIVER') {
      this.driverProducts.push(ques);
      this.driverProducts.sort((a, b) => b.questionId - a.questionId);
    }
    // this.products.sort((a:any,b:any):any=>b.questionId-a.questionId)
    console.log(this.products);
  }
  onRowEditInit(question) {
    this.clonedProducts[question.questionId] = {
      ...question
    };
  }
  onRowEditSave(question) {
    if (question.questionCode != null) {
      this.saveEntityDetails();
      delete this.clonedProducts[question.questionId];
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Product is updated'
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid Price'
      });
    }
  }
  onRowEditCancel(question, index) {
    this.products[index] = this.clonedProducts[question.questionId];
    delete this.clonedProducts[question.questionId];
  }
  generateRandomEntityCode() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  static #_ = this.ɵfac = function EntityComponent_Factory(t) {
    return new (t || EntityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_entity_service_service__WEBPACK_IMPORTED_MODULE_2__.EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: EntityComponent,
    selectors: [["app-entity"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 26,
    vars: 7,
    consts: [[1, "table-card", "pt-5", "p-3"], [1, "flex", "flex-wrap", "justify-content-left", "gap-5"], [1, "p-float-label"], ["pInputText", "", "type", "text", "id", "name", "pTooltip", "Enter entity id?", "disabled", "", 3, "ngModel", "ngModelChange"], ["htmlFor", "name"], ["pInputText", "", "type", "text", "id", "type", "pTooltip", "Enter entity type?", 3, "ngModel", "ngModelChange"], ["htmlFor", "type"], ["pInputText", "", "type", "text", "id", "type", "pTooltip", "Enter entity owner?", 3, "ngModel", "ngModelChange"], ["pInputText", "", "type", "text", "id", "type", "pTooltip", "Enter entity name?", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"], ["dataKey", "questionId", "editMode", "row", 3, "value", "tableStyle", 4, "ngIf"], ["dataKey", "questionId", "editMode", "row", 3, "value", "tableStyle"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "row"], [1, "col-12"], [1, "float-start"], [1, "btn", "btn-sm", "btn-dark", "float-end", 3, "click"], [1, "pi", "pi-plus"], [1, "text-uppercase", "text-center"], ["pFrozenColumn", "", 2, "width", "5%"], [2, "width", "10%"], [2, "width", "15%"], [2, "width", "5%"], [2, "width", "20%"], ["pFrozenColumn", "", 2, "width", "10%"], [3, "pEditableRow"], ["pFrozenColumn", "", 1, "text-center"], ["pTemplate", "input"], ["pTemplate", "output"], [1, "text-center"], [1, "flex", "align-items-center", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", "class", "p-button-rounded p-button-text", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", "class", "p-button-rounded p-button-text p-button-success mr-2", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", "class", "p-button-rounded p-button-text p-button-danger", 3, "click", 4, "ngIf"], ["pInputText", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["pInputText", "", "type", "number", "required", "", 3, "ngModel", "ngModelChange"], ["appendTo", "body", 3, "options", "ngModel", "ngModelChange"], [1, "flex", "flex-wrap", "gap-3"], [1, "flex", "align-items-center"], ["name", "pizza", "value", "true", "inputId", "yesId", 3, "ngModel", "ngModelChange"], ["for", "yesId", 1, "ml-2"], ["name", "pizza", "value", "false", "inputId", "noId", 3, "ngModel", "ngModelChange"], ["for", "noId", 1, "ml-2"], ["id", "float-input", "rows", "5", "cols", "30", "pInputTextarea", "", 3, "ngModel", "ngModelChange"], ["for", "float-input"], ["pButton", "", "pRipple", "", "type", "button", "pInitEditableRow", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pSaveEditableRow", "", "icon", "pi pi-check", 1, "p-button-rounded", "p-button-text", "p-button-success", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "pCancelEditableRow", "", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-text", "p-button-danger", 3, "click"]],
    template: function EntityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2)(3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.entity.entityCode = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Entity Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 2)(7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.entity.entityType = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Entity Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 2)(11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.entity.entityDescription = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Entity Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 2)(15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EntityComponent_Template_input_ngModelChange_15_listener($event) {
          return ctx.entity.entityName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Entity Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div")(19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EntityComponent_Template_button_click_19_listener() {
          return ctx.saveEntityDetails();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EntityComponent_p_table_23_Template, 4, 3, "p-table", 10)(24, EntityComponent_p_table_24_Template, 4, 3, "p-table", 10)(25, EntityComponent_p_table_25_Template, 4, 3, "p-table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.entity.entityCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.entity.entityType);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.entity.entityDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.entity.entityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedEntity);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedEntity);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedEntity);
      }
    },
    dependencies: [primeng_table__WEBPACK_IMPORTED_MODULE_6__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.FrozenColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.CellEditor, primeng_table__WEBPACK_IMPORTED_MODULE_6__.EditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_6__.InitEditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SaveEditableRow, primeng_table__WEBPACK_IMPORTED_MODULE_6__.CancelEditableRow, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_speeddial__WEBPACK_IMPORTED_MODULE_8__.SpeedDialModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.Toast, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__.AutoCompleteModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButton, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.DropdownModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown, primeng_editor__WEBPACK_IMPORTED_MODULE_17__.EditorModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__.InputTextareaModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_18__.InputTextarea],
    styles: [".p-datatable .p-datatable-thead > tr > th {\n  color: #131314;\n  font-size: 14px !important;\n  border-bottom: 1px solid #efefef !important;\n  padding: 10px 3px;\n}\n\n  .p-datatable .p-datatable-tbody > tr > td {\n  font-size: 12px !important;\n  border-bottom: 1px solid #efefef !important;\n  padding: 10px 3px;\n}\n\n.table-card[_ngcontent-%COMP%] {\n  box-shadow: 1px 1px 5px 1px #a0a8ab;\n}\n\n.custom-filter-btn[_ngcontent-%COMP%]:hover {\n  color: #ffffff !important;\n  background-color: #6D5BD0 !important;\n}\n\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n[_nghost-%COMP%]     .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n\n[_nghost-%COMP%]     .speeddial-linear-demo .p-speeddial-direction-right {\n  left: 0;\n  top: calc(50% - 2rem);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdm1zLWNvbXBvbmVudHMvZW50aXR5L2VudGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0VBQ0EsMkNBQUE7RUFFQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUNBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7QUFHSjs7QUFDSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQUVSO0FBQVE7RUFDSSx5QkFBQTtBQUVaOztBQU1RO0VBQ0ksT0FBQTtFQUNBLHFCQUFBO0FBSFoiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGh7XG4gICAgY29sb3I6ICMxMzEzMTQ7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWYgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4IDNweDtcbn1cbjo6bmctZGVlcCAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZiAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VmZWZlZiAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggM3B4O1xufVxuLnRhYmxlLWNhcmR7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4ICNhMGE4YWI7XG59XG4uY3VzdG9tLWZpbHRlci1idG46aG92ZXJ7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ1QkQwICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gICAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgICBoZWlnaHQ6IC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDhEQURDO1xuICAgIFxuICAgICAgICAucC1wcm9ncmVzc2Jhci12YWx1ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICAgICAgICB9XG4gICAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAgIC5zcGVlZGRpYWwtbGluZWFyLWRlbW8ge1xuXG4gICAgICAgIC5wLXNwZWVkZGlhbC1kaXJlY3Rpb24tcmlnaHQge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAycmVtKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9097:
/*!*******************************************************!*\
  !*** ./src/app/vms-components/home/home.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HomeComponent {
  ngOnInit() {
    localStorage.setItem("isUserLoggedIn", "true");
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 44,
    vars: 0,
    consts: [["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide", "w-100"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "top-left"], ["src", "../../../assets/image1.webp", "height", "750", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], [1, "bottom-left"], ["src", "../../../assets/image2.jpg", "height", "750", "alt", "...", 1, "d-block", "w-100"], ["src", "../../../assets/image3.jpg", "height", "750", "alt", "...", 1, "d-block", "w-100"], ["src", "../../../assets/image4.jpeg", "height", "750", "alt", "...", 1, "d-block", "w-100"], ["src", "../../../assets/image5.jpeg", "height", "750", "alt", "...", 1, "d-block", "w-100"], ["src", "../../../assets/image6.jpeg", "height", "750", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "VMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your one stop solution !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Manage all your vehicles at a single place ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sit and relax !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5)(15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Explore nights with booking rides ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Sit and relax !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5)(21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fast paced solution for all you paper works ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sit and relax !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5)(27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Don't worry about your booking details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " We got you covered !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5)(33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Manage all your vehicles at a single place.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".top-left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 70px;\n  color: white;\n  font-size: 2.5rem;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.bottom-left[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  right: 70px;\n  color: white;\n  font-size: 2.5rem;\n  font-family: \"Times New Roman\", Times, serif;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdm1zLWNvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtbGVmdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHRvcDogNDBweDsgXG4gICAgbGVmdDogNzBweDsgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5ib3R0b20tbGVmdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGJvdHRvbTogNDBweDsgXG4gICAgcmlnaHQ6IDcwcHg7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1729:
/*!***********************************************************************!*\
  !*** ./src/app/vms-components/vehicle-form/vehicle-form.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VehicleFormComponent: () => (/* binding */ VehicleFormComponent)
/* harmony export */ });
/* harmony import */ var src_app_reusable_ru_form_ru_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/reusable/ru-form/ru-form.component */ 2405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vehicle-service.service */ 8493);



class VehicleFormComponent {
  constructor(_service, changeDetectorRef) {
    this._service = _service;
    this.changeDetectorRef = changeDetectorRef;
    this.pLoading = false;
    this.pOptionsMap = new Map();
  }
  ngOnInit() {
    this.getQuestionByEntityCode();
  }
  getQuestionByEntityCode() {
    this._service.getQuestionsByEntityCode('1').subscribe({
      next: res => {
        this.mapBookingData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  mapBookingData(res) {
    this.pData = res['data'];
    this.pData.forEach(element => {
      if (element.questionDataType === 'dropdown') {
        let options = [];
        element.possibleAnswers.split("|").forEach(e => options.push({
          label: e,
          value: e
        }));
        this.pOptionsMap.set(element['questionId'], options);
      }
    });
  }
  getPostData(queAns) {
    this._service.saveVehcileDetails(queAns).subscribe({
      next: res => {
        console.log("inside postdata prent: ", res);
        // this.pLoading = false;
        // this.changeDetectorRef.detectChanges();
      },
      error: err => {
        console.log(err);
        // this.pLoading = false;
      }
    });
  }
  static #_ = this.ɵfac = function VehicleFormComponent_Factory(t) {
    return new (t || VehicleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_1__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VehicleFormComponent,
    selectors: [["app-vehicle-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 3,
    consts: [[3, "data", "loading", "optionsMap", "postQuesAns"]],
    template: function VehicleFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-ru-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("postQuesAns", function VehicleFormComponent_Template_app_ru_form_postQuesAns_0_listener($event) {
          return ctx.getPostData($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.pData)("loading", ctx.pLoading)("optionsMap", ctx.pOptionsMap);
      }
    },
    dependencies: [src_app_reusable_ru_form_ru_form_component__WEBPACK_IMPORTED_MODULE_0__.RuFormComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8658:
/*!*************************************************************************!*\
  !*** ./src/app/vms-components/vehicle-table/vehicle-table.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VehicleTableComponent: () => (/* binding */ VehicleTableComponent)
/* harmony export */ });
/* harmony import */ var src_app_reusable_ru_table_ru_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/reusable/ru-table/ru-table.component */ 29);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/vehicle-service.service */ 8493);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 8026);




class VehicleTableComponent {
  constructor(_service, messageService) {
    this._service = _service;
    this.messageService = messageService;
    this.pFlag = false;
  }
  ngOnInit() {
    this.getVehicleDetails();
  }
  getVehicleDetails() {
    this._service.getVehicleDetailsByEntityCode('1').subscribe({
      next: res => {
        console.log(res);
        this.mapData(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  mapData(res) {
    this.pTableData = res['data'];
    this.pHeaders = this.pTableData[0];
    this.pTableData = this.pTableData.slice(1, this.pTableData.length);
    const n = this.pTableData.length;
    this.pFlag = true;
  }
  static #_ = this.ɵfac = function VehicleTableComponent_Factory(t) {
    return new (t || VehicleTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vehicle_service_service__WEBPACK_IMPORTED_MODULE_1__.VehicleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VehicleTableComponent,
    selectors: [["app-vehicle-table"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 3,
    consts: [[3, "tableData", "flag", "headers"]],
    template: function VehicleTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-ru-table", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableData", ctx.pTableData)("flag", ctx.pFlag)("headers", ctx.pHeaders);
      }
    },
    dependencies: [src_app_reusable_ru_table_ru_table_component__WEBPACK_IMPORTED_MODULE_0__.RuTableComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  authorize_uri: 'http://localhost:9000/oauth2/authorize?',
  client_id: 'vms-client',
  redirect_uri: 'http://localhost:4200/authorized',
  scope: 'openid profile',
  response_type: 'code',
  response_mode: 'form_post',
  code_challenge_method: 'S256',
  token_url: 'http://localhost:9000/oauth2/token',
  grant_type: 'authorization_code',
  resource_url: 'http://localhost:8080',
  logout_url: 'http://localhost:9000/logout',
  secret_pkce: 'secret'
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

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9548), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map