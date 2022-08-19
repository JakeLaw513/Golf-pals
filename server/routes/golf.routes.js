const golfController = require("../controllers/golf.controller");


module.exports = (app) => {
    app.post('/api/golf', golfController.createNewGolf);
    app.get('/api/golf', golfController.getAllGolf);
    app.get("/api/golf/:id", golfController.getOneGolf);
    app.put('/api/golf/:id', golfController.updateGolf);
    app.delete('/api/golf/:id', golfController.deleteGolf);
};


