import React from 'react';
import ProfileComponent from '../components/pages/ProfileComponent';
import { useNavigate } from 'react-router-dom';
import { logout } from '../controllers/AuthControllers';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

    const handleLogout = () => {
    logout();
    navigate('/SignInPage');
  };

  return <ProfileComponent onLogout={handleLogout} />;
};

export default ProfilePage;
