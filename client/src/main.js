// * PAGES
import LoginPage from "./pages/Login.js"
// import Error404Screen from "./screens/Error404Screen.js"

// * COMPONENTS

// * UTILS
import { parseRequestUrl } from "./utils/parseRequestUrl.js"
import { showLoading, hideLoading } from "./utils/loader.js"

const routes = {
  "/": LoginPage,
}

const router = async () => {
  /*  showLoading() */

  const request = parseRequestUrl()
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "")

  console.log("parseUrl")
  console.log(parseUrl)

  const page = routes[parseUrl] ? routes[parseUrl] : ""

  const app = document.getElementById("app")
  app.innerHTML = await page.render()

  /* hideLoading() */
}

window.addEventListener("load", router)
window.addEventListener("hashchange", router)
