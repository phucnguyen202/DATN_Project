

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DB_DATN'
}).then(() => {
  console.log('Connected to the database');
}).catch(err =>
  console.error('Error connecting to the database', err)
)

export default db