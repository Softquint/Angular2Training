import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: 'app/CounterComponent/app.counterComponent.html'
})
export class CounterComponent {
    count: number = 0;
    _clickCount: number = 0;

    @Output() onMax = new EventEmitter<boolean>();

    get clickCount(){
        return this._clickCount;
    }

    set clickCount(value: number) {
        this._clickCount = value;
        if (this._clickCount > 9) {
            this.flag = true;
            this.onMax.emit(true);
        }
        else{
            this.flag = false;
        }
    }
    flag: boolean = false;
    @Input() countby: number = 1;
    private reset() {
        this.clickCount = 0;
        this.count = 0;
         this.onMax.emit(false);
    }
    manageClickCount() {
        this.clickCount += 1;
    }
    private inc() {
        this.count += this.countby;
        this.manageClickCount();
    }
    private dec() {
        this.count -= this.countby;
        this.manageClickCount();
    }
}