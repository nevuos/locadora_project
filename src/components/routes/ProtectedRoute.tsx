import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const isAuthenticated = (): boolean => {

  return true; 
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/SignInPage" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
