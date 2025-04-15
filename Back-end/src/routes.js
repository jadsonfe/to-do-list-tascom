const {Router} = require('express');
const routes = Router();
const UserController = require('./controllers/UserController');
const {validateUser} = require('./middlewares/validation');
const {validateTask} = require('./middlewares/validation');
const {validateTag} = require('./middlewares/validation');
const TaskController = require('./controllers/TaskController');
const TagController = require('./controllers/TagController');
const WorkspaceController = require('./controllers/WorkspaceController');
const authMiddleware = require('./middlewares/authMiddleware');

routes.get('/health', (req, res) => {
    return res.status(200).json({message: 'Server online'});
});


// Rotas de Usuários

// Rota para criar um novo usuario
routes.post('/user/register',validateUser, UserController.store);

// Rota para login
routes.post('/user/login', UserController.login);

// Rota para listar todos os usuarios
routes.get('/users', authMiddleware , UserController.index);

// Rota para mostrar um unico usuario
routes.get('/users/:id', authMiddleware , UserController.show);

// Rota para atualizar um usuario
routes.put('/users/:id',validateUser, authMiddleware , UserController.update);

// Rota para deletar um usuario
routes.delete('/users/:id',authMiddleware, UserController.delete);

// Rotas de Tarefas

// Rota para criar uma nova tarefa
routes.post('/tasks', validateTask,  authMiddleware ,TaskController.store);

// Rota para filtrar tarefas por tags EX: /tasks/tags?tags=tag1,tag2
routes.get('/tasks/tags', authMiddleware , TaskController.filterTasksByTags);

// Rota para listar todas as tarefas
routes.get('/tasks', authMiddleware , TaskController.index);

// Rota para mostrar uma unica tarefa
routes.get('/tasks/:id', authMiddleware , TaskController.show);

// Rota para atualizar uma tarefa
routes.put('/tasks/:id', validateTask, authMiddleware , TaskController.update);

// Rota para deletar uma tarefa
routes.delete('/tasks/:id', authMiddleware , TaskController.delete);

// Rotas de Tags

// Rota para criar uma nova tag
routes.post('/tags', validateTag, authMiddleware , TagController.store);

// Rota para listar todas as tags
routes.get('/tags', authMiddleware , TagController.index);

// Rota para mostrar uma unica tag
routes.get('/tags/:id', authMiddleware , TagController.show);

// Rota para atualizar uma tag
routes.put('/tags/:id', validateTag, authMiddleware , TagController.update);

// Rota para deletar uma tag
routes.delete('/tags/:id', authMiddleware , TagController.delete);

// Rota de workspace

// Rota para criar um novo workspace
routes.post('/workspaces', authMiddleware , WorkspaceController.store);

// Rota para visualizar todos os workspaces
routes.get('/workspaces', authMiddleware , WorkspaceController.index);

// Rota para visualizar um workspace
routes.get('/workspaces/:id', authMiddleware , WorkspaceController.show);

// Rota para atualizar um workspace
routes.put('/workspaces/:id', authMiddleware , WorkspaceController.update);

// Rota para deletar um workspace
routes.delete('/workspaces/:id', authMiddleware , WorkspaceController.delete);

module.exports = routes;