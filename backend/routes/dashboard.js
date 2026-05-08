const express = require("express");

const router = express.Router();

const { generateInsight } = require("../services/insightService");

router.get("/", (req, res) => {
  const metrics = {
    leadTime: 4,
    cycleTime: 3.5,
    bugRate: 0.2,
    deploymentFrequency: 4,
    prThroughput: 10,
   
  };

  const { insight, suggestion } = generateInsight(metrics);

  res.json({
    metrics,
    insight,
    suggestion,
  });
});

module.exports = router;
