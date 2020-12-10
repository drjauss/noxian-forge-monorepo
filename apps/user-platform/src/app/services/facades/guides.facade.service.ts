import { Injectable } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GuidesFirestoreService } from '../firestore/guides.firestore.service';
import { Guide } from '../../models/entities/guide.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GuidesFacadeService {
  constructor(
    private readonly guidesFirestoreService: GuidesFirestoreService
  ) {}

  public createGuide(data) {
    return this.guidesFirestoreService.createGuide(data);
  }

  public getGuide(documentId: string) {
    return this.guidesFirestoreService.getGuide(documentId);
  }

  public getGuides(): Observable<DocumentChangeAction<Guide>[]> {
    return this.guidesFirestoreService.getGuides();
  }

  public updateGuide(documentId: string, data) {
    return this.guidesFirestoreService.updateGuide(documentId, data);
  }
}
