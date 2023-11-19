import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Avatar, colors, Container, Paper, InputAdornment, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { validationRules } from '../../utils/validator';

const ProfileComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isEditable, setIsEditable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSave = (data: any) => {
    console.log('Salvando os dados:', data);
    // Aqui você pode chamar o serviço para atualizar os dados
    setIsEditable(false);
  };


  const handleDelete = () => {
    console.log('Deletando a conta');
    // Aqui você pode chamar o serviço para deletar a conta
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <Container maxWidth="md" sx={{ py: 4, height: '90vh' }}>
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
        <form onSubmit={handleSubmit(handleSave)}>
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
              {...register("nome", validationRules.nome)}
              error={!!errors.nome}
              helperText={(errors.nome && typeof errors.nome.message === 'string') ? errors.nome.message : ''}
            />

            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              disabled={!isEditable}
              {...register("email", validationRules.email)}
              error={!!errors.email}
              helperText={(errors.email && typeof errors.email.message === 'string') ? errors.email.message : ''}
            />

            <TextField
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              disabled={!isEditable}
              {...register("senha", validationRules.password)}
              error={!!errors.senha}
              helperText={(errors.senha && typeof errors.senha.message === 'string') ? errors.senha.message : ''}
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
            </Box>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default ProfileComponent;
