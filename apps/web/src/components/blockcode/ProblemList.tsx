"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

type Problem = {
  id: string;
  title: string;
  difficulty: string;
  description?: string;
};

export default function ProblemList({ items }: { items: Problem[] }) {
  if (!items || items.length === 0) {
    return <div className="p-6 text-gray-400">No problems found.</div>;
  }

  // Animation settings for vertical loop
  const cardCount = items.length;
  const cardHeight = 180; // px, adjust if needed
  const totalHeight = cardCount * cardHeight;

  return (
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
              duration: cardCount * 4, // Slower speed (was *2)
              ease: "linear",
            }}
          >
            {items.map((p) => (
              <div
                key={p.id}
                className="border border-gray-600 rounded-lg p-4 bg-neutral-900/10 hover:shadow-md transition mb-4 mx-4"
                style={{ height: `${cardHeight}px` }}
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
                {p.description && (
                  <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                )}
                <div className="mt-3">
                  <Link
                    href={`/blockcode/problems/${p.difficulty}`}
                    className="text-sm text-blue-400 hover:underline"
                  >
                    View category
                  </Link>
                </div>
              </div>
            ))}
            {/* Repeat cards for seamless loop */}
            {items.map((p) => (
              <div
                key={p.id + "-repeat"}
                className="border border-gray-600 rounded-lg p-4 bg-neutral-900/10 hover:shadow-md transition mb-4 mx-4"
                style={{ height: `${cardHeight}px` }}
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
                {p.description && (
                  <p className="mt-2 text-sm text-gray-300">{p.description}</p>
                )}
                <div className="mt-3">
                  <Link
                    href={`/blockcode/problems/${p.difficulty}`}
                    className="text-sm text-blue-400 hover:underline"
                  >
                    View category
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Right column remains static */}
      <div>
        {/* ...existing code for right column if any... */}
      </div>
    </div>
  );
}
