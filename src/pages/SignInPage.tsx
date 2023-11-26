import SignInComponent from '../components/pages/SignInComponent';
import User from '../core/UserData';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, signIn } from '../controllers/AuthControllers';
import { useEffect } from 'react';
import { showErrorAlert } from '../errors/ErrorHandling';

const SignInPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/ProfilePage');
    }
  }, [navigate]);

  const handleSignIn = async (userData: User, rememberMe: boolean) => {
    try {
      const result = await signIn(userData, rememberMe);
      if (result.success) {
        navigate('/ProfilePage');
      } else {
        showErrorAlert(`${result.errorDetails}`);
      }
    } catch (error) {
      showErrorAlert("Ocorreu um erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  return <SignInComponent onSignIn={handleSignIn} />;
};

export default SignInPage;
