const conn = require('../controllers/connection')

module.exports = class Table {
	constructor(){
		this.init
	}

	init(){
		const sql = 'CREATE TABLE IF NOT EXISTS `table-react-travels` (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(20) NOT NULL, location VARCHAR(20) NOT NULL, googleMapsUrl TEXT NOT NULL, startDate VARCHAR(20), endDate VARCHAR(20), description TEXT, imageUrl TEXT, PRIMARY KEY(id))'
		conn.query()
	}

	/*
		id
title
location
googleMapsUrl
startDate
endDate
description
imageUrl
	*/
}