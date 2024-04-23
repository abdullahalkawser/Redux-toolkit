

import {
    createBrowserRouter,

  } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../page/home/Home";

import Showbooks from "../page/showbooks";
import EditeBooks from "../page/addbooks/editbooks";
import AddBooks from "../page/addbooks/addBokks";

 const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      
      children: [
        {
          path: "/home",
          element: <Home/>,
        },
        {
          path: "/showbooks",
          element: <Showbooks></Showbooks>,
        },
        {
          path: "/editBokks",
          element: <EditeBooks></EditeBooks>,
        },
        {
          path: "/addBOKKS",
          element: <AddBooks></AddBooks>,
        },
      ],
    },
  ]);
  export default router