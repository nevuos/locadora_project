import User from '../core/UserData';
import { confirmEmail, loginUser, registerUser } from '../services/ApiService';


export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const tokenExpiry = localStorage.getItem('tokenExpiry');

  if (!token || !tokenExpiry) {
    return false;
  }

  const now = new Date().getTime();
  if (now > parseInt(tokenExpiry)) {
    logout();
    return false;
  }

  return true;
};

export const verifyConfirmationUrl = () => {
  const confirmationUrl = new URL(window.location.href);
  const urlParam = confirmationUrl.searchParams.get("confirmation_url");
  return !!urlParam;
};

export const signIn = async (userData: User, rememberMe: boolean) => {
  try {
    const response = await loginUser(userData);
    const jwtToken = response.access_token;

    localStorage.setItem('token', jwtToken);

    const expirationTime = new Date().getTime() + (rememberMe ? 30 * 24 * 60 * 60 * 1000 : 3600000);
    localStorage.setItem('tokenExpiry', expirationTime.toString());

    return { success: true, message: "Login bem-sucedido" };
  } catch (error) {
    const typedError = error as { errorType: string, errorMessage: string, errorDetails: string };
    return { success: false, message: "Erro ao fazer login", errorDetails: typedError.errorDetails, errorType: typedError.errorType };
  }
};

export const signUp = async (userData: User) => {
  try {
    const response = await registerUser(userData);
    const successMessage = response.msg;
    return { success: true, message: successMessage };
  } catch (error) {
    const typedError = error as { errorType: string, errorMessage: string, errorDetails: string };
    return { success: false, message: "Erro ao registrar", errorDetails: typedError.errorDetails, errorType: typedError.errorType };
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('tokenExpiry');
};

export const confirmUserEmail = async (confirmationUrl: string) => {
  try {
    const response = await confirmEmail(confirmationUrl);
    return { success: true, message: response.msg, responseData: response };
  } catch (error) {
    const typedError = error as { errorType: string; errorMessage: string; errorDetails: string };
    return { success: false, message: 'Erro ao confirmar o e-mail', errorDetails: typedError.errorDetails, errorType: typedError.errorType };
  }
};







