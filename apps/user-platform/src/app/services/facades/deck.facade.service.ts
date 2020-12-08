import { Injectable } from '@angular/core';
import { DeckFirestoreService } from '../firestore/deck.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class DeckFacadeService {
  constructor(private readonly deckFirestoreService: DeckFirestoreService) {}

  public createDeck(data) {
    this.deckFirestoreService.createDeck(data);
  }

  public getDeck(documentId: string) {
    this.deckFirestoreService.getDeck(documentId);
  }

  public getDecks() {
    this.deckFirestoreService.getDecks();
  }

  public updateDeck(documentId: string, data) {
    this.deckFirestoreService.updateDeck(documentId, data);
  }
}
