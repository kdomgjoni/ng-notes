import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archives$

  constructor(private cardService: CardService) {
    this.archives$ = this.cardService.archives$;
   }

   trackByCardId(index, card) {
    return card.id;
  }

   handleArchiveDelete(card){
     this.cardService.removeArchiveCard(card.id);
   }

   handleBack(card){
    this.cardService.addCard(card);
    this.cardService.removeArchiveCard(card.id);
   }

  ngOnInit() {
  }

}
