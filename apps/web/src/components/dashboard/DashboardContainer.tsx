"use client";

import ProblemList from "../blockcode/ProblemList";
// TODO: Replace with real blockchain problems data source
const problems = [
  { id: "1", title: "Deploy a Simple Smart Contract", difficulty: "easy", percentSolved: 62.1, status: "solved" },
  { id: "2", title: "Create an ERC-20 Token", difficulty: "medium", percentSolved: 48.7, status: "solved" },
  { id: "3", title: "NFT Minting Platform", difficulty: "hard", percentSolved: 29.4, status: "unsolved" },
  { id: "4", title: "Build a Decentralized Voting App", difficulty: "medium", percentSolved: 41.2, status: "solved" },
  { id: "5", title: "Implement Wallet Authentication", difficulty: "easy", percentSolved: 55.3, status: "solved" },
  { id: "6", title: "Create a DAO Governance Contract", difficulty: "hard", percentSolved: 22.8, status: "unsolved" },
  { id: "7", title: "Build a Token Swap DApp", difficulty: "medium", percentSolved: 36.5, status: "unsolved" },
  { id: "8", title: "Store Data on IPFS", difficulty: "easy", percentSolved: 61.7, status: "solved" },
  { id: "9", title: "Implement MetaMask Integration", difficulty: "medium", percentSolved: 53.9, status: "solved" },
  { id: "10", title: "Create a Blockchain Explorer", difficulty: "hard", percentSolved: 19.6, status: "unsolved" },
  { id: "11", title: "Build a Decentralized Exchange (DEX)", difficulty: "hard", percentSolved: 25.4, status: "unsolved" },
  { id: "12", title: "Multi-Sig Wallet Contract", difficulty: "medium", percentSolved: 44.2, status: "solved" },
  { id: "13", title: "Implement Chainlink Price Feeds", difficulty: "medium", percentSolved: 38.9, status: "unsolved" },
  { id: "14", title: "Create a Time-Locked Contract", difficulty: "easy", percentSolved: 58.3, status: "solved" },
  { id: "15", title: "Build a Blockchain-Based Chat App", difficulty: "medium", percentSolved: 33.7, status: "unsolved" },
  { id: "16", title: "Design a Gas Fee Calculator", difficulty: "easy", percentSolved: 60.2, status: "solved" },
  { id: "17", title: "Create a Decentralized Lottery", difficulty: "hard", percentSolved: 21.5, status: "unsolved" },
];

export default function DashboardContainer() {
  // In future, fetch problems from backend or store
  return (
    <div className="h-[80vh] md:h-[88vh] rounded-lg mx-1 md:mx-4 bg-ox-black-1 border border-ox-gray flex flex-col">
      <div className="flex-1 overflow-y-scroll p-4">
        <h2 className="text-2xl font-bold mb-4 text-ox-purple">Blockchain Problems</h2>
        <ul className="w-full">
          {problems.map((p, idx) => (
            <li key={p.id} className={`flex items-center justify-between px-4 py-3 mb-2 rounded-lg ${p.status === "solved" ? "bg-ox-black-2" : "bg-ox-black-1"} border border-gray-700 hover:shadow-md transition`}>
              <div className="flex items-center gap-3">
                {p.status === "solved" && <span className="text-green-500 text-xl">&#10003;</span>}
                <span className="font-medium text-white">{idx + 1}. {p.title}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className={`font-semibold ${p.difficulty === "easy" ? "text-green-400" : p.difficulty === "medium" ? "text-yellow-400" : "text-red-400"}`}>{p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1)}</span>
                <span className="text-gray-400 text-sm">{p.percentSolved}%</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
