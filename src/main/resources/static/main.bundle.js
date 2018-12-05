webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-doctor/add-doctor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-patient-continer {\r\n    position: relative;\r\n    padding: 10px 20px;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-header {\r\n    display: block;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border-bottom: 2px dashed;\r\n    color: #2196f3;\r\n    margin-bottom: 10px;\r\n    margin-left: -20px;\r\n    margin-right: -20px;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.form-header label {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.add-patient-continer .form-group {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-label {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-input {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid #2196F3;\r\n    padding: 5px 10px;\r\n}\r\n.form-date-picker {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.remove-outline {\r\n    outline: 0;\r\n}\r\n\r\n.output-of-form {\r\n    color: #2196F3;\r\n}\r\n\r\n.btn-action-continer {\r\n    text-align: right;\r\n    margin-bottom: 50px;\r\n}\r\n.amss-btn {\r\n    border: 1px solid #fa8072;\r\n    padding: 5px 20px;\r\n    background-color: #E91E63;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-doctor/add-doctor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n  <label *ngIf=\"!docId\">add doctor</label>\r\n  <label *ngIf=\"docId\">edit doctor</label>\r\n</div>\r\n<div class=\"add-patient-continer\">\r\n  <form novalidate>\r\n    <div class=\"form-header\">\r\n      <label>Doctor Login Info</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Username</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"username\" name=\"username\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Email Id.</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"emailId\" name=\"email_id\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!docId\">\r\n      <label class=\"form-label\">Password</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"password\" name=\"password\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"!docId\">\r\n      <label class=\"form-label\">Confirm Password</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-header\">\r\n      <label>Doctor Info</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Name</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"docData.docName\" name=\"institutionName\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Phone 1</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"docData.docPhone1\" name=\"city\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Phone 2</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"docData.docPhone2\" name=\"institutionAddress\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Center</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"docData.docCenter\" name=\"phone\" type=\"text\" />\r\n    </div>\r\n    <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"message\" [class.show]=\"message\" [class.fade]=\"message\">\r\n      <button type=\"button\" class=\"close\" (click)=\"message = ''\">&times;</button>\r\n      {{message}}\r\n    </div>\r\n    <div class=\"btn-action-continer\">\r\n      <button type=\"button\" *ngIf=\"!docId\" class=\"amss-btn\" (click)=\"saveDoc()\">\r\n        <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Save</button>\r\n      <button type=\"button\" *ngIf=\"docId\" class=\"amss-btn\" (click)=\"editDoc()\">\r\n        <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Edit</button>\r\n      <button type=\"button\" class=\"amss-btn\" (click)=\"closeDoc()\">Close</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-doctor/add-doctor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDoctorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddDoctorComponent = (function () {
    function AddDoctorComponent(_userService) {
        this._userService = _userService;
        this.docData = {
            docName: "",
            docPhone1: "",
            docPhone2: "",
            docCenter: ""
        };
    }
    AddDoctorComponent.prototype.ngOnInit = function () {
    };
    AddDoctorComponent.prototype.closeDoc = function () {
    };
    AddDoctorComponent.prototype.saveDoc = function () {
        var _this = this;
        this.message = "";
        if (!this.username) {
            return this.message = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].USERNAME_NOT_FOUND;
        }
        if (this.username.length < 4) {
            return this.message = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].USERNAME_VALIDATION;
        }
        if (!this.emailId) {
            return this.message = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].EMAIL_NOT_FOUND;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailId))) {
            return this.message = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].EMAIL_INVALID;
        }
        if (!this.password) {
            return this.message = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PASSWORD_NOT_FOUND;
        }
        if (!this.confirmPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].CPASSWORD_NOT_FOUND;
        }
        if (this.password.length < 6) {
            return this.message = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PASSWORD_VALIDATION;
        }
        if (this.password !== this.confirmPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PP_CP_INVALID;
        }
        var data = {
            userName: this.username,
            userEmail: this.emailId,
            userPass: this.password,
            roleId: [4]
        };
        this.isLoading = true;
        this._userService.addUser(data).subscribe(function (success) {
            console.log(success);
            var id = success.message.split(":")[1].trim();
            _this.isLoading = false;
            _this.saveDoctorInfo();
        }, function (error) {
            _this.isLoading = false;
            console.log(error);
            _this.message = error.message;
        });
    };
    AddDoctorComponent.prototype.saveDoctorInfo = function () {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.docData));
        this._userService.addDoctor(data).subscribe(function (success) {
            console.log(success);
            _this._userService.triggerUpdateList();
        }, function (error) {
            console.log(error);
        });
    };
    AddDoctorComponent.prototype.editDoc = function () {
    };
    AddDoctorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-doctor',
            template: __webpack_require__("../../../../../src/app/add-doctor/add-doctor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-doctor/add-doctor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */]])
    ], AddDoctorComponent);
    return AddDoctorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-institution/add-institution.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-patient-continer {\r\n    position: relative;\r\n    padding: 10px 20px;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-header {\r\n    display: block;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border-bottom: 2px dashed;\r\n    color: #2196f3;\r\n    margin-bottom: 10px;\r\n    margin-left: -20px;\r\n    margin-right: -20px;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.form-header label {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.add-patient-continer .form-group {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-label {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-input {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid #2196F3;\r\n    padding: 5px 10px;\r\n}\r\n.form-date-picker {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.remove-outline {\r\n    outline: 0;\r\n}\r\n\r\n.output-of-form {\r\n    color: #2196F3;\r\n}\r\n\r\n.btn-action-continer {\r\n    text-align: right;\r\n    margin-bottom: 50px;\r\n}\r\n.amss-btn {\r\n    border: 1px solid #fa8072;\r\n    padding: 5px 20px;\r\n    background-color: #E91E63;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-institution/add-institution.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n  <label *ngIf=\"!instId\">add institution</label>\r\n  <label *ngIf=\"instId\">edit institution</label>\r\n</div>\r\n<div class=\"add-patient-continer\">\r\n  <form novalidate>\r\n    <div class=\"form-header\">\r\n      <label>Institution Info</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Name</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"institutionName\" name=\"institutionName\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">City</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"city\" name=\"city\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Address</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"institutionAddress\" name=\"institutionAddress\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Phone</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"phone\" name=\"phone\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Point of contact</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"pointOfContact\" name=\"pointOfContact\" type=\"text\" />\r\n    </div>\r\n    <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"message\" [class.show]=\"message\" [class.fade]=\"message\">\r\n      <button type=\"button\" class=\"close\" (click)=\"message = ''\">&times;</button>\r\n      {{message}}\r\n    </div>\r\n    <div class=\"btn-action-continer\">\r\n      <button type=\"button\" *ngIf=\"!instId\" class=\"amss-btn\" (click)=\"saveInst()\">\r\n        <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Save</button>\r\n      <button type=\"button\" *ngIf=\"instId\" class=\"amss-btn\" (click)=\"editInst()\">\r\n        <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Edit</button>\r\n      <button type=\"button\" class=\"amss-btn\" (click)=\"closeInst()\">Close</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-institution/add-institution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddInstitutionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddInstitutionComponent = (function () {
    function AddInstitutionComponent(_instService, modalService) {
        this._instService = _instService;
        this.modalService = modalService;
    }
    AddInstitutionComponent.prototype.ngOnInit = function () {
        var selectedInst = localStorage.getItem("selectedInst");
        if (selectedInst) {
            var instSelected = JSON.parse(selectedInst);
            this.institutionName = instSelected.institutionName;
            this.city = instSelected.city;
            this.institutionAddress = instSelected.institutionAddress;
            this.phone = instSelected.phone;
            this.pointOfContact = instSelected.pointOfContact;
            this.message = instSelected.message;
        }
    };
    AddInstitutionComponent.prototype.closeInst = function () {
        var data = {
            isShow: false,
            component: ""
        };
        this.modalService.setModal(data);
        localStorage.setItem("selectedInst", "");
    };
    AddInstitutionComponent.prototype.editInst = function () {
    };
    AddInstitutionComponent.prototype.saveInst = function () {
        var _this = this;
        var data = {
            institutionName: this.institutionName,
            city: this.city,
            institutionAddress: this.institutionAddress,
            phone: this.phone,
            pointOfContact: this.pointOfContact
        };
        this._instService.addInstitution(data).subscribe(function (success) {
            console.log(success);
            _this._instService.triggerUpdateList();
        }, function (error) {
            _this.message = error.message;
        });
    };
    AddInstitutionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-institution',
            template: __webpack_require__("../../../../../src/app/add-institution/add-institution.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-institution/add-institution.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */]])
    ], AddInstitutionComponent);
    return AddInstitutionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-patient/add-patient.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-patient-continer {\r\n    position: relative;\r\n    padding: 10px 20px;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-header {\r\n    display: block;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border-bottom: 2px dashed;\r\n    color: #2196f3;\r\n    margin-bottom: 10px;\r\n    margin-left: -20px;\r\n    margin-right: -20px;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.form-header label {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.add-patient-continer .form-group {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-label {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-input {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid #2196F3;\r\n    padding: 5px 10px;\r\n}\r\n.form-date-picker {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.remove-outline {\r\n    outline: 0;\r\n}\r\n\r\n.output-of-form {\r\n    color: #2196F3;\r\n}\r\n\r\n.btn-action-continer {\r\n    text-align: right;\r\n    margin-bottom: 50px;\r\n}\r\n.amss-btn {\r\n    border: 1px solid #fa8072;\r\n    padding: 5px 20px;\r\n    background-color: #E91E63;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-patient/add-patient.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n    <label *ngIf=\"!patientModel.patientId\">add patient</label>\r\n    <label *ngIf=\"patientModel.patientId\">edit patient</label>\r\n</div>\r\n<div class=\"add-patient-continer\">\r\n    <form novalidate>\r\n        <div class=\"form-header\">\r\n            <label>Patient Login Info</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Username</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"username\" name=\"username\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Email Id.</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.email_id\" name=\"email_id\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"!patientModel.patientId\">\r\n            <label class=\"form-label\">Password</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"password\" name=\"password\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"!patientModel.patientId\">\r\n            <label class=\"form-label\">Confirm Password</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-header\">\r\n            <label>Patient Info</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Institution File No.</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.institutionsFileNo\" name=\"institutionsFileNo\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">First Name</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.childFirstName\" name=\"childFirstName\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Last Name</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.childLastName\" name=\"childLastName\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Date Of Birth\r\n                <span *ngIf=\"patientModel.dateOfBirth\">-\r\n                    <span class=\"output-of-form\">{{patientModel.dateOfBirth.day}}/{{patientModel.dateOfBirth.month}}/{{patientModel.dateOfBirth.year}}</span>\r\n                </span>\r\n            </label>\r\n            <div class=\"form-date-picker\">\r\n                <ngb-datepicker class=\"remove-outline\" #dp [(ngModel)]=\"patientModel.dateOfBirth\" name=\"childDob\"></ngb-datepicker>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Belongs To Institution</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.childBelongsToInstitution\" name=\"childBelongsToInstitution\" type=\"text\"\r\n            />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Service Type</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.serviceType\" name=\"serviceType\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">File No</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.fileNo\" name=\"fileNo\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Guardian Name</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.patientGuardianName\" name=\"patientGuardianName\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Gender</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.gender\" name=\"gender\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Contact No.</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.primary_contact_no\" name=\"primary_contact_no\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Address</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.address\" name=\"address\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">City</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.city\" name=\"city\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Province</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.province\" name=\"province\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Zip Code</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"patientModel.zip\" name=\"zip\" type=\"text\" />\r\n        </div>\r\n        <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"message\" [class.show]=\"message\" [class.fade]=\"message\">\r\n            <button type=\"button\" class=\"close\" (click)=\"message = ''\">&times;</button>\r\n            {{message}}\r\n        </div>\r\n        <div class=\"btn-action-continer\">\r\n            <button type=\"button\" *ngIf=\"!patientModel.patientId\" class=\"amss-btn\" (click)=\"savePatient()\">\r\n                <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Save</button>\r\n            <button type=\"button\" *ngIf=\"patientModel.patientId\" class=\"amss-btn\" (click)=\"editPatient()\">\r\n                <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Edit</button>\r\n            <button type=\"button\" class=\"amss-btn\" (click)=\"closePatient()\">Close</button>\r\n        </div>\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-patient/add-patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_patient_service__ = __webpack_require__("../../../../../src/app/add-patient/add-patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_patient_service__ = __webpack_require__("../../../../../src/app/patient/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPatientComponent = (function () {
    function AddPatientComponent(_patientAddService, _patientService, _userService, loginService, modalService) {
        this._patientAddService = _patientAddService;
        this._patientService = _patientService;
        this._userService = _userService;
        this.loginService = loginService;
        this.modalService = modalService;
        this.initData();
    }
    AddPatientComponent.prototype.ngOnDestroy = function () {
        this.patientSubscription.unsubscribe();
    };
    AddPatientComponent.prototype.initData = function () {
        this.patientModel = {
            patientId: null,
            institutionsFileNo: "",
            childFirstName: "",
            childLastName: "",
            childDob: "",
            dateOfBirth: {
                day: new Date().getDate(),
                month: new Date().getMonth(),
                year: new Date().getFullYear()
            },
            childBelongsToInstitution: 1,
            enteredBy: "",
            serviceType: 1,
            fileNo: "",
            patientGuardianName: "",
            gender: "",
            age: "",
            primary_contact_no: "",
            email_id: "",
            address: "",
            city: "",
            province: "",
            zip: "",
            alt_con_no_1: "",
            alt_con_no_2: ""
        };
    };
    AddPatientComponent.prototype.ngOnInit = function () {
        var selectedPatient = localStorage.getItem("selectedPatient");
        if (selectedPatient) {
            this.patientModel = JSON.parse(selectedPatient);
            var dateSplit = this.patientModel.childDob.split("-");
            this.patientModel.dateOfBirth = {
                day: parseInt(dateSplit[0]),
                month: parseInt(dateSplit[1]),
                year: parseInt(dateSplit[2])
            };
        }
    };
    AddPatientComponent.prototype.closePatient = function () {
        var data = {
            isShow: false,
            component: ""
        };
        this.modalService.setModal(data);
        localStorage.setItem("selectedPatient", "");
    };
    AddPatientComponent.prototype.savePatient = function () {
        var _this = this;
        this.message = "";
        if (!this.username) {
            return this.message = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].USERNAME_NOT_FOUND;
        }
        if (this.username.length < 4) {
            return this.message = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].USERNAME_VALIDATION;
        }
        if (!this.patientModel.email_id) {
            return this.message = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].EMAIL_NOT_FOUND;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.patientModel.email_id))) {
            return this.message = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].EMAIL_INVALID;
        }
        if (!this.password) {
            return this.message = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PASSWORD_NOT_FOUND;
        }
        if (!this.confirmPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].CPASSWORD_NOT_FOUND;
        }
        if (this.password.length < 6) {
            return this.message = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PASSWORD_VALIDATION;
        }
        if (this.password !== this.confirmPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PP_CP_INVALID;
        }
        var data = {
            userName: this.username,
            userEmail: this.patientModel.email_id,
            userPass: this.password,
            roleId: [5]
        };
        this.isLoading = true;
        this._userService.addUser(data).subscribe(function (success) {
            console.log(success);
            _this.isLoading = false;
            _this.patientModel.userId = parseInt(success.message.split(":")[1].trim());
            _this.savePatientInfo();
        }, function (error) {
            _this.isLoading = false;
            console.log(error);
            _this.message = error.message;
        });
    };
    AddPatientComponent.prototype.savePatientInfo = function () {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.patientModel));
        data.childDob = this.patientModel.dateOfBirth.day + "-" + this.patientModel.dateOfBirth.month + "-" + this.patientModel.dateOfBirth.year;
        this._patientAddService.addPatient(data).subscribe(function (success) {
            console.log(success);
            _this._patientService.triggerPatientUpdateList();
        }, function (error) {
            console.log(error);
        });
    };
    AddPatientComponent.prototype.editPatient = function () {
        var _this = this;
        var data = JSON.parse(JSON.stringify(this.patientModel));
        data.childDob = this.patientModel.dateOfBirth.day + "-" + this.patientModel.dateOfBirth.month + "-" + this.patientModel.dateOfBirth.year;
        this._patientAddService.editPatient(data).subscribe(function (success) {
            console.log(success);
            _this._patientService.triggerPatientUpdateList();
        }, function (error) {
            console.log(error);
        });
    };
    AddPatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-patient',
            template: __webpack_require__("../../../../../src/app/add-patient/add-patient.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-patient/add-patient.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__add_patient_service__["a" /* AddPatientService */],
            __WEBPACK_IMPORTED_MODULE_3__patient_patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_6__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */]])
    ], AddPatientComponent);
    return AddPatientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-patient/add-patient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPatientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_helper_service__ = __webpack_require__("../../../../../src/app/http-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPatientService = (function () {
    function AddPatientService(http) {
        this.http = http;
    }
    AddPatientService.prototype.addPatient = function (requestBody) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ADD_PATIENT, requestBody);
    };
    AddPatientService.prototype.editPatient = function (requestBody) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_EDIT_PATIENT + "/" + requestBody.patientId, requestBody);
    };
    AddPatientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_helper_service__["a" /* HttpHelperService */]])
    ], AddPatientService);
    return AddPatientService;
}());



