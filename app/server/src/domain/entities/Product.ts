export interface Product {
  id: string
  name: string
  description: string
  price: number
  brandId: string
  // no podemos poner averageRating? porque estaría tomando averageRating como un number o undefined y prisma
  // retorna el averageRating como null en caso de que no existiese
  averageRating: number
  totalReviews: number
  stock: number
  categoryId: string
  subCategoryId: string
  subSubCategoryId: string
}
