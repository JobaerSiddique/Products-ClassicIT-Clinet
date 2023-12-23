import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/MainPage/Main";
import Login from "../AuthenticationPage/Login";
import Register from "../AuthenticationPage/Register";
import Home from "../Home/Home";
import Explores from "../Explores";
import ProductDetails from "../Products/ProductDetails";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'explore',
                element:<Explores/>
            },
            {
                path:'productdetails/:id',
                element:<ProductDetails/>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'explore/productdetails/:id',
                element:<ProductDetails/>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signup',
                element:<Register/>
            }
        ]
    }
]) 