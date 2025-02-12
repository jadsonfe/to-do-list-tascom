const { User } = require('../models');

class UserController {

    // Cria um novo usuario
    async store(req, res) {
       const { name, email, password } = req.body;

       const userAlreadyExists = await User.findOne({ where: { email } });

       if (userAlreadyExists) {
           return res.status(400).json({ error: 'Usuario ja cadastrado' });
       }
       const createdUser = await User.create({ name, email, password });

       return res.json(createdUser);
    }

    // Lista todos os usuarios
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }

    // Mostra um unico usuario
    async show(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);
        return res.json(user);
    }

    // Atualiza um usuario
    async update(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Usuario nao encontrado' });
        }

 
        user.name = name;
        user.email = email;
        user.password = password;

        await user.save();

        return res.json(user);
    }

    // Deleta um usuario
    async delete(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {            
            return res.status(400).json({ error: 'Usuario nao encontrado' });
        }

        await user.destroy();

        return res.json({ message: 'Usuario deletado com sucesso' });
    }
}

module.exports = new UserController();