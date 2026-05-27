function SuspiciousBadge({
  suspicious,
}) {

  if (!suspicious)
    return null;

  return (
    <span
      style={{
        background: "red",
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
      }}
    >
      Suspicious
    </span>
  );
}

export default SuspiciousBadge;