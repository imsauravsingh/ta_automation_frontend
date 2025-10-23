"use client"
import React from "react"
import CandidateCard from "./CandidateCard"
import { useCandidates } from "../../../hooks/src"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

export default function CandidateList() {
  const { data = [], isLoading } = useCandidates()

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-2 text-muted-foreground">
              Loading candidates...
            </span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (data.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            No candidates found
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Candidates</h2>
        <Badge variant="secondary">
          {data.length} candidate{data.length !== 1 ? "s" : ""}
        </Badge>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((c: any) => (
          <CandidateCard
            key={c.candidate_id}
            name={c.name}
            score={c.total_score}
            onOverride={() => alert("Override modal")}
          />
        ))}
      </div>
    </div>
  )
}
