import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface User { name: string; email: string; age: number; }

@Injectable()
export class ApiService {
    private _dataListSource: BehaviorSubject<User[]> = new BehaviorSubject([]);
    dataList: Observable<User[]> = this._dataListSource
        .asObservable()
        .distinctUntilChanged();


    constructor(private http: Http) {
    }

    get() {
        return this.http.get('http://localhost:3000/users')
        .map(response => {
            return this._dataListSource.next(response.json());
        });
    }

    add(user) {
        this.http.post('http://localhost:3000/add', user)
        .subscribe(resp => {
            return this.get().subscribe();
        });
    }
}
