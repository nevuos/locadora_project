import { VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

const CustomInput: React.FC<{
  isIconActive: boolean;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  error?: boolean;
  helperText?: string; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ isIconActive, label, placeholder, type = "text", autoComplete = "off", error, helperText, onChange }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="flex-start"
      mb={2}
    >
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <Typography color="white" pb={1}>
          {label}
        </Typography>
        <Paper
          sx={{
            background: "rgba(55, 65, 81, 0.9)",
            width: "100%"
          }}
        >
          <InputBase
            type={type}
            placeholder={placeholder}
            fullWidth
            sx={{
              bgcolor: "rgba(55, 65, 81, 0.9)",
              p: 2, // Aumentar o padding para ficar igual ao TextField
              borderRadius: "5px",
            }}
            endAdornment={
              isIconActive && type === "password" ? (
                <InputAdornment position="end" sx={{ pr: 1 }}>
                  <IconButton edge="end">
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              ) : null
            }
            autoComplete={autoComplete}
            onChange={onChange}
          />
        </Paper>
        {helperText && error ? (
          <Typography color="red" mt={1}>
            {helperText}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default CustomInput;
