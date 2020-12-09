import { Injectable } from '@angular/core';
import { SpellSpeedsFirestoreService } from '../firestore/spell-speeds.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class SpellSpeedsFacadeService {
  constructor(
    private readonly spellSpeedsFirestoreService: SpellSpeedsFirestoreService
  ) {}

  public createSpellSpeed(data) {
    this.spellSpeedsFirestoreService.createSpellSpeed(data);
  }

  public getSpellSpeed(documentId: string) {
    this.spellSpeedsFirestoreService.getSpellSpeed(documentId);
  }

  public getSpellSpeeds() {
    this.spellSpeedsFirestoreService.getSpellSpeeds();
  }

  public updateSpellSpeed(documentId: string, data) {
    this.spellSpeedsFirestoreService.updateSpellSpeed(documentId, data);
  }
}
