const {Task} = require('../models');

class TaskController {
    // Lista todas as tarefas
    async index(req, res) {
        const tasks = await Task.findAll();
        return res.json(tasks);
    }

    // Cria uma nova tarefa
    async store(req, res) {
        const {title, status, priority, description} = req.body;
        const task = await Task.create({title, status, priority, description});
        return res.json(task);
    }

    // Mostra uma unica tarefa
    async show(req, res) {
        const {id} = req.params;
        const task = await Task.findByPk(id);
        return res.json(task);
    }

    // Atualiza uma tarefa
    async update(req, res) {
        const {id} = req.params;
        const {title, status, priority, description} = req.body;
        const task = await Task.findByPk(id);
        await task.update({title, status, priority, description});
        return res.json(task);
    }

    // Deleta uma tarefa
    async delete(req, res) {
        const {id} = req.params;
        const task = await Task.findByPk(id);
        await task.destroy();
        return res.json({message: 'Tarefa deletada com sucesso'});
    }
}

module.exports = new TaskController();