const axios = require('axios').default; // npm install axios
const CryptoJS = require('crypto-js'); // npm install crypto-js
const moment = require('moment'); // npm install moment
const KhachHangModel = require('../models/khachHang/KhachHangModel')
// APP INFO
const config = {
  app_id: "2554",
  key1: "sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn",
  key2: "trMrHtvjo6myautxDUiAcYsVtaeQ8nhf",
  endpoint: "https://sb-openapi.zalopay.vn/v2/create"
};

class PaymentController {
  async createPaymentZaloPay(req, res) {
    const { amount, idDonHang, idNguoiDung } = req.body;
    console.log(req.body);
    const embed_data = {
      idDonHang: idDonHang,
      idNguoiDung: idNguoiDung,
      redirecturl: 'http://localhost:5173/payment'
    };

    const items = [{}];
    const transID = Math.floor(Math.random() * 1000000);

    const order = {
      app_id: config.app_id,
      app_trans_id: `${moment().format('YYMMDD')}_${transID}`, // translation missing: vi.docs.shared.sample_code.comments.app_trans_id
      app_user: "user123",
      app_time: Date.now(), // miliseconds
      item: JSON.stringify(items),
      embed_data: JSON.stringify(embed_data),
      amount: amount,
      description: `Thanh toán đơn hàng #${transID}`,
      bank_code: "",
      callback_url: "https://c3b9-14-245-69-138.ngrok-free.app/v1/api/callback"
    };

    // appid|app_trans_id|appuser|amount|apptime|embeddata|item
    const data = config.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

    try {
      const result = await axios.post(config.endpoint, null, { params: order })
      // if (result.data.return_code === 1) {
      //   KhachHangModel.updateOrderStatusPayment(idNguoiDung, idDonHang, (err, result) => {
      //     if (err) {
      //       console.error("Cập nhật trạng thái đơn hàng thất bại");
      //     }
      //     return res.status(200).json({
      //       success: true,
      //       message: 'Thanh toán đơn hàng thành công',
      //       data: result.data
      //     })
      //   });
      // }
      return res.status(200).json(result.data);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async funCallBack(req, res) {
    let result = {};

    try {
      let dataStr = req.body.data;
      let reqMac = req.body.mac;

      let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString();
      console.log("mac =", mac);

      // kiểm tra callback hợp lệ (đến từ ZaloPay server)
      if (reqMac !== mac) {
        // callback không hợp lệ
        result.return_code = -1;
        result.return_message = "mac not equal";
      }
      else {
        console.log("dataStr =", dataStr); // Kiểm tra dữ liệu gốc
        console.log("embed_data =", JSON.parse(dataJson.embed_data)); // Kiểm tra embed_data
        // thanh toán thành công
        // merchant cập nhật trạng thái cho đơn hàng
        let dataJson = JSON.parse(dataStr, config.key2);
        console.log("dataJson =", dataJson); // In ra dataJson để debug
        console.log("update order's status = success where app_trans_id =", dataJson["app_trans_id"]);
        const embedData = JSON.parse(dataJson["embed_data"]); // Lấy embed_data
        const idNguoiDung = embedData.idNguoiDung; // ID người dùng
        const danhSachIdDonHang = embedData.danhSachIdDonHang; // Danh sách ID đơn hàng
        console.log('danhSachIdDonHang:::', danhSachIdDonHang)
        console.log('idNguoiDung:::', idNguoiDung)

        // Cập nhật trạng thái thanh toán cho các đơn hàng
        // try {
        //   await KhachHangModel.updateOrderStatusPayment(idNguoiDung, danhSachIdDonHang); // Truyền cả hai vào model
        //   result.return_code = 1;
        //   result.return_message = "success";
        // } catch (err) {
        //   console.error("Error updating order status:", err);
        //   result.return_code = 0;
        //   result.return_message = "Failed to update order status";
        // }
        result.return_code = 1; // Thành công
        result.return_message = "success";
      }
    } catch (ex) {
      result.return_code = 0; // ZaloPay server sẽ callback lại (tối đa 3 lần)
      result.return_message = ex.message;
    }

    // thông báo kết quả cho ZaloPay server
    res.json(result);
  }
}
module.exports = new PaymentController();
