import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function defaultLayout(){
    return(
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    )
};