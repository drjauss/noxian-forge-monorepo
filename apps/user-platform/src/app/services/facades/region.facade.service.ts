import { Injectable } from '@angular/core';
import { RegionFirestoreService } from '../firestore/region.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class RegionFacadeService {
  constructor(
    private readonly regionFirestoreService: RegionFirestoreService
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
