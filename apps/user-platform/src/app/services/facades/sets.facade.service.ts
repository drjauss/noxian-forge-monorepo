import { Injectable } from '@angular/core';
import { SetsFirestoreService } from '../firestore/sets.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class SetsFacadeService {
  constructor(private readonly setsFirestoreService: SetsFirestoreService) {}

  public createSet(data) {
    this.setsFirestoreService.createSet(data);
  }

  public getSet(documentId: string) {
    this.setsFirestoreService.getSet(documentId);
  }

  public getSets() {
    this.setsFirestoreService.getSets();
  }

  public updateSet(documentId: string, data) {
    this.setsFirestoreService.updateSet(documentId, data);
  }
}
