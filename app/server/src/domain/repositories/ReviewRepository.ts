import { Review } from '../entities/Review'

export interface ReviewRepository {
  getAllReviews: () => Promise<Review[]>
  createReview: (review: Review) => Promise<void>
  updateReviewById: (reviewId: string, review: Review) => Promise<void>
  deleteReviewById: (reviewId: string) => Promise<void>

  getReviewById: (reviewId: string) => Promise<Review | null>
}
