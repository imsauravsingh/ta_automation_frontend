"use client";
import React from "react";
type Props = { name: string; score: number; onOverride: () => void };
export default function CandidateCard({ name, score, onOverride }: Props) {
  return (
    <div className="p-4 border rounded-md bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-slate-500">
            Score: {Math.round(score)}
          </div>
        </div>
        <button
          className="px-3 py-1 rounded bg-indigo-600 text-white"
          onClick={onOverride}
        >
          Override
        </button>
      </div>
    </div>
  );
}
