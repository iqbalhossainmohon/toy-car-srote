import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddAToys from "../Pages/AddAToys/AddAToys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdatedToys from "../Pages/UpdatedToys/UpdatedToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
            path: '/allToys',
            element: <AllToys/>
        },
        {
          path: '/myToys',
          element: <MyToys/>
        },
        {
          path: '/addAToys',
          element: <AddAToys/>
        },
        {
          path: '/signUp',
          element: <SignUp/>
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path: '/updateToys/:id',
          element: <UpdatedToys/>,
          loader: ({params}) => fetch(`https://toy-car-store-server.vercel.app/allToys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;