import ProblemList from "@/components/blockcode/ProblemList";
import { problems } from "@/lib/blockcode/sampleData";

export const metadata = { title: "Blockcode — Easy Problems" };

export default function EasyProblems() {
  const items = problems.filter((p) => p.difficulty === "easy");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Easy Problems</h1>
      <ProblemList items={items} />
    </main>
  );
}
