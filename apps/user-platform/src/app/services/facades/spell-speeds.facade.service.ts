import { Injectable } from '@angular/core';
import { SpellSpeedsFirestoreService } from '../firestore/spell-speeds.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class SpellSpeedsFacadeService {
  constructor(
    private readonly guideFirestoreService: SpellSpeedsFirestoreService
  ) {}

  public createSpellSpeed(data) {
    this.guideFirestoreService.createSpellSpeed(data);
  }

  public getSpellSpeed(documentId: string) {
    this.guideFirestoreService.getSpellSpeed(documentId);
  }

  public getSpellSpeeds() {
    this.guideFirestoreService.getSpellSpeeds();
  }

  public updateSpellSpeed(documentId: string, data) {
    this.guideFirestoreService.updateSpellSpeed(documentId, data);
  }
}
