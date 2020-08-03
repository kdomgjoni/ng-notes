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
    this.archives$ = this.cardService.cards$;
   }

   trackByCardId(index, card) {
    return card.id;
  }

   handleArchiveDelete(card){
     this.cardService.removeCard(card.id);
   }



   handleBack(card){
    this.cardService.isCardArchive(card);
   }

  ngOnInit() {
  }

}
