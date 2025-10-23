"use client";
import React from "react";
import CandidateCard from "./CandidateCard";
import { useCandidates } from "../../../hooks/src";

export default function CandidateList() {
  const { data = [], isLoading } = useCandidates();
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-3">
      {data.map((c: any) => (
        <CandidateCard
          key={c.candidate_id}
          name={c.name}
          score={c.total_score}
          onOverride={() => alert("Override modal")}
        />
      ))}
    </div>
  );
}
