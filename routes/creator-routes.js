var db = require("../models");

module.exports = function(app){
	console.log("empty for now")

	// POST route to make creator 
	app.post("/api/creator", (req, res)=>{
		db.creator.create(req.body).then(addCreator=>{
			res.json(addCreator)
		})
	}) 

}
