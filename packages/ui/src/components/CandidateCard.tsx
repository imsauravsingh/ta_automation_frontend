"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

type Props = { name: string; score: number; onOverride: () => void }

export default function CandidateCard({ name, score, onOverride }: Props) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 80) return "bg-blue-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge
            variant="secondary"
            className={`${getScoreColor(score)} text-white`}
          >
            {Math.round(score)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Total Score: {Math.round(score)}/100
          </div>
          <Button variant="outline" size="sm" onClick={onOverride}>
            Override
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
