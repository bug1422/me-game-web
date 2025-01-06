import { Route, Routes } from "react-router-dom"
import { allUserRoutes } from "./index"
import UserLayout from "@/layouts/UserLayout"

const AllRoutes = (props) => {
    return (
        <Routes>
            <Route>
                {allUserRoutes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={<UserLayout {...props}>{route.element}</UserLayout>}
                    />
                ))}
            </Route>
        </Routes>
    )
}

export default AllRoutes