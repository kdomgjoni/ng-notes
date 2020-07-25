import { Injectable } from '@angular/core';
import { ICard } from './card.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  getRandomNumber() {
    return Math.floor(Math.random() * 10000);
  }

  cards: ICard[] = [{
    content: 'content 1',
    id: this.getRandomNumber(),
  }, {
    content: 'Content 2',
    id: this.getRandomNumber(),
  }, {
    content: 'Content 3',
    id: this.getRandomNumber(),
  }];

  constructor() { }

  cards$ = new BehaviorSubject<ICard[]>(this.cards);


  addCard(card: ICard){
    this.cards = [
      ...this.cards,{
        ...card,
        id: this.getRandomNumber()
      }
    ];
    this.cards$.next(this.cards);
  }

  removeCard(id){

    const index = this.cards.findIndex(card => card.id === id);
    console.log(index);
    this.cards = [
      ...this.cards.slice(0, index),
      ...this.cards.slice(index + 1),
    ];
    this.cards$.next(this.cards);
  }

  getCard(id){
    const card = this.cards.find(cards => cards.id === id);
    return card;
  }

}
