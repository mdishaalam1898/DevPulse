function generateInsight(metrics) {
    let insight = "";
    let suggestion = "";
  
    if (metrics.leadTime > 5 && metrics.deploymentFrequency < 3) {
      insight =
        "High lead time and low deployment frequency suggest delays in shipping code, possibly due to slow PR reviews or deployment bottlenecks.";
  
      suggestion =
        "Break PRs into smaller chunks and follow up on code reviews daily.";
    } 
    else if (metrics.bugRate > 0.3) {
      insight =
        "High bug rate indicates quality issues in production.";
  
      suggestion =
        "Improve testing coverage and add pre-release QA checks.";
    } 
    else {
      insight = "Your workflow looks healthy.";
      suggestion = "Maintain current practices.";
    }
  
    return { insight, suggestion };
  }
  
  module.exports = { generateInsight };