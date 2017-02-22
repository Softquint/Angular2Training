import { Component } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/DataService';

@Component({
  selector: 'my-app',
  template: ` <h1>Master Detail Component</h1>
              <nav>
                <a routerLink='/list'>List</a>
              </nav>
              <router-outlet></router-outlet>`,
  providers: [DataService]
})
export class AppComponent {
}