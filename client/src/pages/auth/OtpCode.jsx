import { Input, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import handleAPI from '../../apis/HandleAPI';
const OtpCode = () => {
  const navigate = useNavigate();
  // const [otp, setOtp] = useState(["", "", "", ""]);
  // const handleOtpChange = (e, index) => {
  //   const newOtp = [...otp];
  //   newOtp[index] = e.target.value;
  //   setOtp(newOtp);
  // }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const otpCode = otp.join('');
  //   const data = {
  //     otpCode: otpCode,
  //   }
  //   try {
  //     const res = await handleAPI('/auth/verify-email', data, 'post')
  //     if (res.success) {
  //       message.success(res.message)
  //       navigate('/')
  //     }
  //   } catch (e) {
  //     message.error("Mã OTP không đúng")
  //   }
  // }

  const onChange = async (text) => {
    const data = {
      otpCode: text,
    }
    try {
      const res = await handleAPI('/auth/verify-email', data, 'post')
      if (res.success) {
        message.success(res.message)
        navigate('/')
      }
    } catch {
      message.error("Mã OTP không đúng")
    }
  };
  const sharedProps = {
    onChange,
  };
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Xác minh email</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>Chúng tôi đã gửi mã tới email của bạn!</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <Input.OTP length={4}
                  formatter={str => str.toUpperCase()} {...sharedProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OtpCode