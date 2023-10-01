import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import { Home } from './pages/Home';
import {SchoolList} from "./pages/SchoolList"
import {Quiz} from "./pages/Quiz"
import {Contact} from "./pages/Contact"
import {Register} from "./pages/Register"
import { Login } from './pages/Login'
import {SchoolPreview} from "./pages/SchoolPreview";
import {Disability} from "./pages/Disability"
export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: "/quiz",
            element: <Quiz/>
        },
        {
            path: "/school-list",
            element:<SchoolList/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/disability",
            element: <Disability/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/schoolPreview",
            element: <SchoolPreview />
        }
    ]
)