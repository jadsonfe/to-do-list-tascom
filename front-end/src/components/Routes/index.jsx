import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'; 
import { Home, Login, Register, Task } from '../../pages';
import PrivateRoute from '../PrivateRoute'; 

export default function Routes() {
    return (
        <ReactRouterRoutes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path="/task/:workspaceId"
                element={
                    <PrivateRoute>
                        <Task />
                    </PrivateRoute>
                }
            />
        </ReactRouterRoutes>
    );
}
