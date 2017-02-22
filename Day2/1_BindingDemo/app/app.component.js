"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "Hello World!";
        this.pList = ["Ram", "Praveen", "Subodh"];
    }
    AppComponent.prototype.change = function () {
        this.message = "I am Changed, at : " + new Date().toLocaleTimeString();
    };
    AppComponent.prototype.check = function (n) {
        this.message = "Hello, " + n;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " <my-dlist [personList]=pList></my-dlist>\n                <hr/>\n                <my-list></my-list>\n                <hr/>\n                <h1>Property Binding</h1>\n                <h2>Hi, {{message}}</h2>\n                <h2 innerHtml=\"{{message}}\">Hi, </h2>\n                <h2 bind-innerHtml=\"message\">Hi, </h2>\n                <h2 [innerHtml]=\"message\">Hi, </h2>\n                <input type=\"text\" value=\"{{message}}\"/>\n                <input type=\"text\" bind-value=\"message\"/>\n                <input type=\"text\" [value]=\"message\"/>\n\n                <hr/>\n                <h1>Event Binding</h1>\n                <button on-click=\"change()\">Click to Change</button>\n                <button [disabled]=\"!message\" class=\"btn btn-danger\" (click)=\"change()\">Click to Change</button>\n                <hr/>\n                <h1>Two Way Binding</h1>\n                <input type=\"text\" bindon-ngModel=\"message\">\n                <input type=\"text\" [(ngModel)]=\"message\">\n                <input type=\"text\" [(ngModel)]=\"name\" (change)=\"check(name)\">\n                <h3>Hello, {{name}}</h3>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
