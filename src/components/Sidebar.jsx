import { Link } from "react-router-dom";

function Sidebar() {

  const menuStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "14px",
    borderRadius: "10px",
    marginBottom: "12px",
    fontWeight: "bold",
    transition: "0.3s"
  };

  return (

    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#0f172a",
        padding: "20px",
        boxShadow: "4px 0 12px rgba(0,0,0,0.2)"
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
        to="/dashboard"
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