var db = require("../models");

module.exports = function(app) {
    //GET route for one photo
    app.get("/api/album/albumId/post/:id", (req, res) => {
        db.post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.album]
        }).then(dbPhoto => {
            res.json(dbPhoto)
        })
    })

    //POST route for adding a photo to album
    app.post("/api/album/albumId/post/", (req, res) => {
        db.post.create(req.body).then(addPhoto => {
            res.json(addPhoto)
        })
    })

    //PUT route for updating a photo 
    app.put("/api/album/albumId/post/", (req, res) => {
        db.post.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(dbPost => {
            res.json(dbPost)
        })
    })

    //DELETE route for deleting a photo
    app.delete("/api/album/albumId/post/:id", (req, res) => {
        db.post.destroy({}).then(dbPost => {
            res.json(dbPost)
        })
    })

}