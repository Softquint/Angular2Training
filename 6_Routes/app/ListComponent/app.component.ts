import { Component } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/DataService';

@Component({
  template: ` <h1>List Component</h1>
              <div class="options">
                <div class="options">
                  <a routerLink="/quote" *ngFor="let author of list" (click)="selectQuote(author)" 
                    class="{{isSelected(author) && 'selected' || '' }}">{{author.name}}</a>
                </div>
                <hr/>
                <div class="options">
                  <a [routerLink]="['/quote', author.name]" *ngFor="let author of list" (click)="selectQuote(author)" 
                    class="{{isSelected(author) && 'selected' || '' }}">{{author.name}}</a>
                </div>

              </div>`,
  styleUrls: ['app/ListComponent/app.component.css']
})
export class ListComponent {
  list: Array<Author>;
  selectedAuthor: Author;
  constructor(private dService: DataService) { }

  // ngOnInit() {
  //   this.list = this.dService.getAuthors();
  // }
  ngOnInit() {
    this.dService.getAuthors().then((results) => this.list = results);
  }

  selectQuote(a) {
    this.dService.setSelectedAuthor(a);
    this.selectedAuthor = this.dService.getSelectedAuthor();
  }

  isSelected(author) {
    return this.selectedAuthor === author;
  }
}