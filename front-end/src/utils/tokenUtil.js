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
    return !!getToken(); 
};

export const getUserId = () => {
    const token = getToken();
    if (token) {
        const payload = token.split('.')[1]; 
        const decodedPayload = atob(payload); 
        const user = JSON.parse(decodedPayload); 
        return user.id; 
    }
    return null; 
}
