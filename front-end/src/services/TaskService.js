import api from "../configs/api";
import { getToken } from "../utils/tokenUtil";

const TaskService = {
    async getTasks(workspaceId) {
        const response = await api.get(`/tasks/workspace/${workspaceId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    }, 
    async createTask(workspaceId, title, description, priority, status, userId) {
        const response = await api.post(`/workspaces/${workspaceId}/tasks`, {
            title,
            description,
            priority,
            status,
            userId
        }, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    }
}    

    export default TaskService