/***/ }),

/***/ "../../../../../src/app/add-single-intervention/add-single-intervention.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-patient-continer {\r\n    position: relative;\r\n    padding: 10px 20px;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-header {\r\n    display: block;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border-bottom: 2px dashed;\r\n    color: #2196f3;\r\n    margin-bottom: 10px;\r\n    margin-left: -20px;\r\n    margin-right: -20px;\r\n    padding: 5px 10px;\r\n}\r\n.add-treatement  {\r\n    border: 0;\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    margin-left: 10px;\r\n    font-size: 12px;\r\n    padding: 2px 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-header label {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.add-patient-continer .form-group {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-label {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-input {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid #2196F3;\r\n    padding: 5px 10px;\r\n}\r\n.form-date-picker {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.remove-outline {\r\n    outline: 0;\r\n}\r\n\r\n.output-of-form {\r\n    color: #2196F3;\r\n}\r\n\r\n.btn-action-continer {\r\n    text-align: right;\r\n    margin-bottom: 50px;\r\n}\r\n.amss-btn {\r\n    border: 1px solid #fa8072;\r\n    padding: 5px 20px;\r\n    background-color: #E91E63;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.pro-header-title {\r\n    float: left;\r\n    margin-left: 20px;\r\n    font-family: 'Merriweather', serif;\r\n    font-size: 15px;\r\n    padding: 20px 10px;\r\n    color: #F5F5F5;\r\n    cursor: pointer;\r\n}\r\n\r\n.pro-header-title label {\r\n    line-height: 0;\r\n    cursor: pointer; \r\n}\r\n\r\n.menu-bar {\r\n    float: left;\r\n    color: #F5F5F5;\r\n    font-size: 30px;\r\n    cursor: pointer;\r\n    padding: 8px 10px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.modal-dialog {\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n    height: 100%;\r\n}\r\n\r\n.modal-body {\r\n    height: 100%;\r\n    overflow: auto;\r\n    padding: 0;\r\n}\r\n\r\n.modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.modal {\r\n    display: block;\r\n    height: 0;\r\n    opacity: 0;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-open {\r\n    height: 100%;\r\n    opacity: 1;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-header {\r\n    padding: 0;\r\n    overflow: hidden;\r\n    min-height: 60px;\r\n    -ms-flex-pack: left;\r\n        justify-content: left;\r\n    color: #2196F3;\r\n}\r\n\r\n.modal-header .menu-bar {\r\n    color: #2196F3;\r\n}\r\n\r\n.modal-header .close {\r\n    margin: 0;\r\n}\r\n\r\n.modal-footer {\r\n    display: none;\r\n}\r\n\r\n.modal-header .pro-header-title {\r\n    color: #2196F3;\r\n    margin-left: 31px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-single-intervention/add-single-intervention.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n  <label *ngIf=\"!sInterId\">add single intervention</label>\r\n  <label *ngIf=\"sInterId\">edit single intervention</label>\r\n</div>\r\n<div class=\"add-patient-continer\">\r\n  <form novalidate>\r\n    <div class=\"form-header\">\r\n      <label>Single Intervention Info</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Date Of Admission\r\n        <span *ngIf=\"sInterData.admissionDate\">-\r\n          <span class=\"output-of-form\">{{sInterData.admissionDate.day}}/{{sInterData.admissionDate.month}}/{{sInterData.admissionDate.year}}</span>\r\n        </span>\r\n      </label>\r\n      <div class=\"form-date-picker\">\r\n        <ngb-datepicker class=\"remove-outline\" #dp [(ngModel)]=\"sInterData.admisionDt\" name=\"childDob\"></ngb-datepicker>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Intervention Date\r\n        <span *ngIf=\"sInterData.interventionDate\">-\r\n          <span class=\"output-of-form\">{{sInterData.interventionDate.day}}/{{sInterData.interventionDate.month}}/{{sInterData.interventionDate.year}}</span>\r\n        </span>\r\n      </label>\r\n      <div class=\"form-date-picker\">\r\n        <ngb-datepicker class=\"remove-outline\" #dp [(ngModel)]=\"sInterData.intvDt\" name=\"intvDt\"></ngb-datepicker>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Discharge Date\r\n        <span *ngIf=\"sInterData.dischargeDate\">-\r\n          <span class=\"output-of-form\">{{sInterData.dischargeDate.day}}/{{sInterData.dischargeDate.month}}/{{sInterData.dischargeDate.year}}</span>\r\n        </span>\r\n      </label>\r\n      <div class=\"form-date-picker\">\r\n        <ngb-datepicker class=\"remove-outline\" #dp [(ngModel)]=\"sInterData.dischrgDt\" name=\"dischrgDt\"></ngb-datepicker>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Patient Height</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"sInterData.patientHt\" name=\"patientheight\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Patient Weight</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"sInterData.patientWght\" name=\"patientWght\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Anastasiya Name</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"sInterData.anasthNm\" name=\"anasthNm\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Anastasiya Method</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"sInterData.anasthNm\" name=\"anasthMethod\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Operation Type</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"sInterData.operationType\" name=\"operationType\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Complication Info</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"sInterData.complicationInfo\" name=\"complicationInfo\" type=\"text\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"form-label\">Treatment Comments</label>\r\n      <input class=\"form-input\" [(ngModel)]=\"sInterData.treatmentComments\" name=\"treatmentComments\" type=\"text\" />\r\n    </div>\r\n    <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"message\" [class.show]=\"message\" [class.fade]=\"message\">\r\n      <button type=\"button\" class=\"close\" (click)=\"message = ''\">&times;</button>\r\n      {{message}}\r\n    </div>\r\n    <div class=\"btn-action-continer\">\r\n      <button type=\"button\" *ngIf=\"!sInterId\" class=\"amss-btn\" (click)=\"saveSingleInter()\">\r\n        <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Save</button>\r\n      <button type=\"button\" *ngIf=\"sInterId\" class=\"amss-btn\" (click)=\"editSingleInter()\">\r\n        <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Edit</button>\r\n      <button type=\"button\" class=\"amss-btn\" (click)=\"closeInter()\">Close</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-single-intervention/add-single-intervention.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSingleInterventionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddSingleInterventionComponent = (function () {
    function AddSingleInterventionComponent() {
        this.sInterData = {};
        this.closePopup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AddSingleInterventionComponent.prototype.ngOnInit = function () {
    };
    AddSingleInterventionComponent.prototype.saveSingleInter = function () {
    };
    AddSingleInterventionComponent.prototype.editSingleInter = function () {
    };
    AddSingleInterventionComponent.prototype.closeInter = function () {
        this.closePopup.emit("true");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])("closePopup"),
        __metadata("design:type", Object)
    ], AddSingleInterventionComponent.prototype, "closePopup", void 0);
    AddSingleInterventionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-single-intervention',
            template: __webpack_require__("../../../../../src/app/add-single-intervention/add-single-intervention.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-single-intervention/add-single-intervention.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddSingleInterventionComponent);
    return AddSingleInterventionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-treatment-history/add-treatment-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-patient-continer {\r\n    position: relative;\r\n    padding: 10px 20px;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-header {\r\n    display: block;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border-bottom: 2px dashed;\r\n    color: #2196f3;\r\n    margin-bottom: 10px;\r\n    margin-left: -20px;\r\n    margin-right: -20px;\r\n    padding: 5px 10px;\r\n}\r\n.add-treatement  {\r\n    border: 0;\r\n    background-color: #007bff;\r\n    color: #fff;\r\n    margin-left: 10px;\r\n    font-size: 12px;\r\n    padding: 2px 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-header label {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.add-patient-continer .form-group {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-label {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-input {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid #2196F3;\r\n    padding: 5px 10px;\r\n}\r\n.form-date-picker {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.remove-outline {\r\n    outline: 0;\r\n}\r\n\r\n.output-of-form {\r\n    color: #2196F3;\r\n}\r\n\r\n.btn-action-continer {\r\n    text-align: right;\r\n    margin-bottom: 50px;\r\n}\r\n.amss-btn {\r\n    border: 1px solid #fa8072;\r\n    padding: 5px 20px;\r\n    background-color: #E91E63;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.pro-header-title {\r\n    float: left;\r\n    margin-left: 20px;\r\n    font-family: 'Merriweather', serif;\r\n    font-size: 15px;\r\n    padding: 20px 10px;\r\n    color: #F5F5F5;\r\n    cursor: pointer;\r\n}\r\n\r\n.pro-header-title label {\r\n    line-height: 0;\r\n    cursor: pointer; \r\n}\r\n\r\n.menu-bar {\r\n    float: left;\r\n    color: #F5F5F5;\r\n    font-size: 30px;\r\n    cursor: pointer;\r\n    padding: 8px 10px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.modal-dialog {\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n    height: 100%;\r\n}\r\n\r\n.modal-body {\r\n    height: 100%;\r\n    overflow: auto;\r\n    padding: 0;\r\n}\r\n\r\n.modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.modal {\r\n    display: block;\r\n    height: 0;\r\n    opacity: 0;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-open {\r\n    height: 100%;\r\n    opacity: 1;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-header {\r\n    padding: 0;\r\n    overflow: hidden;\r\n    min-height: 60px;\r\n    -ms-flex-pack: left;\r\n        justify-content: left;\r\n    color: #2196F3;\r\n}\r\n\r\n.modal-header .menu-bar {\r\n    color: #2196F3;\r\n}\r\n\r\n.modal-header .close {\r\n    margin: 0;\r\n}\r\n\r\n.modal-footer {\r\n    display: none;\r\n}\r\n\r\n.modal-header .pro-header-title {\r\n    color: #2196F3;\r\n    margin-left: 31px;\r\n}\r\n\r\n.treatment-item {\r\n    border: 2px solid #2196f3;\r\n    margin-bottom: 10px;\r\n    padding: 10px;\r\n    font-weight: bolder;\r\n    position: relative;\r\n}\r\n\r\n.treatment-item .action-btn {\r\n    float: right;\r\n    color: #e91e63;\r\n    font-size: 20px;\r\n}\r\n\r\n.tre-btn-act {\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.count-btn {\r\n    cursor: pointer;\r\n    background-color: #E91E63;\r\n    position: absolute;\r\n    top: 13px;\r\n    right: 48px;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    border-radius: 100%;\r\n    line-height: 21px;\r\n    padding: 0 4px;\r\n    font-weight: bold;\r\n    min-width: 22px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-treatment-history/add-treatment-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n    <label *ngIf=\"!treatmentId\">add treatment history</label>\r\n    <label *ngIf=\"treatmentId\">edit treatment history</label>\r\n</div>\r\n<div class=\"add-patient-continer\">\r\n    <form novalidate>\r\n        <div class=\"form-header\">\r\n            <label>Treatment History</label>\r\n        </div>\r\n        <div class=\"treatment-item\">\r\n            Single Intervention Info\r\n            <span class=\"action-btn\">\r\n                <span class=\"count-btn\">\r\n                    8\r\n                </span>\r\n                <span class=\"tre-btn-act\" (click)=\"openIntervention()\">\r\n                    <i class=\"fas fa-plus-circle\"></i>\r\n                </span>\r\n            </span>\r\n        </div>\r\n        <div class=\"treatment-item\">\r\n            Double Intervention Info\r\n            <span class=\"action-btn\">\r\n                <span class=\"count-btn\">\r\n                    5\r\n                </span>\r\n                <span class=\"tre-btn-act\">\r\n                    <i class=\"fas fa-plus-circle\"></i>\r\n                </span>\r\n            </span>\r\n        </div>\r\n        <div class=\"treatment-item\">\r\n            ENT Info\r\n            <span class=\"action-btn\">\r\n                <span class=\"count-btn\">\r\n                    1\r\n                </span>\r\n                <span class=\"tre-btn-act\">\r\n                    <i class=\"fas fa-plus-circle\"></i>\r\n                </span>\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"treatment-item\">\r\n            SPT Info\r\n            <span class=\"action-btn\">\r\n                <span class=\"count-btn\">\r\n                    0\r\n                </span>\r\n                <span class=\"tre-btn-act\">\r\n                    <i class=\"fas fa-plus-circle\"></i>\r\n                </span>\r\n            </span>\r\n        </div>\r\n        <!-- <div class=\"form-header\">\r\n            <label>Single Intervention Info</label>\r\n            <button class=\"add-treatement\" (click)=\"openIntervention()\">\r\n                <i class=\"fas fa-plus\"></i>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"form-header\">\r\n            <label>Double Intervention Info</label>\r\n            <button class=\"add-treatement\">\r\n                <i class=\"fas fa-plus\"></i>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"form-header\">\r\n            <label>ENT INFO</label>\r\n            <button class=\"add-treatement\">\r\n                <i class=\"fas fa-plus\"></i>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"form-header\">\r\n            <label>SPT INFO</label>\r\n            <button class=\"add-treatement\">\r\n                <i class=\"fas fa-plus\"></i>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"form-header\">\r\n            <label>Single Intervention Info</label>\r\n            <button class=\"add-treatement\">\r\n                <i class=\"fas fa-plus\"></i>\r\n            </button>\r\n        </div> -->\r\n\r\n        <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"message\" [class.show]=\"message\" [class.fade]=\"message\">\r\n            <button type=\"button\" class=\"close\" (click)=\"message = ''\">&times;</button>\r\n            {{message}}\r\n        </div>\r\n        <!-- <div class=\"btn-action-continer\">\r\n            <button type=\"button\" *ngIf=\"!patientModel.patientId\" class=\"amss-btn\" (click)=\"savePatient()\">\r\n                <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Save</button>\r\n            <button type=\"button\" *ngIf=\"patientModel.patientId\" class=\"amss-btn\" (click)=\"editPatient()\">\r\n                <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Edit</button>\r\n            <button type=\"button\" class=\"amss-btn\" (click)=\"closePatient()\">Close</button>\r\n        </div> -->\r\n\r\n    </form>\r\n</div>\r\n\r\n<div #commonModal class=\"modal\" [class.modal-open]=\"isShow\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <div class=\"menu-bar\" (click)=\"closeModal()\">\r\n                    <i class=\"fas fa-angle-left\"></i>\r\n                </div>\r\n                <div class=\"pro-header-title\">\r\n                    <label>ABMSS</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <app-add-single-intervention (closePopup)=\"closepopup($event)\"></app-add-single-intervention>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Add Patient</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-treatment-history/add-treatment-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTreatmentHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddTreatmentHistoryComponent = (function () {
    function AddTreatmentHistoryComponent() {
        this.treatmentHistory = {};
    }
    AddTreatmentHistoryComponent.prototype.ngOnInit = function () {
    };
    AddTreatmentHistoryComponent.prototype.closeModal = function () {
        this.isShow = false;
    };
    AddTreatmentHistoryComponent.prototype.openIntervention = function () {
        this.isShow = true;
    };
    AddTreatmentHistoryComponent.prototype.closepopup = function (e) {
        this.isShow = false;
    };
    AddTreatmentHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-treatment-history',
            template: __webpack_require__("../../../../../src/app/add-treatment-history/add-treatment-history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-treatment-history/add-treatment-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddTreatmentHistoryComponent);
    return AddTreatmentHistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-users/add-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-patient-continer {\r\n    position: relative;\r\n    padding: 10px 20px;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-header {\r\n    display: block;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border-bottom: 2px dashed;\r\n    color: #2196f3;\r\n    margin-bottom: 10px;\r\n    margin-left: -20px;\r\n    margin-right: -20px;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.form-header label {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.add-patient-continer .form-group {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-label {\r\n    display: block;\r\n}\r\n\r\n.add-patient-continer .form-group .form-input {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid #2196F3;\r\n    padding: 5px 10px;\r\n}\r\n.form-date-picker {\r\n    margin: 0 auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.remove-outline {\r\n    outline: 0;\r\n}\r\n\r\n.output-of-form {\r\n    color: #2196F3;\r\n}\r\n\r\n.btn-action-continer {\r\n    text-align: right;\r\n    margin-bottom: 50px;\r\n}\r\n.amss-btn {\r\n    border: 1px solid #fa8072;\r\n    padding: 5px 20px;\r\n    background-color: #E91E63;\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-users/add-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n    <label *ngIf=\"!userId\">add user</label>\r\n    <label *ngIf=\"userId\">edit user</label>\r\n</div>\r\n<div class=\"add-patient-continer\">\r\n    <form novalidate>\r\n        <div class=\"form-header\">\r\n            <label>Login Info</label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Username</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"username\" name=\"username\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Email Id.</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"email\" name=\"email_id\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Role</label>\r\n            <div *ngFor=\"let roleItem of roleList; let i = index;\">\r\n                <div *ngIf=\"roleItem.role !== 'ROLE_USER' && roleItem.role !== 'ROLE_DOCTOR'\">\r\n                    <input type=\"checkbox\" id={{i}} name=\"role+{{i}}\" value=\"{{roleItem.id}}\" (change)=\"updateRole(roleItem.id, $event)\" checked\r\n                        *ngIf=\"roleId.indexOf(roleItem.id) !== -1\" />\r\n                    <input type=\"checkbox\" id={{i}} name=\"role+{{i}}\" value=\"{{roleItem.id}}\" (change)=\"updateRole(roleItem.id, $event)\" *ngIf=\"roleId.indexOf(roleItem.id) === -1\"\r\n                    />\r\n                    <label for={{i}}>{{roleItem.role}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Password</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"password\" name=\"password\" type=\"text\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Confirm Password</label>\r\n            <input class=\"form-input\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" type=\"text\" />\r\n        </div>\r\n        <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"message\" [class.show]=\"message\" [class.fade]=\"message\">\r\n            <button type=\"button\" class=\"close\" (click)=\"message = ''\">&times;</button>\r\n            {{message}}\r\n        </div>\r\n        <div class=\"btn-action-continer\">\r\n            <button type=\"button\" *ngIf=\"!userId\" class=\"amss-btn\" (click)=\"saveUser()\">\r\n                <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Save</button>\r\n            <button type=\"button\" *ngIf=\"userId\" class=\"amss-btn\" (click)=\"editUser()\">\r\n                <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i> Edit</button>\r\n            <button type=\"button\" class=\"amss-btn\" (click)=\"closeUser()\">Close</button>\r\n        </div>\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-users/add-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUsersComponent = (function () {
    function AddUsersComponent(_userService, modalService) {
        this._userService = _userService;
        this.modalService = modalService;
        this.roleId = [1];
        this.roleList = JSON.parse(localStorage.getItem("roles"));
    }
    AddUsersComponent.prototype.ngOnInit = function () {
    };
    AddUsersComponent.prototype.updateRole = function (roleId, e) {
        if (e.target.checked && this.roleId.indexOf(roleId) === -1) {
            this.roleId.push(roleId);
        }
        else if (this.roleId.indexOf(roleId) !== -1) {
            var removeIndex = this.roleId.indexOf(roleId);
            this.roleId.splice(removeIndex, 1);
        }
    };
    AddUsersComponent.prototype.saveUser = function () {
        var _this = this;
        this.message = "";
        if (!this.username) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USERNAME_NOT_FOUND;
        }
        if (this.username.length < 4) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USERNAME_VALIDATION;
        }
        if (!this.email) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].EMAIL_NOT_FOUND;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].EMAIL_INVALID;
        }
        if (!this.password) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PASSWORD_NOT_FOUND;
        }
        if (!this.confirmPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CPASSWORD_NOT_FOUND;
        }
        if (this.password.length < 6) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PASSWORD_VALIDATION;
        }
        if (this.password !== this.confirmPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PP_CP_INVALID;
        }
        if (this.roleId.length === 0) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ROLE_INVALID;
        }
        var data = {
            userName: this.username,
            userEmail: this.email,
            userPass: this.password,
            roleId: this.roleId
        };
        this._userService.addUser(data).subscribe(function (success) {
            console.log(success);
            _this._userService.triggerUpdateList();
        }, function (error) {
            _this.message = error.message;
        });
    };
    AddUsersComponent.prototype.editUser = function () {
        var _this = this;
        this.message = "";
        if (!this.username) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USERNAME_NOT_FOUND;
        }
        if (this.username.length < 4) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USERNAME_VALIDATION;
        }
        if (!this.email) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].EMAIL_NOT_FOUND;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].EMAIL_INVALID;
        }
        if (!this.password) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PASSWORD_NOT_FOUND;
        }
        if (!this.confirmPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CPASSWORD_NOT_FOUND;
        }
        if (this.password.length < 6) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PASSWORD_VALIDATION;
        }
        if (this.password !== this.confirmPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PP_CP_INVALID;
        }
        if (this.roleId.length === 0) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ROLE_INVALID;
        }
        var data = {
            userName: this.username,
            userEmail: this.email,
            userPass: this.password,
            roleId: this.roleId
        };
        this._userService.addUser(data).subscribe(function (success) {
            console.log(success);
            _this._userService.triggerUpdateList();
        }, function (error) {
            _this.message = error.message;
        });
    };
    AddUsersComponent.prototype.closeUser = function () {
        var data = {
            isShow: false,
            component: ""
        };
        this.modalService.setModal(data);
        localStorage.setItem("selectedUser", "");
    };
    AddUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-users',
            template: __webpack_require__("../../../../../src/app/add-users/add-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-users/add-users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */]])
    ], AddUsersComponent);
    return AddUsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".abmss-continer {\r\n    height: 100%;\r\n}\r\n\r\n.background-img-continer {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/4.jpg")) + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    opacity: 0.4;\r\n}\r\n\r\n.background-overlay {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: #2196f3;\r\n    opacity: 0.8;\r\n}\r\n\r\n.continer-app {\r\n    width: 100%;\r\n    height: calc(100% - 60px);\r\n    position: absolute; \r\n    overflow: auto;\r\n    z-index: 5;\r\n}\r\n\r\n.abmss-header {\r\n    height: 60px;\r\n    background-color: #08364b;\r\n    display: block;\r\n    overflow: hidden;\r\n}\r\n\r\n.menu-bar {\r\n    float: left;\r\n    color: #F5F5F5;\r\n    font-size: 30px;\r\n    cursor: pointer;\r\n    padding: 8px 10px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.pro-header-title {\r\n    float: left;\r\n    margin-left: 20px;\r\n    font-family: 'Merriweather', serif;\r\n    font-size: 15px;\r\n    padding: 20px 10px;\r\n    color: #F5F5F5;\r\n    cursor: pointer;\r\n}\r\n\r\n.pro-header-title label {\r\n    line-height: 0;\r\n    cursor: pointer; \r\n}\r\n\r\n.active {\r\n    color: #fff;\r\n}\r\n\r\n.pro-logout {\r\n    float: right;\r\n    color: #F5F5F5;\r\n    font-size: 10px;\r\n    cursor: pointer;\r\n    padding: 25px 10px;\r\n    margin-left: 10px;\r\n    line-height: 0;\r\n}\r\n\r\n.pro-logout label {\r\n    font-size: 18px;\r\n    margin-right: 4px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.pro-logout i {\r\n    color:#FFEB3B;\r\n}\r\n\r\n.sub-menu {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n}\r\n\r\n.sub-menu a {\r\n    font-size: 15px;\r\n    padding: 5px 10px;\r\n    width: 100%;\r\n}\r\n\r\n.modal-dialog {\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n    height: 100%;\r\n}\r\n\r\n.modal-body {\r\n    height: 100%;\r\n    overflow: auto;\r\n    padding: 0;\r\n}\r\n\r\n.modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.modal {\r\n    display: block;\r\n    height: 0;\r\n    opacity: 0;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-open {\r\n    height: 100%;\r\n    opacity: 1;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-header {\r\n    padding: 0;\r\n    overflow: hidden;\r\n    min-height: 60px;\r\n    -ms-flex-pack: left;\r\n        justify-content: left;\r\n    color: #2196F3;\r\n}\r\n\r\n.modal-header .menu-bar {\r\n    color: #2196F3;\r\n}\r\n\r\n.modal-header .close {\r\n    margin: 0;\r\n}\r\n\r\n.modal-footer {\r\n    display: none;\r\n}\r\n\r\n.modal-header .pro-header-title {\r\n    color: #2196F3;\r\n    margin-left: 31px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div #SideNav class=\"sidenav\" *ngIf=\"isAuth\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n  <a *ngFor=\"let item of accesss.menu;\" routerLink=\"/{{item}}\" routerLinkActive=\"active\" (click)=\"closeNav()\">\r\n    <i *ngIf=\"item === 'dashboard'\" class=\"fas fa-tachometer-alt\"></i>\r\n    <i *ngIf=\"item === 'patients'\" class=\"fas fa-users\"></i>\r\n    <i *ngIf=\"item === 'doctors'\" class=\"fas fa-users\"></i>\r\n    <i *ngIf=\"item === 'users'\" class=\"fas fa-user\"></i>\r\n    <i *ngIf=\"item === 'institutions'\" class=\"fas fa-info-circle\"></i>\r\n    {{item}}</a>\r\n  <!-- <a routerLink=\"/patient\" routerLinkActive=\"active\" (click)=\"closeNav()\">\r\n    <i class=\"fas fa-procedures\"></i> Patients</a>\r\n  <a routerLink=\"/doctor\" routerLinkActive=\"active\" (click)=\"closeNav()\">\r\n    <i class=\"fas fa-users\"></i> Doctor</a>\r\n  <a routerLink=\"/user\" routerLinkActive=\"active\" (click)=\"closeNav()\">\r\n    <i class=\"fas fa-users\"></i> Users</a>\r\n  <div class=\"sub-menu\">\r\n    <a routerLink=\"/institutions\" routerLinkActive=\"active\" (click)=\"closeNav()\">\r\n      <i class=\"fas fa-info-circle\"></i> Institutions</a>\r\n    <a routerLink=\"/user\" routerLinkActive=\"active\" (click)=\"closeNav()\">\r\n      <i class=\"fas fa-key\"></i> Change Password</a>\r\n    <a routerLink=\"/user\" routerLinkActive=\"active\" (click)=\"closeNav()\">\r\n      <i class=\"fas fa-user\"></i> My Profile</a>\r\n  </div> -->\r\n</div>\r\n\r\n<div class=\"abmss-header\">\r\n  <div class=\"menu-bar\" *ngIf=\"isAuth\" (click)=\"openNav()\">\r\n    <i class=\"fas fa-bars\"></i>\r\n  </div>\r\n\r\n  <div class=\"pro-header-title\">\r\n    <label>ABMSS</label>\r\n  </div>\r\n\r\n  <div class=\"pro-logout\" *ngIf=\"isAuth\">\r\n    <label>{{userName}} / {{roles}} </label>\r\n    <i (click)=\"logout()\" class=\"fas fa-sign-out-alt\"></i>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"abmss-continer\">\r\n  <!-- <div class=\"background-img-continer\">\r\n    <div class=\"background-overlay\"></div>\r\n  </div> -->\r\n  <div class=\"continer-app\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n<div #commonModal class=\"modal\" [class.modal-open]=\"modalData.isShow\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"menu-bar\" (click)=\"closeModal()\">\r\n          <i class=\"fas fa-angle-left\"></i>\r\n        </div>\r\n        <div class=\"pro-header-title\">\r\n          <label>ABMSS</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <app-add-patient *ngIf=\"modalData.component === 'patient'\"></app-add-patient>\r\n        <app-add-users *ngIf=\"modalData.component === 'user'\"></app-add-users>\r\n        <app-add-institution *ngIf=\"modalData.component === 'inst'\"></app-add-institution>\r\n        <app-add-doctor *ngIf=\"modalData.component === 'doc'\"></app-add-doctor>\r\n        <app-add-treatment-history *ngIf=\"modalData.component === 'thistory'\"></app-add-treatment-history>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Add Patient</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(authService, modalService, router) {
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
        this.isAuth = false;
        this.title = 'app';
        this.userName = "";
        this.accesss = [];
        this.modalData = this.modalService.defaut;
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.authSubscription.unsubscribe();
        this.modalSubscription.unsubscribe();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.getAuth().subscribe(function (status) {
            _this.isAuth = status.isAuth;
            _this.userName = status.userName;
            _this.accesss = status.access;
            console.log(status);
            _this.roles = status.role && status.role.toString();
            if (!status.isAuth)
                _this.router.navigate(["login"], { replaceUrl: true });
        });
        this.modalSubscription = this.modalService.getModal().subscribe(function (status) {
            localStorage.setItem("selectedPatient", "");
            _this.modalData = status || _this.modalService.defaut;
        });
    };
    AppComponent.prototype.openNav = function () {
        this.SideNav.nativeElement.style.width = "250px";
    };
    AppComponent.prototype.closeNav = function () {
        this.SideNav.nativeElement.style.width = "0px";
    };
    AppComponent.prototype.logout = function () {
        localStorage.setItem("token", "");
        this.authService.setAuth({ isAuth: false });
    };
    AppComponent.prototype.closeModal = function () {
        this.modalService.setModal(this.modalService.defaut);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("SideNav"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], AppComponent.prototype, "SideNav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("commonModal"),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "commonModal", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_patient_add_patient_component__ = __webpack_require__("../../../../../src/app/add-patient/add-patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_users_add_users_component__ = __webpack_require__("../../../../../src/app/add-users/add-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_patients_search_patients_component__ = __webpack_require__("../../../../../src/app/search-patients/search-patients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__patient_patient_component__ = __webpack_require__("../../../../../src/app/patient/patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__institutions_institutions_component__ = __webpack_require__("../../../../../src/app/institutions/institutions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__http_helper_service__ = __webpack_require__("../../../../../src/app/http-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__patient_patient_service__ = __webpack_require__("../../../../../src/app/patient/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__add_patient_add_patient_service__ = __webpack_require__("../../../../../src/app/add-patient/add-patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_datepicker_pipe__ = __webpack_require__("../../../../../src/app/pipes/datepicker.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__add_institution_add_institution_component__ = __webpack_require__("../../../../../src/app/add-institution/add-institution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__doctor_doctor_component__ = __webpack_require__("../../../../../src/app/doctor/doctor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__add_doctor_add_doctor_component__ = __webpack_require__("../../../../../src/app/add-doctor/add-doctor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__add_treatment_history_add_treatment_history_component__ = __webpack_require__("../../../../../src/app/add-treatment-history/add-treatment-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__add_single_intervention_add_single_intervention_component__ = __webpack_require__("../../../../../src/app/add-single-intervention/add-single-intervention.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__add_patient_add_patient_component__["a" /* AddPatientComponent */],
                __WEBPACK_IMPORTED_MODULE_11__add_users_add_users_component__["a" /* AddUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_patients_search_patients_component__["a" /* SearchPatientsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__patient_patient_component__["a" /* PatientComponent */],
                __WEBPACK_IMPORTED_MODULE_14__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__institutions_institutions_component__["a" /* InstitutionsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_datepicker_pipe__["a" /* DatepickerPipe */],
                __WEBPACK_IMPORTED_MODULE_24__add_institution_add_institution_component__["a" /* AddInstitutionComponent */],
                __WEBPACK_IMPORTED_MODULE_25__doctor_doctor_component__["a" /* DoctorComponent */],
                __WEBPACK_IMPORTED_MODULE_26__add_doctor_add_doctor_component__["a" /* AddDoctorComponent */],
                __WEBPACK_IMPORTED_MODULE_27__add_treatment_history_add_treatment_history_component__["a" /* AddTreatmentHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_28__add_single_intervention_add_single_intervention_component__["a" /* AddSingleInterventionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRouting */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_16__http_helper_service__["a" /* HttpHelperService */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_18__patient_patient_service__["a" /* PatientService */],
                __WEBPACK_IMPORTED_MODULE_20__modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_21__add_patient_add_patient_service__["a" /* AddPatientService */],
                __WEBPACK_IMPORTED_MODULE_23__service_common_service__["a" /* CommonService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_patient_add_patient_component__ = __webpack_require__("../../../../../src/app/add-patient/add-patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_users_add_users_component__ = __webpack_require__("../../../../../src/app/add-users/add-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_patients_search_patients_component__ = __webpack_require__("../../../../../src/app/search-patients/search-patients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__patient_patient_component__ = __webpack_require__("../../../../../src/app/patient/patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__institutions_institutions_component__ = __webpack_require__("../../../../../src/app/institutions/institutions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_doctor_add_doctor_component__ = __webpack_require__("../../../../../src/app/add-doctor/add-doctor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__doctor_doctor_component__ = __webpack_require__("../../../../../src/app/doctor/doctor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
    { path: 'patients', component: __WEBPACK_IMPORTED_MODULE_8__patient_patient_component__["a" /* PatientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
    { path: 'doctors', component: __WEBPACK_IMPORTED_MODULE_12__doctor_doctor_component__["a" /* DoctorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_9__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
    { path: 'institutions', component: __WEBPACK_IMPORTED_MODULE_10__institutions_institutions_component__["a" /* InstitutionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
    { path: 'addpatient', component: __WEBPACK_IMPORTED_MODULE_5__add_patient_add_patient_component__["a" /* AddPatientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
    { path: 'adduser', component: __WEBPACK_IMPORTED_MODULE_6__add_users_add_users_component__["a" /* AddUsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
    { path: 'adddoctor', component: __WEBPACK_IMPORTED_MODULE_11__add_doctor_add_doctor_component__["a" /* AddDoctorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
    { path: 'searchpatient', component: __WEBPACK_IMPORTED_MODULE_7__search_patients_search_patients_component__["a" /* SearchPatientsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] }
];
var AppRouting = (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var componentName = next.component;
        if (componentName.name !== "LoginComponent" && localStorage.getItem("token")) {
            var base64Url = localStorage.getItem("token").split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var userData = JSON.parse(window.atob(base64));
            localStorage.setItem("token", localStorage.getItem("token"));
            var role = [];
            var access = {
                isEdit: false,
                isDelete: false,
                isAdd: false,
                isView: false,
                menu: []
            };
            if (userData.userRole.indexOf("ROLE_ADMIN") !== -1) {
                role.push("Admin");
                access.isEdit = true;
                access.isDelete = true;
                access.isAdd = true;
                access.isView = true;
                access.menu = ['dashboard', 'patients', 'doctors', 'users', 'institutions'];
            }
            if (userData.userRole.indexOf("ROLE_CENTER_HEAD") !== -1) {
                role.push("Center Head");
                access.isEdit = true;
                access.isDelete = true;
                access.isAdd = true;
                access.isView = true;
                access.menu = ['dashboard', 'patients', 'doctors', 'institutions'];
            }
            if (userData.userRole.indexOf("ROLE_PROJECT_ANIMATOR") !== -1) {
                role.push("Project Animator");
                access.isEdit = true;
                access.isDelete = true;
                access.isAdd = true;
                access.isView = true;
                access.menu = ['dashboard', 'patients', 'doctors'];
            }
            if (userData.userRole.indexOf("ROLE_DOCTOR") !== -1) {
                role.push("Doctor");
                access.isEdit = false;
                access.isDelete = false;
                access.isAdd = false;
                access.isView = true;
                access.menu = ['patients', 'doctors'];
            }
            if (userData.userRole.indexOf("ROLE_USER") !== -1) {
                access.isEdit = false;
                access.isDelete = false;
                access.isAdd = false;
                access.isView = true;
                access.menu = ['patients'];
                role.push("User");
            }
            localStorage.setItem("access", JSON.stringify(access));
            if (userData) {
                this.authService.setAuth({ isAuth: true, role: role, token: localStorage.getItem("token"), access: access, userName: userData.userName, userId: userData.sub });
            }
            else {
                this.authService.setAuth({ isAuth: false });
                return false;
            }
        }
        else {
            this.authService.setAuth({ isAuth: false });
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    AuthService.prototype.setAuth = function (status) {
        this.subject.next(status);
    };
    AuthService.prototype.getAuth = function () {
        return this.subject.asObservable();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n}\r\n.menu-item {\r\n    text-align: center;\r\n    border: 1px solid #08364b;\r\n    margin: 10px;\r\n    float: left;\r\n    width: 23%;\r\n    background-color: #08364b;\r\n}\r\n.menu-item a {\r\n    display: block;\r\n    background-color: #fff;\r\n    margin-bottom: 10px;\r\n    padding: 20px 0;\r\n    color: #08364b;\r\n    font-weight: bolder;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.menu-item a:hover {\r\n   text-decoration: unset;\r\n}\r\n\r\n.menu-item a i {\r\n    display: block; \r\n    font-size: 30px;\r\n    margin-bottom: 10px; \r\n    color: #E91E63; \r\n}\r\n\r\n.count-item {\r\n    font-size: 18px;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n    color: #fff;\r\n    background-color: #E91E63;\r\n    padding: 5px 8px;\r\n    border-radius: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n    <label>dashboard</label>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div *ngFor=\"let item of duplicateAccess.menu;\" class=\"menu-item\">\r\n        <a routerLink=\"/{{item}}\" routerLinkActive=\"active\">\r\n            <i *ngIf=\"item === 'dashboard'\" class=\"fas fa-tachometer-alt\"></i>\r\n            <i *ngIf=\"item === 'patients'\" class=\"fas fa-users\"></i>\r\n            <i *ngIf=\"item === 'doctors'\" class=\"fas fa-users\"></i>\r\n            <i *ngIf=\"item === 'users'\" class=\"fas fa-user\"></i>\r\n            <i *ngIf=\"item === 'institutions'\" class=\"fas fa-info-circle\"></i>\r\n            <span>{{item}}</span>\r\n        </a>\r\n\r\n        <label *ngIf=\"item === 'dashboard'\" class=\"count-item\">20</label>\r\n        <label *ngIf=\"item === 'patients'\" class=\"count-item\">16</label>\r\n        <label *ngIf=\"item === 'doctors'\" class=\"count-item\">27</label>\r\n        <label *ngIf=\"item === 'users'\" class=\"count-item\">56</label>\r\n        <label *ngIf=\"item === 'institutions'\" class=\"count-item\">84</label>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, modalService, router) {
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
        this.isAuth = false;
        this.userName = "";
        this.access = [];
        this.duplicateAccess = [];
        this.modalData = this.modalService.defaut;
        this.access = JSON.parse(localStorage.getItem("access"));
        var indexAccess = this.access.menu.indexOf('dashboard');
        this.duplicateAccess = JSON.parse(JSON.stringify(this.access));
        if (indexAccess !== -1) {
            this.duplicateAccess.menu.splice(indexAccess, 1);
        }
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.getAuth().subscribe(function (status) {
            _this.isAuth = status.isAuth;
            _this.userName = status.userName;
            _this.access = status.access;
            var indexAccess = _this.access.menu.indexOf('dashboard');
            _this.duplicateAccess = JSON.parse(JSON.stringify(_this.access));
            if (indexAccess !== -1) {
                _this.duplicateAccess.menu.splice(indexAccess, 1);
            }
            console.log(status);
            _this.roles = status.role && status.role.toString();
            if (!status.isAuth)
                _this.router.navigate(["login"], { replaceUrl: true });
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/doctor/doctor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".patient-list {\r\n    color: #fff;\r\n    padding: 0 5px;\r\n    height: calc(100% - 80px);\r\n    overflow: auto;\r\n}\r\n\r\n.patient-list table {\r\n    width: 100%;\r\n    width: 100%;\r\n    border-collapse: separate;\r\n    border-spacing: 1px;    \r\n}\r\n\r\n.patient-list table thead th {\r\n    background-color: #E91E63;\r\n    color: #fff;\r\n    padding: 2px 5px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n\r\n.patient-list table td {\r\n    color: #000;\r\n    padding: 2px 5px;\r\n    text-align: center;\r\n}\r\n\r\n.patient-list table tbody tr:nth-child(even) {\r\n    background-color: #9fcff5;\r\n}\r\n.patient-list table tbody tr:nth-child(odd) {\r\n    background-color: #fff7f1;\r\n}\r\n\r\n.mobile-view {\r\n    display: none;\r\n}\r\n\r\n.mobile-heading {\r\n    display: none;\r\n}\r\n\r\n.add-btn {\r\n    border: 0;\r\n    background: #fff;\r\n    padding: 6px 10px;\r\n    line-height: 0;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    float: right;\r\n    margin-right: 5px;\r\n}\r\n\r\n.action-btn {\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    padding: 2px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .patient-list table {\r\n        width: 100%;\r\n        width: 100%;\r\n        border-collapse: separate;\r\n        border-spacing: 1px;    \r\n    }\r\n\r\n    .action-continer {\r\n        float: right;\r\n    }\r\n\r\n    .action-continer .serch-continer {\r\n        float: left;\r\n    }\r\n    \r\n\r\n    .mobile-heading {\r\n        background-color: #2196f3;\r\n        display: block;\r\n        color: #E91E63;\r\n        text-align: left;\r\n        padding: 5px 10px;\r\n        border-top: 1px solid;\r\n    }\r\n\r\n    .m-title-for-table {\r\n        line-height: 0;\r\n        text-transform: uppercase\r\n    }\r\n\r\n    .mobile-view {\r\n        display: inline-block;\r\n        width: 40px;\r\n        text-align: center;\r\n    }\r\n\r\n    .patient-list table thead {\r\n        width: 100%;\r\n        display: none;\r\n    }\r\n    .patient-list table tbody {\r\n        width: 100%;\r\n    }\r\n    \r\n    .patient-list table thead th {\r\n        background-color: #E91E63;\r\n        width: 100%;\r\n        display: block;\r\n        color: #fff;\r\n        padding: 2px 5px;\r\n        font-weight: normal;\r\n        text-align: left;\r\n    }\r\n    \r\n    .patient-list table tbody td {\r\n        color: #000;\r\n        width: 100%;\r\n        display: block;\r\n        padding: 5px 5px;\r\n        text-align: left;\r\n    }\r\n\r\n    .patient-list table tbody tr {\r\n        padding: 5px;\r\n    }\r\n    \r\n    .patient-list table tbody tr:nth-child(even) {\r\n        background-color: #9fcff5;\r\n    }\r\n    .patient-list table tbody tr:nth-child(odd) {\r\n        background-color: #fff7f1;\r\n    }\r\n    .mobile-clo {\r\n     text-align: right !important; \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/doctor/doctor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n\r\n  <label>doctor's</label>\r\n  <button class=\"add-btn\">\r\n    <i class=\"fas fa-search\"></i>\r\n  </button>\r\n  <button class=\"add-btn\"  *ngIf=\"access.isAdd\" (click)=\"openAddDoctor()\">\r\n    <i class=\"fas fa-plus-circle\"></i>\r\n  </button>\r\n</div>\r\n<div class=\"mobile-heading\">\r\n  <label class=\"m-title-for-table\">\r\n    <span>\r\n      <i class=\"fas fa-th-list\"></i> Doctor's</span>\r\n  </label>\r\n\r\n</div>\r\n<div class=\"patient-list\">\r\n  <div class=\"tbl-continer\">\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>\r\n            <i class=\"fas fa-id-card-alt\"></i> Id</th>\r\n          <th>\r\n            <i class=\"fas fa-file-signature\"></i> Doctor Name</th>\r\n          <th>\r\n            <i class=\"fas fa-signature\"></i> Phone Number</th>\r\n          <th>\r\n            <i class=\"fab fa-pagelines\"></i> Center</th>\r\n          <th *ngIf=\"access.isEdit\">\r\n            <i class=\"fas fa-exclamation-circle\"></i> Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr class=\"row-body\" *ngFor=\"let item of doctorList;let i = index\">\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-id-card-alt\"></i>\r\n            </span> {{item.docId}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-file-signature\"></i>\r\n            </span> {{item.docName}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-signature\"></i>\r\n            </span> {{item.docPhone1}}, {{item.docPhone2}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-pagelines\"></i>\r\n            </span> {{item.docCenter}}</td>\r\n          <td class=\"mobile-clo\" *ngIf=\"access.isEdit\">\r\n            <div class=\"action-btn\" (click)=\"deleteDoctor(item.docId)\">\r\n              <i class=\"fas fa-trash-alt\"></i>\r\n            </div>\r\n            <div class=\"action-btn\" (click)=\"editDoctor(item)\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/doctor/doctor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoctorComponent = (function () {
    function DoctorComponent(_docService, modalService) {
        this._docService = _docService;
        this.modalService = modalService;
        this.doctorList = [];
        this.access = [];
        this.access = JSON.parse(localStorage.getItem("access"));
    }
    DoctorComponent.prototype.ngOnDestroy = function () {
        this.updaetSubscription.unsubscribe();
    };
    DoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllDoctor();
        this.updaetSubscription = this._docService.UpdatedList().subscribe(function (e) {
            _this.getAllDoctor();
        });
    };
    DoctorComponent.prototype.openAddDoctor = function () {
        var data = {
            isShow: true,
            component: "doc"
        };
        this.modalService.setModal(data);
    };
    DoctorComponent.prototype.getAllDoctor = function () {
        var _this = this;
        this._docService.getAllDoctor({}).subscribe(function (success) {
            _this.doctorList = success;
        });
    };
    DoctorComponent.prototype.deleteDoctor = function (doctorId) {
    };
    DoctorComponent.prototype.editDoctor = function (doctor) {
    };
    DoctorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-doctor',
            template: __webpack_require__("../../../../../src/app/doctor/doctor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/doctor/doctor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */]])
    ], DoctorComponent);
    return DoctorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http-helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpHelperService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpHelperService = (function () {
    function HttpHelperService(http) {
        this.http = http;
        this.successHandler = function (res) {
            var result = res.json();
            return result;
        };
        this.errorHandler = function (e) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(e.json());
        };
    }
    HttpHelperService.prototype.generateHeader = function (reqParam) {
        if (localStorage.getItem("token")) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Authorization': "Bearer " + localStorage.getItem("token")
            });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers, params: reqParam });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ params: reqParam });
        }
    };
    HttpHelperService.prototype.get = function (url, reqParam, isLoading) {
        reqParam["v"] = new Date().getTime();
        var options = this.generateHeader(reqParam);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL + url, options)
            .map(this.successHandler)
            .catch(this.errorHandler);
    };
    HttpHelperService.prototype.post = function (url, reaBodyparam, reqParam) {
        var options = this.generateHeader(reqParam);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL + url, reaBodyparam, options)
            .map(this.successHandler)
            .catch(this.errorHandler);
    };
    HttpHelperService.prototype.delete = function (url, reqParam) {
        var options = this.generateHeader(reqParam);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL + url, options)
            .map(this.successHandler)
            .catch(this.errorHandler);
    };
    HttpHelperService.prototype.put = function (url, reaBodyparam, reqParam) {
        var options = this.generateHeader(reqParam);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL + url, reaBodyparam, options)
            .map(this.successHandler)
            .catch(this.errorHandler);
    };
    HttpHelperService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpHelperService);
    return HttpHelperService;
}());



