import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  archives$;

  totalArch;
  countBadge;


  constructor(public cardService: CardService) {
    //this.archives$ = this.cardService.archives$;

    // this.archives$.subscribe(data => {
    //   this.totalArch = Object.keys(data).length;
    // });
    this.countBadge = this.cardService.activeArchive;
    console.log(this.cardService.activeArchive)
  }

  ngOnInit() {

  }


}
