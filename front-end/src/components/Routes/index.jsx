import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'; // recomendo usar esse, mais direto
import { Home, Login, Register, Task } from '../../pages';
import PrivateRoute from '../PrivateRoute'; // sem chaves se for export default

export default function Routes() {
    return (
        <ReactRouterRoutes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rotas protegidas */}
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
