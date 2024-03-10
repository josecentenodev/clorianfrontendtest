import Layout from "@/components/Layout";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
    path: '/',
    element: (<Layout><Home /></Layout>)
},
{
    path: '/cart',
    element: (<Layout><Cart /></Layout>)
}])

export default router;