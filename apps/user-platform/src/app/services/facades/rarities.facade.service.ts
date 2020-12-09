import { Injectable } from '@angular/core';
import { RaritiesFirestoreService } from '../firestore/rarities.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class RaritiesFacadeService {
  constructor(
    private readonly raritiesFirestoreService: RaritiesFirestoreService
  ) {}

  public createRarity(data) {
    this.raritiesFirestoreService.createRarity(data);
  }

  public getRarity(documentId: string) {
    this.raritiesFirestoreService.getRarity(documentId);
  }

  public getRarities() {
    this.raritiesFirestoreService.getRarities();
  }

  public updateRarity(documentId: string, data) {
    this.raritiesFirestoreService.updateRarity(documentId, data);
  }
}
