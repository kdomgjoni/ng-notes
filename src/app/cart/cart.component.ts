import { Component, OnInit, Input } from '@angular/core';
import { CardService } from '../card.service';
import { ICard } from '../card.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cards$;


  constructor(private cardService: CardService) {

    this.cards$ = cardService.cards$;

  }

  ngOnInit() {
  }

  trackByCardId(index, card) {
    return card.id;
  }

  handleDelete(card){
    this.cardService.removeCard(card.id);
  }

}
