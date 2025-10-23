import { z } from 'zod';
export const CandidateSchema = z.object({
  candidate_id: z.string(),
  name: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  total_score: z.number(),
  score_components: z.record(z.number()),
  source_channel: z.string().optional(),
  status: z.string().optional()
});
export type Candidate = z.infer<typeof CandidateSchema>;