/***/ }),

/***/ "../../../../../src/app/institutions/institutions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".patient-list {\r\n    color: #fff;\r\n    padding: 0 5px;\r\n    height: calc(100% - 80px);\r\n    overflow: auto;\r\n}\r\n\r\n.patient-list table {\r\n    width: 100%;\r\n    width: 100%;\r\n    border-collapse: separate;\r\n    border-spacing: 1px;    \r\n}\r\n\r\n.patient-list table thead th {\r\n    background-color: #E91E63;\r\n    color: #fff;\r\n    padding: 2px 5px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n\r\n.patient-list table td {\r\n    color: #000;\r\n    padding: 2px 5px;\r\n    text-align: center;\r\n}\r\n\r\n.patient-list table tbody tr:nth-child(even) {\r\n    background-color: #9fcff5;\r\n}\r\n.patient-list table tbody tr:nth-child(odd) {\r\n    background-color: #fff7f1;\r\n}\r\n\r\n.mobile-view {\r\n    display: none;\r\n}\r\n\r\n.mobile-heading {\r\n    display: none;\r\n}\r\n\r\n.add-btn {\r\n    border: 0;\r\n    background: #fff;\r\n    padding: 6px 10px;\r\n    line-height: 0;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    float: right;\r\n    margin-right: 5px;\r\n}\r\n\r\n.action-btn {\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    padding: 2px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .patient-list table {\r\n        width: 100%;\r\n        width: 100%;\r\n        border-collapse: separate;\r\n        border-spacing: 1px;    \r\n    }\r\n\r\n    .action-continer {\r\n        float: right;\r\n    }\r\n\r\n    .action-continer .serch-continer {\r\n        float: left;\r\n    }\r\n    \r\n\r\n    .mobile-heading {\r\n        background-color: #2196f3;\r\n        display: block;\r\n        color: #E91E63;\r\n        text-align: left;\r\n        padding: 5px 10px;\r\n        border-top: 1px solid;\r\n    }\r\n\r\n    .m-title-for-table {\r\n        line-height: 0;\r\n        text-transform: uppercase\r\n    }\r\n\r\n    .mobile-view {\r\n        display: inline-block;\r\n        width: 40px;\r\n        text-align: center;\r\n    }\r\n\r\n    .patient-list table thead {\r\n        width: 100%;\r\n        display: none;\r\n    }\r\n    .patient-list table tbody {\r\n        width: 100%;\r\n    }\r\n    \r\n    .patient-list table thead th {\r\n        background-color: #E91E63;\r\n        width: 100%;\r\n        display: block;\r\n        color: #fff;\r\n        padding: 2px 5px;\r\n        font-weight: normal;\r\n        text-align: left;\r\n    }\r\n    \r\n    .patient-list table tbody td {\r\n        color: #000;\r\n        width: 100%;\r\n        display: block;\r\n        padding: 5px 5px;\r\n        text-align: left;\r\n    }\r\n\r\n    .patient-list table tbody tr {\r\n        padding: 5px;\r\n    }\r\n    \r\n    .patient-list table tbody tr:nth-child(even) {\r\n        background-color: #9fcff5;\r\n    }\r\n    .patient-list table tbody tr:nth-child(odd) {\r\n        background-color: #fff7f1;\r\n    }\r\n    .mobile-clo {\r\n     text-align: right !important; \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/institutions/institutions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n\r\n  <label>Institutions's</label>\r\n  <button class=\"add-btn\" >\r\n    <i class=\"fas fa-search\"></i>\r\n  </button>\r\n  <button class=\"add-btn\" *ngIf=\"access.isAdd\" (click)=\"openAddInstitution()\">\r\n    <i class=\"fas fa-plus-circle\"></i>\r\n  </button>\r\n</div>\r\n<div class=\"mobile-heading\">\r\n  <label class=\"m-title-for-table\">\r\n    <span>\r\n      <i class=\"fas fa-th-list\"></i> Institutions's</span>\r\n  </label>\r\n\r\n</div>\r\n<div class=\"patient-list\">\r\n  <div class=\"tbl-continer\">\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>\r\n            <i class=\"fas fa-id-card-alt\"></i> Id</th>\r\n          <th>\r\n            <i class=\"fas fa-file-signature\"></i> Name</th>\r\n          <th>\r\n            <i class=\"fas fa-signature\"></i> City</th>\r\n          <th>\r\n            <i class=\"fas fa-genderless\"></i> Address</th>\r\n          <th>\r\n            <i class=\"fab fa-pagelines\"></i> Phone</th>\r\n          <th>\r\n            <i class=\"fab fa-pagelines\"></i> Point of contact</th>\r\n          <th *ngIf=\"access.isEdit\">\r\n            <i class=\"fas fa-exclamation-circle\"></i> Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr class=\"row-body\" *ngFor=\"let item of institutionList;let i = index\">\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-id-card-alt\"></i>\r\n            </span> {{item.institutionId}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-file-signature\"></i> \r\n            </span> {{item.institutionName}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-signature\"></i>\r\n            </span> {{item.city}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-male\"></i>\r\n            </span> {{item.institutionAddress}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fab fa-pagelines\"></i>\r\n            </span> {{item.phone}}\r\n          </td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fab fa-pagelines\"></i>\r\n            </span> {{item.pointOfContact}}\r\n          </td>\r\n          <td class=\"mobile-clo\" *ngIf=\"access.isEdit\">\r\n            <div class=\"action-btn\" (click)=\"deleteInstitution(item.institutionId)\">\r\n              <i class=\"fas fa-trash-alt\"></i>\r\n            </div>\r\n            <div class=\"action-btn\" (click)=\"editInstitution(item)\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/institutions/institutions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstitutionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InstitutionsComponent = (function () {
    function InstitutionsComponent(_instService, modalService) {
        this._instService = _instService;
        this.modalService = modalService;
        this.access = [];
        this.access = JSON.parse(localStorage.getItem("access"));
    }
    InstitutionsComponent.prototype.ngOnDestroy = function () {
        this.updaetSubscription.unsubscribe();
    };
    InstitutionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllInstitution();
        this.updaetSubscription = this._instService.UpdatedList().subscribe(function (e) {
            _this.getAllInstitution();
        });
    };
    InstitutionsComponent.prototype.getAllInstitution = function () {
        var _this = this;
        this._instService.getAllInstitution({}).subscribe(function (success) {
            _this.institutionList = success;
        });
    };
    InstitutionsComponent.prototype.openAddInstitution = function () {
        var data = {
            isShow: true,
            component: "inst"
        };
        this.modalService.setModal(data);
    };
    InstitutionsComponent.prototype.deleteInstitution = function (instiId) {
        var _this = this;
        this._instService.deleteInstitution(instiId).subscribe(function (success) {
            _this.getAllInstitution();
        });
    };
    InstitutionsComponent.prototype.editInstitution = function (insti) {
        this.openAddInstitution();
        localStorage.setItem("selectedInst", JSON.stringify(insti));
    };
    InstitutionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-institutions',
            template: __webpack_require__("../../../../../src/app/institutions/institutions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/institutions/institutions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */]])
    ], InstitutionsComponent);
    return InstitutionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-content {\r\n    height: 60px; \r\n    background-color: #08364b;\r\n    overflow: hidden;\r\n}\r\n\r\n.pro-header-title {\r\n    float: left;\r\n    margin-left: 20px;\r\n    font-family: 'Merriweather', serif;\r\n    font-size: 15px;\r\n    padding: 20px 10px;\r\n    color: #F5F5F5;\r\n    cursor: pointer;\r\n}\r\n\r\n.pro-header-title label {\r\n    line-height: 0;\r\n    cursor: pointer; \r\n}\r\n.slogan-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    left: 30px;\r\n}\r\n\r\n.slogan-content .first-slogan {\r\n    text-transform: uppercase;\r\n    color: #a509a7;\r\n}\r\n\r\n.item-list {\r\n    margin: 10px 0 0px 0;\r\n}\r\n\r\n.list-item {\r\n    background: #fff;\r\n    text-align: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 1px solid #08364b;\r\n    color: #08364b;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-item i {\r\n    font-size: 100px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.footer-app {\r\n    background: #08364b;\r\n    margin-top: 20px !important;\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.footer-app p {\r\n    margin: 0 auto;\r\n}\r\n\r\n.row {\r\n    margin: 0;\r\n}\r\n\r\n.clip1 {\r\n    color: #fff;\r\n}\r\n\r\n.slogan-content .second-slogan {\r\n    font-size: 18px;\r\n    padding-left: 20px;\r\n    color: #795548;\r\n}\r\n\r\n.slogan-content .third-slogan {\r\n    font-size: 15px;\r\n    padding-left: 40px;\r\n}\r\n\r\n.slider-content {\r\n    width: 100%;\r\n    height: 400px;\r\n    overflow: hidden;\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/4.jpg")) + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.slider-data {\r\n    width: 45%;\r\n    height: 100%;\r\n    background-color: #9bc03c;\r\n    border-radius: 0px 800px 800px 0px;\r\n    position: relative;\r\n    float: left;\r\n}\r\n\r\n.slider-data-right {\r\n    float: left;\r\n    width: 45%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.login-btn {\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n    color: #a50aa6;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    float: right;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.login-form {\r\n    position: absolute;\r\n    top:50%;\r\n    left: 50%;\r\n    width: 350px;\r\n    padding: 10px;\r\n    transform: translate(-50%,-50%);\r\n    -webkit-transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n    -moz-transform: translate(-50%,-50%); \r\n    -o-transform: translate(-50%,-50%); \r\n    background-color: #2196F3;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: 8px 7px 33px -6px #000;\r\n}\r\n\r\n.login-title {\r\n    text-align: center;\r\n    font-family: 'Concert One', cursive;\r\n    font-size: 20px;\r\n}\r\n\r\n.login-form-continer {\r\n    width:100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.login-form-group {\r\n    width: 100%;\r\n    margin: 10px 0;\r\n}\r\n\r\n.login-form-group label{\r\n    width: 100%;\r\n    background-color: transparent;\r\n    text-transform: uppercase;\r\n    font-size: 14px;\r\n    color: #fff;\r\n}\r\n\r\n.login-form-group input {\r\n    width: 100%;\r\n    border: 0;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.login-form-action {\r\n    text-align: right;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.login-form-action button {\r\n    border:0;\r\n    padding: 5px 20px;\r\n    font-size: 14px;\r\n    background-color: #9bc03c;\r\n    border-radius: 5px;\r\n    box-shadow: 3px 5px 7px -6px #000;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.login-form-action button:focus {\r\n    outline: none;\r\n}\r\n\r\n.login-form-action button:hover {\r\n    outline: none;\r\n    background-color: #ffeee9;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .slider-data {\r\n        width: 100%;\r\n        height: 100%;\r\n        background-color: #9bc03c;\r\n        border-radius: 0px 800px 800px 0px;\r\n        position: relative;\r\n        float: left;\r\n    }\r\n\r\n    .slogan-content {\r\n        width: 80%;\r\n    }\r\n    \r\n}\r\n\r\n\r\n.modal-dialog {\r\n    margin: 0 auto;\r\n}\r\n\r\n.modal-body {\r\n    height: 100%;\r\n    overflow: auto;\r\n    padding: 30px;\r\n    background-color: #08364b;\r\n}\r\n\r\n.modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.modal {\r\n    display: block;\r\n    height: 0;\r\n    opacity: 0;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-open {\r\n    height: 100%;\r\n    opacity: 1;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-header {\r\n    padding: 0;\r\n    overflow: hidden;\r\n    min-height: 60px;\r\n    -ms-flex-pack: left;\r\n        justify-content: left;\r\n    color: #2196F3;\r\n    display: none;\r\n}\r\n\r\n.modal-header .menu-bar {\r\n    color: #2196F3;\r\n}\r\n\r\n.modal-header .close {\r\n    margin: 0;\r\n}\r\n\r\n.modal-footer {\r\n    display: none;\r\n}\r\n\r\n.modal-header .pro-header-title {\r\n    color: #2196F3;\r\n    margin-left: 31px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-content\">\r\n  <div class=\"slider-data\">\r\n    <div class=\"slogan-content\">\r\n      <h2 class=\"first-slogan\">\r\n        <span class=\"animated fadeIn clip1\">With a Touch of</span>\r\n        <span class=\"animated fadeInRightBig delay-2s clip2\">Kindness.\r\n          <i class=\"fa fa-heartbeat\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </h2>\r\n      <h5 class=\"animated fadeInLeftBig second-slogan\">--- Child Cleft Treatments </h5>\r\n      <h6 class=\"animated fadeInLeftBig third-slogan\">--- --- We believe that every child has the right to a dignified life</h6>\r\n      <div class=\"animated fadeInRightBig login-btn\" (click)=\"openLogin()\">\r\n        <i class=\"fas fa-sign-in-alt\"></i> Login\r\n      </div><br>\r\n      <div class=\"animated fadeInRightBig login-btn\" (click)=\"openChangePassword()\">\r\n        <i class=\"fas fa-sign-in-alt\"></i> Change Password \r\n      </div><br>\r\n      <div class=\"animated fadeInRightBig login-btn\" (click)=\"openForgotPassword()\">\r\n        <i class=\"fas fa-sign-in-alt\"></i> Forgot Password\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-4 item-list\">\r\n    <div class=\"list-item\">\r\n      <i class=\"fa fa-heartbeat\" aria-hidden=\"true\"></i>\r\n      <h4>Single Intervention (SIN)</h4>\r\n      <p>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 item-list\">\r\n    <div class=\"list-item\">\r\n      <i class=\"fa fa-user-md\" aria-hidden=\"true\"></i>\r\n      <h4>Double Intervention (DIN)</h4>\r\n      <p>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 item-list\">\r\n    <div class=\"list-item\">\r\n      <i class=\"fa fa-wheelchair-alt\" aria-hidden=\"true\"></i>\r\n      <h4>Transportation (TRN)</h4>\r\n      <p>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 item-list\">\r\n    <div class=\"list-item\">\r\n      <i class=\"fa fa-medkit\" aria-hidden=\"true\"></i>\r\n      <h4>E.N.T. (ENT)</h4>\r\n      <p>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4 item-list\">\r\n    <div class=\"list-item\">\r\n      <i class=\"fa fa-hospital-o\" aria-hidden=\"true\"></i>\r\n      <h4>Speech Therapy (SPT)</h4>\r\n      <p>Lorem ipsum dolor sit amet, Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row footer-app\">\r\n  <p>� 2018 New Clinic. All rights reserved | Design by\r\n    <a href=\"#\">Spartons</a>\r\n  </p>\r\n</div>\r\n\r\n<!-- <div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"login-form\">\r\n      <div class=\"login-title\">ABMSS</div>\r\n      <div class=\"login-form-continer\">\r\n        <div class=\"login-form-group\">\r\n          <label>Username</label>\r\n          <input type=\"text\" [(ngModel)]=\"userName\" />\r\n        </div>\r\n        <div class=\"login-form-group\" *ngIf=\"isRegistraion\">\r\n          <label>Email</label>\r\n          <input type=\"text\" [(ngModel)]=\"email\" />\r\n        </div>\r\n        <div class=\"login-form-group\">\r\n          <label>Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"password\" />\r\n        </div>\r\n        <div class=\"login-form-group\" *ngIf=\"isRegistraion\">\r\n          <label>Confirm Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"cPassword\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"login-form-action\">\r\n        <button (click)=\"switchReg()\" *ngIf=\"!isRegistraion\">\r\n          <span>Register</span>\r\n          <i class=\"fas fa-user-plus\"></i>\r\n        </button>\r\n        <button (click)=\"switchReg()\" *ngIf=\"isRegistraion\">\r\n          <i class=\"fas fa-chevron-left\"></i>\r\n          <span>Back to login</span>\r\n        </button>\r\n        <button (click)=\"registration()\" *ngIf=\"isRegistraion\">\r\n          <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i>\r\n          <span>Sign Up</span>\r\n          <i class=\"fas fa-user-plus\"></i>\r\n        </button>\r\n        <button (click)=\"login()\" *ngIf=\"!isRegistraion\">\r\n          <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i>\r\n          <span>Sign In</span>\r\n          <i class=\"fas fa-sign-in-alt\"></i>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"message\" [class.show]=\"message\" [class.fade]=\"message\">\r\n        <button type=\"button\" class=\"close\" (click)=\"message = ''\">&times;</button>\r\n        {{message}}\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div> -->\r\n\r\n<div #commonModal class=\"modal\" [class.modal-open]=\"modalData.isShow\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"menu-bar\" style=\"float: right;\" (click)=\"closeModal()\">\r\n          <i class=\"fas fa-angle-left\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-form-continer\">\r\n          <div class=\"menu-bar\" style=\"float: right; font-size: 30px;     color: #fff;\" (click)=\"closeModal()\">\r\n            <i class=\"fas fa-window-close\"></i>\r\n          </div>\r\n          <div class=\"login-form-group\" *ngIf=\"isLogin\">\r\n            <label>Username</label>\r\n            <input type=\"text\" [(ngModel)]=\"userName\" />\r\n          </div>\r\n          <div class=\"login-form-group\" *ngIf=\"isRegistraion\">\r\n            <label>Email</label>\r\n            <input type=\"text\" [(ngModel)]=\"email\" />\r\n          </div>\r\n          <div class=\"login-form-group\" *ngIf=\"isLogin\">\r\n            <label>Password</label>\r\n            <input type=\"password\" [(ngModel)]=\"password\" />\r\n          </div>\r\n          <div class=\"login-form-group\" *ngIf=\"isRegistraion\">\r\n            <label>Confirm Password</label>\r\n            <input type=\"password\" [(ngModel)]=\"cPassword\" />\r\n          </div>\r\n          <div class=\"login-form-group\" *ngIf=\"isRegistraion\">\r\n            <label>Mobile</label>\r\n            <input type=\"text\" [(ngModel)]=\"mobile\" />\r\n          </div>\r\n          <div class=\"login-form-group\" *ngIf=\"isChangePassword\">\r\n            <label>Old Password</label>\r\n            <input type=\"text\" [(ngModel)]=\"oldPassword\" />\r\n          </div>\r\n          <div class=\"login-form-group\" *ngIf=\"isChangePassword\">\r\n            <label>New Password</label>\r\n            <input type=\"text\" [(ngModel)]=\"newPassword\" />\r\n          </div>\r\n          <div class=\"login-form-group\" *ngIf=\"isChangePassword\">\r\n            <label>Confirm Password</label>\r\n            <input type=\"text\" [(ngModel)]=\"cNewPassword\" />\r\n          </div>\r\n          <div class=\"login-form-group\" *ngIf=\"isForgotPassword\">\r\n            <label>Email</label>\r\n            <input type=\"text\" [(ngModel)]=\"forgotEmail\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"login-form-action\">\r\n          <button (click)=\"switchReg()\" *ngIf=\"!isRegistraion && !isChangePassword && !isForgotPassword\">\r\n            <span>Register</span>\r\n            <i class=\"fas fa-user-plus\"></i>\r\n          </button>\r\n          <button (click)=\"switchReg()\" *ngIf=\"isRegistraion\">\r\n            <i class=\"fas fa-chevron-left\"></i>\r\n            <span>Back to login</span>\r\n          </button>\r\n          <button (click)=\"registration()\" *ngIf=\"isRegistraion\">\r\n            <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i>\r\n            <span>Sign Up</span>\r\n            <i class=\"fas fa-user-plus\"></i>\r\n          </button>\r\n          <button (click)=\"login()\" *ngIf=\"!isRegistraion && !isChangePassword && !isForgotPassword\">\r\n            <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i>\r\n            <span>Sign In</span>\r\n            <i class=\"fas fa-sign-in-alt\"></i>\r\n          </button>\r\n          <button (click)=\"changePassword()\" *ngIf=\"isChangePassword || isForgotPassword\">\r\n            <i class=\"fas fa-spinner fa-spin\" *ngIf=\"isLoading\"></i>\r\n            <span>Submit</span>\r\n            <i class=\"fas fa-sign-in-alt\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"message\" [class.show]=\"message\" [class.fade]=\"message\">\r\n          <button type=\"button\" class=\"close\" (click)=\"message = ''\">&times;</button>\r\n          {{message}}\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Add Patient</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, loginService, router) {
        this.authService = authService;
        this.loginService = loginService;
        this.router = router;
        this.modalData = {
            isShow: false
        };
        this.isRegistraion = false;
        this.isChangePassword = false;
        this.isLogin = false;
        this.isForgotPassword = false;
        this.authService.setAuth({ isAuth: false });
    }
    LoginComponent.prototype.closeModal = function () {
        this.modalData.isShow = false;
    };
    LoginComponent.prototype.openLogin = function () {
        this.clearData();
        this.isLogin = true;
        this.modalData.isShow = true;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.switchReg = function () {
        this.isRegistraion = !this.isRegistraion;
    };
    LoginComponent.prototype.clearData = function () {
        this.isLogin = false;
        this.isChangePassword = false;
        this.isRegistraion = false;
        this.isForgotPassword = false;
    };
    LoginComponent.prototype.openChangePassword = function () {
        this.clearData();
        this.isChangePassword = true;
        this.modalData.isShow = true;
    };
    LoginComponent.prototype.openForgotPassword = function () {
        this.clearData();
        this.isForgotPassword = true;
        this.modalData.isShow = true;
    };
    LoginComponent.prototype.registration = function () {
        var _this = this;
        this.message = "";
        if (!this.userName) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USERNAME_NOT_FOUND;
        }
        if (this.userName.length < 4) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USERNAME_VALIDATION;
        }
        if (!this.email) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].EMAIL_NOT_FOUND;
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].EMAIL_INVALID;
        }
        if (!this.password) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PASSWORD_NOT_FOUND;
        }
        if (!this.cPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CPASSWORD_NOT_FOUND;
        }
        if (this.password.length < 6) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PASSWORD_VALIDATION;
        }
        if (this.password !== this.cPassword) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PP_CP_INVALID;
        }
        if (!this.mobile) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].MOBILE_NOT_FOUND;
        }
        if (this.mobile.length < 10) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].MOBILE_INVALID;
        }
        var data = {
            userName: this.userName,
            userEmail: this.email,
            userPass: this.password,
            userMobile: this.mobile
        };
        this.isLoading = true;
        this.loginService.registration(data).subscribe(function (success) {
            console.log(success);
            _this.isLoading = false;
            _this.isRegistraion = false;
        }, function (error) {
            _this.isLoading = false;
            console.log(error);
            _this.message = error.message;
            _this.authService.setAuth({ isAuth: false, role: "", token: "" });
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = "";
        if (!this.userName) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].USERNAME_NOT_FOUND;
        }
        if (!this.password) {
            return this.message = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PASSWORD_NOT_FOUND;
        }
        var data = {
            username: this.userName,
            password: this.password
        };
        this.isLoading = true;
        this.loginService.login(data).subscribe(function (success) {
            console.log(success);
            localStorage.setItem("token", success.accessToken);
            _this.loginService.getRole({}).subscribe(function (success) {
                localStorage.setItem("roles", JSON.stringify(success));
                _this.router.navigate(["dashboard"], { replaceUrl: true });
                _this.isLoading = false;
            });
        }, function (error) {
            _this.isLoading = false;
            console.log(error);
            localStorage.setItem("token", "");
            _this.message = error.message;
            _this.authService.setAuth({ isAuth: false, role: "", token: "" });
        });
    };
    LoginComponent.prototype.changePassword = function () {
        alert("change password");
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_helper_service__ = __webpack_require__("../../../../../src/app/http-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http, _http) {
        this.http = http;
        this._http = _http;
    }
    LoginService.prototype.login = function (requestQuery) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_LOGIN, requestQuery);
    };
    LoginService.prototype.getRole = function (requestQuery) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_GET_ROLE, requestQuery);
    };
    LoginService.prototype.registration = function (requestQuery) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_REGISTRATION, requestQuery);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_helper_service__["a" /* HttpHelperService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalService = (function () {
    function ModalService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.defaut = {
            isShow: false,
            component: ""
        };
    }
    ModalService.prototype.setModal = function (status) {
        this.subject.next(status);
    };
    ModalService.prototype.getModal = function () {
        return this.subject.asObservable();
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".patient-list {\r\n    color: #fff;\r\n    padding: 0 5px;\r\n    height: calc(100% - 80px);\r\n    overflow: auto;\r\n}\r\n\r\n.patient-list table {\r\n    width: 100%;\r\n    width: 100%;\r\n    border-collapse: separate;\r\n    border-spacing: 1px;    \r\n}\r\n\r\n.patient-list table thead th {\r\n    background-color: #E91E63;\r\n    color: #fff;\r\n    padding: 2px 5px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n\r\n.patient-list table td {\r\n    color: #000;\r\n    padding: 2px 5px;\r\n    text-align: center;\r\n}\r\n\r\n.patient-list table tbody tr:nth-child(even) {\r\n    background-color: #9fcff5;\r\n}\r\n.patient-list table tbody tr:nth-child(odd) {\r\n    background-color: #fff7f1;\r\n}\r\n\r\n.mobile-view {\r\n    display: none;\r\n}\r\n\r\n.mobile-heading {\r\n    display: none;\r\n}\r\n\r\n.add-btn {\r\n    border: 0;\r\n    background: #fff;\r\n    padding: 6px 10px;\r\n    line-height: 0;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    float: right;\r\n    margin-right: 5px;\r\n}\r\n\r\n.action-btn {\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    padding: 2px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .patient-list table {\r\n        width: 100%;\r\n        width: 100%;\r\n        border-collapse: separate;\r\n        border-spacing: 1px;    \r\n    }\r\n\r\n    .action-continer {\r\n        float: right;\r\n    }\r\n\r\n    .action-continer .serch-continer {\r\n        float: left;\r\n    }\r\n    \r\n\r\n    .mobile-heading {\r\n        background-color: #2196f3;\r\n        display: block;\r\n        color: #E91E63;\r\n        text-align: left;\r\n        padding: 5px 10px;\r\n        border-top: 1px solid;\r\n    }\r\n\r\n    .m-title-for-table {\r\n        line-height: 0;\r\n        text-transform: uppercase\r\n    }\r\n\r\n    .mobile-view {\r\n        display: inline-block;\r\n        width: 40px;\r\n        text-align: center;\r\n    }\r\n\r\n    .patient-list table thead {\r\n        width: 100%;\r\n        display: none;\r\n    }\r\n    .patient-list table tbody {\r\n        width: 100%;\r\n    }\r\n    \r\n    .patient-list table thead th {\r\n        background-color: #E91E63;\r\n        width: 100%;\r\n        display: block;\r\n        color: #fff; \r\n        padding: 2px 5px;\r\n        font-weight: normal;\r\n        text-align: left;\r\n    }\r\n    \r\n    .patient-list table tbody td {\r\n        color: #000;\r\n        width: 100%;\r\n        display: block;\r\n        padding: 5px 5px;\r\n        text-align: left;\r\n    }\r\n\r\n    .patient-list table tbody tr {\r\n        padding: 5px;\r\n    }\r\n    \r\n    .patient-list table tbody tr:nth-child(even) {\r\n        background-color: #9fcff5;\r\n    }\r\n    .patient-list table tbody tr:nth-child(odd) {\r\n        background-color: #fff7f1;\r\n    }\r\n    .mobile-clo {\r\n     text-align: right !important; \r\n    }\r\n}\r\n\r\n.login-form-continer {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.form-group  {\r\n    float: left;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.modal-dialog {\r\n    margin: 0 auto;\r\n}\r\n\r\n.modal-body {\r\n    height: 100%;\r\n    overflow: auto;\r\n    padding: 20px;\r\n    background-color: #08364b;\r\n}\r\n\r\n.modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.modal {\r\n    display: block;\r\n    height: 0;\r\n    opacity: 0;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-open {\r\n    height: 100%;\r\n    opacity: 1;\r\n    transition: all .5s linear;\r\n}\r\n\r\n.modal-header {\r\n    padding: 0;\r\n    overflow: hidden;\r\n    min-height: 60px;\r\n    -ms-flex-pack: left;\r\n        justify-content: left;\r\n    color: #2196F3;\r\n    display: none;\r\n}\r\n\r\n.modal-header .menu-bar {\r\n    color: #2196F3;\r\n}\r\n\r\n.modal-header .close {\r\n    margin: 0;\r\n}\r\n\r\n.modal-footer {\r\n    display: none;\r\n}\r\n\r\n.modal-header .pro-header-title {\r\n    color: #2196F3;\r\n    margin-left: 31px;\r\n}\r\n\r\n.modal-dialog {\r\n    max-width: 800px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n\r\n  <label>patient's</label>\r\n  <button class=\"add-btn\" (click)=\"searchPatient()\">\r\n    <i class=\"fas fa-search\"></i>\r\n  </button>\r\n  <button class=\"add-btn\" (click)=\"openCommand()\">\r\n    <i class=\"fas fa-comment\"></i>\r\n  </button>\r\n  <button class=\"add-btn\" *ngIf=\"access.isAdd\" (click)=\"openAddPatient()\">\r\n    <i class=\"fas fa-plus-circle\"></i>\r\n  </button>\r\n</div>\r\n<div class=\"mobile-heading\">\r\n  <label class=\"m-title-for-table\">\r\n    <span>\r\n      <i class=\"fas fa-th-list\"></i> Patient's</span>\r\n  </label>\r\n\r\n</div>\r\n<div class=\"patient-list\">\r\n  <div class=\"tbl-continer\">\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>\r\n            <input type=\"checkbox\" #selectAll [(ngModel)]=\"selectAllPatient\" (change)=\"onSelectAllChange()\" /> </th>\r\n          <th>\r\n            <i class=\"fas fa-id-card-alt\"></i> Id</th>\r\n          <th>\r\n            <i class=\"fas fa-file-signature\"></i> File Name</th>\r\n          <th>\r\n            <i class=\"fas fa-signature\"></i> Patient Name</th>\r\n          <th>\r\n            <i class=\"fas fa-genderless\"></i> Gender</th>\r\n          <th>\r\n            <i class=\"fab fa-pagelines\"></i> Age</th>\r\n          <th *ngIf=\"access.isEdit || access.isDelete || access.isView\">\r\n            <i class=\"fas fa-exclamation-circle\"></i> Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr class=\"row-body\" *ngFor=\"let item of patientList;let i = index\">\r\n          <td>\r\n            <input type=\"checkbox\"  [(ngModel)]=\"item.isChecked\"  (change)=\"onSelectChange()\" /> </td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-id-card-alt\"></i>\r\n            </span> {{item.patientId}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-file-signature\"></i>\r\n            </span> {{item.fileNo}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-signature\"></i>\r\n            </span> {{item.childFirstName}} {{item.childLastName}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fas fa-male\"></i>\r\n            </span> {{item.gender}}</td>\r\n          <td>\r\n            <span class=\"mobile-view\">\r\n              <i class=\"fab fa-pagelines\"></i>\r\n            </span> {{item.childDob}}\r\n          </td>\r\n          <td class=\"mobile-clo\" *ngIf=\"access.isEdit || access.isDelete || access.isView\">\r\n            <div class=\"action-btn\" *ngIf=\"access.isDelete\" (click)=\"deletePatient(item.patientId)\">\r\n              <i class=\"fas fa-trash-alt\"></i>\r\n            </div>\r\n            <div class=\"action-btn\" *ngIf=\"access.isEdit\" (click)=\"editPatient(item)\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </div>\r\n            <div class=\"action-btn\" *ngIf=\"access.isView\" (click)=\"editPatient(item)\">\r\n              <i class=\"fas fa-eye\"></i>\r\n            </div>\r\n            <div class=\"action-btn\" (click)=\"historyPatient(item)\">\r\n              <i class=\"fas fa-history\"></i>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div #commonModal class=\"modal\" [class.modal-open]=\"modalData.isShow\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"menu-bar\" style=\"float: right;\" (click)=\"closeModal()\">\r\n          <i class=\"fas fa-angle-left\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-form-continer\">\r\n          <div class=\"menu-bar\" style=\"float: right; font-size: 30px;     color: #fff;\" (click)=\"closeModal()\">\r\n            <i class=\"fas fa-window-close\"></i>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">From Date\r\n            </label>\r\n            <div class=\"form-date-picker\">\r\n              <ngb-datepicker class=\"remove-outline\" style=\"background: #fff;\" #dp [(ngModel)]=\"searchObj.fromDate\" name=\"childDob\"></ngb-datepicker>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"form-label\">To Date\r\n            </label>\r\n            <div class=\"form-date-picker\">\r\n              <ngb-datepicker class=\"remove-outline\" style=\"background: #fff;\" #dp [(ngModel)]=\"searchObj.toDate\" name=\"childDob\"></ngb-datepicker>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div>\r\n              <div>\r\n                <label class=\"form-label\">File Name\r\n                </label>\r\n              </div>\r\n              <input type=\"text\" [(ngModel)]=\"searchObj.searchKey\" />\r\n            </div>\r\n            <div>\r\n              <div>\r\n                <label class=\"form-label\">Patient Name\r\n                </label>\r\n              </div>\r\n              <input type=\"text\" [(ngModel)]=\"searchObj.patientName\" />\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Add Patient</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div #messageModal class=\"modal\" [class.modal-open]=\"messageData.isShow\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <div class=\"menu-bar\" style=\"float: right;\" (click)=\"closeModal()\">\r\n          <i class=\"fas fa-angle-left\"></i>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"login-form-continer\">\r\n          <div class=\"menu-bar\" style=\"float: right; font-size: 30px;     color: #fff;\" (click)=\"closeModal()\">\r\n            <i class=\"fas fa-window-close\"></i>\r\n          </div>\r\n\r\n          <div class=\"form-group\" style=\"width:100%;\">\r\n            <label class=\"form-label\">Message\r\n            </label>\r\n            <div class=\"form-date-picker\">\r\n              <textarea style=\"width: 100%;     padding: 10px; height: 150px;\"></textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\" style=\"width:100%;\">\r\n\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n              <i class=\"fas fa-comment\"></i> Send SMS</button>\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n              <i class=\"fas fa-envelope-square\"></i> Send Email</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Add Patient</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_service__ = __webpack_require__("../../../../../src/app/patient/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientComponent = (function () {
    function PatientComponent(_patientService, modalService) {
        this._patientService = _patientService;
        this.modalService = modalService;
        this.modalData = {
            isShow: false
        };
        this.messageData = {
            isShow: false
        };
        this.searchObj = {
            fromDate: "",
            toDate: "",
            searchKey: "",
            patientName: ""
        };
        this.patientList = [];
        this.access = [];
        this.access = JSON.parse(localStorage.getItem("access"));
    }
    PatientComponent.prototype.ngOnDestroy = function () {
        this.patientSubscription.unsubscribe();
    };
    PatientComponent.prototype.onSelectAllChange = function () {
        var _this = this;
        console.log(this.selectAllPatient);
        this.patientList.forEach(function (element) {
            element.isChecked = _this.selectAllPatient;
        });
    };
    PatientComponent.prototype.checkSelectLength = function () {
        return this.patientList.filter(function (e) {
            return e.isChecked;
        }).length;
    };
    PatientComponent.prototype.onSelectChange = function () {
        var lengthOfChecked = this.checkSelectLength();
        if (lengthOfChecked === this.patientList.length) {
            this.selectAllPatient = true;
            this.selectAll.nativeElement.indeterminate = false;
        }
        else if (lengthOfChecked === 0) {
            this.selectAllPatient = false;
            this.selectAll.nativeElement.indeterminate = false;
        }
        else {
            this.selectAll.nativeElement.indeterminate = true;
        }
    };
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllPatient();
        this.patientSubscription = this._patientService.patientUpdatedList().subscribe(function (e) {
            _this.getAllPatient();
        });
    };
    PatientComponent.prototype.getAllPatient = function () {
        var _this = this;
        this._patientService.getAllPatient({}).subscribe(function (success) {
            _this.patientList = success || [];
            _this.patientList.forEach(function (element) {
                element.isChecked = false;
            });
        });
    };
    PatientComponent.prototype.deletePatient = function (patientId) {
        var _this = this;
        this._patientService.deletePatient(patientId).subscribe(function (success) {
            _this.getAllPatient();
        });
    };
    PatientComponent.prototype.editPatient = function (patient) {
        this.openAddPatient();
        localStorage.setItem("selectedPatient", JSON.stringify(patient));
    };
    PatientComponent.prototype.searchPatient = function () {
        this.modalData.isShow = true;
    };
    PatientComponent.prototype.closeModal = function () {
        this.modalData.isShow = false;
        this.messageData.isShow = false;
    };
    PatientComponent.prototype.openCommand = function () {
        this.messageData.isShow = true;
    };
    PatientComponent.prototype.openAddPatient = function () {
        var data = {
            isShow: true,
            component: "patient"
        };
        console.log(data);
        this.modalService.setModal(data);
    };
    PatientComponent.prototype.historyPatient = function (patient) {
        var data = {
            isShow: true,
            component: "thistory"
        };
        console.log(data);
        this.modalService.setModal(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("selectAll"),
        __metadata("design:type", Object)
    ], PatientComponent.prototype, "selectAll", void 0);
    PatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patient',
            template: __webpack_require__("../../../../../src/app/patient/patient.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_helper_service__ = __webpack_require__("../../../../../src/app/http-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientService = (function () {
    function PatientService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        this.selectedPatientSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
    }
    PatientService.prototype.getAllPatient = function (requestQuery) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_PATIENT_ALL, requestQuery);
    };
    PatientService.prototype.deletePatient = function (patientId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_DELETE_PATIENT + "/" + patientId);
    };
    PatientService.prototype.triggerPatientUpdateList = function () {
        this.subject.next();
    };
    PatientService.prototype.patientUpdatedList = function () {
        return this.subject.asObservable();
    };
    PatientService.prototype.triggerSelectedPatient = function (patient) {
        this.selectedPatientSub.next(patient);
    };
    PatientService.prototype.selectedPatient = function () {
        return this.selectedPatientSub.asObservable();
    };
    PatientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_helper_service__["a" /* HttpHelperService */]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/datepicker.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatepickerPipe = (function () {
    function DatepickerPipe() {
    }
    DatepickerPipe.prototype.transform = function (value, args) {
        if (value) {
            var dateSplit = value.childDob.split("-");
            return {
                day: dateSplit[0],
                month: dateSplit[1],
                year: dateSplit[2]
            };
        }
        return value;
    };
    DatepickerPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'datepicker'
        })
    ], DatepickerPipe);
    return DatepickerPipe;
}());



