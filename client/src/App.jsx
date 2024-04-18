import { Children } from "react"
import CartPage from "./CartPage"
import DetailPage from "./DetailPage"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import NavbarLogin from "./components/navbarlogin"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./MainLayout"
import SecondLayout from "./SecondLayout"

const router = createBrowserRouter([
 {
  element: <MainLayout />,
  children: [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/pub/hotel/:id",
      element: <DetailPage />,
    },
  ]
 },
 {
  element: <SecondLayout />,
  children: [
    {
      path: "/hotels",
      element: <HomePage />,
    },
    {
      path: "/hotel/:id",
      element: <DetailPage />,
    },
  ]
 },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App