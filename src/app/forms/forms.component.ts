import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardService } from '../card.service';
import { ICard } from '../card.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @ViewChild('flashForm', { static: false }) flashForm: NgForm;

  notes: ICard = {
    content: '',
    id: 0
  }

  editingId: number;
  editing = true;

  constructor(private cardService: CardService) { }


  ngOnInit() {

  }

  saveNote(){
    this.cardService.addCard(this.notes);
  }

  editNote(id){
    this.notes = this.cardService.getCard(id);
    this.editingId = id;
    this.editing = false;
  }

  updateNote(){
    this.cardService.updateCard(this.editingId, this.notes);
    this.editing = true;
  }


}
