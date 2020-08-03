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
    isArchive: false,
  }, {
    content: 'Content 2',
    id: this.getRandomNumber(),
    isArchive: false,
  }, {
    content: 'Content 3',
    id: this.getRandomNumber(),
    isArchive: false,
  }];

  archives = [];
  activeArchive = 0;

  constructor() {
  }

  cards$ = new BehaviorSubject<ICard[]>(this.cards);
  //archives$ = new BehaviorSubject<ICard[]>(this.archives);



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

  updateCard(id, card: ICard){
    const index = this.cards.findIndex(card => card.id === id);
    this.cards = [
      ...this.cards.slice(0, index),
      {
        ...this.cards[index],
        ...this.cards,
      },
      ...this.cards.slice(index + 1),
    ];
    this.cards$.next(this.cards);
  }

  isCardArchive(cardsArch){
    const index = this.cards.findIndex(card => card.id === cardsArch.id);
    this.cards[index].isArchive = cardsArch.isArchive ? false : true;
    this.countActive(cardsArch);
  }

  countActive(cardsArch){
    const index = this.cards.findIndex(card => card.id === cardsArch.id);
    if(this.cards[index].isArchive === true){
      this.activeArchive += 1;
    }else{
      this.activeArchive -= 1;
    }
  }





  // archiveCard(card){
  //   this.archives = [
  //     ...this.archives,{
  //       ...card,
  //       id: this.getRandomNumber()
  //     }
  //   ];
  //   this.archives$.next(this.archives);
  // }

  // removeArchiveCard(id){
  //   const index = this.archives.findIndex(card => card.id === id);
  //   this.archives = [
  //     ...this.archives.slice(0, index),
  //     ...this.archives.slice(index + 1),
  //   ];
  //   this.archives$.next(this.archives);
  // }





}
