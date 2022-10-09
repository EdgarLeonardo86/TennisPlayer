module.exports = app => {
    const tennisplayers = require("../controllers/tennisplayer.controller.js");

    var router = require("express").Router();

    router.post("/", tennisplayers.create);

    router.get("/",tennisplayers.findAll);

    router.get("/:id", tennisplayers.findOne);

    router.put("/:id", tennisplayers.update);

    router.delete("/:id", tennisplayers.delete);

    app.use('/api/tennisplayers', router);
};