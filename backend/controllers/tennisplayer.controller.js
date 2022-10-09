const db = require("../models");
const TennisPlayer = db.tennisplayer;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!" + JSON.stringify(req.body)
        });
        return;
    }

    const tennisplayer = {
        name: req.body.name,
        titles: req.body.titles,
        age: req.body.age,
        ranking: req.body.ranking
    };

    TennisPlayer.create(tennisplayer)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the tennis player."
        });
    });
};


exports.findAll = (req,res) => {
    TennisPlayer.findAll().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tennis players."
        });
    });
};

exports.findOne = (req,res) => {
    const id = req.params.id;

  TennisPlayer.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

exports.update = (req,res) => {
    const id = req.params.id;

    if (!req.body) {
      res.status(400).send({
          message: "Content can not be empty!" + JSON.stringify(req.body)
      });
      return;
  }

  TennisPlayer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tennis Player was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tennis Player with id=${id}. Maybe Tennis Player was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tennis Player with id=" + id
      });
    });
};

exports.delete = (req,res) => {
    const id = req.params.id;

  TennisPlayer.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tennis Player was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};