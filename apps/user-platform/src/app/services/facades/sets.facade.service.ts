import { Injectable } from '@angular/core';
import { SetsFirestoreService } from '../firestore/sets.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class SetsFacadeService {
  constructor(private readonly guideFirestoreService: SetsFirestoreService) {}

  public createSet(data) {
    this.guideFirestoreService.createSet(data);
  }

  public getSet(documentId: string) {
    this.guideFirestoreService.getSet(documentId);
  }

  public getSets() {
    this.guideFirestoreService.getSets();
  }

  public updateSet(documentId: string, data) {
    this.guideFirestoreService.updateSet(documentId, data);
  }
}
