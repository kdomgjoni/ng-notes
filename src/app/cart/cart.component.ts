import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

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

}
