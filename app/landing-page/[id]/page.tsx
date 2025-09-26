"use client";

import React from "react";
import { useParams } from "next/navigation";
import TransactionNavbar from "@/components/Nav/TransactionNavbar";
import TransOver from "@/components/TransOver/TransOver";
import TechnicalDetails from "@/components/TechnicalDetails/TechnicalDetails";
import ApplicationInformation from "@/components/ApplicationInformation/ApplicationInformation";
import MerkleProof from "@/components/MerkleProof/MerkleProof";

const transactionData = {
  transactionHash: "0x9e4f5a6b7c8d9e0f1a...5c6b7e8f9a0b1c2d3e4f",
  applicationId: "APP-2024-15847-001",
  blockHeight: "#15847",
  confirmations: "156 confirmations",
  candidateId: "AIIMS2024001",
  timestamp: "2024-01-15 14:30:22",
  candidateName: "Rahul Kumar Singh",
  transactionType: "Application",
  sizeAndFee: "250 bytes    0.00042 ETH",
};

const technicalData = {
  fromAddress: "0xd8dA6BF26964aF9D7e...9e03E53415D37aA96045",
  toAddress: "0x742d35Cc6648C8532A...1a7a8b7a3d7f1c8d9e2a",
  value: "0.05 ETH",
  gasUsed: 21000,
  gasPrice: "20 Gwei",
  nonce: 42,
  blockHash: "0x000000000000000000...fba89842c8d196cd5f91",
};

const applicationData = {
  examType: "AIIMS MBBS Entrance",
  examDate: "2024-05-15",
  examCenter: "AIIMS New Delhi",
  categoryApplied: "General",
  paymentStatus: "Completed",
  documentsSubmitted: ["Photo", "Signature", "Category Certificate", "Academic Records"],
  lastModified: "2024-01-15 14:30:22",
};

const merkleProofData = [
  { level: 1, hash: "0x1234567890abcdef12...cdef1234567890abcdef" },
  { level: 2, hash: "0xabcdef1234567890ab...7890abcdef1234567890" },
  { level: 3, hash: "0x567890abcdef123456...1234567890abcdef1234" },
];

const TransactionsDetails = () => {
  const params = useParams();
  console.log("check all slug", params);

  return (
    <>
      <TransactionNavbar
        titlehead="Transactions Details"
        subtitle="Detailed blockchain transaction information"
        navId="transactiondetails"
      />
      <TransOver data={transactionData} />
      <TechnicalDetails data={technicalData} />
      <ApplicationInformation data={applicationData} />
      <MerkleProof proofs={merkleProofData} />
    </>
  );
};

export default TransactionsDetails;