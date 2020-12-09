import { Injectable } from '@angular/core';
import { VocabTermsFirestoreService } from '../firestore/vocab-terms.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class VocabTermsFacadeService {
  constructor(
    private readonly vocabTermsFirestoreService: VocabTermsFirestoreService
  ) {}

  public createVocabTerm(data) {
    this.vocabTermsFirestoreService.createVocabTerm(data);
  }

  public getVocabTerm(documentId: string) {
    this.vocabTermsFirestoreService.getVocabTerm(documentId);
  }

  public getVocabTerms() {
    this.vocabTermsFirestoreService.getVocabTerms();
  }

  public updateVocabTerm(documentId: string, data) {
    this.vocabTermsFirestoreService.updateVocabTerm(documentId, data);
  }
}
