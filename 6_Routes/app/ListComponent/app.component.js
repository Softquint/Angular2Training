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
var ListComponent = (function () {
    function ListComponent(dService) {
        this.dService = dService;
    }
    // ngOnInit() {
    //   this.list = this.dService.getAuthors();
    // }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dService.getAuthors().then(function (results) { return _this.list = results; });
    };
    ListComponent.prototype.selectQuote = function (a) {
        this.dService.setSelectedAuthor(a);
        this.selectedAuthor = this.dService.getSelectedAuthor();
    };
    ListComponent.prototype.isSelected = function (author) {
        return this.selectedAuthor === author;
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        template: " <h1>List Component</h1>\n              <div class=\"options\">\n                <div class=\"options\">\n                  <a routerLink=\"/quote\" *ngFor=\"let author of list\" (click)=\"selectQuote(author)\" \n                    class=\"{{isSelected(author) && 'selected' || '' }}\">{{author.name}}</a>\n                </div>\n                <hr/>\n                <div class=\"options\">\n                  <a [routerLink]=\"['/quote', author.name]\" *ngFor=\"let author of list\" (click)=\"selectQuote(author)\" \n                    class=\"{{isSelected(author) && 'selected' || '' }}\">{{author.name}}</a>\n                </div>\n\n              </div>",
        styleUrls: ['app/ListComponent/app.component.css']
    }),
    __metadata("design:paramtypes", [DataService_1.DataService])
], ListComponent);
exports.ListComponent = ListComponent;
