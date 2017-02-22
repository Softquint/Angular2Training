import { Component } from '@angular/core';
import { DataService } from './app.dataService';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: ` <h2>List of Posts</h2> 
                <ul *ngIf="posts && posts.length">
                    <li *ngFor="let post of posts">
                        <h2>{{post.id}}</h2>
                        <h3>{{post.title | uppercase}}</h3>
                        <p>{{post.body}}</p>
                        <hr/>
                    </li>
                </ul>`,
    providers: [DataService]
})
export class AppComponent {
    posts: any[];
    constructor(private _dService: DataService) { }
    ngOnInit() {
        this._dService.getPosts().subscribe(results => this.posts = results);
    }
}