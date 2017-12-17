import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { User } from './../user';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  users: User[];

  constructor(
    private authService: AuthService,
    private router: Router) {
      let aUser = this.authService.isAuthorized();
      console.log(aUser);
     }

  ngOnInit() {
    this.getUsers();
    this.authService.isAuthorized();
  }

  getUsers(): void {
    this.authService.getUsers()
      .subscribe(users => this.users = users);
  }

  add(login: string, password: string): void {
    login = login.trim();
    password = password.trim();
    if(!login || !password) { return alert("Error"); }
    this.authService.checkExist({login, password})
      .then((res) =>{
        if(res !== undefined){
          this.authService.addUser({login, password} as User)
          .subscribe(result => {
            alert('New user '+login+' created! Press Login.')
            console.log(result);
          })
        }
      }).catch((err) => {
        console.log(err);
      })
  }

  login(login: string, password: string){
    this.authService.auth({login: login, password: password})
    .then(res => {
      console.log(res, typeof res);
      if (res.status === 200) {
        this.router.navigateByUrl('/list');
      } else {
        alert(res.message);
        //TODO rewrite this part
      }
    })
  }
}
