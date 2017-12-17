import { Component, OnInit } from '@angular/core';

import { Card } from '../../card';
import { CardService } from '../card.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Comment } from './../../comment';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  @Output() refresh : EventEmitter<any> = new EventEmitter<any>();
  cards: Card[];
  comments: Comment[];

  private status = this.authService.isAuthorized;

  constructor(
    private cardService: CardService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.refresh.emit(this.refreshList());
    this.cardService.getCards()
      .subscribe( cards => this.cards = cards);
  }

  refreshList() {
    const that = this;
    return function () {
      that.getCards()
    }
  }

  addComment(name, comment, card, element) {
    if (comment.length <= 0 && name.length <= 0) {
      alert('Emty field');
      return false;
    }
    this.cardService.addComment(name, comment, card)
    element.value = '';
  }

  deleteComment(comment, card) {
    card.comments = card.comments.filter(eachComment => {
      return eachComment.id === comment.id ? false : true;
    })
    this.cardService.updateCard(card)
      .subscribe(result => {
        console.log(result)
      });
  }

  deleteCard(card) {
    this.cardService.deleteCard(card)
      .subscribe(res => {
        console.log(res);
        this.getCards();
      })
  }
}
