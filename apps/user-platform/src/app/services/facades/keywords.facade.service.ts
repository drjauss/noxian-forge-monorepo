import { Injectable } from '@angular/core';
import { KeywordsFirestoreService } from '../firestore/keywords.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class KeywordsFacadeService {
  constructor(
    private readonly keywordsFirestoreService: KeywordsFirestoreService
  ) {}

  public createKeyword(data) {
    this.keywordsFirestoreService.createKeyword(data);
  }

  public getKeyword(documentId: string) {
    this.keywordsFirestoreService.getKeyword(documentId);
  }

  public getKeywords() {
    this.keywordsFirestoreService.getKeywords();
  }

  public updateKeyword(documentId: string, data) {
    this.keywordsFirestoreService.updateKeyword(documentId, data);
  }
}
