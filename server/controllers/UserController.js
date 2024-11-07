
const User = require('../models/UserModel')

class UserController {

  async getallusers(req, res) {
    try {
      User.getAllUsers(async (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Lỗi hệ thống' });
        }
        return res.status(200).json({
          message: 'Lấy người dùng thành công',
          data: { result }
        })
      })
    } catch (e) {
      return res.status(500).json({
        message: 'Get tất cả người dùng thất bại',
        error: error.message || error.toString()
      })
    }
  }
}
module.exports = new UserController();