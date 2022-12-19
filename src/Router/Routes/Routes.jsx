import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Componants/Blog/Blog";
import Checkout from "../../Componants/Checkout/Checkout";
import Chart from "../../Componants/Dashboard/Chart/Chart";
import Dashboard from "../../Componants/Dashboard/Dashboard/Dashboard";
import ImageUpload from "../../Componants/Dashboard/ImageUpload/ImageUpload";
import Home from "../../Componants/Home/Home/Home";
import Login from "../../Componants/LoginSignUp/Login";
import SignUP from "../../Componants/LoginSignUp/SignUP";
import Products from "../../Componants/Products/Products";
import AdminLayout from "../../Layout/AdminLayout";
import HomeLayout from "../../Layout/HomeLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <SignUP />
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout /></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminLayout />,
        children: [
            {
                path: '/dashboard/dataTable',
                element: <Dashboard />
            },
            {
                path: '/dashboard/imageUpload',
                element: <ImageUpload />
            },
            {
                path: '/dashboard/chart',
                element: <Chart />
            },
        ]
    }

])

export default routes;