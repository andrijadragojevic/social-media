import "./app.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import RightNav from './componenets/rightNav/RightNav'
import LeftNav from './componenets/leftNav/LeftNav'
import MainNav from './componenets/mainNav/MainNav';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {

  const {darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <MainNav />
        <div style={{display: 'flex'}}>
          <LeftNav />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightNav />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ( {children} ) => {
    if(!currentUser) {
      return <Navigate to="/login"/>
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
