import MetricCard from "./components/MetricCard";
import InsightBox from "./components/InsightBox";
import SuggestionBox from "./components/SuggestionBox";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  const { developer, metrics, insight, suggestion } = data;

  function getStatus(value, type) {
    switch (type) {
      case "leadTime":
        return value > 5 ? "Bad" : "Good";
      case "bugRate":
        return value > 0.3 ? "Bad" : "Good";
      case "cycleTime":
        return value > 4 ? "Bad" : "Good";
      case "deploymentFrequency":
        return value < 3 ? "Bad" : "Good";
      case "prThroughput":
        return value < 8 ? "Bad" : "Good";
      default:
        return "Good";
    }
  }

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "auto" }}>
      <h1>DevPulse Dashboard</h1>

      {/* 👤 Developer Info */}
      {developer && (
        <h2>
          {developer.name} ({developer.role})
        </h2>
      )}

      {/*  metrics */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <MetricCard
          title="Lead Time"
          value={metrics.leadTime + " days"}
          status={getStatus(metrics.leadTime, "leadTime")}
        />

        <MetricCard
          title="Cycle Time"
          value={metrics.cycleTime + " days"}
          status={getStatus(metrics.cycleTime, "cycleTime")}
        />

        <MetricCard
          title="Bug Rate"
          value={metrics.bugRate}
          status={getStatus(metrics.bugRate, "bugRate")}
        />

        <MetricCard
          title="Deployments"
          value={metrics.deploymentFrequency}
          status={getStatus(metrics.deploymentFrequency, "deploymentFrequency")}
        />

        <MetricCard
          title="PR Throughput"
          value={metrics.prThroughput}
          status={getStatus(metrics.prThroughput, "prThroughput")}
        />
      </div>

      {/* Insight */}
      <InsightBox text={insight} />

      {/* Suggestion */}
      <SuggestionBox text={suggestion} />
    </div>
  );
}

export default App;