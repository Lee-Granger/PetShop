const controller = require('./../controllers/examcontrol.js');
const path = require('path');

module.exports = (app) => {
    app.post('/addtopets', controller.addPet);
    app.get('/allPets', controller.getAllPets);
    app.get('/pet/:id/edit', controller.getEdit);
    app.put('/pet/update', controller.update);
    app.post('/pet/:id/delete', controller.deleteThis);
    app.all('*', (req, res, next) => { res.sendFile(path.resolve('./public/dist/public/index.html'))});
}