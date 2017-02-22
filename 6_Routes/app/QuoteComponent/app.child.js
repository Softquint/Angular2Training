"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var DataService_1 = require("../Services/DataService");
var router_1 = require("@angular/router");
require("rxjs/Rx");
var QuoteComponent = (function () {
    function QuoteComponent(dService, route) {
        this.dService = dService;
        this.route = route;
    }
    QuoteComponent.prototype.get = function () {
        this.sAuthor = this.dService.getSelectedAuthor();
    };
    QuoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (prms) { return prms['id']; }).subscribe(function (id) { _this.aName = id; });
    };
    return QuoteComponent;
}());
QuoteComponent = __decorate([
    core_1.Component({
        template: " <h2>Quote Component - {{aName}}</h2>\n                <div class=\"padtop\">\n                    <textarea readonly *ngIf=\"sAuthor\">{{sAuthor.quote}}</textarea>\n                </div>\n                <button (click)=\"get()\">Get Quote</button>\n              ",
        styleUrls: ['app/QuoteComponent/app.child.css']
    }),
    __metadata("design:paramtypes", [DataService_1.DataService, router_1.ActivatedRoute])
], QuoteComponent);
exports.QuoteComponent = QuoteComponent;
