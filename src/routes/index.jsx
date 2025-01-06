import { lazy } from "react";
import { Navigate } from "react-router-dom";
const HomePage = lazy(() => import('@/pages/Home'))
const LoginPage = lazy(() => import('@/pages/Login'))
const RegisterPage = lazy(() => import('@/pages/Register'))
const GameList = lazy(() => import('@/pages/GameList'))
const GamePage = lazy(() => import('@/pages/Game'))
const pagesRoutes = [
    {
        path: '/',
        name: 'Home Page',
        element: <HomePage />
    },
    {
        path: '/Login',
        name: 'Login Page',
        element: <LoginPage />
    },
    {
        path: '/Register',
        name: 'Register Page',
        element: <RegisterPage />
    },
    {
        path: '/About',
        name: 'About Page',
        element: <LoginPage />
    },
    {
        path: '/Games',
        name: 'Game List',
        element: <GameList />
    },
    {
        path: '/Games/:id',
        name: 'Game Page',
        element: <GamePage />
    }
]

const allUserRoutes = [
    ...pagesRoutes
]
export { allUserRoutes }