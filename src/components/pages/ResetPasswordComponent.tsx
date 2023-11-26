import { Box, Button, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import CustomInput from "../CustomInput";
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { validationRules } from "../../utils/validator";
import LogoComponent from "../logo/LogoComponent";

const ResetPasswordComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Dados do formulário:', data);
    // Aqui você pode chamar o serviço para redefinir a senha
  };

  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      sx={{
        boxShadow: {
          xs: "",
          sm: "",
          md: "15px 2px 5px -5px",
          lg: "15px 2px 5px -5px",
          xl: "15px 2px 5px -5px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 24, 57, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 0 0 30px",
            lg: "30px 0 0 30px",
            xl: "30px 0 0 30px",
          },
        }}
      >
        <Box width="80%">
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* LOGO */}
            <LogoComponent />
            {/* FIM DO LOGO */}

            <Typography color="white" fontWeight="bold" mt={7} mb={3}>
              Recuperar Senha
            </Typography>
          </Box>

          {/* INPUTS */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="E-mail"
              placeholder="Digite seu e-mail..."
              isIconActive={false}
              {...register("email", validationRules.email)}
              error={!!errors.email}
              helperText={errors.email?.message?.toString()}
            />
            {/* FIM DOS INPUTS */}

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={2}
              width="100%"
              color="white"
            >
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, boxShadow: `0 0 20px ${colors.green[500]}` }}
            >
              Enviar
            </Button>
          </form>
          <NavLink to="/SignInPage" style={{ color: colors.green[500], textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                boxShadow: `0 0 20px ${colors.red[500]}`,
                backgroundColor: colors.red[500],
                color: "white",
                "&:hover": {
                  backgroundColor: colors.red[600],
                },
              }}
            >
              Cancelar
            </Button>
          </NavLink>

        </Box>
      </Box>
    </Grid>
  );
};

export default ResetPasswordComponent;
