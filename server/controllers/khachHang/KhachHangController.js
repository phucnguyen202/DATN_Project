
const KhachHangModel = require('../../models/khachHang/KhachHangModel')

class KhachHangController {

  // thêm sản phẩm vào giỏ hàng
  async addProductToCart(req, res) {
    try {
      const { idSanPham, nguoiDungId } = req.body;
      KhachHangModel.findByProductForGioHang(idSanPham, nguoiDungId, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'FIND_PRODUCT_ERROR',
            message: 'Có lỗi khi tìm sản phẩm'
          });
        }
        if (result.length === 0) {
          KhachHangModel.addToCart(idSanPham, nguoiDungId, (err, result) => {
            if (err) {
              return res.status(500).json({
                success: false,
                code: 'ADD_PRODUCT_ERROR',
                message: 'Có lỗi khi thêm sản phẩm vào giỏ hàng'
              });
            }
            return res.status(200).json({
              success: true,
              message: 'Thêm sản phẩm vào giỏ hàng thành công'
            });
          })
        } else {
          return res.status(400).json({
            success: false,
            code: 'FIND_PRODUCT_ERROR',
            message: 'Sản phẩm đã có trong giỏ hàng. Vui lòng vào giỏ hàng để cập nhật số lượng'
          })
        }
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'ADD_PRODUCT_ERROR',
        message: 'Có lỗi khi thêm sản phẩm vào giỏ hàng'
      });

    }
  }
  // lấy thông tin giỏ hàng theo id người dùng
  async getCartById(req, res) {
    try {
      const { userId } = req.query;
      KhachHangModel.getCartById(userId, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_CART_INFO_ERROR',
            message: 'Có lỗi khi lấy sản phẩm trong giỏ hàng'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy sản phẩm trong giỏ hàng thành công',
          data: result
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'GET_CART_INFO_ERROR',
        message: 'Có lỗi khi lấy sản phẩm trong giỏ hàng'
      });
    }
  }

  // cập nhật số lượng sản phẩm trong giỏ hàng
  async updateQuantityProduct(req, res) {
    try {
      const { idGioHang, soLuong } = req.body;
      KhachHangModel.updateQuantity(soLuong, idGioHang, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_QUANTITY_ERROR',
            message: 'Cập nhật số lượng thất bại'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy giỏ hàng để cập nhật'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Cập nhật số lượng sản phẩm thành công'
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_QUANTITY_ERROR',
        message: 'Cập nhật số lượng thất bại'
      })
    }
  }

  // xóa sản phẩm khỏi giỏ hàng
  async deleteProductInCart(req, res) {
    try {
      const { idGioHang } = req.query;
      KhachHangModel.deleteFromCart(idGioHang, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'DELETE_PRODUCT_ERROR',
            message: 'Xóa sản phẩm khỏi giỏ hàng thất bại'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy giỏ hàng để cập nhật'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Xóa sản phẩm khỏi giỏ hàng thành công'
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'DELETE_PRODUCT_ERROR',
        message: 'Không tìm thấy giỏ hàng để cập nhật'
      })
    }
  }

  // thêm sản phẩm vào giỏ hàng
  async addProductToOrder(req, res) {
    try {
      const { nguoiDungId, diaChi, tongTien } = req.body;
      console.log(req.body)
      KhachHangModel.createOrder(nguoiDungId, diaChi, tongTien, (err, result) => {
        console.log(err)

        if (err) {
          return res.status(500).json({
            success: false,
            code: 'CREATE_ORDER_ERROR',
            message: 'Tạo đơn hàng thất bại'
          });
        }
        const orderId = result.insertId;
        KhachHangModel.addOrderDetails(orderId, nguoiDungId, (err, orderDetail) => {
          if (err) {
            return res.status(500).json({
              success: false,
              code: 'ADD_ORDER_DETAILS_ERROR',
              message: 'Thêm chi tiết đơn hàng thất bại'
            });
          }
          return res.status(200).json({
            success: true,
            message: 'Tạo đơn hàng thành công',
            data: orderId
          });
        })
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'CREATE_ORDER_ERROR',
        message: 'Tạo đơn hàng thất bại'
      });
    }
  }

  // lấy đơn hàng theo id người dùng
  async getOrderByIdUser(req, res) {
    try {
      const { userId } = req.query;
      KhachHangModel.getOrderById(userId, (err, order) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_ORDER_INFO_ERROR',
            message: 'Lấy thông tin đơn hàng thất bại'
          });
        }
        if (order.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy đơn hàng này'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy thông tin đơn hàng thành công',
          data: order
        });
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'GET_ORDER_INFO_ERROR',
        message: 'Lấy thông tin đơn hàng thất bại'
      });
    }
  }

  // lấy chi tiết đơn hàng
  async getDetailOrders(req, res) {
    const { idDonHang } = req.query;
    try {
      KhachHangModel.getOrderDetails(idDonHang, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_DETAIL_ORDERS_ERROR',
            message: 'Lấy chi tiết đơn hàng thất bại'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy chi tiết đơn hàng này'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy chi tiết đơn hàng thành công',
          data: result
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'GET_DETAIL_ORDERS_ERROR',
        message: 'Lấy chi tiết đơn hàng thất bại'
      });
    }
  }

  // sửa địa chỉ giao hàng
  async updateAddressOrder(req, res) {
    try {
      const { diaChi, idDonHang } = req.body;
      console.log(req.body);
      KhachHangModel.updateAddressOrder(diaChi, idDonHang, (err, data) => {
        console.log(err);
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_ADDRESS_ERROR',
            message: 'Cập nhật địa chỉ đơn hàng thất bại'
          });
        }
        if (data.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy đơn hàng này'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Cập nhật địa chỉ đơn hàng thành công'
        });
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_ADDRESS_ERROR',
        message: 'Cập nhật địa chỉ đơn hàng thất bại'
      });
    }
  }
  // xóa giỏ hàng
  async deleteCart(req, res) {
    try {
      const { userId } = req.query
      KhachHangModel.deleteCart(userId, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'DELETE_CART_ERROR',
            message: 'Xóa giỏ hàng thất bại'
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Không tìm thấy giỏ hàng để xóa'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Xóa giỏ hàng thành công'
        })
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'DELETE_CART_ERROR',
        message: 'Xóa giỏ hàng thất bại'
      });
    }
  }

  // Đăng ký làm nhà cung cấp
  async registerSupplier(req, res) {
    try {
      // const { userId } = req.query
      // console.log('userId::', typeof userId)
      // console.log('req.user.idNguoiDung::', typeof req.user.idNguoiDung)
      const nguoiDungId = req.user.idNguoiDung.toString();
      const { tenNhaCungCap, diaChi, soDienThoai } = req.body;

      KhachHangModel.registerSupplier(nguoiDungId, tenNhaCungCap, diaChi, soDienThoai, (err, result) => {
        console.log(err)
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'REGISTER_SUPPLIER_ERROR',
            message: 'Lỗi khi gửi yêu cầu đăng ký'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Yêu cầu đăng ký làm nhà cung cấp đã được gửi'
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'REGISTER_SUPPLIER_ERROR',
        message: 'Lỗi khi gửi yêu cầu đăng ký'
      });
    }
  }

  // thêm sản phẩm vào danh sách yêu thích
  async addProductToWishlist(req, res) {
    try {
      const { idSanPham, nguoiDungId } = req.body;
      KhachHangModel.findByProductForWishList(idSanPham, nguoiDungId, (err, result) => {
        if (err) {
          return res.status(404).json({
            success: false,
            code: 'FIND_PRODUCT_ERROR',
            message: 'Có lỗi khi tìm sản phẩm'
          });
        }
        if (result.length === 0) {
          KhachHangModel.addToWishList(idSanPham, nguoiDungId, (err, _) => {
            if (err) {
              return res.status(500).json({
                success: false,
                code: 'ADD_TO_WISHLIST_ERROR',
                message: 'Có lỗi khi thêm sản phẩm vào danh sách yêu thích'
              });
            }
            KhachHangModel.updateQuantityWishList(idSanPham, (err, _) => {
              if (err) {
                return res.status(500).json({
                  success: false,
                  code: 'UPDATE_QUANTITY_ERROR',
                  message: 'Có lỗi khi cập nhật số lượng sản phẩm trong danh sách yêu thích'
                });
              }
              return res.status(200).json({
                success: true,
                message: 'Thêm sản phẩm vào danh sách yêu thích thành công'
              });
            })
          })
        } else {
          return res.status(400).json({
            success: true,
            message: 'Sản phẩm đã nằm trong danh sách yêu thích'
          });
        }
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'ADD_TO_WISHLIST_ERROR',
        message: 'Có lỗi khi thêm sản phẩm vào danh sách yêu thích'
      });
    }
  }

  // lấy danh sách các sản phẩm yêu thích bằng id người dùng

  async getWishlistProducts(req, res) {
    try {
      const nguoiDungId = req.user.idNguoiDung;

      console.log('nguoiDungId::', nguoiDungId);
      KhachHangModel.getWishListById(nguoiDungId, (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_WISHLIST_ERROR',
            message: 'Lỗi khi lấy danh sách sản phẩm yêu thích'
          });
        }
        if (result.length === 0) {
          return res.status(404).json({
            success: false,
            code: 'NOT_FOUND',
            message: 'Danh sách sản phẩm yêu thích trống'
          });
        }
        return res.status(200).json({
          success: true,
          message: 'Lấy danh sách sản phẩm yêu thích thành công',
          data: result
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'GET_WISHLIST_ERROR',
        message: 'Lỗi khi lấy danh sách sản phẩm yêu thích'
      });
    }
  }
}

module.exports = new KhachHangController();