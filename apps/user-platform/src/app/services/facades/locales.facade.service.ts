import { Injectable } from '@angular/core';
import { LocalesFirestoreService } from '../firestore/locales.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class LocalesFacadeService {
  constructor(
    private readonly localesFirestoreService: LocalesFirestoreService
  ) {}

  public createLocale(data) {
    this.localesFirestoreService.createLocale(data);
  }

  public getLocale(documentId: string) {
    this.localesFirestoreService.getLocale(documentId);
  }

  public getLocales() {
    this.localesFirestoreService.getLocales();
  }

  public updateLocale(documentId: string, data) {
    this.localesFirestoreService.updateLocale(documentId, data);
  }
}
