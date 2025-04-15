const TOKEN_KEY = 'authToken';

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
    return !!getToken(); // retorna true se tiver token
};

export const getUserId = () => {
    const token = getToken();
    if (token) {
        const payload = token.split('.')[1]; // pega o payload do token (parte que contém as informações do usuário)
        const decodedPayload = atob(payload); // decodifica o payload para obter as informações do usuário
        const user = JSON.parse(decodedPayload); // converte o payload para um objeto JavaScript
        return user.id; // retorna o id do usuário
    }
    return null; // retorna null se não houver token
}
