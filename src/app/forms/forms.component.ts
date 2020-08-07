import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { CardService } from '../card.service';
import { ICard } from '../card.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @ViewChild('cardForm', { static: false }) cardForm: NgForm;

  notes: ICard = {
    content: '',
    id: 0,
    isArchive: false
  }
  newForm : FormGroup;

  editingId: number;
  editing = true;

  constructor(private cardService: CardService) { }


  ngOnInit() {

  }

  saveNote(){
    this.cardService.addCard(this.notes);
    this.clearNote();
  }

  editNote(id){
    this.notes = this.cardService.getCard(id);
    this.editingId = id;
    this.editing = false;
  }

  updateNote(){
    this.cardService.updateCard(this.editingId, this.notes);
    this.editing = true;
    this.clearNote();
  }

  clearNote(){
    this.notes = {
      content: '',
      id: 0,
      isArchive: false
    }
  }

}
