
'use strict'
const jwt = require('jsonwebtoken')

const VerifyToken = async (req, res, next) => {
  const headers = req.headers.authorization
  const accessToken = headers ? headers.split(' ')[1] : ''
  try {
    if (!accessToken) {
      return res.status(403).json({
        message: 'Không có quyền'
      })
    }
    const verify = jwt.verify(accessToken, process.env.JWT_SECRET)
    // console.log("verify::", verify)
    req.user = verify
    next();
  } catch (e) {
    return res.status(401).json({
      message: err.message
    })
  }
}
module.exports = VerifyToken