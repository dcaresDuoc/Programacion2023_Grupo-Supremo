import { FavoriteRepository } from '../../../domain/repositories/FavoriteRepository'
import { Nullable } from '../../../domain/Nullable'
import { Favorite } from '../../../domain/entities/Favorite'
import prismaClient from '../../prismaClient'

export class MySQLFavoriteRepository implements FavoriteRepository {
  async getAllFavorites (): Promise<Favorite[]> {
    const favorites = await prismaClient.favorite.findMany()
    return favorites
  }

  async createFavorite (favorite: Favorite): Promise<void> {
    await prismaClient.favorite.create({
      data: favorite
    })
  }

  async updateFavoriteById (favoriteId: string, favorite: Favorite): Promise<void> {
    await prismaClient.favorite.update({
      where: {
        id: favoriteId
      },
      data: favorite
    })
  }

  async deleteFavoriteById (favoriteId: string): Promise<void> {
    await prismaClient.favorite.delete({
      where: {
        id: favoriteId
      }
    })
  }

  async getFavoriteById (favoriteId: string): Promise<Nullable<Favorite>> {
    const foundFavorite = await prismaClient.favorite.findUnique({
      where: {
        id: favoriteId
      }
    })
    return foundFavorite
  }
}
