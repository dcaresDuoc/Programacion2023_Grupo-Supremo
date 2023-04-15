// * PAGES
import LoginPage from "./pages/Login.js"
import Error404Page from "./pages/Error404.js"
import SignUpPage from "./pages/SignUp.js"
import ForgotPasswordPage from "./pages/ForgotPassword.js"

import HomePage from "./pages/Home.js"

// * COMPONENTS

// * UTILS
import parseRequestUrl from "./utils/parseRequestUrl.js"
import { showLoading, hideLoading } from "./utils/loader.js"

const routes = {
  // * AUTH ROUTES
  "/": LoginPage,
  "/login": LoginPage,
  "/sign-up": SignUpPage,
  "/forgot-password": ForgotPasswordPage,

  // * AUTHENTICATED ROUTES
  "/home": HomePage,
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

  const page = routes[parseUrl] ? routes[parseUrl] : Error404Page

  const app = document.getElementById("app")
  app.innerHTML = await page.render()
  await page.after_render()

  /* hideLoading() */
}

window.addEventListener("load", router)
window.addEventListener("hashchange", router)
