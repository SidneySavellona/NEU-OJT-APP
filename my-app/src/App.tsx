import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { auth } from './services/firebase';
import NoPage from './pages/noPage';
import { ProtectedRoute } from './services/protectedRoutes';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';

function App(){
  const[user, setUser] = useState<User | null>(null);
  const[loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
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
          element: <NoPage /> 
      },
      {
          path: `/`,
          element: <ProtectedRoute user={user}><Dashboard /></ProtectedRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: (<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>),
      },
    ]);

  return <RouterProvider router={Routes}></RouterProvider>;
};


export default App;
