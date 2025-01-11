import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux'

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import app from "../../../configs/Firebase";
import { message } from "antd";
import handleAPI from "../../../apis/HandleAPI";
import { addAuth } from "../../../redux/reducers/authReducer";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const auth = getAuth(app)
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" })
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider)
      console.log(resultFromGoogle);
      const value = {
        name: resultFromGoogle?.user?.displayName,
        email: resultFromGoogle?.user?.email,
        googlePhotoUrl: resultFromGoogle?.user?.photoURL
      }
      const res = await handleAPI('/auth/loginWithGoogle', value, 'post')
      if (res.success) {
        dispatch(addAuth(res.data))
        message.success(res.message)
        navigate('/')
      }
    } catch (e) {
      message.error(e.message)
    }
  }


  return (
    <>
      <button
        disabled={isLoading}
        onClick={handleLoginWithGoogle}
        className="flex gap-2 justify-center mt-6 border rounded-md py-2 text-sm text-gray-50  from-green-700 bg-gradient-to-r to-green-300 ">
        <span className=" flex items-center">
          <FcGoogle size={20} /></span>
        <span>Đăng nhập bằng Google</span>
      </button>
    </>
  )
}

export default SocialLogin