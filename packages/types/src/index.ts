export type Candidate = {
  candidate_id: string;
  name: string;
  email?: string;
  phone?: string;
  total_score: number;
  score_components: Record<string, number>;
  source_channel?: string;
  status?: string;
};