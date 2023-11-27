import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showErrorAlert, showSuccessAlert } from '../errors/ErrorHandling';
import { confirmUserEmail } from '../controllers/AuthControllers';
import ConfirmEmailComponent from '../components/pages/ConfirmComponent';

const ConfirmEmailPage: React.FC = () => {
  const navigate = useNavigate();
  const [confirmationUrlParam, setConfirmationUrlParam] = useState<string | null>(null);

  useEffect(() => {
    const confirmationUrl = new URL(window.location.href);
    const urlParam = confirmationUrl.searchParams.get("confirmation_url");

    if (urlParam) {
      setConfirmationUrlParam(decodeURIComponent(urlParam));
    } else {
      navigate('/SignInPage');
    }
  }, [navigate]);

  const handleConfirmEmail = async () => {
    if (!confirmationUrlParam) {
      showErrorAlert("URL de confirmação inválida.");
      return;
    }
  
    try {
      const result = await confirmUserEmail(confirmationUrlParam);
  
      if (result.success) {
        await showSuccessAlert(result.message); 
        navigate('/SignInPage');
      } else {
        const errorMessage = result.errorDetails;
        showErrorAlert(errorMessage);
      }
    } catch (error) {
      showErrorAlert("Ocorreu um erro ao confirmar o e-mail. Tente novamente mais tarde.");
    }
  };
  
  return <ConfirmEmailComponent onConfirm={handleConfirmEmail} />
};

export default ConfirmEmailPage;
