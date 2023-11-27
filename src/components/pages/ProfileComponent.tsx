import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Button, TextField, Avatar, colors, Container, Paper, InputAdornment, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { validationRules } from '../../utils/validator';
import { getUsers } from '../../services/ApiService';
import { useLocation } from 'react-router-dom';
import User from '../../core/UserData';

const ProfileComponent: React.FC<{ onLogout: () => void, onLoadingPage: (userData: User) => void, onUpdate: (userData: User) => void, onDelete: (id: Number | null) => void }> = ({ onLogout, onLoadingPage, onUpdate, onDelete }) => {

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm<User>();

  const [isEditable, setIsEditable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const email = location.state?.email;
  const handleEditClick = () => {
    setIsEditable(true);
  };

  const onSubmit: SubmitHandler<User> = async (UserData) => {

    if (UserData) {
      try {
        onUpdate(UserData);
      } catch (error) {

      }
    }

    setIsEditable(false);
  };

  const handleDelete = () => {
    const id = getValues('id');
    onDelete(id);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogoutClick = () => {
    onLogout();
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUsers(email);
        onLoadingPage(userData);

        setValue('username', userData.username);
        setValue('email', userData.email);
        setValue('password', userData.password);
        setValue('id', userData.id)
      } catch (error) {
        console.error("Erro ao resgatar as informações: ", error);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email, onLoadingPage, setValue]);


  return (
    <Container maxWidth="md" sx={{ py: 8, height: '90vh' }}>
      <Paper
        sx={{
          backgroundColor: 'rgba(55, 65, 81, 0.9)',
          padding: 4,
          borderRadius: 2,
          boxShadow: `0 0 10px ${colors.grey[800]}`,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Avatar
              sx={{
                bgcolor: colors.blue[500],
                width: 100,
                height: 100,
              }}
            />

            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              disabled={!isEditable}
              {...register("username", validationRules.nome)}
              error={!!errors.username}
              helperText={(errors.username && typeof errors.username.message === 'string') ? errors.username.message : ''}
              InputLabelProps={{
                shrink: true,
                style: { color: 'grey', fontSize: 14, fontWeight: 'bold', transform: 'translate(9px, -13px) scale(1)' }
              }}
            />

            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              disabled={!isEditable}
              {...register("email", validationRules.email)}
              error={!!errors.email}
              helperText={(errors.email && typeof errors.email.message === 'string') ? errors.email.message : ''}
              InputLabelProps={{
                shrink: true,
                style: { color: 'grey', fontSize: 14, fontWeight: 'bold', transform: 'translate(9px, -13px) scale(1)' }
              }}
            />

            <TextField
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              disabled={!isEditable}
              {...register("password", validationRules.password)}
              error={!!errors.password}
              helperText={(errors.password && typeof errors.password.message === 'string') ? errors.password.message : ''}
              InputLabelProps={{
                shrink: true,
                style: { color: 'grey', fontSize: 14, fontWeight: 'bold', transform: 'translate(6px, -13px) scale(1)' }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Id"
              type="text" style={{ display:'none' }}
              {...register("id")}
            />

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={handleEditClick}
                sx={{
                  color: colors.blue[500],
                  borderColor: colors.blue[500],
                  '&:hover': {
                    backgroundColor: colors.blue[50],
                  },
                }}
              >
                Editar
              </Button>

              <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
                sx={{
                  backgroundColor: colors.green[600],
                  color: 'white',
                  '&:hover': {
                    backgroundColor: colors.green[700],
                  },
                }}
              >
                Salvar Alterações
              </Button>

              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
                sx={{
                  backgroundColor: colors.red[500],
                  color: 'white',
                  '&:hover': {
                    backgroundColor: colors.red[600],
                  },
                }}
              >
                Deletar Conta
              </Button>

              <Button
                variant="contained"
                onClick={handleLogoutClick}
                sx={{
                  backgroundColor: colors.blue[500],
                  color: 'white',
                  '&:hover': {
                    backgroundColor: colors.blue[600],
                  },
                }}
              >
                Sair
              </Button>
            </Box>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default ProfileComponent;
