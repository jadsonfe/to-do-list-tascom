const {Router} = require('express');
const routes = Router();
const UserController = require('./controllers/UserController');
const validateUser = require('./middlewares/validation');
const TaskController = require('./controllers/TaskController');
const TagController = require('./controllers/TagController');
const authMiddleware = require('./middlewares/authMiddleware');

routes.get('/health', (req, res) => {
    return res.status(200).json({message: 'Server online'});
});


// Rotas de Usuários

// Rota para criar um novo usuario
routes.post('/users/register',validateUser, UserController.store);

// Rota para login
routes.post('/users/login', UserController.login);

// Rota para listar todos os usuarios
routes.get('/users', UserController.index);

// Rota para mostrar um unico usuario
routes.get('/users/:id', UserController.show);

// Rota para atualizar um usuario
routes.put('/users/:id',validateUser, authMiddleware , UserController.update);

// Rota para deletar um usuario
routes.delete('/users/:id',authMiddleware, UserController.delete);

// Rotas de Tarefas

// Rota para criar uma nova tarefa
routes.post('/tasks', TaskController.store);

// Rota para filtrar tarefas por tags EX: /tasks/tags?tags=tag1,tag2
routes.get('/tasks/tags', TaskController.filterTasksByTags);

// Rota para listar todas as tarefas
routes.get('/tasks', TaskController.index);

// Rota para mostrar uma unica tarefa
routes.get('/tasks/:id', TaskController.show);

// Rota para atualizar uma tarefa
routes.put('/tasks/:id', TaskController.update);

// Rota para deletar uma tarefa
routes.delete('/tasks/:id', TaskController.delete);

// Rotas de Tags

// Rota para criar uma nova tag
routes.post('/tags', TagController.store);

// Rota para listar todas as tags
routes.get('/tags', TagController.index);

// Rota para mostrar uma unica tag
routes.get('/tags/:id', TagController.show);

// Rota para atualizar uma tag
routes.put('/tags/:id', TagController.update);

// Rota para deletar uma tag
routes.delete('/tags/:id', TagController.delete);

module.exports = routes;