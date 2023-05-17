import { ReviewRepository } from '../../../domain/repositories/ReviewRepository'
import { Nullable } from '../../../domain/Nullable'
import { Review } from '../../../domain/entities/Review'
import prismaClient from '../../prismaClient'

export class MySQLReviewRepository implements ReviewRepository {
  async getAllReviews (): Promise<Review[]> {
    const reviews = await prismaClient.review.findMany()
    return reviews
  }

  async createReview (review: Review): Promise<void> {
    await prismaClient.review.create({
      data: review
    })
  }

  async updateReviewById (reviewId: string, review: Review): Promise<void> {
    await prismaClient.review.update({
      where: {
        id: reviewId
      },
      data: review
    })
  }

  async deleteReviewById (reviewId: string): Promise<void> {
    await prismaClient.review.delete({
      where: {
        id: reviewId
      }
    })
  }

  async getReviewById (reviewId: string): Promise<Nullable<Review>> {
    const foundReview = await prismaClient.review.findUnique({
      where: {
        id: reviewId
      }
    })
    return foundReview
  }
}
