const joi = require('joi');
const userSchema = joi.object({
    name: joi.string().required().message('O nome é obrigatorio'),
    email: joi.string().email().required().message('E-mail inválido'),
    password: joi.string().required().min(6).message('A senha deve ter pelo menos 6 caracteres'),
});

const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(400).send(errors);
    }
    next();
};

const taskSchema = joi.object({
    title: joi.string().required().message('O titulo é obrigatorio'),
    status: joi.string().required().message('O status é obrigatorio'),
    priority: joi.string().required().message('A prioridade é obrigatorio'),
    description: joi.string().required().message('A descricao é obrigatorio'),
});

const validateTask = (req, res, next) => {
    const { error } = taskSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(400).send(errors);
    }
    next();
};

const tagSchema = joi.object({
    name: joi.string().required().message('O nome é obrigatorio'),
    color: joi.string().required().message('A cor é obrigatorio'),
});

const validateTag = (req, res, next) => {
    const { error } = tagSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map(detail => detail.message);
        return res.status(400).send(errors);
    }
    next();
};

module.exports = { validateUser, validateTask, validateTag };

