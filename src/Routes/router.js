import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AppointmentPage from "../Pages/AppointmentPage/AppointmentPage";
import Login from "../Pages/Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/appointment",
                element:<AppointmentPage></AppointmentPage>
            },
           
            
        ]
    },
    {
        path:"/login",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
               path:"/login",
               element:<Login></Login>
            },
            {
                path:"/login/register",
                element:<Register></Register>
            }
        ]
    }
])
export default router;