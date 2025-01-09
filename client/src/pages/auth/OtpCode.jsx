import React, { useState } from 'react'
import handleAPI from '../../apis/HandleAPI';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const OtpCode = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    const data = {
      otpCode: otpCode,
    }
    try {
      const res = await handleAPI('/auth/verify-email', data, 'post')
      if (res.success) {
        message.success(res.message)
        navigate('/')
      }
    } catch (e) {
      message.error("Mã OTP không đúng")
    }

  }
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
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    {otp.map((digit, index) => (
                      <div className="w-16 h-16" key={index}>
                        <input
                          className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          value={digit}
                          onChange={(e) => handleOtpChange(e, index)}
                          maxLength="1"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div>
                      <button
                        style={{
                          backgroundColor: '#3BB77E',
                          color: 'white',
                        }}
                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5  border-none text-sm font-bold shadow-sm"
                      >
                        Xác minh tài khoản
                      </button>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Không nhận được mã?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Gửi lại</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OtpCode