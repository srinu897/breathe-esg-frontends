import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
} from "@mui/material";

import API from "../api/axios";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setError("");
      setSuccess("");

      if (
        formData.password !==
        formData.confirmPassword
      ) {

        setError(
          "Passwords do not match"
        );

        return;
      }

      try {

        await API.post(
          "auth/register/",
          {
            username:
              formData.username,

            email:
              formData.email,

            password:
              formData.password,
          }
        );

        setSuccess(
          "Account created successfully. Redirecting to login..."
        );

        setTimeout(() => {

          navigate("/login");

        }, 2000);

      } catch (err) {

        setError(
          err.response?.data?.detail ||
          "Registration failed"
        );
      }
    };

  return (

    <Box
      sx={{
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        height: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b)",
      }}
    >

      <Card
        sx={{
          width: 500,
          borderRadius: 4,
          boxShadow: 10,
        }}
      >

        <CardContent>

          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            🌱 Register
          </Typography>

          {error && (

            <Alert
              severity="error"
              sx={{ mb: 2 }}
            >
              {error}
            </Alert>

          )}

          {success && (

            <Alert
              severity="success"
              sx={{ mb: 2 }}
            >
              {success}
            </Alert>

          )}

          <form
            onSubmit={
              handleSubmit
            }
          >

            <TextField
              fullWidth
              label="Username"
              name="username"
              margin="normal"
              onChange={
                handleChange
              }
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              margin="normal"
              onChange={
                handleChange
              }
            />

            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              margin="normal"
              onChange={
                handleChange
              }
            />

            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              margin="normal"
              onChange={
                handleChange
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3 }}
            >
              Register
            </Button>

          </form>

          <Typography
            align="center"
            sx={{ mt: 2 }}
          >
            Already have an account?
            {" "}
            <Link to="/login">
              Login
            </Link>
          </Typography>

        </CardContent>

      </Card>

    </Box>
  );
}

export default Register;