import { Injectable } from '@angular/core';
import { RegionsFirestoreService } from '../firestore/regions.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class RegionsFacadeService {
  constructor(
    private readonly regionsFirestoreService: RegionsFirestoreService
  ) {}

  public createRegion(data) {
    this.regionsFirestoreService.createRegion(data);
  }

  public getRegion(documentId: string) {
    this.regionsFirestoreService.getRegion(documentId);
  }

  public getRegions() {
    this.regionsFirestoreService.getRegions();
  }

  public updateRegion(documentId: string, data) {
    this.regionsFirestoreService.updateRegion(documentId, data);
  }
}
