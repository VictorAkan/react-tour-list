import { Route,Routes } from "react-router-dom"
import MainLayout from "./routes/layout"
import Home from "./routes/home"

export default function Navigation() {
    return(
        <div>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </div>
    )
}