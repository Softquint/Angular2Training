import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-dlist',
    template: ` <h2>Data List of Person</h2>
                <h3>Selected Person: {{sPerson}}</h3>
                <ul>
                    <li *ngFor="let item of personList">
                        <a href="http://www.google.com" (click)="select($event,item)">{{item}}</a>
                    </li>
                </ul>`
})
export class DataListComponent {
    @Input() personList:Array<string>;
    sPerson: string;
    select(evt, item: string) {
        evt.preventDefault();
        this.sPerson = item;
    }
}