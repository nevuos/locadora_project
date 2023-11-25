import React from "react";
import User from "../core/UserData";
import SignUpComponent from "../components/pages/SignUpComponent";

const SignUpPage = () => {

  const handleSignUp = (userData: User) => {
    
    console.log("Dados do usuário registrados:", userData);
  };

  return <SignUpComponent onSignUp={handleSignUp} />;
};

export default SignUpPage;
