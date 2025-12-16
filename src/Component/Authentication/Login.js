import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* TITLE */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#2b7dbc",
          mb: 3,
          fontWeight: 500,
        }}
      >
        TradeMark Management
      </Typography>

      {/* FORM WRAPPER TO DISABLE AUTOFILL */}
      <form autoComplete="off" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: "90%", sm: 380 }, // ⭐ fully responsive
            backgroundColor: "#fff",
            p: 4,
            borderRadius: 1,
            boxShadow: "0 0 6px rgba(0,0,0,0.15)",
          }}
        >
          <Typography sx={{ fontSize: 20, mb: 2, color: "#34495e" }}>
            Login to your account
          </Typography>

          {/* USERNAME FIELD */}
          <TextField
            fullWidth
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            name="username"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                height: 45,
                background: "#ffffff",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#b7b7b7" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* PASSWORD FIELD */}
          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            name="password"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                height: 45,
                background: "#ffffff",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "#b7b7b7" }} />
                </InputAdornment>
              ),
            }}
          />

          {/* REMEMBER + LOGIN BUTTON IN ONE LINE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#32C5D2",
                textTransform: "none",
                fontSize: 14,
                px: 3,
                "&:hover": { backgroundColor: "#17a58a" },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Login;