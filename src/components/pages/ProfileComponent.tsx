import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Avatar, colors, Container, Paper } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ProfileComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isEditable, setIsEditable] = useState(false);

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
              {...register("nome", { required: "Nome é obrigatório" })}
              error={!!errors.nome}
              helperText={(errors.nome && typeof errors.nome.message === 'string') ? errors.nome.message : ''}
            />

            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              disabled={!isEditable}
              {...register("email", {
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "E-mail inválido"
                }
              })}
              error={!!errors.email}
              helperText={(errors.email && typeof errors.email.message === 'string') ? errors.email.message : ''}
            />

            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              disabled={!isEditable}
              {...register("senha", { required: "Senha é obrigatória" })}
              error={!!errors.senha}
              helperText={(errors.senha && typeof errors.senha.message === 'string') ? errors.senha.message : ''}
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
