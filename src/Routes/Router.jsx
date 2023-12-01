import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";
import Register from "../pages/Register/Register";

import CardDetails from "../pages/Home/PremiumMember/CardDetails";
import Dashboard from "../Layout/Dashboard";
import AdminDasboard from "../pages/AdminDasboard/AdminDasboard";
import ManageUsers from "../pages/AdminDasboard/ManageUsers";
import ApprovedPremium from "../pages/AdminDasboard/ApprovedPremium";
import ApprovedContactReq from "../pages/AdminDasboard/ApprovedContactReq";
import MyProfile from "../pages/UserDashboard/MyProfile";
import EditBiodata from "../pages/UserDashboard/EditBiodata";
import MyContactRequest from "../pages/UserDashboard/MyContactRequest";
import FavouritesBiodata from "../pages/UserDashboard/FavouritesBiodata";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "/cardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // {
      //   path: "updateItem/:id",
      //   element: (
      //     <AdminRoute>
      //       <UpdateItem></UpdateItem>
      //     </AdminRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/menu/${params.id}`),
      // },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "adminDashboard",
        element: <AdminDasboard></AdminDasboard>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "approvedPremium",
        element: <ApprovedPremium></ApprovedPremium>,
      },
      {
        path: "approvedContactReq",
        element: <ApprovedContactReq></ApprovedContactReq>,
      },

      //user Dashboard
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "editBiodata",
        element: <EditBiodata></EditBiodata>,
      },
      {
        path: "myContactReq",
        element: <MyContactRequest></MyContactRequest>,
      },
      {
        path: "favouritesBiodata",
        element: <FavouritesBiodata></FavouritesBiodata>,
      },
    ],
  },
]);
