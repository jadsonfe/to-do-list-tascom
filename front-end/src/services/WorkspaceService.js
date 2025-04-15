import api from "../configs/api";
import { getToken } from "../utils/tokenUtil";

const WorkspaceService = {
    async getWorkspaces() {
        const response = await api.get("/workspaces", {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    },
    async createWorkspace(name) {
        const response = await api.post("/workspaces", { name }, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    },
    async deleteWorkspace(workspaceId) {
        const response = await api.delete(`/workspaces/${workspaceId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    },
    async getWorkspace(workspaceId) {
        const response = await api.get(`/workspaces/${workspaceId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    },
    async updateWorkspace(workspaceId, name) {
        const response = await api.put(`/workspaces/${workspaceId}`, { name }, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    },
    async getWorkspaceByUserId(userId) {
        const response = await api.get(`/workspaces/user/${userId}`, {  
            headers: {
                Authorization: `Bearer ${getToken()}`,  
            },
        });
        return response.data;
    },
};

export default WorkspaceService;