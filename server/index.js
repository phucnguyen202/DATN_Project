
const express = require('express');
const app = express();
const authRouter = require('./routers/authRouter')
const userRouter = require('./routers/userRouter')
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
app.use('/v1/api', userRouter)

app.listen(port, () => {
  console.log(`running on port ${port}`);
});