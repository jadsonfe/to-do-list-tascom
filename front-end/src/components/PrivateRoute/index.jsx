import { Navigate } from "react-router";
import { getToken } from "../../utils/tokenUtil";

export default function PrivateRoute({ children }) {
    const isAuthenticated = !!getToken();

    return isAuthenticated ? children : <Navigate to="/login" />;
}