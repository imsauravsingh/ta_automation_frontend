# Key API Contracts (frontend expectation)

## GET /api/candidates?stage=scored
Response:
[
  {
    "candidate_id":"uuid",
    "name":"string",
    "email":"masked|string",
    "phone":"masked|string",
    "total_score":78.5,
    "score_components":{"experience_relevance":0.6,"tenure_stability":0.2},
    "source_channel":"LinkedIn",
    "status":"scored"
  }
]

## POST /api/candidates/:id/override
Request:
{ "override_by": "user_id", "reason_code": "MANUAL_REVIEW", "reason_text":"text", "new_score": 85 }
Response: 200 OK with updated object