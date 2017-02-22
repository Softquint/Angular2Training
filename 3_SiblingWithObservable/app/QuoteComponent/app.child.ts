import { Component, Input } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/DataService';

@Component({
  selector: 's-quote',
  template: ` <h2>Quote Component</h2>
                <div class="padtop">
                    <textarea readonly *ngIf="sAuthor">{{sAuthor.quote}}</textarea>
                </div>
              `,
   styleUrls:['app/QuoteComponent/app.child.css']
})
export class QuoteComponent {
    sAuthor: Author;

    constructor(private dService:DataService){
        dService.selectedAuthorChanged.subscribe(()=>{
            this.sAuthor = this.dService.getSelectedAuthor();
        })
    }
}