import { Injectable } from '@angular/core';
import { LocalesFirestoreService } from '../firestore/locales.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class LocalesFacadeService {
  constructor(private readonly deckFirestoreService: LocalesFirestoreService) {}

  public createLocale(data) {
    this.deckFirestoreService.createLocale(data);
  }

  public getLocale(documentId: string) {
    this.deckFirestoreService.getLocale(documentId);
  }

  public getLocales() {
    this.deckFirestoreService.getLocales();
  }

  public updateLocale(documentId: string, data) {
    this.deckFirestoreService.updateLocale(documentId, data);
  }
}
