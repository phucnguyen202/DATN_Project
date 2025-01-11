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
      callback_url: "https://e12f-14-245-69-138.ngrok-free.app/v1/api/callback"
    };

    // appid|app_trans_id|appuser|amount|apptime|embeddata|item
    const data = config.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();

    try {
      const result = await axios.post(config.endpoint, null, { params: order })
      if (result.data.return_code === 1) {
        await KhachHangModel.updateOrderStatusPayment(idNguoiDung, idDonHang);
      }
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

  // thanh toán momo
  async createPatmentMOMO(req, res) {
    const { tongTien, idDonHang, idNguoiDung } = req.body;
    console.log(req.body);
    //https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
    //parameters
    var accessKey = 'F8BBA842ECF85';
    var secretKey = 'K951B6PE1waDMi640xX08PD3vg6EkVlz';
    var orderInfo = 'pay with MoMo';
    var partnerCode = 'MOMO';
    var redirectUrl = 'http://localhost:5173/payment';
    var ipnUrl = 'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b';
    var requestType = "payWithMethod";
    var amount = tongTien;
    var orderId = partnerCode + new Date().getTime();
    var requestId = orderId;
    var extraData = '';
    var paymentCode = 'T8Qii53fAXyUftPV3m9ysyRhEanUs9KlOPfHgpMR0ON50U10Bh+vZdpJU7VY4z+Z2y77fJHkoDc69scwwzLuW5MzeUKTwPo3ZMaB29imm6YulqnWfTkgzqRaion+EuD7FN9wZ4aXE1+mRt0gHsU193y+yxtRgpmY7SDMU9hCKoQtYyHsfFR5FUAOAKMdw2fzQqpToei3rnaYvZuYaxolprm9+/+WIETnPUDlxCYOiw7vPeaaYQQH0BF0TxyU3zu36ODx980rJvPAgtJzH1gUrlxcSS1HQeQ9ZaVM1eOK/jl8KJm6ijOwErHGbgf/hVymUQG65rHU2MWz9U8QUjvDWA==';
    var orderGroupId = '';
    var autoCapture = true;
    var lang = 'vi';

    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;
    //puts raw signature
    console.log("--------------------RAW SIGNATURE----------------")
    console.log(rawSignature)
    //signature
    const crypto = require('crypto');
    var signature = crypto.createHmac('sha256', secretKey)
      .update(rawSignature)
      .digest('hex');
    console.log("--------------------SIGNATURE----------------")
    console.log(signature)

    //json object send to MoMo endpoint
    const requestBody = JSON.stringify({
      partnerCode: partnerCode,
      partnerName: "Test",
      storeId: "MomoTestStore",
      requestId: requestId,
      amount: amount,
      orderId: orderId,
      orderInfo: orderInfo,
      redirectUrl: redirectUrl,
      ipnUrl: ipnUrl,
      lang: lang,
      requestType: requestType,
      autoCapture: autoCapture,
      extraData: extraData,
      orderGroupId: orderGroupId,
      signature: signature
    });

    // optional for axios

    const options = {
      method: "POST",
      url: 'https://test-payment.momo.vn/v2/gateway/api/create',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody)
      },
      data: requestBody
    }
    try {
      const response = await axios(options);
      console.log(response.data);
      await KhachHangModel.updateOrderStatusPayment(idNguoiDung, idDonHang);
      return res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }


}
module.exports = new PaymentController();
