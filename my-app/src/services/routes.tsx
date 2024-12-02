import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/Login";
import NoPage from "../pages/noPage";
import UploadRequirement from "../pages/uploadrequirement";

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
    {
        path: `/uploadrequirement`,
        element: <UploadRequirement></UploadRequirement>
    }
    
]);

export default routes;