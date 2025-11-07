import { blogs } from "@/lib/blockcode/sampleData";

export const metadata = { title: "Blockcode — Blogs" };

export default function BlogsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <div className="space-y-4">
        {blogs.map((b) => (
          <article key={b.id} className="p-4 border rounded-lg">
            <h2 className="font-semibold">{b.title}</h2>
            <p className="text-sm text-gray-300 mt-1">{b.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
