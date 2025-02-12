const { Tag } = require('../models');

class TagController {

    async index(req, res) {
        const tags = await Tag.findAll();
        return res.json(tags);
    }

    async show(req, res) {
        const { id } = req.params;
        const tag = await Tag.findByPk(id);
        return res.json(tag);
    }

    async store(req, res) {
        const { name, color } = req.body;
        const tag = await Tag.create({ name, color });
        return res.json(tag);
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, color } = req.body;
        const tag = await Tag.findByPk(id);
        await tag.update({ name, color });
        return res.json(tag);
    }

    async delete(req, res) {
        const { id } = req.params;
        const tag = await Tag.findByPk(id);
        await tag.destroy();
        return res.json({ message: 'Tag deletada com sucesso' });
    }



}

module.exports = new TagController();