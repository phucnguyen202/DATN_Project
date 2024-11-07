
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  return (
    <>
      <button className="flex gap-2 justify-center mt-6 border rounded-md py-2 text-sm text-gray-50  from-green-700 bg-gradient-to-r to-green-300 ">
        <span className=" flex items-center">
          <FcGoogle size={20} /></span>
        <span>Đăng nhập bằng Google</span>
      </button>
    </>
  )
}

export default SocialLogin