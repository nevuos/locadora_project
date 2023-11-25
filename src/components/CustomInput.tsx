import React, { forwardRef } from 'react';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

interface CustomInputProps {
  isIconActive: boolean;
  label: string;
  placeholder: string;
  name: string; 
  type?: string;
  autoComplete?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      isIconActive,
      label,
      placeholder,
      name, 
      type = "text",
      autoComplete = "off",
      error,
      helperText,
      onChange,
      onBlur,
      value,
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleToggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

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
              ref={ref}
              name={name} // Adicionado o atributo 'name'
              type={isIconActive && type === "password" ? (showPassword ? "text" : "password") : type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              fullWidth
              sx={{
                bgcolor: "rgba(55, 65, 81, 0.9)",
                p: 2,
                borderRadius: "5px",
              }}
              endAdornment={
                isIconActive && type === "password" ? (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleToggleShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ) : null
              }
              autoComplete={autoComplete}
              error={!!error}
            />
          </Paper>
          {helperText && error && (
            <Typography color="red" mt={1}>
              {helperText}
            </Typography>
          )}
        </Box>
      </Box>
    );
  }
);

export default CustomInput;
