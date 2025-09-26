"use client";

import { Card, CardHeader, CardBody, Chip, CardFooter } from "@heroui/react";
import { Blocks, FileText, User } from "lucide-react";

interface Block {
  id: number;
  status: string;
  hash: string;
  previous: string;
  merkleRoot: string;
  difficulty: string;
  transactions: number;
  candidates: number;
  nonce: number;
  size: string;
  timestamp: string;
}

const blocks: Block[] = [
  {
    id: 15847,
    status: "Latest",
    hash: "0x0000000000...c8d196cd5f91",
    previous: "0x0000000000...3e4f5a6b7c8d",
    merkleRoot: "0x7c2d3e4f5a...7e8f9a0b1c2d",
    difficulty: "20.6T",
    transactions: 127,
    candidates: 89,
    nonce: 2847502947,
    size: "1266 KB",
    timestamp: "2024-01-15 14:30:22",
  },
  {
    id: 15846,
    status: "1 conf.",
    hash: "0x0000000000...3e4f5a6b7c8d",
    previous: "0x0000000000...f7a0b3c6d9e2",
    merkleRoot: "0x8d3e4f5a6b...8f9a0b1c2d3e",
    difficulty: "20.5T",
    transactions: 143,
    candidates: 102,
    nonce: 1934782561,
    size: "774 KB",
    timestamp: "2024-01-15 14:28:15",
  },
];

export default function LatestBlocks() {
  return (
    <div className="p-6 bg-[#18181b]  rounded-xl mb-10">
      <h2 className="text-xl font-semibold mb-4 flex gap-2 text-white"><Blocks /> Latest Blocks</h2>
      <div className="space-y-4">
        {blocks.map((block) => (
          <Card
            key={block.id}
            shadow="none"
            className="bg-transparent  border border-gray-200/20 rounded-xl px-4"
          >
            <CardHeader className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                <p className="font-sm">Block #{block.id}</p>
                <Chip
                  size="sm"
                  variant="flat"
                  color={block.status === "Latest" ? "success" : "warning"}
                >
                  {block.status}
                </Chip>
              </div>
              <p className="text-gray-400 text-sm">{block.timestamp}</p>
            </CardHeader>

            <CardBody className="text-sm grid grid-cols-2 gap-2 pb-4">
              <div>
                <ul className="space-y-2">
                  <li>
                    <span className="font-normal text-gray-400"># Hash: </span>
                    {block.hash}
                  </li>
                  <li>
                    <span className="font-normal text-gray-400"># Previous:</span>
                    {block.previous}
                  </li>
                  <li>
                    <span className="font-normal text-gray-400">
                      # Merkle Root:
                    </span>{" "}
                    {block.merkleRoot}
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <ul className="space-y-2">
                  <li className="flex items-center gap-1">
                    <FileText className="text-primary" size={14} />
                    <span className="font-normal text-gray-400">
                      Transactions:
                    </span>
                    <span className="font-bold">{block.transactions}</span>
                  </li>

                  <li className="flex items-center gap-1">
                    <User className="text-primary" size={14} />
                    <span className="font-normal text-gray-400">
                      Candidates:
                    </span>
                    <span className="font-bold">{block.candidates}</span>
                  </li>

                  <li className="flex items-center gap-1">
                    <span className="font-normal text-gray-400">Nonce:</span>
                    <span className="font-bold">{block.nonce}</span>
                  </li>
                </ul>
              </div>
            </CardBody>

            <CardFooter className="flex justify-between border-t-1 border-gray-200/40">
              <p className="text-sm">
                <span className="font-normal text-gray-400">Difficulty:</span>{" "}
                {block.difficulty}
              </p>
              <p className="text-sm">
                <span className="font-normal text-gray-400">Size:</span>{" "}
                {block.size}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
