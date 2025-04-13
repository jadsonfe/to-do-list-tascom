const joi = require('joi');

const userSchema = joi.object({
    name: joi.string().required().messages({
        'string.empty': 'O nome é obrigatório',
        'any.required': 'O nome é obrigatório',
    }),
    email: joi.string().email().required().messages({
        'string.email': 'E-mail inválido',
        'string.empty': 'O e-mail é obrigatório',
        'any.required': 'O e-mail é obrigatório',
    }),
    password: joi.string().min(6).required().messages({
        'string.min': 'A senha deve ter pelo menos 6 caracteres',
        'string.empty': 'A senha é obrigatória',
        'any.required': 'A senha é obrigatória',
    }),
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
    title: joi.string().required().messages({
        'string.empty': 'O título é obrigatório',
        'any.required': 'O título é obrigatório',
    }),
    status: joi.string().required().messages({
        'string.empty': 'O status é obrigatório',
        'any.required': 'O status é obrigatório',
    }),
    priority: joi.string().required().messages({
        'string.empty': 'A prioridade é obrigatória',
        'any.required': 'A prioridade é obrigatória',
    }),
    description: joi.string().required().messages({
        'string.empty': 'A descrição é obrigatória',
        'any.required': 'A descrição é obrigatória',
    }),
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
    name: joi.string().required().messages({
        'string.empty': 'O nome é obrigatório',
        'any.required': 'O nome é obrigatório',
    }),
    color: joi.string().required().messages({
        'string.empty': 'A cor é obrigatória',
        'any.required': 'A cor é obrigatória',
    }),
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
