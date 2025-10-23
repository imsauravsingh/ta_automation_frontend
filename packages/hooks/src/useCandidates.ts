"use client";
import { useState, useEffect } from "react";

export function useCandidates() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock data for now - replace with actual API call later
    setTimeout(() => {
      setData([
        { candidate_id: "1", name: "John Doe", total_score: 85 },
        { candidate_id: "2", name: "Jane Smith", total_score: 92 },
        { candidate_id: "3", name: "Bob Johnson", total_score: 78 },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  return { data, isLoading };
}
