/**
 * Función para mostrar loader
 * @type {Function}
 */
export const showLoading = () => {
  document.getElementById("loading-overlay").classList.add("active")
}

/**
 * Función para ocultar loader
 * @type {Function}
 */
export const hideLoading = () => {
  document.getElementById("loading-overlay").classList.remove("active")
}
