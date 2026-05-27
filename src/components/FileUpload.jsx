import { useState } from "react";

import {
  Card,
  CardContent,
  TextField,
  MenuItem,
  Button,
  Typography,
  Alert
} from "@mui/material";

import { uploadFile }
  from "../api/ingestionApi";

function FileUpload() {

  const [tenantId,
    setTenantId] = useState("");

  const [sourceType,
    setSourceType] = useState("SAP");

  const [file,
    setFile] = useState(null);

  const [success,
    setSuccess] = useState("");

  const [error,
    setError] = useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setSuccess("");
      setError("");

      const formData =
        new FormData();

      formData.append(
        "tenant_id",
        tenantId
      );

      formData.append(
        "source_type",
        sourceType
      );

      formData.append(
        "file",
        file
      );

      try {

        const result =
          await uploadFile(
            formData
          );

        setSuccess(
          result.message
        );

        setFile(null);

      } catch (err) {

        setError(
          err.response?.data?.error ||
          "Upload Failed"
        );
      }
    };

  return (

    <Card
      sx={{
        maxWidth: 750,
        margin: "auto",
        borderRadius: 5,
        boxShadow: 8,
        background:
          "linear-gradient(180deg,#ffffff,#f8fafc)"
      }}
    >

      <CardContent>

        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#1e293b"
          }}
        >
          🌱 ESG Data Upload
        </Typography>

        <Typography
          sx={{
            mb: 3,
            color: "#64748b"
          }}
        >
          Upload SAP, Utility, or Travel
          files for ESG processing.
        </Typography>

        {success && (
          <Alert
            severity="success"
            sx={{ mb: 2 }}
          >
            {success}
          </Alert>
        )}

        {error && (
          <Alert
            severity="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>
        )}

        <form
          onSubmit={handleSubmit}
        >

          <TextField
            label="Tenant ID"
            fullWidth
            margin="normal"
            type="number"
            value={tenantId}
            onChange={(e) =>
              setTenantId(
                e.target.value
              )
            }
          />

          <TextField
            select
            fullWidth
            margin="normal"
            label="Source Type"
            value={sourceType}
            onChange={(e) =>
              setSourceType(
                e.target.value
              )
            }
          >
            <MenuItem value="SAP">
              SAP
            </MenuItem>

            <MenuItem value="UTILITY">
              Utility
            </MenuItem>

            <MenuItem value="TRAVEL">
              Travel
            </MenuItem>

          </TextField>

          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{
              mt: 2,
              mb: 2,
              height: 60,
              borderRadius: 3
            }}
          >
            📁 Select File

            <input
              hidden
              type="file"
              onChange={(e) =>
                setFile(
                  e.target.files[0]
                )
              }
            />
          </Button>

          {file && (
            <Typography
              sx={{
                mb: 2,
                color: "#2563eb"
              }}
            >
              Selected File:
              {" "}
              <strong>
                {file.name}
              </strong>
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{
              mt: 2,
              height: 60,
              borderRadius: 3,
              background:
                "linear-gradient(90deg,#2563eb,#1d4ed8)",
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            🚀 Upload ESG Data
          </Button>

        </form>

      </CardContent>

    </Card>
  );
}

export default FileUpload;