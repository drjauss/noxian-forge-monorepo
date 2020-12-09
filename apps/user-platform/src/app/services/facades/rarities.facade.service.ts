import { Injectable } from '@angular/core';
import { RaritiesFirestoreService } from '../firestore/rarities.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class RaritiesFacadeService {
  constructor(
    private readonly guideFirestoreService: RaritiesFirestoreService
  ) {}

  public createRarity(data) {
    this.guideFirestoreService.createRarity(data);
  }

  public getRarity(documentId: string) {
    this.guideFirestoreService.getRarity(documentId);
  }

  public getRarities() {
    this.guideFirestoreService.getRarities();
  }

  public updateRarity(documentId: string, data) {
    this.guideFirestoreService.updateRarity(documentId, data);
  }
}
