import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
          path: '/signUp',
          element: <SignUp/>
        },
        {
          path:'/login',
          element: <Login/>
        }
      ]
    },
  ]);

  export default router;