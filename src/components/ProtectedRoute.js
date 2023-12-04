import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props  }) => {
  if (props.loggedIn) {
    return <Component {...props} />;
  } else if (props.loggedIn === false) {
    return <Navigate to="/" replace/>;
  } else {
    return <></>;
  }
}

export default ProtectedRouteElement;
