webpackJsonp([3],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rooms_rooms__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingPage = /** @class */ (function () {
    function BookingPage(navCtrl, loadingCtrl, alertCtrl, navParams, roomsProv) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.roomsProv = roomsProv;
        this.room = this.navParams.get('room');
        this.details = this.navParams.get('details');
        this.checkIn = new Date(this.details.from).toString().substr(0, 15);
        this.checkOut = new Date(this.details.to).toString().substr(0, 15);
    }
    BookingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingPage');
    };
    BookingPage.prototype.bookRoom = function () {
        var _this = this;
        var newBooking = {
            _id: this.room._id,
            from: this.checkIn.substr(0, 10),
            to: this.checkOut.substr(0, 10)
        };
        var loading = this.loadingCtrl.create({
            content: 'Processing booking...'
        });
        loading.present();
        this.roomsProv.reserveRoom(newBooking)
            .then(function (res) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Room Booked',
                subTitle: "\n                                          Your booking for " + newBooking.from + " to " + newBooking.to + " was successful\n                                    ",
                buttons: [
                    'Close'
                ]
            });
            alert.present();
            _this.navCtrl.popToRoot();
        }, function (err) {
            console.error("Error booking room: " + err);
        });
    };
    BookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-booking',template:/*ion-inline-start:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\pages\booking\booking.html"*/'<ion-header>\n\n      <ion-navbar color="dark">\n\n            <ion-title>Booking</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n      <ion-card>\n\n            <img src="http://placehold.it/500x500" alt="Room image placeholder" class="header">\n\n            <div class="card-title-container">\n\n                  <p class="card-title">{{room.type}}</p>\n\n            </div>\n\n      </ion-card>\n\n      <ion-list>\n\n            <ion-item>\n\n                  <strong>Check In</strong> {{checkIn}}\n\n            </ion-item>\n\n            <ion-item>\n\n                  <strong>Check Out</strong> {{checkOut}}\n\n            </ion-item>\n\n            <ion-item>\n\n                  <strong>Beds</strong> {{room.beds}}\n\n            </ion-item>\n\n            <ion-item>\n\n                  <strong>Guests</strong> {{details.guests}}\n\n            </ion-item>\n\n            <ion-item>\n\n                  <strong>Cost Per Night</strong> ${{room.cost_per_night | currency: \'GBP\'}}\n\n            </ion-item>\n\n      </ion-list>\n\n      <button ion-button full color="light" (click)="bookRoom()">Book Room</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\pages\booking\booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rooms_rooms__["a" /* RoomsProvider */]])
    ], BookingPage);
    return BookingPage;
}());

