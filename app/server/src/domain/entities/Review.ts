export interface Review {
  id: string
  rating: number
  comment: string
  imageId: string | null
  productId: string
  userId: string
}
