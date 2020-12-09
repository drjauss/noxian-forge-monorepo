import { Injectable } from '@angular/core';
import { VocabTermsFirestoreService } from '../firestore/vocab-terms.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class VocabTermsFacadeService {
  constructor(
    private readonly guideFirestoreService: VocabTermsFirestoreService
  ) {}

  public createVocabTerm(data) {
    this.guideFirestoreService.createVocabTerm(data);
  }

  public getVocabTerm(documentId: string) {
    this.guideFirestoreService.getVocabTerm(documentId);
  }

  public getVocabTerms() {
    this.guideFirestoreService.getVocabTerms();
  }

  public updateVocabTerm(documentId: string, data) {
    this.guideFirestoreService.updateVocabTerm(documentId, data);
  }
}
