// que no sea todas sus propiedades opcionales sino que sean requeridas y que el método tenga un Partial<User> si algo requeriera que tenga que ser opcional

export interface User {
  id: string
  name: string
  email: string
  password: string
}

export interface AdminUser extends User {
  adminToken: string
}

/* export interface CurrentUser {
  id: string
  name: string
  email: string
} */
