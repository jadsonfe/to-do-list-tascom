import api from "../configs/api";
import { getToken } from "../utils/tokenUtil";

const WorkspaceService = {
    async getWorkspaces() {
        const response = await api.get("/workspace", {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return response.data;
    },
};

export default WorkspaceService;