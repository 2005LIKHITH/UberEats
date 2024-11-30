import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login";
import MainLayout from "./MainLayout";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
// import './App.css';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //   {
    //     path: "/login",
    //     element: <Login />
    //   },
    //   {
    //     path: "/signup",
    //     element: <Signup />
    //   }
    // ]
    
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword/>
  },
  {
    path:"/reset-password",
    element:<ResetPassword/>
  },
  {
    path:"/verify-email",
    element: <VerifyEmail/>
  }
]);

export default function Home() {
  return (
    <div>
      <main>
        <RouterProvider router={appRouter} />
      </main>
    </div>
  );
}
