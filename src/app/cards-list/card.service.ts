import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Card } from '../card';
import { Comment } from '../comment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable()
export class CardService {

  private cardsUrl = 'api/cards';

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsUrl)
  }

  getCard(id: number): Observable<Card> {
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get<Card>(url);
  }

  updateCard(card: Card): Observable<any> {
    return this.http.put(this.cardsUrl, card, httpOptions);
  }

  addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.cardsUrl, card, httpOptions);
  }

  deleteCard(card: Card): Observable<any> {
    return this.http.delete(this.cardsUrl + "/" + card.id, httpOptions);
  }

  addComment(comment: Comment, card: Card): Observable<any> {
    if (card.comments !== undefined && card.comments !== null && card.comments.length > 0) {
      card.comments.push({id : Math.random(), text: comment});
    } else {
      card.comments = [{id : 1, text: comment}]
    }
    return this.http.put(this.cardsUrl, card, httpOptions);
  }
}
