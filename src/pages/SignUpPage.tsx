import React from "react";
import User from "../core/UserData";
import SignUpComponent from "../components/pages/SignUpComponent";
import {registerUser} from "../services/ApiService";

const SignUpPage = () => {

  const handleSignUp = (userData: User) => {
    registerUser(userData)
  };

  return <SignUpComponent onSignUp={handleSignUp} />;
};

export default SignUpPage;
