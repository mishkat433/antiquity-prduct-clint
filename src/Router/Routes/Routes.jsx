import { createBrowserRouter } from "react-router-dom";
import Checkout from "../../Componants/Checkout/Checkout";
import AddProduct from "../../Componants/Dashboard/AddProduct/AddProduct";
import AddUser from "../../Componants/Dashboard/AddUser/AddUser";
import Dashboard from "../../Componants/Dashboard/Dashboard/Dashboard";
import DataTable from "../../Componants/Dashboard/DataTable/DataTable";
import EditUser from "../../Componants/Dashboard/EditUser/EditUser";
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
                path: '/dashboard/allUsers',
                element: <AdminRoutes><DataTable /></AdminRoutes>
            },
            {
                path: '/dashboard/allUsers/:id',
                element: <AdminRoutes><EditUser /></AdminRoutes>
            },
            {
                path: '/dashboard/AddUser',
                element: <AdminRoutes><AddUser /> </AdminRoutes>
            },
            {
                path: '/dashboard/addProducts',
                element: <AdminRoutes><AddProduct /></AdminRoutes>
            },
        ]
    }

])

export default routes;