import CandidateList from '@ui/components/CandidateList';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Recruiter Dashboard</h1>
      <CandidateList />
    </main>
  );
}