//# sourceMappingURL=booking.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rooms_rooms__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__available_rooms_available_rooms__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, loadingCtrl, alertCtrl, roomsProv) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.roomsProv = roomsProv;
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        this.priceRange = {
            lower: 50,
            upper: 500
        };
        this.roomType = 'standard';
        this.guests = 1;
        this.beds = 1;
        this.from = today.toISOString();
        this.to = tomorrow.toISOString();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.findRooms = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Finding rooms...'
        });
        loading.present();
        var options = {
            roomType: this.roomType,
            guests: this.guests,
            beds: this.beds,
            from: this.from,
            to: this.to,
            priceRange: this.priceRange
        };
        this.roomsProv.getRooms(options)
            .then(function (data) {
            loading.dismiss();
            if (typeof (data[0]) === 'undefined') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'No rooms matching your criteria could be found',
                    buttons: [
                        'Okay'
                    ]
                });
                alert_1.present();
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__available_rooms_available_rooms__["a" /* AvailableRoomsPage */], {
                    rooms: data,
                    details: options
                });
            }
        }, function (err) {
            console.log("Error searching for rooms: " + err);
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'search-page',template:/*ion-inline-start:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\pages\search\search.html"*/'<ion-header>\n\n      <ion-navbar color="dark">\n\n            <ion-title>Find a Room</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n      <ion-list no-lines>\n\n            <ion-item>\n\n                  <ion-label><ion-icon name="key"></ion-icon>Room Type</ion-label>\n\n                  <ion-select [(ngModel)]="roomType">\n\n                        <ion-option value="standard">Standard</ion-option>\n\n                        <ion-option value="villa">Villa</ion-option>\n\n                        <ion-option value="penthouse">Penthouse</ion-option>\n\n                        <ion-option value="studio">Studio</ion-option>\n\n                  </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                  <ion-label><ion-icon name="people"></ion-icon>Beds</ion-label>\n\n                  <ion-select [(ngModel)]="beds">\n\n                        <ion-option value="1">1</ion-option>\n\n                        <ion-option value="2">2</ion-option>\n\n                        <ion-option value="3">3</ion-option>\n\n                        <ion-option value="4">4</ion-option>\n\n                        <ion-option value="5">5</ion-option>\n\n                        <ion-option value="6">6</ion-option>\n\n                  </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                  <ion-label><ion-icon name="people"></ion-icon>Guests</ion-label>\n\n                        <ion-select [(ngModel)]="guests">\n\n                              <ion-option value="1">1</ion-option>\n\n                              <ion-option value="2">2</ion-option>\n\n                              <ion-option value="3">3</ion-option>\n\n                              <ion-option value="4">4</ion-option>\n\n                              <ion-option value="5">5</ion-option>\n\n                              <ion-option value="6">6</ion-option>\n\n                              <ion-option value="7">7</ion-option>\n\n                              <ion-option value="8">8</ion-option>\n\n                        </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                  <ion-label><ion-icon name="clock"></ion-icon> Check in</ion-label>\n                  \n                  <ion-datetime displayFormat="DD/MM/YYYY" max="2020-12-31" pickerFormat="DD MM YYYY" [(ngModel)]="from"></ion-datetime>\n\n            </ion-item>\n     \n            <ion-item>\n\n              <ion-label><ion-icon name="alarm"></ion-icon> Check out</ion-label>\n\n              <ion-datetime displayFormat="DD/MM/YYYY" max="2020-12-31" pickerFormat="DD MM YYYY" [(ngModel)]="to"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Cost per night (${{priceRange.lower}} - ${{priceRange.upper}})</ion-label>\n\n                <ion-range max="500" dualKnobs="true" pin="true" [(ngModel)]="priceRange" dark>\n\n                    <ion-icon range-left small name="star-half"></ion-icon>\n\n                    <ion-icon range-right name="star"></ion-icon>\n\n                </ion-range>\n\n            </ion-item>\n            \n      </ion-list>\n\n      <button ion-button full color="light" (click)="findRooms()">Find Rooms</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_rooms_rooms__["a" /* RoomsProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableRoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_booking__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvailableRoomsPage = /** @class */ (function () {
    function AvailableRoomsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rooms = this.navParams.get('rooms');
    }
    AvailableRoomsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvailableRoomsPage');
    };
    AvailableRoomsPage.prototype.bookRoom = function (room) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__booking_booking__["a" /* BookingPage */], {
            room: room,
            details: this.navParams.get('details')
        });
    };
    AvailableRoomsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-available-rooms',template:/*ion-inline-start:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\pages\available-rooms\available-rooms.html"*/'<ion-header>\n \n      <ion-navbar color="dark">\n\n            <ion-title>Available Rooms</ion-title>\n\n      </ion-navbar>\n      \n</ion-header>\n           \n<ion-content>\n\n      <ion-card tappable *ngFor="let room of rooms" (click)="bookRoom(room)">\n\n            <img src="http://placehold.it/500x500" alt="Room placeholder image" class="header">\n\n            <div class="card-title-container">\n\n                  <p class="card-title">{{room.type}}</p>\n\n                  <p class="room-description">\n                        \n                        <ion-icon name="cloud"></ion-icon>{{room.beds}}\n\n                        <ion-icon name="cash"></ion-icon>{{room.cost_per_night | currency: \'GBP\'}}\n\n                        <ion-icon name="people"></ion-icon>{{room.max_occupancy}}\n                  \n                  </p>\n\n            </div>\n\n      </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\pages\available-rooms\available-rooms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AvailableRoomsPage);
    return AvailableRoomsPage;
}());

//# sourceMappingURL=available-rooms.js.map

/***/ }),

/***/ 136:
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
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/available-rooms/available-rooms.module": [
		401,
		2
	],
	"../pages/booking/booking.module": [
		399,
		1
	],
	"../pages/search/search.module": [
		400,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 180;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-page',template:/*ion-inline-start:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\pages\home\home.html"*/'<ion-header>\n\n      <ion-navbar color="dark">\n\n            <ion-title>Hotel Booking</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n      <ion-card>\n      \n            <img src="http://placehold.it/500x500" alt="Header placeholder" class="header">\n\n      </ion-card>\n\n      <p>Welcome to <strong>Hotel Booking</strong></p>\n\n      <button ion-button full color="light" (click)="openSearch()">Find a Room</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_available_rooms_available_rooms__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_booking_booking__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rooms_rooms__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR



// IONIC



// COMPONENTS





// PROVIDERS

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* App */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_available_rooms_available_rooms__["a" /* AvailableRoomsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* App */], {}, {
                    links: [
                        { loadChildren: '../pages/booking/booking.module#BookingPageModule', name: 'BookingPage', segment: 'booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/available-rooms/available-rooms.module#AvailableRoomsPageModule', name: 'AvailableRoomsPage', segment: 'available-rooms', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* App */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_available_rooms_available_rooms__["a" /* AvailableRoomsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_booking_booking__["a" /* BookingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_11__providers_rooms_rooms__["a" /* RoomsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// IONIC



// COMPONENTS

var App = /** @class */ (function () {
    function App(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    App = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Nick\Desktop\hotel-booking-mean-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], App);
    return App;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient } from '@angular/common/http'


var RoomsProvider = /** @class */ (function () {
    function RoomsProvider(http) {
        this.http = http;
        console.log('Hello RoomsProvider Provider');
    }
    RoomsProvider.prototype.getRooms = function (options) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://localhost:8080/api/rooms', JSON.stringify(options), { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }))
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    RoomsProvider.prototype.reserveRoom = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://localhost:8080/api/rooms/reserve', JSON.stringify(data), { headers: headers }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    RoomsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RoomsProvider);
    return RoomsProvider;
}());

//# sourceMappingURL=rooms.js.map

/***/ })

},[243]);
//# sourceMappingURL=main.js.map