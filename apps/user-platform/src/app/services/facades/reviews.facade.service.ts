import { Injectable } from '@angular/core';
import { ReviewsFirestoreService } from '../firestore/reviews.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewsFacadeService {
  constructor(
    private readonly regionFirestoreService: ReviewsFirestoreService
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
