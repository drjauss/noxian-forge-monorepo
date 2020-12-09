import { Injectable } from '@angular/core';
import { ReviewsFirestoreService } from '../firestore/reviews.firestore.service';

@Injectable({
  providedIn: 'root',
})
export class ReviewsFacadeService {
  constructor(
    private readonly reviewsFirestoreService: ReviewsFirestoreService
  ) {}

  public createReview(data) {
    this.reviewsFirestoreService.createReview(data);
  }

  public getReview(documentId: string) {
    this.reviewsFirestoreService.getReview(documentId);
  }

  public getReviews() {
    this.reviewsFirestoreService.getReviews();
  }

  public updateReview(documentId: string, data) {
    this.reviewsFirestoreService.updateReview(documentId, data);
  }
}
