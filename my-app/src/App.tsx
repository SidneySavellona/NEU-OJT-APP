import React, { useEffect, useState } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./services/firebase";
import { ProtectedRoute } from "./services/protectedRoutes";
import Dashboard from "./pages/dashboard";
import NoPage from "./pages/noPage";
import Login from "./pages/Login";
import UpdateComp from "./components/updateComp";
import Forms from "./components/Forms";


const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); 
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const Routes = createBrowserRouter([
    {
      path: "/*",
      element: <NoPage />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute user={user}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute user={user}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/update-company",
      element: (
        <ProtectedRoute user={user}>
          <UpdateComp />
        </ProtectedRoute>
      ),
    },

    {
      path: "/Student-Info", 
      element: (<ProtectedRoute user={user}><Forms /></ProtectedRoute>),
    },
  ]);

  return <RouterProvider router={Routes} />;
};


export default App;
