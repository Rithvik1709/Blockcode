import ProblemList from "@/components/blockcode/ProblemList";
import { problems } from "@/lib/blockcode/sampleData";

export const metadata = { title: "Blockcode — Hard Problems" };

export default function HardProblems() {
  const items = problems.filter((p) => p.difficulty === "hard");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hard Problems</h1>
      <ProblemList items={items} />
    </main>
  );
}
