import { projects } from "@/lib/blockcode/sampleData";

export const metadata = { title: "Blockcode — Projects" };

export default function ProjectsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="space-y-4">
        {projects.map((pr) => (
          <article key={pr.id} className="p-4 border rounded-lg">
            <h2 className="font-semibold">{pr.title}</h2>
            <p className="text-sm text-gray-300 mt-1">{pr.description}</p>
            <a href={pr.repo} className="text-blue-400 text-sm mt-2 inline-block">
              Repository
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
