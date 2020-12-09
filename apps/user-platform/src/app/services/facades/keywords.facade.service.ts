import { Injectable } from '@angular/core';
import { KeywordsFirestoreService } from '../firestore/keywords.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class KeywordsFacadeService {
  constructor(
    private readonly guideFirestoreService: KeywordsFirestoreService
  ) {}

  public createKeyword(data) {
    this.guideFirestoreService.createKeyword(data);
  }

  public getKeyword(documentId: string) {
    this.guideFirestoreService.getKeyword(documentId);
  }

  public getKeywords() {
    this.guideFirestoreService.getKeywords();
  }

  public updateKeyword(documentId: string, data) {
    this.guideFirestoreService.updateKeyword(documentId, data);
  }
}
