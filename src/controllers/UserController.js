const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



class UserController {

    // Cria um novo usuario
    async store(req, res) {
        
        try {
            const { name, email, password } = req.body;

       const userAlreadyExists = await User.findOne({ where: { email } });

       if (userAlreadyExists) {
           return res.status(400).json({ error: 'Usuario ja cadastrado' });
       }

       // Criar senha
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

       const createdUser = await User.create({ name, email, password: passwordHash });

       return res.json(createdUser);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
    }
    }

    // login
    async login(req, res) {
        
    
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
    
            if (!user) {
                return res.status(401).json({ error: 'Usuário não encontrado.' });
            }
    
            const passwordMatch = await bcrypt.compare(password, user.password);
    
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Senha inválida.' });
            }
    
            const secret = process.env.SECRET;
            if (!secret) {
                console.error('Erro no servidor: SECRET não definido.');
                return res.status(500).json({ error: 'Erro interno do servidor.' });
            }
    
            const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
    
            return res.json({ 
                user: { id: user.id, email: user.email, name: user.name },
                token 
            });
    
        } catch (error) {
            console.error('Erro no login:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }

    // Lista todos os usuarios
    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (error) {
            console.error('Erro ao listar usuarios:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
        
    }

    // Mostra um unico usuario
    async show(req, res) {
        try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        return res.json(user);
        } catch (error) {
            console.error('Erro ao mostrar usuario:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }

    // Atualiza um usuario
    async update(req, res) {
        try {
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
        } catch (error) {
            console.error('Erro ao atualizar usuario:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }

    // Deleta um usuario
    async delete(req, res) {
        try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {            
            return res.status(400).json({ error: 'Usuario nao encontrado' });
        }

        await user.destroy();

        return res.json({ message: 'Usuario deletado com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar usuario:', error);
            return res.status(500).json({ error: 'Erro no servidor. Tente novamente mais tarde.' });
        }
    }
}

module.exports = new UserController();