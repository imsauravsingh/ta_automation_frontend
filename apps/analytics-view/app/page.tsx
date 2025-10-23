export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Analytics & BI</h1>
      <div>
        <ol className="list-decimal list-inside">
          <h2 className="text-lg font-semibold mb-2">
            Funnel Analytics Dashboard:
          </h2>
          <li>
            Funnel Chart (e.g., Sourcing → Scoring → Voice AI → Interview →
            Offer → Hire)
          </li>
          <li>Conversion % per stage</li>
          <li>Average time spent in each stage</li>
          <li>
            Stage bottleneck detection (highlight stage with highest drop-offs)
          </li>
          <li>Filters: date range, job role, region, source</li>
        </ol>
        <ol className="list-decimal list-inside mt-4">
          <h2 className="text-lg font-semibold mb-2">Source Effectiveness:</h2>
          <li>Conversion rate by source</li>
          <li>Average candidate quality score</li>
          <li>Cost per hire per source</li>
          <li>Top 5 performing channels</li>
          <li>Filters: job family, location, recruiter</li>
        </ol>

        <ol className="list-decimal list-inside mt-4">
          <h2 className="text-lg font-semibold mb-2">
            Candidate Retention & Quality:
          </h2>
          <li>Retention curves segmented by department / job level</li>
          <li>Correlation between AI score and retention</li>
          <li>
            Quality index: combines AI score, recruiter feedback, and retention
          </li>
          <li>Alerts: early attrition warning zones</li>
        </ol>

        <ol className="list-decimal list-inside mt-4">
          <h2 className="text-lg font-semibold mb-2">
            Model Performance Dashboard:
          </h2>
          <li>Precision / Recall / F1 metrics</li>
          <li>Drift Detection (compare latest vs. baseline distributions)</li>
          <li>Error Buckets (false positives, false negatives)</li>
          <li>Retraining impact visualization</li>
        </ol>

        <ol className="list-decimal list-inside mt-4">
          <h2 className="text-lg font-semibold mb-2">
            Bias & Fairness Insights:
          </h2>
          <li>Bias detection by region / gender / education</li>
          <li>Distribution comparison between groups</li>
          <li>Fairness score trend line</li>
          <li>Alerts when bias exceeds threshold</li>
          <li>Model version comparison</li>
        </ol>
      </div>
    </main>
  )
}
