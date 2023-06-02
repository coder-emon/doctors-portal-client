import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AppointmentPage from "../Pages/AppointmentPage/AppointmentPage";
import Login from "../Pages/Login/Login";

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
            {
                path:"/login",
                element:<Login></Login>
            }
            
        ]
    }
])
export default router;