import { useState } from "react";

import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
} from "@mui/material";

function ForgotPassword() {

  const [email, setEmail] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleSubmit =
    (e) => {

      e.preventDefault();

      setSuccess(
        "Password reset functionality will be added in production."
      );
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
          >
            🔐 Forgot Password
          </Typography>

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
              label="Email Address"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
            >
              Send Reset Link
            </Button>

          </form>

        </CardContent>

      </Card>

    </Box>
  );
}

export default ForgotPassword;