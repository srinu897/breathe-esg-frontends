import MainLayout from "../layouts/MainLayout";
import FileUpload from "../components/FileUpload";

function UploadData() {
  return (
    <MainLayout>

      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#1e40af)",
          color: "white",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "30px",
          boxShadow:
            "0 8px 20px rgba(0,0,0,0.15)"
        }}
      >
        <h1>
          📤 Upload ESG Data
        </h1>

        <p>
          Upload SAP, Utility or Travel
          datasets for ESG processing,
          validation and review.
        </p>
      </div>

      <FileUpload />

    </MainLayout>
  );
}

export default UploadData;