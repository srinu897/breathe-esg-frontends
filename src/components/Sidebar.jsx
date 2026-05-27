import { Link } from "react-router-dom";

function Sidebar() {

  const menuStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "14px",
    borderRadius: "10px",
    marginBottom: "12px",
    fontWeight: "bold"
  };

  return (

    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#0f172a",
        padding: "20px"
      }}
    >

      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "25px"
        }}
      >
        ESG Menu
      </h2>

      <Link
        to="/"
        style={{
          ...menuStyle,
          background: "#2563eb"
        }}
      >
        📊 Dashboard
      </Link>

      <Link
        to="/upload"
        style={{
          ...menuStyle,
          background: "#16a34a"
        }}
      >
        📤 Upload Data
      </Link>

      <Link
        to="/review"
        style={{
          ...menuStyle,
          background: "#ea580c"
        }}
      >
        📝 Review Queue
      </Link>

      <Link
        to="/audit"
        style={{
          ...menuStyle,
          background: "#7c3aed"
        }}
      >
        📜 Audit Logs
      </Link>

    </div>
  );
}

export default Sidebar;