
const express = require('express');
const app = express();
const authRouter = require('./routers/authRouter')
const adminRouter = require('./routers/admin/AdminRouter')
const nhanVienRouter = require('./routers/nhanVien/NhanVienRouter')
const khachhangRouter = require('./routers/khachHang/KhachHangRouter')
const sellerRouter = require('./routers/seller/SellerRouter')
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3001;
// const port = 3001

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
}));

app.use('/v1/api', authRouter)
app.use('/v1/api', adminRouter)
app.use('/v1/api', nhanVienRouter)
app.use('/v1/api', khachhangRouter)
app.use('/v1/api', sellerRouter)



app.listen(port, () => {
  console.log(`running on port ${port}`);
});