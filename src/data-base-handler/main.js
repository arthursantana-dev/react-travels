const express = require('express')
const conn = require('./controllers/connection')
const TableFile = require('../data-base-handler/model/Table')
const app = express()

const Table = new TableFile()

app.use(express.json())

app.get('/', (req, res)=>{
	res.send('API working')
})

conn.connect((err)=>{
	if (err) {
		console.log(err);
	} else {
		console.log('Connected to Database');
	}
})

app.listen(3001, ()=>{
	console.log('API running on port 3001');
	console.log(Table);
})