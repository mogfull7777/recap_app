import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Detail from "./pages/Detail";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Main />
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : "/:productId",
        element : <Detail />
    }
])

export default router