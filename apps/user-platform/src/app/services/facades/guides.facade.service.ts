import { Injectable } from '@angular/core';
import { GuidesFirestoreService } from '../firestore/guides.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class GuidesFacadeService {
  constructor(private readonly guideFirestoreService: GuidesFirestoreService) {}

  public createGuide(data) {
    this.guideFirestoreService.createGuide(data);
  }

  public getGuide(documentId: string) {
    this.guideFirestoreService.getGuide(documentId);
  }

  public getGuides() {
    this.guideFirestoreService.getGuides();
  }

  public updateGuide(documentId: string, data) {
    this.guideFirestoreService.updateGuide(documentId, data);
  }
}
