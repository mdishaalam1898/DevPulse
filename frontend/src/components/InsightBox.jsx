function InsightBox({ text }) {
  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Insight</h3>
      <p>{text}</p>
    </div>
  );
}

export default InsightBox;
