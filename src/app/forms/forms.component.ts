import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardService } from '../card.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @ViewChild('flashForm', { static: false }) flashForm: NgForm;

  notes = {
    content: ''
  }

  constructor(private cardService: CardService) { }


  ngOnInit() {

  }

  saveNote(){
    this.cardService.addCard(this.notes);
  }

  editNote(id: number){
    this.notes = this.cardService.getCard(id);
  }

}
