export const problems = [
  {
    id: 'p1',
    title: 'Verify Ethereum Signature',
    difficulty: 'easy',
    description: 'Given a message and a signature, recover the signer and verify the signature using ECDSA (secp256k1).',
  },
  {
    id: 'p2',
    title: 'Simple Token Transfer Simulation',
    difficulty: 'easy',
    description: 'Simulate token transfers and ensure balances update correctly, detect overflows and invalid transfers.',
  },
  {
    id: 'p3',
    title: 'Reentrancy Attack Detector',
    difficulty: 'medium',
    description: 'Analyze a contract snippet to find potential reentrancy vulnerabilities and suggest fixes.',
  },
  {
    id: 'p4',
    title: 'Optimizing Gas Usage',
    difficulty: 'medium',
    description: 'Refactor a contract function to reduce gas cost while preserving behavior.',
  },
  {
    id: 'p5',
    title: 'Cross-Chain Message Ordering',
    difficulty: 'hard',
    description: 'Design a protocol to ensure ordering guarantees for messages forwarded across two chains with possible reorgs.',
  },
  {
    id: 'p6',
    title: 'Merkle Proof Verifier',
    difficulty: 'easy',
    description: 'Implement a function to verify Merkle proofs for a given leaf and root.',
  },
  {
    id: 'p7',
    title: 'Front-running Detection',
    difficulty: 'medium',
    description: 'Detect and analyze front-running transactions in a mempool simulation.',
  },
  {
    id: 'p8',
    title: 'NFT Royalty Calculation',
    difficulty: 'easy',
    description: 'Write a function to calculate royalties for NFT sales based on a given percentage.',
  },
  {
    id: 'p9',
    title: 'Multi-sig Wallet Implementation',
    difficulty: 'hard',
    description: 'Design and implement a multi-signature wallet contract supporting M-of-N signatures.',
  },
  {
    id: 'p10',
    title: 'Flash Loan Arbitrage Simulator',
    difficulty: 'hard',
    description: 'Simulate a flash loan arbitrage between two DEXes and calculate profit/loss.',
  },
];

export const blogs = [
  {
    id: 'b1',
    title: 'An Introduction to EVM Internals',
    excerpt: 'Explore how the EVM executes transactions, gas accounting, and the stack machine model.',
  },
  {
    id: 'b2',
    title: 'Smart Contract Design Patterns',
    excerpt: 'Common patterns for upgradability, access control, and safe math in Solidity.',
  },
];

export const papers = [
  {
    id: 'r1',
    title: 'Optimistic Rollups: A Survey',
    authors: 'A. Researcher et al.',
    link: 'https://example.org/optimistic-rollups.pdf',
  },
  {
    id: 'r2',
    title: 'State Channels and Off-chain Computation',
    authors: 'B. Scientist',
    link: 'https://example.org/state-channels.pdf',
  },
];

export const projects = [
  {
    id: 'pr1',
    title: 'Minimal ERC20 Implementation',
    description: 'A small, well-documented ERC20 contract with tests and gas benchmarks.',
    repo: 'https://github.com/example/minimal-erc20',
  },
  {
    id: 'pr2',
    title: 'Cross-chain Bridge Prototype',
    description: 'A prototype demonstrating proof relay between two test chains.',
    repo: 'https://github.com/example/bridge-proto',
  },
];

export default {
  problems,
  blogs,
  papers,
  projects,
};
