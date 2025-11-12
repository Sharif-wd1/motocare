import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Service from '../Pages/ServicePage/Service';
import ServiceDetail from '../Pages/ServicePage/ServiceDetail';
import Profile from '../Pages/Profile/Profile';
import Signup from '../Pages/Signup';
import SignIn from '../Pages/SignIn';
import ForgetPassword from '../Pages/ForgetPassword';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            loader: () =>  fetch('/service.json'),
            Component: Home
        },
        {
            path: 'service',
            loader: () =>  fetch('/service.json'),
            Component: Service
        },
        {
            path: 'service/:id', 
            loader: async ({ params }) => {
                const res = await fetch('/service.json');
                const data = await res.json();
                return data.find(service => service.id === parseInt(params.id));
            },
            Component: ServiceDetail
        },
        {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
        {
            path: 'signup',
            Component: Signup
        },
        {
            path: 'signin',
            Component: SignIn
        },
        {
            path: 'forgot-password',
            Component: ForgetPassword
        }
    ]
  },
]);

