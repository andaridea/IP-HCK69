import CartPage from "./CartPage"
import DetailPage from "./DetailPage"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import NavbarLogin from "./components/navbarlogin"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  // {
  //   path: "/hotels",
  //   element: <HotelPage/>,
  // },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/hotel/:id",
    element: <DetailPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App