import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App" ; 
import Home from "../pages/home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/ManageBooks";
import UploadBook from "../pages/dashboard/UploadBook";
import EditBooks from "../pages/dashboard/EditBooks";
import Login from "../components/Login";
import Logout from "../components/Logout";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>, 
      children: [
        {
            path: '/', 
            element:<Home/>
        },
        {
            path:'/shop' , 
            element:<Shop/>

        }, 
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/book/:id',
            element:<SingleBook/>,
            // loader: ({params}) => fetch(`http://localhost:5009/api/books/book/${params.id}`)
            loader: async ({ params }) => {
                const response = await fetch(`http://localhost:5009/api/books/book/${params.id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Ensure you are returning the parsed JSON
            }
            
        },
        {
            path: "/cart",
            element: <CartPage/>
          },
          {
            path:"/checkout",
            element:<CheckoutPage/>
          }
      ]
    },
    {
        path : "/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"/admin/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBook/>
            },
            {
                
                path:"/admin/dashboard/manage",
                element:<ManageBooks/>
                
            },
            {
                
                path:"/admin/dashboard/edit-books/:id",
                element:<EditBooks/>,
                loader: ({params}) => fetch(`http://localhost:5009/api/books/book/${params.id}`)
            
            }
            
            
        ]
    },
    {
        path: "register" , 
        element : <Register/>
        
    },
    {
        path:"login" , 
        element:<Login/>
    },
    {
        path: "logout" ,
        element:<Logout/> 
    }
    
    
]);

export default router ; 
