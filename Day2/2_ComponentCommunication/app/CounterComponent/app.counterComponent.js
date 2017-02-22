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
var CounterComponent = (function () {
    function CounterComponent() {
        this.count = 0;
        this._clickCount = 0;
        this.onMax = new core_1.EventEmitter();
        this.flag = false;
        this.countby = 1;
    }
    Object.defineProperty(CounterComponent.prototype, "clickCount", {
        get: function () {
            return this._clickCount;
        },
        set: function (value) {
            this._clickCount = value;
            if (this._clickCount > 9) {
                this.flag = true;
                this.onMax.emit(true);
            }
            else {
                this.flag = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    CounterComponent.prototype.reset = function () {
        this.clickCount = 0;
        this.count = 0;
        this.onMax.emit(false);
    };
    CounterComponent.prototype.manageClickCount = function () {
        this.clickCount += 1;
    };
    CounterComponent.prototype.inc = function () {
        this.count += this.countby;
        this.manageClickCount();
    };
    CounterComponent.prototype.dec = function () {
        this.count -= this.countby;
        this.manageClickCount();
    };
    return CounterComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CounterComponent.prototype, "onMax", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CounterComponent.prototype, "countby", void 0);
CounterComponent = __decorate([
    core_1.Component({
        selector: 'counter',
        templateUrl: 'app/CounterComponent/app.counterComponent.html'
    })
], CounterComponent);
exports.CounterComponent = CounterComponent;
