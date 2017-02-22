import { Component } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/DataService';

@Component({
  selector: 'my-app',
  template: ` <h1>Master Detail Component</h1>
              <my-list></my-list>
              <s-quote></s-quote>`,
  providers: [DataService]
})
export class AppComponent {
}