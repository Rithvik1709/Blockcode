import Link from "next/link";
import { problems, blogs, papers, projects } from "@/lib/blockcode/sampleData";
import ProblemList from "@/components/blockcode/ProblemList";

export const metadata = {
  title: "Blockcode — Blockchain problems & resources",
};

export default function BlockcodeLanding() {
  const top = problems.slice(0, 3);
  return (
    <main className="p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Blockcode</h1>
        <p className="text-gray-300 mt-1">
          A collection of blockchain programming problems (easy/medium/hard), blogs,
          research papers, and project ideas.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Link href="/blockcode/problems/easy" className="p-4 border rounded-lg">
          <h3 className="font-semibold">Problems</h3>
          <p className="text-sm text-gray-400">Solve categorized blockchain problems</p>
        </Link>
        <Link href="/blockcode/blogs" className="p-4 border rounded-lg">
          <h3 className="font-semibold">Blogs</h3>
          <p className="text-sm text-gray-400">Articles & guides on blockchain topics</p>
        </Link>
        <Link href="/blockcode/projects" className="p-4 border rounded-lg">
          <h3 className="font-semibold">Projects</h3>
          <p className="text-sm text-gray-400">Starter projects and ideas</p>
        </Link>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Top problems</h2>
        <ProblemList items={top} />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Latest blogs</h3>
          <ul className="mt-2">
            {blogs.map((b) => (
              <li key={b.id} className="text-sm text-gray-300">
                {b.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold">Recent papers</h3>
          <ul className="mt-2">
            {papers.map((p) => (
              <li key={p.id} className="text-sm text-gray-300">
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
