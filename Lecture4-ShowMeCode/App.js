import React, { useState, useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/Body';
import Footer from './src/Footer';
import Header from './src/Header';
import Error from './src/Error';
import Profile from './src/Profile';
import InstaMart from './src/InstaMart';
import RestaurantInfo from './src/RestaurantInfo';
import Cart from './src/Cart';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import useIsOnline from './utils/useOnline';
import userContext from './utils/userContext';
import { Provider } from 'react-redux'; 
import store from './utils/store';
import Counter from './src/Counter';


const Login = lazy(() => import('./src/Login'));
const About = lazy(() => import('./src/About'));
const Contact = lazy(() => import('./src/Contact'));

let App = () => {

    const [userData, setUserData] = useState({ name: "Ravi", email: "pravi7031@gmail.com" });
    const [onLine, visible] = useIsOnline(false);
    return (
        // <React.Fragment>
        //     <Provider store={store}>
        //     <userContext.Provider value={{userData,setUserData}}>
        //         <Header />
        //         <Outlet />
        //         <Footer />
        //         {onLine ? <h1 className={`status online-status ${visible ? "visible" : "invisible"}`}>Online</h1> : <h1 className='status offline-status'>Offline</h1>}
        //     </userContext.Provider>
        //     </Provider>
        // </React.Fragment>
        <Counter/>
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
                element: <Suspense><About /></Suspense>,
                children: [
                    {
                        path: 'profile', // dont use / becuase the path is parentpath/{path} ==> /about/profile
                        element: <Profile /> // will be added in outlet==> which is written in the parent component
                    }
                ]
            },
            {
                path: '/contact',
                element: <Suspense><Contact /></Suspense>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantInfo />
            },
            {
                path: '/login',
                element: <Suspense><Login /></Suspense>
            },
            {
                path: '/instamart',
                element: <InstaMart />
            },
            {
                path:'/cart',
                element:<Cart />
            }
        ]
    },
])

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routes} />);
