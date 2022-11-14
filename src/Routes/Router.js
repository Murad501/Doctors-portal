import Main from '../Layout/Main';
import Appointment from '../Pages/Appointment/Appointment/Appointment';
import Home from '../Pages/Home/Home/Home';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])

export default router