import { Injectable } from '@angular/core';
import { CardTypesFirestoreService } from '../firestore/card-types.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class CardTypesFacadeService {
  constructor(
    private readonly cardTypesFirestoreService: CardTypesFirestoreService
  ) {}

  public createCardType(data) {
    this.cardTypesFirestoreService.createCardType(data);
  }

  public getCardType(documentId: string) {
    this.cardTypesFirestoreService.getCardType(documentId);
  }

  public getCardTypes() {
    this.cardTypesFirestoreService.getCardTypes();
  }

  public updateCardType(documentId: string, data) {
    this.cardTypesFirestoreService.updateCardType(documentId, data);
  }
}
