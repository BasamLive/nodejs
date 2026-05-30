const express = require('express')
const fs = require('fs');
const {getAllTours, allPosts,getTour,patchTour,deleteTour} = require('./controller.js')
const port = 3000


// Middleware for using JSON as a response to a request
const app = express()
app.use(express.json());



// Endpont handlers 








app.route('/api/v1/tours')
	.get(getAllTours)
	.post(allPosts)


app.route('/api/v1/tours/:id')
	.get(getTour)
	.patch(patchTour)
	.delete(deleteTour)









app.listen(port,'127.0.01',()=>{
	console.log(`Server is running on port ${port}...`);
	
})