"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

type Problem = {
  id: string;
  title: string;
  difficulty: string;
  description?: string;
  tags?: string[];
  status?: "solved" | "attempted" | "unsolved";
};

export default function ProblemList({ items }: { items: Problem[] }) {
  const [filter, setFilter] = React.useState<string>("all");
  const [tagFilter, setTagFilter] = React.useState<string>("all");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");

  if (!items || items.length === 0) {
    return <div className="p-6 text-gray-400">No problems found.</div>;
  }

  // Collect all tags for filter dropdown
  const allTags = Array.from(new Set(items.flatMap(p => p.tags || [])));

  // Filter logic
  const filteredItems = items.filter(p => {
    let pass = true;
    if (filter !== "all" && p.difficulty !== filter) pass = false;
    if (tagFilter !== "all" && !(p.tags || []).includes(tagFilter)) pass = false;
    if (statusFilter !== "all" && p.status !== statusFilter) pass = false;
    return pass;
  });

  // Animation settings for vertical loop
  const cardCount = filteredItems.length;
  const cardHeight = 180; // px, adjust if needed
  const totalHeight = cardCount * cardHeight;

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select value={filter} onChange={e => setFilter(e.target.value)} className="bg-ox-black-1 border border-ox-gray rounded px-2 py-1 text-white">
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select value={tagFilter} onChange={e => setTagFilter(e.target.value)} className="bg-ox-black-1 border border-ox-gray rounded px-2 py-1 text-white">
          <option value="all">All Tags</option>
          {allTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="bg-ox-black-1 border border-ox-gray rounded px-2 py-1 text-white">
          <option value="all">All Status</option>
          <option value="solved">Solved</option>
          <option value="attempted">Attempted</option>
          <option value="unsolved">Unsolved</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Animated left column in a fixed box */}
        <div
          className="relative flex flex-col items-center justify-center"
          style={{ minWidth: 340, maxWidth: 380, width: "100%", left: 30 }}
        >
          {/* Remove visible background, use transparent/none so only cards are visible */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ width: "100%", height: `${cardHeight * 2}px`, position: "relative", background: "none", border: "none", boxShadow: "none" }}
          >
            <motion.div
              style={{ position: "absolute", left: 0, right: 0 }}
              animate={{ y: [0, -totalHeight] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: cardCount * 4,
                ease: "linear",
              }}
            >
              {filteredItems.map((p) => (
                <div
                  key={p.id}
                  className="border border-gray-600 rounded-lg p-4 bg-neutral-900/10 hover:shadow-md transition mb-4 mx-4"
                  style={{ height: cardHeight + "px" }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        p.difficulty === "easy"
                          ? "bg-green-600 text-white"
                          : p.difficulty === "medium"
                          ? "bg-yellow-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {p.difficulty}
                    </span>
                  </div>
                  {p.tags && (
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {p.tags.map(tag => (
                        <span key={tag} className="bg-ox-purple/30 text-ox-purple px-2 py-1 rounded text-xs">{tag}</span>
                      ))}
                    </div>
                  )}
                  {p.description && (
                    <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                  )}
                  <div className="mt-3 flex items-center justify-between">
                    <Link
                      href={`/blockcode/problems/${p.id}`}
                      className="text-sm text-blue-400 hover:underline"
                    >
                      Solve Problem
                    </Link>
                    {p.status && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        p.status === "solved"
                          ? "bg-green-700 text-white"
                          : p.status === "attempted"
                          ? "bg-yellow-700 text-white"
                          : "bg-gray-700 text-white"
                      }`}>
                        {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {/* Repeat cards for seamless loop */}
              {filteredItems.map((p) => (
                <div
                  key={p.id + "-repeat"}
                  className="border border-gray-600 rounded-lg p-4 bg-neutral-900/10 hover:shadow-md transition mb-4 mx-4"
                  style={{ height: cardHeight + "px" }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        p.difficulty === "easy"
                          ? "bg-green-600 text-white"
                          : p.difficulty === "medium"
                          ? "bg-yellow-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {p.difficulty}
                    </span>
                  </div>
                  {p.tags && (
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {p.tags.map(tag => (
                        <span key={tag} className="bg-ox-purple/30 text-ox-purple px-2 py-1 rounded text-xs">{tag}</span>
                      ))}
                    </div>
                  )}
                  {p.description && (
                    <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                  )}
                  <div className="mt-3 flex items-center justify-between">
                    <Link
                      href={`/blockcode/problems/${p.id}`}
                      className="text-sm text-blue-400 hover:underline"
                    >
                      Solve Problem
                    </Link>
                    {p.status && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        p.status === "solved"
                          ? "bg-green-700 text-white"
                          : p.status === "attempted"
                          ? "bg-yellow-700 text-white"
                          : "bg-gray-700 text-white"
                      }`}>
                        {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Right column for future leaderboard, progress, etc. */}
        <div className="flex flex-col items-center justify-start p-4">
          {/* Placeholder for leaderboard, progress bar, etc. */}
        </div>
      </div>
    </div>
  );
}
// ...existing code...
