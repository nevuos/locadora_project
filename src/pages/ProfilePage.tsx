import React from 'react';
import ProfileComponent from '../components/pages/ProfileComponent';
import { useNavigate } from 'react-router-dom';
import { logout } from '../controllers/AuthControllers';
import User from "../core/UserData";
import {deleteUser, getUsers, updateProfile} from "../services/ApiService";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

    const handleLogout = () => {
    logout();
    navigate('/SignInPage');
  };

  const handleProfileUpdate = (userData: User) => {
    console.log(userData);
    updateProfile(userData);
  }

  const handleLoadingUser = (userData: User) => {
    getUsers(userData.email)
  }

  const handleDelete = (id: Number | null) => {
    deleteUser(id);
    logout();
    navigate('/SignInPage');
  }

  return <ProfileComponent onLogout={handleLogout} onLoadingPage={handleLoadingUser} onUpdate={handleProfileUpdate} onDelete={handleDelete}/>;
};

export default ProfilePage;
