import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./services/firebase";
import { ProtectedRoute } from "./services/protectedRoutes";
import Dashboard from "./pages/dashboard";
import NoPage from "./pages/noPage";
import Login from "./pages/Login";
import UpdateComp from "./components/updateComp";
import Forms from "./components/Forms";


const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // State for user
  const [loading, setLoading] = useState<boolean>(true); // State to track loading status

  // Firebase authentication status listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set user after authentication state change
      setLoading(false); // Set loading to false once user is authenticated
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>; // Show loading state while waiting for user data
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
          <Login />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
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
