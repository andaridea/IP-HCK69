import { Children } from "react"
import CartPage from "./CartPage"
import DetailPage from "./DetailPage"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"
import NavbarLogin from "./components/navbarlogin"
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import MainLayout from "./MainLayout"
import SecondLayout from "./SecondLayout"
import HomePageLogin from "./pages/afterlogin/HomePageLogin"
import DetailPageLogin from "./pages/afterlogin/DetailPageLogin"

const router = createBrowserRouter([
 {
  element: <MainLayout />,
  children: [
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
  loader: () => {
    return !localStorage.getItem("access_token") ? redirect("/login") : null;
  },
  children: [
    {
      path: "/hotels",
      element: <HomePageLogin />,
    },
    {
      path: "/hotel/:id",
      element: <DetailPageLogin />,
    },
    {
      path: "/carts",
      element: <CartPage />,
    },
  ]
 },
 {
  path: "/login",
  element: <LoginPage />,
},
]);

function App() {
  return <RouterProvider router={router} />
}

export default App