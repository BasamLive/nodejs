
const fs = require('fs');



const tours = JSON.parse(fs.readFileSync('./natours/dev-data/data/tours-simple.json','utf-8'))

module.exports.getAllTours = (req,res)=>{
	res.status(200).json({
		status:'success',
		length:tours.length,
		tours:tours,
	})
}

module.exports.allPosts = (req,res)=>{
	
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
module.exports.getTour = (req,res)=>{
	
	const id = req.params.id;
	if(id > tours.length) return res.status(404).json({
		message:"Not Found"
	});
	const queryTour = tours.find((tour)=> tour.id == id)
	res.json(queryTour)	
}

module.exports.patchTour = (req,res)=>{
	res.send("You can patch to this endpoint")
};
module.exports.deleteTour = (req,res)=>{
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
