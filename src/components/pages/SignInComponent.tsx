import { Box, Button, Checkbox, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import CustomInput from "../CustomInput";
import { NavLink } from 'react-router-dom';
import { validationRules } from "../../utils/validator";


const SignInComponent: React.FC = () => {
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
              Entrar no dashboard
            </Typography>
          </Box>

          {/* INPUTS */}
          <CustomInput
            label="Login"
            placeholder="Digite seu e-mail..."
            isIconActive={false}
            {...validationRules.email} 
          />
          <CustomInput
            label="Senha"
            placeholder="Digite sua senha..."
            isIconActive={true}
            type="password"
            {...validationRules.password} 
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
            <div style={{ display: "flex" }}>
              <Checkbox disableRipple sx={{ p: 0, pr: 1 }} />
              <Typography>Lembrar de mim</Typography>
            </div>
            <a
              href="/ResetPasswordPage"
              style={{
                color: colors.green[500],
                textDecoration: "none",
              }}
            >
              Esqueceu a senha?
            </a>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
          >
            Entrar
          </Button>
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
