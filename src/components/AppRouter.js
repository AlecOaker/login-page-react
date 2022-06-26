import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Context } from '..';
import { privateRoutes, publicRoutes} from './routes';
import { LOGIN_ROUTE, WELCOME_ROUTE, CREATE_ROUTE } from './utils/consts';
import { useAuthState } from "react-firebase-hooks/auth";
import AccRegister from './AccRegister';


const AppRouter = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth);
    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element} exact />
                )}
                <Route
                    path="*"
                    element={<Navigate to={LOGIN_ROUTE} replace />}
                />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element} exact/>
                )}
                <Route key={CREATE_ROUTE} path={CREATE_ROUTE} element={<AccRegister/>} />
                <Route
                    path="*"
                    element={<Navigate to={WELCOME_ROUTE} replace />}
                />
            </Routes>
        )
};

export default AppRouter;