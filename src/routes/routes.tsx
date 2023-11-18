import React from 'react';
import { useLocation } from 'react-router-dom';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Routes, Route } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ProfilePage from '../pages/ProfilePage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import TitleBox from '../components/TitleBox';
import ProtectedRoute from '../components/routes/ProtectedRoute';


const RoutesWrapper: React.FC = () => {
  const location = useLocation();
  const shouldShowTitleBox = location.pathname !== '/ProfilePage';

  return (
    <Grid container height="90vh">
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/ProfilePage" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
        <Route path="/ResetPasswordPage" element={<ResetPasswordPage />} />
      </Routes>
      {shouldShowTitleBox && <TitleBox />}
    </Grid>
  );
};

export default RoutesWrapper;
