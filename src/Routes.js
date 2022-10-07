import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import ErrorElement from "./components/ErrorElement/ErrorElement";
import Inventory from "./components/Inventory/Inventory";
import Shop from "./components/Shop/Shop";
import Main from "./layouts/Main";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
          path: 'shop',
          element: <Shop></Shop>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <AboutUs></AboutUs>
        }
      ]
    }
  ])

export default router;