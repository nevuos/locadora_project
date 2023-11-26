import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../../controllers/AuthControllers';


interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/SignInPage" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
