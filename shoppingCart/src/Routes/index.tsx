import { Route, Routes } from "react-router";
import Home from "@/pages/home";
import CartPage from "@/pages/cartPage";

export default function Navigator(){
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/cart"} element={<CartPage/>}></Route>
            </Routes>
        </>
    )
}