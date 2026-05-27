import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({
  children
}) {
  return (
    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      <Navbar />

      <div
        style={{
          display: "flex"
        }}
      >
        <Sidebar />

        <div
          style={{
            padding: "30px",
            width: "100%"
          }}
        >
          {children}
        </div>

      </div>
    </div>
  );
}

export default MainLayout;