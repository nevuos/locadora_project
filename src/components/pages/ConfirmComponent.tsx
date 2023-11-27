import React from 'react';
import { Box, Button, colors, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import LogoComponent from "../logo/LogoComponent";

interface ConfirmEmailComponentProps {
  onConfirm: () => void;
}

const ConfirmEmailComponent: React.FC<ConfirmEmailComponentProps> = ({ onConfirm }) => {
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
            <LogoComponent />
            <Typography color="white" fontWeight="bold" mt={7} mb={3}>
              Confirmar E-mail
            </Typography>
          </Box>

          <Button
            onClick={onConfirm}
            variant="contained"
            fullWidth
            sx={{ mt: 2, boxShadow: `0 0 20px ${colors.green[500]}` }}
          >
            Confirmar E-mail
          </Button>
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

export default ConfirmEmailComponent;
