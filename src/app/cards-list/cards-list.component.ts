import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  constructor(public authService: AuthService) { }

  public status = this.authService.isAuthorized;

  ngOnInit() {
  }

  refreshCards : Function;

  cartAddEvent(event) {
    console.log(event);
    this.refreshCards();
  }

  refresh(event) {
    console.log('REFRESH',event, typeof event);
    this.refreshCards = event; 
  }
}
