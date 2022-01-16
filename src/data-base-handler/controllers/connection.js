const mysql = require('mysql2')

const conn = mysql.createConnection({
	database: 'db-react-travels',
	host: 'localhost',
	user: 'root',
	password: '56731285*'
})

module.exports = conn