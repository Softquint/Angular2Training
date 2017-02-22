import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <h2 class="alert alert-danger">{{message}}</h2>
                <counter [countby]=10 (onMax)="maxedOut($event)" #c1></counter>
                <button (click)="c1.reset()" class="btn btn-danger">Reset Counter</button>
                <hr/>
                <my-dlist [personList]=pList></my-dlist>`
})
export class AppComponent {
    message: string;
    maxedOut(flag:boolean){
        if(flag)
            this.message = "No More Clicks Available, Reset to Countinue....";
        else
            this.message = "";
    }
    pList: Array<string> = ["Ram", "Praveen", "Subodh"];
}