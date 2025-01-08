
const ShipperModel = require('../../models/shipper/ShipperModel')


class ShipperController {

  async updateStatus_GiaoHang(req, res) {
    try {
      const { trangThaiGiaoHang, idDonHang, } = req.body;
      ShipperModel.updateDeliveryStatus(trangThaiGiaoHang, idDonHang, (err, data) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'UPDATE_STATUS_ERROR',
            message: 'Cập nhật trạng thái giao hàng thất bại'
          })
        }
        return res.status(200).json({
          success: true,
          code: 'UPDATE_STATUS_SUCCESS',
          message: 'Cập nhật trạng thái giao hàng thành công'
        })
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        code: 'UPDATE_STATUS_ERROR',
        message: 'Lỗi khi cập nhật trạng thái giao hàng'
      })
    }
  }

  // lấy danh sách các đơn hàng đã thanh toán,
  async getUndeliveredOrders(req, res) {
    try {
      ShipperModel.getAllOrderPayment((err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            code: 'GET_ALL_ORDER_ERROR',
            message: 'Lỗi khi lấy tất cả đơn hàng',
          });
        }
        if (result.length === 0) {
          return res.status(200).json({
            success: true,
            code: 'GET_ALL_ORDER_SUCCESS',
            message: 'Không có đơn hàng nào',
            data: result
          });
        }
        return res.status(200).json({
          success: true,
          code: 'GET_ALL_ORDER_SUCCESS',
          message: 'Lấy tất cả đơn hàng thành công',
          data: result
        })
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        code: 'GET_ALL_ORDER_ERROR',
        message: 'Lõi khi lấy tất cả đơn hàng',
      });
    }
  }


}


module.exports = new ShipperController();