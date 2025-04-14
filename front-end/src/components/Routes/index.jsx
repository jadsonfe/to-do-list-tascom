//import {Routes as ReactRouterRoutes, Route} from 'react-router-dom';
import { Routes as ReactRouterRoutes, Route } from 'react-router';
import { Home, Login, Register, Task } from '../../pages';

export default function Routes() {
    return (
        <ReactRouterRoutes>
            <Route path='/'>
                <Route index element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='task' element={<Task />} />
            </Route>
        </ReactRouterRoutes>
    )
}
