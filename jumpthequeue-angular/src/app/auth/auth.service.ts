import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Visitor } from './models/visitor.model';
import { HttpClient } from '@angular/common/http';
import { FilterVisitor } from './models/filter-visitor.model';
import { Pageable } from './models/pageable.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { QueueDetailCTO } from '../shared/modals/queue-detail-cto.model';
import { QueueDetail } from '../shared/modals/queue-detail.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = true;
  userMail: string;
  userId: string;
  queuesDetail: QueueDetail;
  url = 'http://localhost:8081/services/rest';

  constructor(private route: Router, private http: HttpClient, private snackBar: MatSnackBar) { }

  registerVisitor(visitor: Visitor) {
    return this.http.post<Visitor>(this.url + '/visitormanagement/v1/visitor', visitor);
  }

  getVisitorByUsername(username: string) {
    const filters: FilterVisitor = new FilterVisitor();
    const pageable: Pageable = new Pageable();

    pageable.pageNumber = 0;
    pageable.pageSize = 1;
    pageable.sort = [];
    filters.username = username;
    filters.pageable = pageable;
    return this.http.post<Visitor>(this.url + '/visitormanagement/v1/visitor/search', filters);
  }

  visitorLogin(username: string, password: string){
    // Checks if given username and password are the ones aved in the database
    this.getVisitorByUsername(username).subscribe(
      (visitor) => {
        console.log(visitor['content'][0]);
        if (visitor['content'][0].username === username && visitor['content'][0].password === password) {

          this.login(visitor['content'][0].id, visitor['content'][0].username);
          this.snackBar.open('Logged In', 'Successfully', {
            duration: 2000,
          });

        } else {
          this.snackBar.open('access denied', 'OK', {
            duration: 2000,
          });
        }
      },
      (err: any) => {
        this.snackBar.open('access error', 'OK', {
          duration: 2000,
        });
      },
    );
  }

  fetchJoinedEvents()
  {
    const filters: FilterVisitor = new FilterVisitor();
    const pageable: Pageable = new Pageable();

    pageable.pageNumber = 0;
    pageable.pageSize = 20;
    pageable.sort = [];
    filters.visitorId = this.userId;
    filters.pageable = pageable;
    return this.http.post<QueueDetail>(this.url+ '/queuedetailmanagement/v1/queuedetail/search', filters);
  }

  login(userId: number, userMail: string) {
    this.userMail = userMail;
    this.userId = userId.toString();
    console.log(this.userMail);
    this.isAuthenticated = true;
    localStorage.setItem('LoggedInUserMail', userMail + '#' + userId);
    this.route.navigate(['user/home']);
  }

  logOut() {
    this.isAuthenticated = false;
    localStorage.removeItem('LoggedInUserMail');
    this.route.navigate(['auth']);
  }

  isAuth() {
    return this.isAuthenticated;
  }


  userCheck() {

    const user = localStorage.getItem('LoggedInUserMail');
    console.log(user);
    if (user != null) {
      const x = user.split('#');
      this.userMail = x[0];
      this.userId = x[1];
      this.isAuthenticated = true;
      this.route.navigate(['user']);
    } else {
      this.isAuthenticated = false;
    }
    console.log(this.userId);
    console.log(this.userMail);
  }


}
