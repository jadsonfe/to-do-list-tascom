const {Task, Tag} = require('../models');

class TaskController {
    // Lista todas as tarefas
    async index(req, res) {
        const tasks = await Task.findAll();
        return res.json(tasks);
    }

    // Cria uma nova tarefa
    async store(req, res) {
      const { title, status, priority, description } = req.body;
      const { workspaceId } = req.params;
      const userId = req.userId; // ← vindo do authMiddleware
    
      if (!workspaceId || !userId) {
        return res.status(400).json({ message: 'workspaceId e userId são obrigatórios.' });
      }
    
      try {
        const task = await Task.create({
          title,
          status,
          priority,
          description,
          workspaceId,
          userId,
        });
    
        return res.status(201).json(task);
      } catch (error) {
        console.error('Erro ao criar task:', error);
        return res.status(500).json({ message: 'Erro ao criar task.' });
      }
    }
    

    // Filtra tarefas por tags
    async filterTasksByTags(req, res) {
        try {
          const { tags } = req.query;
      
          if (!tags || tags.length === 0) {
            return res.status(400).json({ message: 'É necessário fornecer ao menos uma tag para filtrar as tarefas.' });
          }
      
          const tagNames = tags.split(',');
      
    
          const tagsFound = await Tag.findAll({
            where: {
              name: tagNames
            }
          });
      
          if (tagsFound.length !== tagNames.length) {
            return res.status(404).json({ message: 'Algumas tags não foram encontradas.' });
          }
      
          
          const tasks = await Task.findAll({
            include: {
              model: Tag,
              where: {
                name: tagNames
              },
              through: { attributes: [] }, 
              required: true
            }
          });
      
          return res.status(200).json(tasks);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Erro ao filtrar tarefas por tags.' });
        }
      };

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

    // tpdas as tasks de um workspace por id
    async filterTasksByWorkspace(req, res) {

        try {
          const { workspaceId } = req.params;
          console.log("workspaceId recebido:", req.params.workspaceId);
          console.log("workspaceId:", workspaceId);
          if (!workspaceId) {
            return res.status(400).json({ message: "Workspace ID é obrigatório." });
          }
          const tasks = await Task.findAll({
            where: {
              workspaceId: workspaceId
            },
          });
          return res.json(tasks);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Erro ao filtrar tarefas por workspace.' });
        }
      };
}

module.exports = new TaskController();