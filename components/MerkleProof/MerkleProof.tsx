"use client";

import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Copy, Check, Lock } from "lucide-react";

interface MerkleProofProps {
  proofs: {
    level: number;
    hash: string;
  }[];
}

const HashLevelField = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-row gap-2 w-full">
      <label className="text-default-500 text-small mt-2">{label}:</label>
      <div className="flex items-end gap-2 w-430">
        <Input
          labelPlacement="outside"
          value={value}
          variant="bordered"
          radius="sm"
          readOnly
          size="md"
          className="w-full bg-transparent border-gray-700 text-white"
        />
        <Button
          isIconOnly
          aria-label={`Copy ${label}`}
          onPress={handleCopy}
          variant="flat"
          className="min-w-unit-10 h-10 bg-transparent text-white hover:bg-purple-700"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

const MerkleProof: React.FC<MerkleProofProps> = ({ proofs }) => {
  if (!proofs || proofs.length === 0) {
    return (
      <div className="p-6 text-white text-center">
        No Merkle proof data available.
      </div>
    );
  }

  return (
    <div className="bg-content1 p-6 rounded-lg text-white shadow-md mt-6 mx-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Lock className="w-5 h-5" /> Merkle Proof
      </h2>

      <div className="space-y-4">
        {proofs.map((proof) => (
          <HashLevelField
            key={proof.level}
            label={`Level ${proof.level}`}
            value={proof.hash}
          />
        ))}
      </div>
    </div>
  );
};

export default MerkleProof;