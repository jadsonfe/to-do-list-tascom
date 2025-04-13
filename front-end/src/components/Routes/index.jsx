//import {Routes as ReactRouterRoutes, Route} from 'react-router-dom';
import { Routes as ReactRouterRoutes, Route } from 'react-router';
import { Home, Login } from '../../pages';

export default function Routes() {
    return (
        <ReactRouterRoutes>
            <Route path="/" element={<Login />} /> 
        </ReactRouterRoutes>
    )
}
