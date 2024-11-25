const User = require('../models/AuthModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const JWT_SECRET = 'your_jwt_secret';

class AuthController {
  async register(req, res) {
    try {
      const { email, name, password, phone } = req.body
      User.findUserByEmail(email, async (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Lỗi hệ thống' });
        }
        if (result.length > 0) {
          return res.status(400).json({ message: 'Email đã tồn tại' });
        }
        // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Tạo người dùng mới
        const newUser = {
          ten: name,
          email: email,
          matkhau: hashedPassword,
          soDT: phone
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
        })
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Đăng nhập thất bại',
        error: error.message || error.toString()
      })
    }
  }

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
      })
    } catch (error) {
      return res.status(500).json({
        message: 'Đăng nhập thất bại',
        error: error.message || error.toString()
      })
    }
  }
}

module.exports = new AuthController();