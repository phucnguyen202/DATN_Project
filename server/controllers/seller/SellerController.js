
const SellerModel = require('../../models/seller/SellerModel')

class SellerController {

  async getAllAccountSupplier(req, res) {
    try {
      if (req?.user?.quyen != "banhang") {
        return res.status(403).json({
          message: 'Bạn không có quyền truy cập',
        })
      }
      SellerModel.getAllAccountSupplier((err, result) => {
        console.log(err)
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_ALL_ERROR',
            message: 'Có lỗi khi lấy danh sách nhà cung cấp'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy danh sách nhà cung cấp thành công',
          data: result
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'GET_ALL_ERROR',
        message: 'Lỗi khi lấy danh sách nhà cung cấp'
      });
    }
  }

  async updateSupplierStatus(req, res) {
    try {
      const { idNhaCungCap, nguoiDungId, trangThai } = req.body
      if (req?.user?.quyen != "banhang") {
        return res.status(403).json({
          message: 'Bạn không có quyền truy cập',
        })
      }
      SellerModel.updateSupplierStatus(idNhaCungCap, trangThai, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_STATUS_ERROR',
            message: 'Lỗi khi cập nhật trạng thái nhà cung cấp'
          })
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy nhà cung cấp'
          })
        }
        SellerModel.assignSupplierRole(nguoiDungId, (err, role) => {
          if (err) {
            return res.status(500).json({
              success: false,
              code: 'ASSIGN_ROLE_ERROR',
              message: 'Lỗi khi gán quyền nhà cung cấp'
            })
          }
          return res.status(200).json({
            success: true,
            message: 'Cập nhật trạng thái nhà cung cấp và gán quyền thành công'
          })
        })
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_STATUS_ERROR',
        message: 'Lỗi khi cập nhật trạng thái nhà cung cấp'
      });
    }
  }

}

module.exports = new SellerController();