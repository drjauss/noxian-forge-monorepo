import { Injectable } from '@angular/core';
import { GuidesFirestoreService } from '../firestore/guides.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class GuidesFacadeService {
  constructor(
    private readonly guidesFirestoreService: GuidesFirestoreService
  ) {}

  public createGuide(data) {
    this.guidesFirestoreService.createGuide(data);
  }

  public getGuide(documentId: string) {
    this.guidesFirestoreService.getGuide(documentId);
  }

  public getGuides() {
    this.guidesFirestoreService.getGuides();
  }

  public updateGuide(documentId: string, data) {
    this.guidesFirestoreService.updateGuide(documentId, data);
  }
}
