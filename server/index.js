
const express = require('express');
const app = express();

const authRouter = require('./routers/authRouter')
const adminRouter = require('./routers/admin/AdminRouter')
const nhanVienRouter = require('./routers/nhanVien/NhanVienRouter')
const khachhangRouter = require('./routers/khachHang/KhachHangRouter')
const sellerRouter = require('./routers/seller/SellerRouter')
const paymentRouter = require('./routers/PaymentRouter')
const supplierRouter = require('./routers/supplier/SuplierRouter')
const shipperRouter = require('./routers/shipper/ShipperRouter')


const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3001;
// const port = 3001

app.use(express.json());

app.use(cors({
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
}));

app.use('/v1/api', authRouter)
app.use('/v1/api', adminRouter)
app.use('/v1/api', nhanVienRouter)
app.use('/v1/api', khachhangRouter)
app.use('/v1/api', sellerRouter)
app.use('/v1/api', paymentRouter)
app.use('/v1/api', supplierRouter)
app.use('/v1/api', shipperRouter)


app.listen(port, () => {
  console.log(`running on port ${port}`);
});