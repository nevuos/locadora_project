import { Box, Typography } from "@mui/material";
import { colors } from "@mui/material";

const LogoComponent = () => {
    return (
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
            <Typography variant="h6" fontWeight="bold" color="white" fontSize="16px">
                LF
            </Typography>
        </Box>
    );
};

export default LogoComponent;
