import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
import { element } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { exists } from 'fs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AuthService {

    private usersUrl = 'api/users';

    constructor(
        private http: HttpClient
    ) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.usersUrl, user, httpOptions);
    }

    checkExist(user: User): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            this.getUsers().subscribe(function(users){
                let existsUser = users.find(el => {
                    if(el.login === user.login){
                        return true
                    }
                })
                if (existsUser === null || existsUser === undefined) {
                    resolve(true);
                } else {
                    reject('User exist')
                }
            })
        });
        return promise;
    }

    auth(user: User): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            this.getUsers().subscribe(function(users){
                console.log(users);
                let authUser = users.filter(el => {
                    if (el.login == user.login && el.password == user.password)
                        return true
                })
                if (authUser.length === 0) {
                   resolve({ status : 401, message : 'Bad login password'})
                } else {
                    localStorage.setItem('currentUser', JSON.stringify(authUser));
                    resolve({ status : 200, message : authUser});
                }
            })
          });
      return promise;
    }

    logout(): boolean {
        localStorage.clear();
        return true;
    }

    isAuthorized(): boolean {
        if(localStorage.getItem('currentUser')) {
            return true;
        }else {
            return false;
        }
    }
}