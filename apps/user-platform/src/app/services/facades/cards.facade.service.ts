import { Injectable } from '@angular/core';
import { CardsFirestoreService } from '../firestore/cards.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class CardsFacadeService {
  constructor(private readonly cardsFirestoreService: CardsFirestoreService) {}

  public createCard(data) {
    this.cardsFirestoreService.createCard(data);
  }

  public getCard(documentId: string) {
    this.cardsFirestoreService.getCard(documentId);
  }

  public getCards() {
    this.cardsFirestoreService.getCards();
  }

  public updateCard(documentId: string, data) {
    this.cardsFirestoreService.updateCard(documentId, data);
  }
}
