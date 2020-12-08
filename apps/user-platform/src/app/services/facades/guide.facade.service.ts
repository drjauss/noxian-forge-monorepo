import { Injectable } from '@angular/core';
import { GuideFirestoreService } from '../firestore/guide.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class GuideFacadeService {
  constructor(private readonly guideFirestoreService: GuideFirestoreService) {}

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
