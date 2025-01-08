
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Hoặc dịch vụ email khác như Yahoo, Outlook
  auth: {
    user: 'ad.sendmail03@gmail.com', // Email của bạn
    pass: 'gidgddqokxntghaw', // Mật khẩu của bạn (hoặc App Password nếu dùng Gmail)
  },
});

// Hàm gửi email
const sendVerificationEmail = async (email, otpCode) => {
  const mailOptions = {
    from: '"NEST MART" <lebinh12042000@gmail.com>',
    to: email,
    subject: 'NEST MART & GROCERY',
    text: `Your verification code is ${otpCode}`,
    html: `<html lang="en">
              <body>
                  <div>
                  <div class="container" style="max-width: 500px;margin: 0 auto;">
                  <div class="header" style="background-color: #3BB77E;padding: 10px;text-align: center;color: white;">
                      <h2 style="margin: 0px;padding: 0px;">NEST MART & GROCERY</h2>
                      <p style="margin: 0px;padding: 0px;">
                          NEST MART & GROCERY - Nông sản sạch, sức khỏe vững bền!
                      </p>
                  </div>
                  <div class="body" style="padding: 15px;background-color: rgb(255, 255, 240);text-align: center;">
                      <h2 style="margin: 0px;padding: 0px;color: cadetblue;margin-top: 2em;margin-bottom: 2em;">
                            NEST MART & GROCERY
                      </h2>
                      <P style="margin: 0px;padding: 0px;">
                            Bạn đang đăng ký tài khoản NEST MART & GROCERY
                      </P>
                      <h2 style="margin: 0px;padding: 0px;color: cadetblue;text-align: center;margin-top: 1em;margin-bottom: 1em;">
                          <strong style="color: black;font-weight: 900;">OTP - </strong><strong><span>${otpCode}</span></strong>
                      </h2>
                      <p style="margin: 0px;padding: 0px;">
                          <i>
                              (*) Lưu ý: Mã OTP chỉ có hiệu lực trong 60 phút.
                          </i>
                      </p>
                  </div>
                  <div class="footer" style="height: 20px;background-color: #3BB77E;"></div>
              </div>
                  </div>
              </body>
              </html>`,
  }
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);  // Bạn có thể log thông tin phản hồi từ email
    return info;
  } catch (error) {
    console.error('Error sending email:', error);  // Ghi lại lỗi nếu có
    throw new Error('Failed to send email');
  }
  // return transporter.sendMail(mailOptions);
}

module.exports = { sendVerificationEmail };
