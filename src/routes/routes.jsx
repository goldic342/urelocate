import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';

export const routes = [
    {
        path: '/',
        element: <HomePage/>,
        errorElement: <ErrorPage/>   
    },
    {
        path: '/contacts',
        element: <h1>Contacts page</h1>
    },
    {
        path: '/about',
        element: <h1>About page</h1>
    }
]