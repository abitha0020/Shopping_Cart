import { Route, Routes } from "react-router";
import Home from "@/pages/home";

export default function Navigator(){
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
            </Routes>
        </>
    )
}