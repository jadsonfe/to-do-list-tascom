const { Workspace } = require('../models');
// create workspace controller

class WorkspaceController {
    async store(req, res) {
        try {
        const userId  = req.user.id; // Obtém o ID do usuário do token JWT
        const { name } = req.body;
        const workspace = await Workspace.create({ name, userId });
        return res.status(201).json(workspace);
        } catch (error) {
            console.error('Erro ao criar workspace:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }
    async index(req, res) {
        try {
        const workspaces = await Workspace.findAll();
        return res.status(200).json(workspaces);
        } catch (error) {
            console.error('Erro ao listar workspaces:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }
    async show(req, res) {
        try {
        const { id } = req.params;
        const workspace = await Workspace.findByPk(id);
        if (!workspace) {
            return res.status(404).json({ error: 'Workspace not found' });
        }
        return res.json(workspace);
        } catch (error) {
            console.error('Erro ao mostrar workspace:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }
    async update(req, res) {
        try {
        const { id } = req.params;
        const { name } = req.body;
        const workspace = await Workspace.findByPk(id);
        if (!workspace) {
            return res.status(404).json({ error: 'Workspace not found' });
        }
        await workspace.update({ name });
        return res.json(workspace);
        } catch (error) {
            console.error('Erro ao atualizar workspace:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }

    async delete(req, res) {
        try {
        const { id } = req.params;
        const workspace = await Workspace.findByPk(id);
        if (!workspace) {
            return res.status(404).json({ error: 'Workspace not found' });
        }
        await workspace.destroy();
        return res.json({ message: 'Workspace deleted successfully' });
        } catch (error) {
            console.error('Erro ao deletar workspace:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }
    // visualizar todas as workspaces de um usuario
    async showWorkspacesByUser(req, res) {
        try {
            const userId = req.user.id; // Obtém o ID do usuário do token JWT
            const workspaces = await Workspace.findAll({ where: { userId } });
            return res.status(200).json(workspaces);
        } catch (error) {
            console.error('Erro ao listar workspaces do usuário:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }
}

module.exports = new WorkspaceController();