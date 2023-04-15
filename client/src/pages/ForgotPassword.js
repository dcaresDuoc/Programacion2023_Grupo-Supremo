import { getSvg } from "../utils/getSvg.js"
import characterVR2d from "../assets/characterVR2d.png"
import { REST_API } from "../config/index.js"
import svgGoogleLogo from "../assets/googleLogo.svg"

const ForgotPassword = {
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
      <div class="pb-2 text-xl font-bold text-center">Sign Up</div>
      <img src="${characterVR2d}" alt="characterVR2d" class="w-28 h-28 mx-auto mb-4" />
    </div>
  </div>
  <div class="flex flex-col mb-4">
    <label class="text-xl mb-8">Email</label>
    <input type="text" placeholder="Enter your email" class="mb-4 outline-none" />
    <div class="bg-gray-100 py-1"></div>
  </div>
  <div class="w-full flex justify-center mb-6">
    <button class="bg-gray-100 py-4 px-8 min-w-[300px] md:min-w-[700px] rounded-xl">
      Continue
    </button>
  </div>
  <div class="w-full flex justify-center gap-8">
    <div class="text-blue-600 cursor-pointer" id="handleGoToLogin">You already have an account?</div>
    <div class="text-blue-600 cursor-pointer" id="handleGoToSignUp">Create an account</div>
  </div>
</div>
    `
  },
  after_render: () => {
    const divGoToSignUp = document.getElementById("handleGoToSignUp")
    divGoToSignUp.addEventListener("click", (e) => {
      e.preventDefault()
      document.location.hash = `/sign-up`
    })

    const divGoToLogin = document.getElementById("handleGoToLogin")
    divGoToLogin.addEventListener("click", (e) => {
      e.preventDefault()
      document.location.hash = `/login`
    })
  },
}
export default ForgotPassword