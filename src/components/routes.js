import LoginPage from "./LoginPage";
import { LOGIN_ROUTE, WELCOME_ROUTE } from "./utils/consts";
import WelcomePage from "./WelcomePage";

export const publicRoutes = [
    {
        path: WELCOME_ROUTE,
        element: <WelcomePage/>
    }
]

export const privateRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <LoginPage/>
    }
]
