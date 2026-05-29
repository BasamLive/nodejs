const express = require('express')
const fs = require('fs');
const port = 3000


// Middleware for using JSON as a response to a request
const app = express()
app.use(express.json());

const tours = JSON.parse(fs.readFileSync('./natours/dev-data/data/tours-simple.json','utf-8'))

// Endpont handlers 
const getAllTours = (req,res)=>{
	res.status(200).json({
		status:'success',
		length:tours.length,
		tours:tours,
	})
}

const allPosts = (req,res)=>{
	
	const newId = tours[tours.length - 1].id + 1;
	const newTour = Object.assign({id: newId},req.body);
	tours.push(newTour);
	fs.writeFile(`${__dirname}/natours/dev-data/data/tours-simple.json`,JSON.stringify(tours),(err)=>{
		if(err) throw new Error("There is a problem writing to this file")
		
	})

	res.status(201).json({
		status:'success',
		tour:newTour
	})



}
const getTour = (req,res)=>{
	
	const id = req.params.id;
	if(id > tours.length) return res.status(404).json({
		message:"Not Found"
	});
	const queryTour = tours.find((tour)=> tour.id == id)
	res.json(queryTour)	
}

const patchTour = (req,res)=>{
	res.send("You can patch to this endpoint")
};
const deleteTour = (req,res)=>{
	if(req.params.id * 1 > tours.length){
		return res.status(404).json({
			status:'fail',
			message:"Invalid ID"
		})
	}
	res.status(200).json({
		status:'success',
		data:{
			tour:'<Updated tour here>'
		}

	})
}








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