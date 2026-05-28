import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

function Navbar() {

  const openAdmin = () => {

    window.open(
      "https://breathe-esg-platform-1-we6n.onrender.com/admin/",
      "_blank"
    );

  };

  const handleLogout = () => {

    localStorage.removeItem(
      "access"
    );

    localStorage.removeItem(
      "refresh"
    );

    window.location.href =
      "/login";
  };

  return (

    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(90deg,#0f172a,#1e293b)",
        boxShadow: 5
      }}
    >

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "80px"
        }}
      >

        <Box
          sx={{
            flex: 1
          }}
        />

        <Box
          sx={{
            flex: 2,
            textAlign: "center"
          }}
        >

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "white"
            }}
          >
            🌱 Breathe ESG Platform
          </Typography>

        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: 2
          }}
        >

          <Button
            variant="contained"
            onClick={openAdmin}
            sx={{
              background: "#16a34a",
              fontWeight: "bold",
              borderRadius: "10px",

              "&:hover": {
                background: "#15803d"
              }
            }}
          >
            ⚙️ Admin Panel
          </Button>

          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{
              background: "#dc2626",
              fontWeight: "bold",
              borderRadius: "10px",

              "&:hover": {
                background: "#b91c1c"
              }
            }}
          >
            🚪 Logout
          </Button>

        </Box>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;