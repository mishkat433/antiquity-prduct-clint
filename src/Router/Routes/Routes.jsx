import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Componants/Blog/Blog";
import Checkout from "../../Componants/Checkout/Checkout";
import Home from "../../Componants/Home/Home/Home";
import Products from "../../Componants/Products/Products";
import HomeLayout from "../../Layout/HomeLayout";

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
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])

export default routes;