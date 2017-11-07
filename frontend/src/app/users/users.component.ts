import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';

import { Component, OnInit } from '@angular/core';
import { ApiService, User} from '../api.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users$:  Observable<User[]>;

  columns = ['name', 'email', 'age'];
  dataSource: UsersDataSource;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.users$ = this.apiService.dataList;
    this.apiService.get().subscribe();
    this.dataSource = new UsersDataSource(this.users$);
  }
}

export class UsersDataSource extends DataSource<User> {
  constructor(private users: Observable<User[]>) {
    super();
  }
   /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<User[]> {
    return this.users;
  }

  disconnect() {}

}
