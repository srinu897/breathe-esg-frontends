import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
} from "@mui/material";

import { loginUser }
  from "../api/authApi";

function Login() {

  const [username,
    setUsername] = useState("");

  const [password,
    setPassword] = useState("");

  const [error,
    setError] = useState("");

  const navigate =
    useNavigate();

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        const data =
          await loginUser(
            username,
            password
          );

        localStorage.setItem(
          "access",
          data.access
        );

        localStorage.setItem(
          "refresh",
          data.refresh
        );

        navigate("/dashboard");

      } catch {

        setError(
          "Invalid username or password"
        );
      }
    };

  return (

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b)",
      }}
    >

      <Card
        sx={{
          width: 450,
          borderRadius: 4,
          boxShadow: 10,
        }}
      >

        <CardContent>

          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#1e293b",
            }}
          >
            🌱 Breathe ESG
          </Typography>

          <Typography
            align="center"
            sx={{
              mb: 3,
              color: "gray",
            }}
          >
            Secure ESG Platform Login
          </Typography>

          {error && (

            <Alert
              severity="error"
              sx={{ mb: 2 }}
            >
              {error}
            </Alert>

          )}

          <form
            onSubmit={
              handleLogin
            }
          >

            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 3,
                height: 50,
                background:
                  "linear-gradient(90deg,#2563eb,#1d4ed8)",
                fontWeight: "bold",

                "&:hover": {
                  background:
                    "linear-gradient(90deg,#1d4ed8,#1e40af)",
                }
              }}
            >
              Login
            </Button>

          </form>

        </CardContent>

      </Card>

    </Box>
  );
}

export default Login;