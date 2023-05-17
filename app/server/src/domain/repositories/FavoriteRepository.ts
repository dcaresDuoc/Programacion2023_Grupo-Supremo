import { Favorite } from '../entities/Favorite'

export interface FavoriteRepository {
  getAllFavorites: () => Promise<Favorite[]>
  createFavorite: (favorite: Favorite) => Promise<void>
  updateFavoriteById: (favoriteId: string, favorite: Favorite) => Promise<void>
  deleteFavoriteById: (favoriteId: string) => Promise<void>

  getFavoriteById: (favoriteId: string) => Promise<Favorite | null>
}
