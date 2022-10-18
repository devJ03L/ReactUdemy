import { Navigate, Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth"
import { Navbar } from "../ui";

export const AppRouter = () => {
    return (
        <>            
            <Routes>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="/*" element={<HeroesRoutes/>}/>
            </Routes>
        </>
    )
}
