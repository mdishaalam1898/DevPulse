function SuggestionBox({ text }) {
  return (
    <div
      style={{
        border: "1px solid green",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Suggestion</h3>
      <p>{text}</p>
    </div>
  );
}

export default SuggestionBox;
