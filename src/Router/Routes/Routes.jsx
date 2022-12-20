import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Componants/Blog/Blog";
import Checkout from "../../Componants/Checkout/Checkout";
import Chart from "../../Componants/Dashboard/Chart/Chart";
import Dashboard from "../../Componants/Dashboard/Dashboard/Dashboard";
import DataTable from "../../Componants/Dashboard/DataTable/DataTable";
import ImageUpload from "../../Componants/Dashboard/ImageUpload/ImageUpload";
import Home from "../../Componants/Home/Home/Home";
import Login from "../../Componants/LoginSignUp/Login";
import SignUP from "../../Componants/LoginSignUp/SignUP";
import Products from "../../Componants/Products/Products";
import NotFound from "../../Componants/Shared/NotFound/NotFound";
import AdminLayout from "../../Layout/AdminLayout";
import HomeLayout from "../../Layout/HomeLayout";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <NotFound />,
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
        element: <AdminRoutes><AdminLayout /></AdminRoutes>,
        errorElement: <NotFound />,
        children: [
            {
                path: '/dashboard',
                element: <AdminRoutes><Dashboard /></AdminRoutes>
            },
            {
                path: '/dashboard/dataTable',
                element: <AdminRoutes><DataTable /></AdminRoutes>
            },
            {
                path: '/dashboard/imageUpload',
                element: <AdminRoutes><ImageUpload /></AdminRoutes>
            },
            {
                path: '/dashboard/chart',
                element: <AdminRoutes><Chart /></AdminRoutes>
            },
        ]
    }

])

export default routes;