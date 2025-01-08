const User = require('../models/AuthModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendVerificationEmail } = require('../commonService/Common.service');
// const JWT_SECRET = 'your_jwt_secret';

// Hàm tạo OTP ngẫu nhiên 4 chữ số

class AuthController {

  // đăng ký tài khoản
  async register(req, res) {
    try {
      const { email, name, password, phone } = req.body
      // Kiểm tra email đã tồn tại hay chưa
      User.findUserByEmail(email, async (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Lỗi hệ thống' });
        }
        if (result.length > 0) {
          return res.status(400).json({ message: 'Email đã tồn tại' });
        }
        // Tạo OTP
        const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
        // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Tạo người dùng mới
        const newUser = {
          ten: name,
          email: email,
          matkhau: hashedPassword,
          soDT: phone,
          otpCode: otpCode,
        };
        // Gửi email OTP cho người dùng
        await sendVerificationEmail(email, otpCode);
        User.createUser(newUser, (err, result) => {
          if (err) {
            return res.status(500).json({ message: 'Lỗi khi tạo người dùng' });
          }
          User.findUserForJWT(email, async (err, user) => {
            if (err) {
              return res.status(500).json({ message: 'Lỗi khi tạo JWT token' });
            }
            // Kiểm tra xem user có tồn tại không
            if (!user) {
              return res.status(404).json({ message: 'Không tìm thấy người dùng' });
            }
            // Tạo JWT token
            const token = jwt.sign(
              {
                id: user.id,
                email: user.email,
                quyen: user.quyen
              }, process.env.JWT_SECRET);

            return res.status(201).json({
              message: 'Đăng ký thành công',
              data: {
                user,
                token
              }
            });
          })
        })
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Đăng ký thất bại',
        error: error.message || error.toString()
      })
    }
  };

  // verifyEmail
  // kiểm trả mã OTP
  async verifyEmail(req, res) {
    try {
      const email = req.user.email;
      const { otpCode } = req.body;
      console.log('otpCode:::', otpCode);
      User.getOTP(email, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_NHAP_HANG_ERROR',
            message: 'Lỗi khi lấy mã OTP'
          })
        }
        // console.log('result:::', result[0].otpCode.toString());
        if (result[0].otpCode.toString() === otpCode) {
          return res.status(200).json({
            success: true,
            message: 'Đăng ký tài khoản thành công!'
          })
        }
      })
    } catch (e) {
      return res.status(500).json({
        message: 'Lỗi hệ thống',
        error: e.message || e.toString()
      })
    }
  }

  // đăng nhập bằng gg
  async loginWithGoogle(req, res) {
    try {
      const { email, name, googlePhotoUrl } = req.body
      User.findUserByEmail(email, async (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Lỗi hệ thống' });
        }
        if (result.length > 0) {
          User.findUserForJWT(email, async (err, user) => {
            if (err) {
              return res.status(500).json({ message: 'Lỗi khi tạo JWT token' });
            }
            // Kiểm tra xem user có tồn tại không
            if (!user) {
              return res.status(404).json({ message: 'Không tìm thấy người dùng' });
            }
            // Tạo JWT token
            const token = jwt.sign(
              {
                id: user.id,
                email: user.email,
                quyen: user.quyen
              }, process.env.JWT_SECRET);
            return res.status(201).json({
              message: 'Đăng nhập thành công',
              data: {
                user,
                token
              }
            });
          })
        }

        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
        // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(generatedPassword, salt);
        // Tạo người dùng mới
        const newUser = {
          ten: name,
          email: email,
          matkhau: hashedPassword,
          hinhAnh: googlePhotoUrl
        };
        User.createUser(newUser, (err, result) => {
          if (err) {
            return res.status(500).json({ message: 'Lỗi khi tạo người dùng' });
          }
          User.findUserForJWT(email, async (err, user) => {
            if (err) {
              return res.status(500).json({ message: 'Lỗi khi tạo JWT token' });
            }
            // Kiểm tra xem user có tồn tại không
            if (!user) {
              return res.status(404).json({ message: 'Không tìm thấy người dùng' });
            }
            // Tạo JWT token
            const token = jwt.sign(
              {
                idNguoiDung: user.idNguoiDung,
                email: user.email,
                quyen: user.quyen
              }, process.env.JWT_SECRET);
            return res.status(201).json({
              message: 'Đăng nhập thành công',
              data: {
                user,
                token
              }
            });
          })
        })
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Đăng nhập thất bại',
        error: error.message || error.toString()
      })
    }
  }

  // đăng nhập
  async login(req, res) {
    try {
      const { email, password } = req.body
      User.findUserByEmail(email, async (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Lỗi hệ thống' });
        }
        if (result.length === 0) {
          return res.status(404).json({ message: 'Không tìm thấy người dùng' });
        }
        const isMatch = await bcrypt.compare(password, result[0].matKhau);
        if (!isMatch) {
          return res.status(401).json({ message: 'Đăng nhập thất bại' });
        }
        User.findUserForJWT(email, async (err, user) => {
          if (err) {
            return res.status(500).json({ message: 'Lỗi khi tạo JWT token' });
          }
          // Kiểm tra xem user có tồn tại không
          if (!user) {
            return res.status(404).json({ message: 'Không tìm thấy người dùng' });
          }
          // Tạo JWT token
          const token = jwt.sign(
            {
              idNguoiDung: user.idNguoiDung,
              email: user.email,
              quyen: user.quyen
            }, process.env.JWT_SECRET);
          return res.status(201).json({
            message: 'Đăng nhập thành công',
            data: {
              user,
              token
            }
          });
        })
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Đăng nhập thất bại',
        error: error.message || error.toString()
      })
    }
  }

  async updatePassword(req, res) { }

  // tim người dùng bằng id
  async findUserById(req, res) {
    try {
      const { idUser } = req.query;
      User.findUserById(idUser, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'FIND_USER_ERROR',
            message: 'Tìm người dùng không thành công'
          });
        }
        if (result.length === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy người dùng'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Tìm người dùng thành công',
          data: result[0]
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'FIND_USER_ERROR',
        message: 'Tìm người dùng không thành công'
      });
    }
  }

  // cập nhật thông tin
  async updateInfo(req, res) {
    try {
      const { idUser } = req.query;
      const { ten, soDT, hinhAnh } = req.body;
      User.updateUserInfo(idUser, ten, soDT, hinhAnh, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_USER_ERROR',
            message: 'Cập nhật người dùng không thành công'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy người dùng'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Cập nhật người dùng thành công',
          data: result
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_USER_ERROR',
        message: 'Cập nhật người dùng không thành công'
      });
    }
  }
}

module.exports = new AuthController();