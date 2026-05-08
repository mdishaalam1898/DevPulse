function MetricCard({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "150px",
      }}
    >
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default MetricCard;
