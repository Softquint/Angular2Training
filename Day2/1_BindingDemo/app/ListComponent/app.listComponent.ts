import { Component } from '@angular/core';

@Component({
    selector: 'my-list',
    template: ` <h2>List of Person</h2>
                <h3>Selected Person: {{sPerson}}</h3>
                <ul>
                    <li *ngFor="let item of personList">
                        <a href="http://www.google.com" (click)="select($event,item)">{{item}}</a>
                    </li>
                    <hr/>
                    <li template="ngFor let item of personList">
                        <a href="#">{{item}}</a>
                    </li>
                </ul>`
})
export class ListComponent {
    personList: Array<string> = ["Manish", "Ramakant", "Abhijeet"];
    sPerson: string;
    select(evt, item: string) {
        evt.preventDefault();
        this.sPerson = item;
    }
}