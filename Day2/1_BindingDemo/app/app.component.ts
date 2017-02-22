import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <my-list></my-list>
                <hr/>
                <h1>Property Binding</h1>
                <h2>Hi, {{message}}</h2>
                <h2 innerHtml="{{message}}">Hi, </h2>
                <h2 bind-innerHtml="message">Hi, </h2>
                <h2 [innerHtml]="message">Hi, </h2>
                <input type="text" value="{{message}}"/>
                <input type="text" bind-value="message"/>
                <input type="text" [value]="message"/>

                <hr/>
                <h1>Event Binding</h1>
                <button on-click="change()">Click to Change</button>
                <button [disabled]="!message" class="btn btn-danger" (click)="change()">Click to Change</button>
                <hr/>
                <h1>Two Way Binding</h1>
                <input type="text" bindon-ngModel="message">
                <input type="text" [(ngModel)]="message">
                <input type="text" [(ngModel)]="name" (change)="check(name)">
                <h3>Hello, {{name}}</h3>`
})
export class AppComponent {
    message: string = "Hello World!";
    pList: Array<string> = ["Ram", "Praveen", "Subodh"];
    change(){
        this.message = "I am Changed, at : " + new Date().toLocaleTimeString();
    }

    check(n){
        this.message = "Hello, " + n;
    }
}