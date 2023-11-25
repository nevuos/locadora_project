import { Box, Button, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomInput from "../CustomInput";
import User from "../../core/UserData";

interface SignUpProps {
  onSignUp: (userData: User) => void;
}

const SignUpComponent: React.FC<SignUpProps> = ({ onSignUp, }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (userData) => {
    try {
      console.log(userData);
      onSignUp(userData);
    } catch (error) {
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
            <Box
              sx={{
                mt: "60px",
                width: "50px",
                height: "50px",
                bgcolor: "primary.main",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px ${colors.green[500]}`,
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="white">
                AA
              </Typography>
            </Box>
            {/* FIM DO LOGO */}

            <Typography color="white" fontWeight="bold" mt={7} mb={3}>
              Registrar-se
            </Typography>
          </Box>

          {/* INPUTS */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Nome"
              placeholder="Digite seu nome..."
              isIconActive={false}
              {...register("username")}
            />

            {errors.username && <span>{errors.username.message}</span>}

            <CustomInput
              label="E-mail"
              placeholder="Digite seu e-mail..."
              isIconActive={false}
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <CustomInput
              label="Senha"
              placeholder="Crie uma senha..."
              isIconActive={true}
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}

            {/* FIM DOS INPUTS */}

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, boxShadow: `0 0 20px ${colors.green[500]}` }}
            >
              Registrar
            </Button>
          </form>
          <Box display="flex" justifyContent="center" mt={1}>
            <Typography color="white">
              Já tem uma conta?{" "}
              <a href="/SignInPage" style={{ color: colors.green[500], textDecoration: "none" }}>
                Entre agora!
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid >
  );
};

export default SignUpComponent;
