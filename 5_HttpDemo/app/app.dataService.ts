import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    private url = "https://jsonplaceholder.typicode.com/posts";
    constructor(private _http: Http) { }
    getPosts(): Observable<any> {
        return this._http.get(this.url).map((res: Response) => res.json());
    }
}