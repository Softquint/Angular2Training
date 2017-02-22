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
var AppComponent = (function () {
    function AppComponent() {
        var fowler = {
            name: "Fowler",
            quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
        }, twain = {
            name: "Twain",
            quote: "Why, I have known clergymen, good men, kind-hearted, liberal, sincere, and all that, who did not know the meaning of a 'flush.' It is enough to make one ashamed of one's species."
        }, poe = {
            name: "Poe",
            quote: "Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before."
        }, plato = {
            name: "Plato",
            quote: "All things will be produced in superior quantity and quality, and with greater ease, when each man works at a single occupation, in accordance with his natural gifts, and at the right moment, without meddling with anything else. "
        };
        this.list = [twain, fowler, poe, plato];
    }
    AppComponent.prototype.selectQuote = function (a) {
        this.selectedAuthor = a;
    };
    AppComponent.prototype.isSelected = function (author) {
        return this.selectedAuthor === author;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " <h1>Master Detail Component</h1>\n              <div class=\"options\">\n                <div class=\"options\">\n                  <a *ngFor=\"let author of list\" (click)=\"selectQuote(author)\" \n                    class=\"{{isSelected(author) && 'selected' || '' }}\">{{author.name}}</a>\n                </div>\n                <s-quote [sAuthor]=\"selectedAuthor\"></s-quote>\n              </div>",
        styleUrls: ['app/ParentComponent/app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
