const { Workspace } = require('../models');
// create workspace controller

class WorkspaceController {
    async index(req, res) {
        const workspaces = await Workspace.findAll();
        return res.json(workspaces);
    }
    async store(req, res) {
        const { name } = req.body;
        const workspace = await Workspace.create({ name });
        return res.json(workspace);
    }
}