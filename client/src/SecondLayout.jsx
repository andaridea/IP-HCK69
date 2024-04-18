import { Outlet } from "react-router-dom";
import NavbarLogin from "./components/navbarlogin";

export default function SecondLayout () {
    return (
        <>
        <NavbarLogin />
        <Outlet />
        </>
    )
}