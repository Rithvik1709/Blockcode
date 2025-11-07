import ProblemList from "@/components/blockcode/ProblemList";
import { problems } from "@/lib/blockcode/sampleData";

export const metadata = { title: "Blockcode — Medium Problems" };

export default function MediumProblems() {
  const items = problems.filter((p) => p.difficulty === "medium");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Medium Problems</h1>
      <ProblemList items={items} />
    </main>
  );
}
