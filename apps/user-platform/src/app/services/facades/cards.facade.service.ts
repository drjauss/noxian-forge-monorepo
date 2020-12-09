import { Injectable } from '@angular/core';
import { CardsFirestoreService } from '../firestore/cards.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class CardsFacadeService {
  constructor(private readonly deckFirestoreService: CardsFirestoreService) {}

  public createCard(data) {
    this.deckFirestoreService.createCard(data);
  }

  public getCard(documentId: string) {
    this.deckFirestoreService.getCard(documentId);
  }

  public getCards() {
    this.deckFirestoreService.getCards();
  }

  public updateCard(documentId: string, data) {
    this.deckFirestoreService.updateCard(documentId, data);
  }
}
