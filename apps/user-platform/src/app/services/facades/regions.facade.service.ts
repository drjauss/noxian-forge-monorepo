import { Injectable } from '@angular/core';
import { RegionsFirestoreService } from '../firestore/regions.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class RegionsFacadeService {
  constructor(
    private readonly regionFirestoreService: RegionsFirestoreService
  ) {}

  public createRegion(data) {
    this.regionFirestoreService.createRegion(data);
  }

  public getRegion(documentId: string) {
    this.regionFirestoreService.getRegion(documentId);
  }

  public getRegions() {
    this.regionFirestoreService.getRegions();
  }

  public updateRegion(documentId: string, data) {
    this.regionFirestoreService.updateRegion(documentId, data);
  }
}
