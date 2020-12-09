import { Injectable } from '@angular/core';
import { DecksFirestoreService } from '../firestore/decks.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class DecksFacadeService {
  constructor(private readonly deckFirestoreService: DecksFirestoreService) {}

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
