import { Component, Input } from '@angular/core';
import { Author } from '../Models/app.author';

@Component({
  selector: 's-quote',
  template: ` <h2>Quote Area</h2>
                <div class="padtop">
                    <textarea readonly *ngIf="sAuthor">{{sAuthor.quote}}</textarea>
                </div>
              `,
   styleUrls:['app/ChildComponent/app.child.css']
})
export class ChildComponent {
    @Input() sAuthor: Author;
}