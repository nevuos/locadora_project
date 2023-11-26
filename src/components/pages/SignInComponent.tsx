import { Box, Button, Checkbox, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { NavLink } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validationRules } from "../../utils/validator";
import User from "../../core/UserData";
import LogoComponent from "../logo/LogoComponent";


interface SignInProps {
  onSignIn: (userData: User, rememberMe: boolean) => void;
}

const SignInComponent: React.FC<SignInProps> = ({ onSignIn }) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<User>();
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit: SubmitHandler<User> = async (userData) => {
    try {
      await onSignIn(userData, rememberMe);
      reset();
    } catch (error) {
      throw error;
    }
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
              Entrar no dashboard
            </Typography>
          </Box>

          {/* INPUTS */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Login"
              placeholder="Digite seu e-mail..."
              isIconActive={false}
              {...register("email", validationRules.email)}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <CustomInput
              label="Senha"
              type="password"
              placeholder="Digite sua senha..."
              isIconActive={true}
              {...register("password", validationRules.password)}
              error={!!errors.password}
              helperText={errors.password?.message}
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disableRipple
                  sx={{ p: 0, pr: 1 }}
                />
                <Typography>Lembrar de mim</Typography>
              </div>
              <Typography color="white">
                <NavLink to="/ResetPasswordPage" style={{ color: colors.green[500], textDecoration: "none" }}>
                  Esqueceu a senha?
                </NavLink>
              </Typography>
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
            >
              Entrar
            </Button>
          </form>
          <Box display="flex" justifyContent="center" mt={2}>
            <Typography color="white">
              Não tem uma conta?{" "}
              <NavLink to="/SignUpPage" style={{ color: colors.green[500], textDecoration: "none" }}>
                Registre-se
              </NavLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignInComponent;
