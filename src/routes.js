const {Router} = require('express');
const routes = Router();
const UserController = require('./controllers/UserController');

routes.get('/health', (req, res) => {
    return res.status(200).json({message: 'Server online'});
});


// Rotas de Usuários

// Rota para criar um novo usuario
routes.post('/users', UserController.store);

// Rota para listar todos os usuarios
routes.get('/users', UserController.index);

// Rota para mostrar um unico usuario
routes.get('/users/:id', UserController.show);

// Rota para atualizar um usuario
routes.put('/users/:id', UserController.update);

// Rota para deletar um usuario
routes.delete('/users/:id', UserController.delete);

// Rotas de Tarefas

// Rota para criar uma nova tarefa
routes.post('/tasks', TaskController.store);

// Rota para listar todas as tarefas
routes.get('/tasks', TaskController.index);

// Rota para mostrar uma unica tarefa
routes.get('/tasks/:id', TaskController.show);

// Rota para atualizar uma tarefa
routes.put('/tasks/:id', TaskController.update);

// Rota para deletar uma tarefa
routes.delete('/tasks/:id', TaskController.delete);

module.exports = routes;