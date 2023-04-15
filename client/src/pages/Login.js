import { getSvg } from "../utils/getSvg.js"
import characterVR2d from "../assets/characterVR2d.png"
import { REST_API } from "../config/index.js"
import svgGoogleLogo from "../assets/googleLogo.svg"

const Login = {
  render: async () => {
    return `
     <div class="w-full min-h-screen px-8 py-8">
  <div class="mb-4 w-full">
    <div class="bg-pink-100 w-14 h-14 flex justify-center items-center rounded-full">
      ${getSvg({
        type: "arrowLeft",
        width: "40px",
        height: "40px",
      })}
    </div>
  </div>
  <div class="flex justify-center mb-7">
    <div class="flex flex-col">
      <div class="pb-2 text-xl font-bold text-center">Login</div>
      <img src="${characterVR2d}" alt="characterVR2d" class="w-28 h-28 mx-auto mb-4" />
      <a href=${`${REST_API}/api/auth/google`}>
        <div class="border-[1px] border-[#CBCCCF] py-4 px-4 flex items-center  min-w-[320px] gap-4">
          <img src=${svgGoogleLogo} alt="svg google logo" class="w-8 h-8 block" />
          <div>Login with Google</div>
        </div>
      </a>
    </div>
  </div>

  
  <div class="flex flex-col mb-4">
    <label class="text-xl mb-8">Email</label>
    <input type="text" placeholder="Enter your email" class="mb-4 outline-none" />
    <div class="bg-gray-100 py-1"></div>
  </div>
  <div class="flex flex-col mb-8">
    <label class="text-xl mb-8">Password</label>
    <input type="password" placeholder="********" class="mb-4 outline-none" />
    <div class="bg-gray-100 py-1"></div>
  </div>
  <div class="w-full flex justify-center mb-6">
    <button class="bg-gray-100 py-4 px-8 min-w-[300px] md:min-w-[700px] rounded-xl" id="loginBtn">
      Login
    </button>
  </div>
  <div class="w-full flex justify-center gap-8">
    <div class="text-blue-600 cursor-pointer" id="handleGoToForgotPassword">Reset your password</div>
    <div class="text-blue-600 cursor-pointer" id="handleGoToSignUp">Create an account</div>
  </div>
</div>
    `
  },
  after_render: () => {
    const loginBtn = document.getElementById("loginBtn")
    const divGoToSignUp = document.getElementById("handleGoToSignUp")
    const divGoToForgotPassword = document.getElementById(
      "handleGoToForgotPassword"
    )
    divGoToSignUp.addEventListener("click", (e) => {
      e.preventDefault()
      document.location.hash = `/sign-up`
    })

    divGoToForgotPassword.addEventListener("click", (e) => {
      e.preventDefault()
      document.location.hash = `/forgot-password`
    })

    loginBtn.addEventListener("click", (e) => {
      e.preventDefault()
      document.location.hash = `/home`
    })
  },
}
export default Login
