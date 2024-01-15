import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig"
//layout
import MainLayout from "./layout/MainLayout";
//context
import { useGlobalContext } from "./hooks/useGlobalContext";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { user, dispatch, isAuthChange } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute user={user}>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "login",
      element: <>{user ? <Navigate to="/" /> : <Login />}</>,
    },
    {
      path: "signup",
      element: <>{user ? <Navigate to="/" /> : <Signup />}</>,
    },
  ]);
  //useEffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_CHANGE" });
    });
  }, []);

  return isAuthChange && <RouterProvider router={routes} />;
}

export default App;
