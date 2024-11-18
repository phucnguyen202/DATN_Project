
const AdminData = require('../../models/admin/AdminModel')

class AdminController {

  async getallusers(req, res) {
    try {
      // console.log("user::", req?.user);
      if (req?.user?.quyen != "admin") {
        return res.status(403).json({
          message: 'Bạn không có quyền truy cập',
        })
      }
      AdminData.getAllUsers(async (err, result) => {
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

  async cretaeDanhmuc(req, res) {
    try {
      const { tenDanhMuc } = req.body
      if (req?.user?.quyen != "admin") {
        return res.status(403).json({
          message: 'Bạn không có quyền truy cập',
        })
      }
      AdminData.findByDanhMuc(tenDanhMuc, (err, danhmuc) => {
        if (err) {
          return res.status(500).json({ message: 'Lỗi hệ thống' });
        }
        if (danhmuc.length > 0) {
          return res.status(400).json({ message: 'Danh mục đã tồn tại' });
        }
        AdminData.addDanhMuc(tenDanhMuc, (err, result) => {
          if (err) {
            return res.status(500).json({ message: 'Lỗi thêm danh mục' });
          }
          return res.status(201).json({
            message: 'Thêm danh mục thành công',
            data: { result }
          })
        })
      })
    } catch (e) {
      return res.status(500).json({
        message: 'Tạo danh mục thất bại',
        error: error.message || error.toString()
      })
    }
  }

  async getAllDanhMuc(req, res) {
    try {
      AdminData.getAllDanhMuc(async (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Lỗi hệ thống' });
        }
        return res.status(200).json({
          message: 'Lấy danh mục thành công',
          data: { result }
        })
      })

    } catch (e) {
      return res.status(500).json({
        message: 'Get tất cả danh mục thất bại',
        error: error.message || error.toString()
      })
    }
  }

}
module.exports = new AdminController();