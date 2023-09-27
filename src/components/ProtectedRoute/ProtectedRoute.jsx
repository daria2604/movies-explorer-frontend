import * as React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";


const ProtectedRoute = ({ isLoading, element: Component, ...props }) => {
  return (
    isLoading ? <Preloader/> : (props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace/>)
  )
};

export default ProtectedRoute;