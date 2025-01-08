
const SellerModel = require('../../models/seller/SellerModel')

class SellerController {

  // lấy danh sách nhà cung cấp
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

  // lấy danh sách nhà cung cấp đã duyệt
  async getApprovedSuppliers(req, res) {
    try {
      // if (req?.user?.quyen != "banhang") {
      //   return res.status(403).json({
      //     message: 'Bạn không có quyền truy cập',
      //   })
      // }
      SellerModel.getApprovedSuppliers((err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_ALL_ERROR',
            message: 'Có lỗi khi lấy danh sách nhà cung cấp đã duyệt'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy nhà cung cấp đã duyệt'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy danh sách nhà cung cấp đã duyệt thành công',
          data: result
        });
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'GET_ALL_ERROR',
        message: 'Lỗi khi lấy danh sách nhà cung cấp đã duyệt'
      });
    }
  }

  // cập nhật trạng thái nhà cung cấp
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

  // gủi yêu cầu nhập hàng
  async createNhapHang(req, res) {
    try {
      const { sanPhamId, soLuong, ghiChu, nhaCungCapId } = req.body;
      SellerModel.createNhapHang(sanPhamId, soLuong, ghiChu, nhaCungCapId, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'CREATE_NHAP_HANG_ERROR',
            message: 'Lỗi khi gửi yêu cầu nhập hàng'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Gửi yêu cầu nhập hàng thành công'
        })
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'CREATE_NHAP_HANG_ERROR',
        message: 'Lỗi khi gửi yêu cầu nhập hàng'
      });
    }
  }

  // lấy danh sách nhập hàng
  async getAllNhapHang(req, res) {
    try {
      SellerModel.getAllNhapHang((err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_NHAP_HANG_ERROR',
            message: 'Lỗi khi lấy danh sách nhập hàng'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy danh sách nhập hàng thành công',
          data: result
        })
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'GET_NHAP_HANG_ERROR',
        message: 'Lỗi khi lấy danh sách nhập hàng'
      })
    }
  }

  // lấy danh sách nhập hàng đã được xác nhận
  async getConfirmedNhapHang(req, res) {
    try {
      SellerModel.getConfirmedNhapHang((err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_NHAP_HANG_ERROR',
            message: 'Lỗi khi lấy danh sách nhập hàng đã được xác nhận'
          })
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy nhập hàng đã được xác nhận'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy danh sách nhập hàng đã được xác nhận thành công',
          data: result
        })
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'GET_NHAP_HANG_ERROR',
        message: 'Lỗi khi lấy danh sách nhập hàng đã được xác nhận'
      })
    }
  }
  // thống kê dữ liệu theo ngay
  async getStatistical_day(req, res) {
    try {
      SellerModel.getStatistical_day((err, data) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_STATISTIC_ERROR',
            message: 'Lỗi khi thống kê dữ liệu'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Thống kê dữ liệu thành công',
          data: data
        })
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'GET_STATISTIC_ERROR',
        message: 'Lỗi khi thống kê dữ liệu'
      })
    }
  }
  // thống kê dữ liệu theo tháng
  async getStatistical_month(req, res) {
    try {
      SellerModel.getStatistical_month((err, data) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_STATISTIC_ERROR',
            message: 'Lỗi khi thống kê dữ liệu'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Thống kê dữ liệu thành công',
          data: data
        })
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'GET_STATISTIC_ERROR',
        message: 'Lỗi khi thống kê dữ liệu'
      })
    }
  }
  async cretaeDanhmuc(req, res) {
    try {
      const { tenDanhMuc } = req.body
      // if (req?.user?.quyen != "admin") {
      //   return res.status(403).json({
      //     message: 'Bạn không có quyền truy cập',
      //   })
      // }
      SellerModel.findByDanhMuc(tenDanhMuc, (err, danhmuc) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_NHAP_HANG_ERROR',
            message: 'Lỗi khi tạo danh mục sản phẩm'
          })
        }
        if (danhmuc.length > 0) {
          return res.status(400).json({ message: 'Danh mục đã tồn tại' });
        }
        SellerModel.addDanhMuc(tenDanhMuc, (err, result) => {
          if (err) {
            return res.status(500).json({ message: 'Lỗi thêm danh mục' });
          }
          return res.status(201).json({
            success: true,
            message: 'Tạo danh mục thành công',
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
      SellerModel.getAllDanhMuc(async (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_NHAP_HANG_ERROR',
            message: 'Lỗi khi lấy danh sách danh mục sản phẩm'
          })
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy danh sách danh mục sản phẩm thành công',
          data: result
        })
      })

    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'GET_NHAP_HANG_ERROR',
        message: 'Lỗi khi lấy danh sách danh mục sản phẩm'
      })
    }
  }
}

module.exports = new SellerController();