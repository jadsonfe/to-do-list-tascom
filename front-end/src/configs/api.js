import axios from "axios";
// importar o .env




const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000", // URL base da API
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export default api;