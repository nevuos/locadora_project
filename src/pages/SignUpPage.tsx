import React from 'react';
import User from "../core/UserData";
import SignUpComponent from "../components/pages/SignUpComponent";
import { signUp } from "../controllers/AuthControllers";
import { useNavigate } from 'react-router-dom';
import { showErrorAlert, showSuccessAlert } from '../errors/ErrorHandling';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async (userData: User) => {
    try {
      const result = await signUp(userData);
      if (result.success) {
        await showSuccessAlert(result.message);
        navigate('/SignInPage');
      } else {
        showErrorAlert(`${result.errorDetails}`);
      }
    } catch (error) {
      showErrorAlert("Ocorreu um erro ao fazer o registro. Tente novamente mais tarde.");
    }
  };

  return <SignUpComponent onSignUp={handleSignUp} />;
};

export default SignUpPage;
