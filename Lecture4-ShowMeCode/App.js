import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/Body';
import Footer from './src/Footer';
import Header from './src/Header';
import About from './src/About';
import Error from './src/Error';
import Contact from './src/Contact';
import Login from './src/Login';
import Profile from './src/Profile';
import RestaurantInfo from './src/RestaurantInfo';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Restaurant from './src/Restaurant';
let App = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
}

let routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile', // dont use / becuase the path is parentpath/{path} ==> /about/profile
                        element: <Profile /> // will be added in outlet==> which is written in the parent component
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantInfo />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
])

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routes} />);
