import { Component, Input } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/DataService';
import { ActivatedRoute } from '@angular/router';
import "rxjs/Rx";

@Component({
    template: ` <h2>Quote Component - {{aName}}</h2>
                <div class="padtop">
                    <textarea readonly *ngIf="sAuthor">{{sAuthor.quote}}</textarea>
                </div>
                <button (click)="get()">Get Quote</button>
              `,
    styleUrls: ['app/QuoteComponent/app.child.css']
})
export class QuoteComponent {
    sAuthor: Author;
    aName: string;

    constructor(private dService: DataService, private route: ActivatedRoute) { }
    get() {
        this.sAuthor = this.dService.getSelectedAuthor();
    }

    ngOnInit() {
        this.route.params.map(prms => prms['id']).subscribe((id) => { this.aName = id });
    }
}