/**
 * Función para parsear el hash de la url y obtener los componentes que lo componen.
 * @type {Function}
 */
export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase()
  console.log(url.split("/"))

  // http://127.0.0.1:5501/#/category/6 => ["#", "category", "6"]
  const [section, resource, id, action] = url.split("/")
  return {
    resource,
    id,
    action,
  }
}
