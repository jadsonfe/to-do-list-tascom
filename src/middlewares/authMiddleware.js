const jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ msg: 'Acesso negado! Token não fornecido ou mal formatado.' });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: 'Acesso negado! Token não encontrado.' });
    }

    const secret = process.env.SECRET;
    if (!secret) {
        console.error('Erro no servidor: SECRET não definido.');
        return res.status(500).json({ msg: 'Erro interno do servidor.' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.user = { id: decoded.id };
        return next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ msg: 'Token expirado. Faça login novamente.' });
        }
        console.error('Erro na verificação do token:', error);
        return res.status(400).json({ msg: 'Token inválido.' });
    }
}

module.exports = checkToken;
