const Golfers = require("../models/golf.model");


const createNewGolf = (req, res) => {
    Golfers.create(req.body)
    .then(newGolfers => {
        res.json({newGolfers});
    })
    .catch((err) => {
        res.status(400).json({ err});
});
};

const getAllGolf = (req, res) => {
    Golfers.find()
    .then((allGolferss) => {
        res.json(allGolferss);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getOneGolf = (req, res) => {
    Golfers.findOne({_id: req.params.id})
    .then(queriedGolfers => {
        res.json(queriedGolfers);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const updateGolf = (req, res) => {
    Golfers.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true, 
        runValidators: true
    })
    .then(updatedGolfers => {
        res.json({updatedGolfers});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
}

const deleteGolf = (req, res) => {
    Golfers.deleteOne({_id: req.params.id})
    .then((deletedResponse) => {
        res.json({deletedResponse})
    })
    .catch((err) => {
        res.status(400).json({err});
    });
}


module.exports = {
    createNewGolf, 
    getAllGolf, 
    getOneGolf, 
    updateGolf, 
    deleteGolf,
};


