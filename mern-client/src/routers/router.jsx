import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App" ; 
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import ManageBooks from "../dashboard/ManageBooks";
import UploadBook from "../dashboard/UploadBook";
import EditBooks from "../dashboard/EditBooks";

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
            loader: ({params}) => fetch(`http://localhost:5005/book/${params.id}`)
        }
      ]
    },
    {
        path : "/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"/admin/dashboard",
                elememt : <Dashboard/>
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
                loader: ({params}) => fetch(`http://localhost:5005/book/${params.id}`)
            
            }
        ]
    }
    
]);

export default router ; 
