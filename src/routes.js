const {Router} = require('express');
const routes = Router();
const UserController = require('./controllers/UserController');

routes.get('/health', (req, res) => {
    return res.status(200).json({message: 'Server online'});
});

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);



module.exports = routes;