import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import RoutesWrapper from './routes/routes';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Box
          sx={{
            width: {
              sm: "90vw",
              xs: "90vw",
              md: "60vw",
              lg: "60vw",
              xl: "60vw",
            },
          }}
        >
          <RoutesWrapper />
        </Box>
      </MainLayout>
    </Router>
  );
};

export default App;
