webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'new_question',
        component: __WEBPACK_IMPORTED_MODULE_3__create_create_component__["a" /* CreateComponent */]
    },
    {
        path: 'lets_play',
        component: __WEBPACK_IMPORTED_MODULE_4__play_play_component__["a" /* PlayComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__play_play_component__ = __webpack_require__("../../../../../src/app/play/play.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_9__play_play_component__["a" /* PlayComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__game_service__["a" /* GameService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:link{\n\ttext-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['']\"> Home |</a>\n\n\n<h1> New Question </h1>\n\n\n\n<form (submit)=\"create(newQ)\" #QForm=\"ngForm\">\n\n<table>\n\t<tr>\n\t\t<td> Question: </td>\n\t\t<td> <input type=\"text\" name=\"question\"    \n            required\n            minlength=\"15\" \n            [(ngModel)]=\"newQ.question\" \n            #question=\"ngModel\" > </td>\n        <td *ngIf=\"question.invalid\"> Enter the question with at least 15 characters</td>\n    </tr>\n\n    <tr>\n\t\t<td> Correct Answer: </td>\n\t\t<td> <input type=\"text\" name=\"option1\"    \n            required\n            [(ngModel)]=\"newQ.options[0].ans\" \n            #option1=\"ngModel\" >  </td>\n        <td *ngIf=\"option1.invalid\"> Must be filled in</td>\n    </tr>\n\n    <tr>\n\t\t<td> Fake Answer 1: </td>\n\t\t<td> <input type=\"text\" name=\"option2\"    \n            required\n            minlength=\"3\" \n            [(ngModel)]=\"newQ.options[1].ans\" \n            #option2=\"ngModel\" > </td>\n        <td *ngIf=\"option2.invalid\"> Must be filled in</td>\n\n    </tr>\n\n    <tr>\n\t\t<td> Fake Answer 2: </td>\n\t\t<td> <input type=\"text\" name=\"option3\"    \n            required\n            minlength=\"3\" \n            [(ngModel)]=\"newQ.options[2].ans\" \n            #option3=\"ngModel\" >  </td>\n        <td *ngIf=\"option3.invalid\"> Must be filled in</td>\n\n    </tr>\n\n</table>\n   <button type=\"reset\"> <a [routerLink]=\"['']\"> Cancel </a>\n </button>\n\t<button type=\"submit\" [disabled]=\"!(QForm.valid)\"> Add Question </button>\n\n</form>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = (function () {
    function CreateComponent(_gameService, _router) {
        this._gameService = _gameService;
        this._router = _router;
        this.newQ = { question: "", options: [{ ans: "", correct: true }, { ans: "", correct: false }, { ans: "", correct: false }] };
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.create = function (newQ) {
        var _this = this;
        this._gameService.createQ(newQ)
            .then(function (data) {
            if (data) {
                console.log(data);
                newQ = { question: "", options: [{ ans: "", correct: true }, { ans: "", correct: false }, { ans: "", correct: false }] };
                alert("You have successfully created the question");
                _this._router.navigateByUrl('/');
            }
        })
            .catch(function (err) {
            console.log("err");
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CreateComponent);

var _a, _b;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n\twidth:400px;\n\theight:100px;\n\tborder: 2px solid grey;\n\tbackground-color: skyblue;\n\tmargin:auto;\n\tpadding:10px;\n\ttext-align: center\n}\n\nbutton{\n\theight:40px;\n\twidth: 100px;\n}\n\ntable{\n\tmargin:auto 5px;\n\tdisplay: block;\n\twidth: 70%;\n\ttext-align: center;\n}\n\ntd, th{\n\twidth:30%;\n\ttext-align: left\n}\n\n#msg{\n\twidth: 500px;\n\theight:60px;\n\tbackground-color: #40961b;\n\tcolor: white;\n\tmargin: 10px;\n\tmargin:auto;\n\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['']\"> Home | </a>\n<a [routerLink]=\"['new_question']\"> Add a Question |</a>\n\n\n<a (click)=\"logout()\" [routerLink]=\"['']\" > Logout </a>\n\n<div *ngIf=\"message\" id=\"msg\">\n\t<h2> {{ message }} </h2>\n</div>\n\n<div>\n\t<button (click)=\"redirect()\"> Play </button>\n\t<p> Click the button above to start the trivia game! </p>\n</div>\n\n\n<table>\n\t<tr>\n\t\t<th> Name </th>\n\t\t<th> Score </th>\n\t\t<th> Percentage </th>\n\t</tr>\n\n\t<tr *ngFor=\"let score of scores\">\n\t\t<td> {{score.user}} </td>\n\t\t<td> {{score.score}} /3 </td>\n\t\t<td> {{score.score/3 * 100 | number: '1.2-2'}} % </td>\n\t</tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function DashboardComponent(_gameService, _router) {
        this._gameService = _gameService;
        this._router = _router;
        this.user = "";
        this.scores = [];
        this.message = "";
    }
    DashboardComponent.prototype.getMessage = function () {
        var _this = this;
        this._gameService.getMessage()
            .then(function (data) {
            _this.message = data;
        })
            .catch(function (err) {
            console.log("err");
        });
    };
    DashboardComponent.prototype.getScore = function () {
        var _this = this;
        this._gameService.getScore()
            .then(function (data) {
            _this.scores = data;
        })
            .catch(function (err) {
            console.log("err");
        });
    };
    DashboardComponent.prototype.getUser = function () {
        var _this = this;
        this._gameService.getUser()
            .then(function (data) {
            if (data) {
                _this.user = data;
            }
            else {
                _this.login();
            }
        })
            .catch(function (err) {
            console.log("err");
        });
    };
    DashboardComponent.prototype.login = function () {
        var _this = this;
        this.user = prompt("Please enter your name", "name");
        this._gameService.login(this.user)
            .then(function (data) {
            alert("Welcome! " + _this.user);
        })
            .catch(function (err) {
            console.log("err");
        });
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this._gameService.logout()
            .then(function (data) {
            _this.login();
        })
            .catch(function (err) {
            console.log("err");
        });
    };
    DashboardComponent.prototype.redirect = function () {
        this._router.navigate(['lets_play']);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getScore();
        this.getMessage();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameService = (function () {
    function GameService(_http) {
        this._http = _http;
    }
    GameService.prototype.login = function (user) {
        return this._http.post('/login', { user: user }).map(function (Response) { return Response.json(); }).toPromise();
    };
    GameService.prototype.logout = function () {
        return this._http.get('/logout').map(function (Response) { return Response.json(); }).toPromise();
    };
    GameService.prototype.getUser = function () {
        return this._http.get('/getUser').map(function (Response) { return Response.json(); }).toPromise();
    };
    GameService.prototype.getMessage = function () {
        return this._http.get('/getMessage').map(function (Response) { return Response.json(); }).toPromise();
    };
    GameService.prototype.createQ = function (newQ) {
        return this._http.post('/createQ', newQ).map(function (Response) { return Response.json(); }).toPromise();
    };
    GameService.prototype.getQuestions = function () {
        return this._http.get('/getQuestions').map(function (Response) { return Response.json(); }).toPromise();
    };
    GameService.prototype.marking = function (score) {
        return this._http.post('/marking', { score: score }).map(function (Response) { return Response.json(); }).toPromise();
    };
    GameService.prototype.getScore = function () {
        return this._http.get('/getScore').map(function (Response) { return Response.json(); }).toPromise();
    };
    return GameService;
}());
GameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GameService);

var _a;
//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ "../../../../../src/app/play/play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Hi {{ user }} ! </h2>\n\n<p> Choose an answer for each of the questions and submit the test once done. Good Luck! </p>\n\n<form (submit)=\"marking(myAns)\" #playForm=\"ngForm\">\n\n<div>\n\t<p>  1. {{ questions[0].question }} </p>\n\n  <input type=\"radio\" name=\"q1\" [(ngModel)]=\"myAns[0]\" value=0> \n  {{questions[0].options[0].ans}}<br>\n  <input type=\"radio\" name=\"q1\" [(ngModel)]=\"myAns[0]\" value=1> \n  {{questions[0].options[1].ans}}<br>\n  <input type=\"radio\" name=\"q1\" [(ngModel)]=\"myAns[0]\" value=2> \n  {{questions[0].options[2].ans}}<br>\n</div>\n\n<div>\n\t<p>  2. {{ questions[1].question }} </p>\n\n  <input type=\"radio\" name=\"q2\" [(ngModel)]=\"myAns[1]\" value=0> \n  {{questions[1].options[0].ans}}<br>\n  <input type=\"radio\" name=\"q2\" [(ngModel)]=\"myAns[1]\" value=1> \n  {{questions[1].options[1].ans}}<br>\n  <input type=\"radio\" name=\"q2\" [(ngModel)]=\"myAns[1]\" value=2> \n  {{questions[1].options[2].ans}}<br>\n</div>\n\n<div>\n\t<p>  3. {{ questions[2].question }} </p>\n\n  <input type=\"radio\" name=\"q3\" [(ngModel)]=\"myAns[2]\" value=0> \n  {{questions[2].options[0].ans}}<br>\n  <input type=\"radio\" name=\"q3\" [(ngModel)]=\"myAns[2]\" value=1> \n  {{questions[2].options[1].ans}}<br>\n  <input type=\"radio\" name=\"q3\" [(ngModel)]=\"myAns[2]\" value=2> \n  {{questions[2].options[2].ans}}<br>\n</div>\n\n\n<p *ngIf=\"!(myAns[0] && myAns[1] && myAns[2])\"> Please answer ALL questions </p>\n\n\n<button type=\"reset\"> Cancel </button>\n<button type=\"submit\" [disabled]=\"!(myAns[0] && myAns[1] && myAns[2])\"> Submit </button>\n\n\n\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Option = (function () {
    function Option(ans, correct) {
        if (ans === void 0) { ans = ""; }
        if (correct === void 0) { correct = false; }
        this.ans = ans;
        this.correct = correct;
    }
    return Option;
}());
var Question = (function () {
    function Question(question, options) {
        if (question === void 0) { question = ""; }
        if (options === void 0) { options = []; }
        this.question = question;
        this.options = options;
    }
    return Question;
}());
var PlayComponent = (function () {
    function PlayComponent(_gameService, _router) {
        this._gameService = _gameService;
        this._router = _router;
        this.user = "";
        this.questions = [];
        this.myAns = [];
        this.correctAns = [];
    }
    PlayComponent.prototype.getUser = function () {
        var _this = this;
        this._gameService.getUser()
            .then(function (data) {
            if (data) {
                _this.user = data;
            }
            else {
                alert("Please login first");
                _this._router.navigateByUrl('/');
            }
        })
            .catch(function (err) {
            console.log("err");
        });
    };
    PlayComponent.prototype.getQuestions = function () {
        var _this = this;
        this._gameService.getQuestions()
            .then(function (data) {
            if (data.length < 3) {
                alert("Please create more questions first");
                _this._router.navigate(['new_question']);
            }
            else {
                console.log(data);
                _this.questions = data;
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    PlayComponent.prototype.marking = function (myAns) {
        var _this = this;
        var score = 0;
        for (var i = 0; i < 3; i++) {
            myAns[i] = Number(myAns[i]);
            for (var j = 0; j < 3; j++) {
                if (this.questions[i].options[j].correct) {
                    if (myAns[i] == j) {
                        score++;
                    }
                }
            }
        }
        console.log(myAns);
        console.log(score);
        this._gameService.marking(score)
            .then(function (data) {
            _this._router.navigate(['']);
        })
            .catch(function (err) {
            console.log("err");
        });
    };
    PlayComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getQuestions();
    };
    return PlayComponent;
}());
PlayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-play',
        template: __webpack_require__("../../../../../src/app/play/play.component.html"),
        styles: [__webpack_require__("../../../../../src/app/play/play.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PlayComponent);

var _a, _b;
//# sourceMappingURL=play.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map