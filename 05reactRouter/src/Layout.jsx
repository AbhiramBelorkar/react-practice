import Footer from "./component/footer/Footer"
import Header from "./component/header/Header"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}