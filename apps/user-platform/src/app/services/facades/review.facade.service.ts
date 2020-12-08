import { Injectable } from '@angular/core';
import { ReviewFirestoreService } from '../firestore/review.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewFacadeService {
  constructor(
    private readonly regionFirestoreService: ReviewFirestoreService
  ) {}

  public createReview(data) {
    this.regionFirestoreService.createReview(data);
  }

  public getReview(documentId: string) {
    this.regionFirestoreService.getReview(documentId);
  }

  public getReviews() {
    this.regionFirestoreService.getReviews();
  }

  public updateReview(documentId: string, data) {
    this.regionFirestoreService.updateReview(documentId, data);
  }
}
