import { papers } from "@/lib/blockcode/sampleData";

export const metadata = { title: "Blockcode — Papers" };

export default function PapersPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Research Papers</h1>
      <div className="space-y-4">
        {papers.map((p) => (
          <article key={p.id} className="p-4 border rounded-lg">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-300 mt-1">{p.authors}</p>
            <a href={p.link} className="text-blue-400 text-sm mt-2 inline-block">
              View paper
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
