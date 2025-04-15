import api from '../configs/api.js';

const UserService = {
    async login(email, password) {
        const response = await api.post('/user/login', { email, password });
        return response.data;
    },
    async register(name, email, password) {
        const response = await api.post('/user/register', { name, email, password });
        return response.data;
    }
};

export default UserService;