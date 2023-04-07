import { getSvg } from "../utils/getSvg"

const SignIn = () => {
  return (
    <div className=" w-full min-h-screen px-8 py-8">
      <div className="mb-4 w-full">
        <div className="bg-pink-100 w-20 h-20 flex justify-center items-center rounded-full">
          {getSvg({
            type: "arrowLeft",
            width: "40px",
            height: "40px",
          })}
        </div>
      </div>
      <div className="flex justify-center mb-7">
        <div className="flex flex-col">
          <div className="pb-2 text-xl font-bold">Sign In</div>
          <div className="text-gray-500">
            New user?{" "}
            <span className="text-blue-500 cursor-pointer">
              Create an account
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-xl mb-8">Phone number</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="mb-4 outline-none"
        />
        <div className="bg-gray-100 py-1"></div>
      </div>
      <div className="flex flex-col mb-8">
        <label className="text-xl mb-8">Password</label>
        <input
          type="password"
          placeholder="********"
          className="mb-4 outline-none"
        />
        <div className="bg-gray-100 py-1"></div>
      </div>
      <div className="w-full flex justify-center mb-6">
        <button className="bg-gray-100 py-4 px-8 min-w-[300px] md:min-w-[700px] rounded-xl">
          Continue
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div className="text-blue-600">Reset your password</div>
      </div>
    </div>
  )
}

export default SignIn
