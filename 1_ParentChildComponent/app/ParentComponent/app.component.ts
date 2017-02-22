import { Component } from '@angular/core';
import { Author } from '../Models/app.author';

@Component({
  selector: 'my-app',
  template: ` <h1>Master Detail Component</h1>
              <div class="options">
                <div class="options">
                  <a *ngFor="let author of list" (click)="selectQuote(author)" 
                    class="{{isSelected(author) && 'selected' || '' }}">{{author.name}}</a>
                </div>
                <s-quote [sAuthor]="selectedAuthor"></s-quote>
              </div>`,
  styleUrls: ['app/ParentComponent/app.component.css']
})
export class AppComponent {
  list: Array<Author>;
  selectedAuthor: Author;
  constructor() {
    var fowler = {
      name: "Fowler",
      quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
    },
      twain = {
        name: "Twain",
        quote: "Why, I have known clergymen, good men, kind-hearted, liberal, sincere, and all that, who did not know the meaning of a 'flush.' It is enough to make one ashamed of one's species."
      },
      poe = {
        name: "Poe",
        quote: "Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before."
      },
      plato = {
        name: "Plato",
        quote: "All things will be produced in superior quantity and quality, and with greater ease, when each man works at a single occupation, in accordance with his natural gifts, and at the right moment, without meddling with anything else. "
      };

    this.list = [twain, fowler, poe, plato];
  }

  selectQuote(a){
    this.selectedAuthor = a;
  }

  isSelected(author)
  {
    return this.selectedAuthor === author;
  }
}