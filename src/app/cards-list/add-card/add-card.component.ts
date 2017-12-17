import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

import { Card } from './../../card';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { User } from '../../user';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {
  @Output() cardAddEvent : EventEmitter<any> = new EventEmitter<any>();
  cards: Card[];
  aUser: string = localStorage.getItem("login");
  
  constructor(
    private cardService: CardService
  ) {}

  ngOnInit() {

  }

  add(content: string): void { 
    if(!content) {return; }
    this.cardService.addCard({ content } as Card)
      .subscribe((res) => {
        this.cardAddEvent.emit(res);
        console.log('Log added',res);
      })
  }

  
  
}
