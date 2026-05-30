const express = require('express')
const morgan = require('morgan')
const fs = require('fs');
const {getAllTours, createTour,getTour,updateTour,deleteTour} = require('./controller.js')
const port = 3000

const app = express()
app.use(express.json());



app.route('/api/v1/tours')
	.get(getAllTours)
	.post(createTour)


app.route('/api/v1/tours/:id')
	.get(getTour)
	.patch(updateTour)
	.delete(deleteTour)

app.listen(port,'127.0.01',()=>{
	console.log(`Server is running on port ${port}...`);
	
})