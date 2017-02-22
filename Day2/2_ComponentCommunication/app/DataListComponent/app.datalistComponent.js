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
var DataListComponent = (function () {
    function DataListComponent() {
    }
    DataListComponent.prototype.select = function (evt, item) {
        evt.preventDefault();
        this.sPerson = item;
    };
    return DataListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataListComponent.prototype, "personList", void 0);
DataListComponent = __decorate([
    core_1.Component({
        selector: 'my-dlist',
        template: " <h2>Data List of Person</h2>\n                <h3>Selected Person: {{sPerson}}</h3>\n                <ul>\n                    <li *ngFor=\"let item of personList\">\n                        <a href=\"http://www.google.com\" (click)=\"select($event,item)\">{{item}}</a>\n                    </li>\n                </ul>"
    })
], DataListComponent);
exports.DataListComponent = DataListComponent;
