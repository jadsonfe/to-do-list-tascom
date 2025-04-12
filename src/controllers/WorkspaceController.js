const { Workspace } = require('../models');
// create workspace controller

class WorkspaceController {
    async store(req, res) {
        const { name } = req.body;
        const workspace = await Workspace.create({ name });
        return res.json(workspace);
    }
    async index(req, res) {
        const workspaces = await Workspace.findAll();
        return res.json(workspaces);
    }
    async show(req, res) {
        const { id } = req.params;
        const workspace = await Workspace.findByPk(id);
        if (!workspace) {
            return res.status(404).json({ error: 'Workspace not found' });
        }
        return res.json(workspace);
    }
    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const workspace = await Workspace.findByPk(id);
        if (!workspace) {
            return res.status(404).json({ error: 'Workspace not found' });
        }
        await workspace.update({ name });
        return res.json(workspace);
    }

    async delete(req, res) {
        const { id } = req.params;
        const workspace = await Workspace.findByPk(id);
        if (!workspace) {
            return res.status(404).json({ error: 'Workspace not found' });
        }
        await workspace.destroy();
        return res.json({ message: 'Workspace deleted successfully' });
    }
}

module.exports = new WorkspaceController();