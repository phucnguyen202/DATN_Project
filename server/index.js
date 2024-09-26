
const express = require('express');
require('dotenv').config();
const app = express();


const port = process.env.PORT || 8081;
app.use(express.json());


// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'DB_DATN'
// }).then(() => {
//   console.log('Connected to the database');
// }).catch(err =>
//   console.error('Error connecting to the database', err)
// )

app.listen(port, () => {
  console.log(`running on port ${port}`);
});