/***/ }),

/***/ "../../../../../src/app/search-patients/search-patients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-patients/search-patients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n    <label>patients</label>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/search-patients/search-patients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPatientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPatientsComponent = (function () {
    function SearchPatientsComponent() {
    }
    SearchPatientsComponent.prototype.ngOnInit = function () {
    };
    SearchPatientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-patients',
            template: __webpack_require__("../../../../../src/app/search-patients/search-patients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-patients/search-patients.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchPatientsComponent);
    return SearchPatientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_helper_service__ = __webpack_require__("../../../../../src/app/http-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
    }
    CommonService.prototype.getAllUser = function (requestQuery) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_USER_ALL, requestQuery);
    };
    CommonService.prototype.addUser = function (requestBody) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ADD_USER, requestBody);
    };
    CommonService.prototype.editUser = function (requestBody) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_EDIT_USER, requestBody);
    };
    CommonService.prototype.deleteUser = function (userId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_DELETE_USER + "/" + userId);
    };
    CommonService.prototype.getAllInstitution = function (requestQuery) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_INSTITUTION_ALL, requestQuery);
    };
    CommonService.prototype.addInstitution = function (requestBody) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ADD_INSTITUTION, requestBody);
    };
    CommonService.prototype.editInstitution = function (requestBody) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_EDIT_INSTITUTIONR, requestBody);
    };
    CommonService.prototype.deleteInstitution = function (instId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_DELETE_INSTITUTION + "/" + instId);
    };
    CommonService.prototype.getAllDoctor = function (requestQuery) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_DOCTOR_ALL, requestQuery);
    };
    CommonService.prototype.addDoctor = function (requestBody) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ADD_DOCTOR, requestBody);
    };
    CommonService.prototype.editDoctor = function (requestBody) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_EDIT_DOCTOR, requestBody);
    };
    CommonService.prototype.deleteDoctor = function (instId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_DELETE_DOCTOR + "/" + instId);
    };
    CommonService.prototype.triggerUpdateList = function () {
        this.subject.next();
    };
    CommonService.prototype.UpdatedList = function () {
        return this.subject.asObservable();
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_helper_service__["a" /* HttpHelperService */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".patient-list {\r\n    color: #fff;\r\n    padding: 0 5px;\r\n    height: calc(100% - 80px);\r\n    overflow: auto;\r\n}\r\n\r\n.patient-list table {\r\n    width: 100%;\r\n    width: 100%;\r\n    border-collapse: separate;\r\n    border-spacing: 1px;    \r\n}\r\n\r\n.patient-list table thead th {\r\n    background-color: #E91E63;\r\n    color: #fff;\r\n    padding: 2px 5px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n}\r\n\r\n.patient-list table td {\r\n    color: #000;\r\n    padding: 2px 5px;\r\n    text-align: center;\r\n}\r\n\r\n.patient-list table tbody tr:nth-child(even) {\r\n    background-color: #9fcff5;\r\n}\r\n.patient-list table tbody tr:nth-child(odd) {\r\n    background-color: #fff7f1;\r\n}\r\n\r\n.mobile-view {\r\n    display: none;\r\n}\r\n\r\n.mobile-heading {\r\n    display: none;\r\n}\r\n\r\n.add-btn {\r\n    border: 0;\r\n    background: #fff;\r\n    padding: 6px 10px;\r\n    line-height: 0;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    float: right;\r\n    margin-right: 5px;\r\n}\r\n\r\n.action-btn {\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    padding: 2px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .patient-list table {\r\n        width: 100%;\r\n        width: 100%;\r\n        border-collapse: separate;\r\n        border-spacing: 1px;    \r\n    }\r\n\r\n    .action-continer {\r\n        float: right;\r\n    }\r\n\r\n    .action-continer .serch-continer {\r\n        float: left;\r\n    }\r\n    \r\n\r\n    .mobile-heading {\r\n        background-color: #2196f3;\r\n        display: block;\r\n        color: #E91E63;\r\n        text-align: left;\r\n        padding: 5px 10px;\r\n        border-top: 1px solid;\r\n    }\r\n\r\n    .m-title-for-table {\r\n        line-height: 0;\r\n        text-transform: uppercase\r\n    }\r\n\r\n    .mobile-view {\r\n        display: inline-block;\r\n        width: 40px;\r\n        text-align: center;\r\n    }\r\n\r\n    .patient-list table thead {\r\n        width: 100%;\r\n        display: none;\r\n    }\r\n    .patient-list table tbody {\r\n        width: 100%;\r\n    }\r\n    \r\n    .patient-list table thead th {\r\n        background-color: #E91E63;\r\n        width: 100%;\r\n        display: block;\r\n        color: #fff;\r\n        padding: 2px 5px;\r\n        font-weight: normal;\r\n        text-align: left;\r\n    }\r\n    \r\n    .patient-list table tbody td {\r\n        color: #000;\r\n        width: 100%;\r\n        display: block;\r\n        padding: 5px 5px;\r\n        text-align: left;\r\n    }\r\n\r\n    .patient-list table tbody tr {\r\n        padding: 5px;\r\n    }\r\n    \r\n    .patient-list table tbody tr:nth-child(even) {\r\n        background-color: #9fcff5;\r\n    }\r\n    .patient-list table tbody tr:nth-child(odd) {\r\n        background-color: #fff7f1;\r\n    }\r\n    .mobile-clo {\r\n     text-align: right !important; \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-title\">\r\n\r\n        <label>user's</label>\r\n        <button class=\"add-btn\">\r\n          <i class=\"fas fa-search\"></i>\r\n        </button>\r\n        <button class=\"add-btn\" (click)=\"openAddUser()\">\r\n          <i class=\"fas fa-plus-circle\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"mobile-heading\">\r\n        <label class=\"m-title-for-table\">\r\n          <span>\r\n            <i class=\"fas fa-th-list\"></i> user's</span>\r\n        </label>\r\n      \r\n      </div>\r\n      <div class=\"patient-list\">\r\n        <div class=\"tbl-continer\">\r\n          <table>\r\n            <thead>\r\n              <tr>\r\n                <th>\r\n                  <i class=\"fas fa-id-card-alt\"></i> Id</th>\r\n                <th>\r\n                  <i class=\"fas fa-file-signature\"></i> User Name</th>\r\n                <th>\r\n                  <i class=\"fas fa-signature\"></i> Email</th>\r\n                <th>\r\n                  <i class=\"fas fa-genderless\"></i> Role's</th>\r\n                <th>\r\n                  <i class=\"fab fa-pagelines\"></i> Active</th>\r\n                <th>\r\n                  <i class=\"fas fa-exclamation-circle\"></i> Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"row-body\" *ngFor=\"let item of userList;let i = index\">\r\n                <td>\r\n                  <span class=\"mobile-view\">\r\n                    <i class=\"fas fa-id-card-alt\"></i>\r\n                  </span> {{item.userId}}</td>\r\n                <td>\r\n                  <span class=\"mobile-view\">\r\n                    <i class=\"fas fa-file-signature\"></i>\r\n                  </span> {{item.userName}}</td>\r\n                <td>\r\n                  <span class=\"mobile-view\">\r\n                    <i class=\"fas fa-signature\"></i>\r\n                  </span> {{item.userEmail}}</td>\r\n                <td>\r\n                  <span class=\"mobile-view\">\r\n                    <i class=\"fas fa-male\"></i>\r\n                  </span> <span *ngFor=\"let roles of item.roles;let j = index\">{{roles.role}} </span></td>\r\n                <td>\r\n                  <span class=\"mobile-view\">\r\n                    <i class=\"fab fa-pagelines\"></i>\r\n                  </span> {{item.active}}\r\n                </td>\r\n                <td class=\"mobile-clo\">\r\n                  <div class=\"action-btn\" (click)=\"deleteUser(item.userId)\">\r\n                    <i class=\"fas fa-trash-alt\"></i>\r\n                  </div>\r\n                  <div class=\"action-btn\" (click)=\"editUser(item)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__("../../../../../src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_service__ = __webpack_require__("../../../../../src/app/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(_userService, modalService) {
        this._userService = _userService;
        this.modalService = modalService;
        this.userList = [];
    }
    UsersComponent.prototype.ngOnDestroy = function () {
        this.updaetSubscription.unsubscribe();
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllUser();
        this.updaetSubscription = this._userService.UpdatedList().subscribe(function (e) {
            _this.getAllUser();
        });
    };
    UsersComponent.prototype.getAllUser = function () {
        var _this = this;
        this._userService.getAllUser({}).subscribe(function (success) {
            _this.userList = success;
        });
    };
    UsersComponent.prototype.openAddUser = function () {
        var data = {
            isShow: true,
            component: "user"
        };
        this.modalService.setModal(data);
    };
    UsersComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this._userService.deleteUser(userId).subscribe(function (success) {
            _this.getAllUser();
        });
    };
    UsersComponent.prototype.editUser = function (user) {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/4.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4.2e96fed5ca964cb4410b.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    "BASE_URL": "https://abmss.herokuapp.com/",
    API_LOGIN: "login",
    API_REGISTRATION: "registration",
    API_PATIENT_ALL: "abmss/patient/all",
    API_ADD_PATIENT: "abmss/patient/add",
    API_EDIT_PATIENT: "abmss/patient",
    API_DELETE_PATIENT: "abmss/patient",
    API_GET_ROLE: "getRoles",
    API_USER_ALL: "abmss/user/all",
    API_ADD_USER: "abmss/user/add",
    API_EDIT_USER: "abmss/user",
    API_DELETE_USER: "abmss/user",
    API_INSTITUTION_ALL: "abmss/institution/all",
    API_ADD_INSTITUTION: "abmss/institution/add",
    API_EDIT_INSTITUTIONR: "abmss/institution",
    API_DELETE_INSTITUTION: "abmss/institution",
    API_DOCTOR_ALL: "abmss/doctor/all",
    API_ADD_DOCTOR: "abmss/doctor/add",
    API_EDIT_DOCTOR: "abmss/doctor",
    API_DELETE_DOCTOR: "abmss/doctor",
    "USERNAME_NOT_FOUND": "Please enter username.",
    "PASSWORD_NOT_FOUND": "Please enter password.",
    "EMAIL_NOT_FOUND": "Please enter email.",
    "CPASSWORD_NOT_FOUND": "Please enter confirm password.",
    "USERNAME_INVALID": "Invalid username.",
    "PASSWORD_INVALID": "Invalid password.",
    "PASSWORD_VALIDATION": "Password should max 6 characters.",
    "USERNAME_VALIDATION": "Password should max 4 characters.",
    "CPASSWORD_INVALID": "Invalid confirm password.",
    "EMAIL_INVALID": "Invalid email.",
    "PP_CP_INVALID": "Password and Confirm password not same.",
    "ROLE_INVALID": "Please select any one of this roles.",
    "MOBILE_NOT_FOUND": "Please enter valid mobile number",
    "MOBILE_INVALID": "Please enter 10 digit mobile number"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map