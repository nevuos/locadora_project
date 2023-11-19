import React, { useState, useEffect, forwardRef, ForwardedRef } from 'react';
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
  validateInput?: (value: string) => boolean;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = forwardRef(
  (
    {
      isIconActive,
      validateInput,
      label,
      placeholder,
      type = "text",
      autoComplete = "off",
      error: propError,
      helperText,
      onChange,
      onBlur,
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleToggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      if (onChange) {
        onChange(event);
      }

      if (validateInput) {
        setError(!validateInput(newValue));
      }
    };

    useEffect(() => {
      setError(propError ?? false);
    }, [propError]);

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
              type={isIconActive && type === "password" ? (showPassword ? "text" : "password") : type}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
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
              error={error}
              inputRef={ref}
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
