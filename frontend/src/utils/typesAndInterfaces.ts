export type SvgType = "arrowLeft" | "docker" | "homeLoading" | "desing1"

export type SvgFill = "#5F6368" | "#71757A" | "#000"

export interface SvgItem {
  type: SvgType
  fill?: SvgFill
  width?: string
  height?: string
}

export interface Product {
  id: string
  name: string
  price: number
  description: string
  imgSrc: string
}

export interface ProductImage {
  id: string
  originalName: string
  fileName: string
  productId: string
}
