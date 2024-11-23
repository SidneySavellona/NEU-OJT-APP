import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NoPage from "../pages/noPage";

const routes = createBrowserRouter([
    {
        path: "/*",
        element: <NoPage />,
    },
    {
        path: `/`,
        element: <Dashboard />,
    },
    {
        path: `/login`,
        element: <Login />,
    },
]);

export default routes;