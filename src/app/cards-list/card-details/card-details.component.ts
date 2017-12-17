import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../card';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  @Input() cardIn: Card;

  private card: any = this.cardIn ? this.cardIn : {};

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCard();
  }

  getCard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getCard(id)
      .subscribe(card => this.card = card);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.cardService.updateCard(this.card)
      .subscribe(() => this.goBack());
  }

}
