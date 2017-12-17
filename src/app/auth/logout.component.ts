import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { User } from './../user';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
    template: ''
})
export class LogoutComponent implements OnInit {
    constructor(private router: Router){
    }

    ngOnInit(){
        localStorage.clear();
        this.router.navigateByUrl('/list');
    }
}
