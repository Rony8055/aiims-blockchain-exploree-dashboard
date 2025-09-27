"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TransactionNavbar from "@/components/Nav/TransactionNavbar";
import TransOver from "@/components/TransOver/TransOver";
import TechnicalDetails from "@/components/TechnicalDetails/TechnicalDetails";
import ApplicationInformation from "@/components/ApplicationInformation/ApplicationInformation";
import MerkleProof from "@/components/MerkleProof/MerkleProof";

const allTransactionsData = [
  {
    id: "1",
    transactionDetails: {
      transactionHash: "0x9e4f5a6b7c8d9e0f1a...5c6b7e8f9a0b1c2d3e4f",
      applicationId: "APP-2024-15847-001",
      blockHeight: "#15847",
      confirmations: "156 confirmations",
      candidateId: "AIIMS2024001",
      timestamp: "2024-01-15 14:30:22",
      candidateName: "Rahul Kumar Singh",
      transactionType: "Application",
      sizeAndFee: "250 bytes 0.00042 ETH",
    },
    technicalDetails: {
      fromAddress: "0xd8dA6BF26964aF9D7e...9e03E53415D37aA96045",
      toAddress: "0x742d35Cc6648C8532A...1a7a8b7a3d7f1c8d9e2a",
      value: "0.05 ETH",
      gasUsed: 21000,
      gasPrice: "20 Gwei",
      nonce: 42,
      blockHash: "0x000000000000000000...fba89842c8d196cd5f91",
    },
    applicationInfo: {
      examType: "AIIMS MBBS Entrance",
      examDate: "2024-05-15",
      examCenter: "AIIMS New Delhi",
      categoryApplied: "General",
      paymentStatus: "Completed",
      documentsSubmitted: ["Photo", "Signature", "Category Certificate", "Academic Records"],
      lastModified: "2024-01-15 14:30:22",
    },
    merkleProof: [
      { level: 1, hash: "0x1234567890abcdef12...cdef1234567890abcdef" },
      { level: 2, hash: "0xabcdef1234567890ab...7890abcdef1234567890" },
      { level: 3, hash: "0x567890abcdef123456...1234567890abcdef1234" },
    ],
  },

  {
    id: "2",
    transactionDetails: {
      transactionHash: "0x8a9b7c8d9e0f1a2b3c...c8d9e0f1a2b3c4d5e6f7",
      applicationId: "APP-2024-15848-002",
      blockHeight: "#15848",
      confirmations: "155 confirmations",
      candidateId: "AIIMS2024002",
      timestamp: "2024-01-15 14:30:22",
      candidateName: "Priya Sharma",
      transactionType: "Payment",
      sizeAndFee: "250 bytes 0.00042 ETH",
    },
    technicalDetails: {
      fromAddress: "0x1a2b3c4d5e6f7a8b9c...d5e6f7a8b9c1d2e3f4g5",
      toAddress: "0x8e9f1a2b3c4d5e6f7a...c4d5e6f7a8b9c1d2e3f4",
      value: "0.1 ETH",
      gasUsed: 21000,
      gasPrice: "20 Gwei",
      nonce: 43,
      blockHash: "0x000000000000000000...a3b4c5d6e7f8a9b0c1d2",
    },
    applicationInfo: {
      examType: "Payment",
      examDate: "N/A",
      examCenter: "N/A",
      categoryApplied: "N/A",
      paymentStatus: "Pending",
      documentsSubmitted: ["Payment Slip"],
      lastModified: "2024-01-15 14:30:22",
    },
    merkleProof: [
      { level: 1, hash: "0x9876543210fedcba98...cba9876543210fedcba" },
      { level: 2, hash: "0x3210fedcba98765432...cba9876543210fedcba" },
      { level: 3, hash: "0xedcba9876543210fed...9876543210fedcba98" },
    ],
  },
];

const TransactionsDetails = () => {
  const params = useParams();
  const id = params.id as string;
  const [transaction, setTransaction] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      const foundTransaction = allTransactionsData.find(t => t.id === id);
      setTransaction(foundTransaction);
    }
  }, [id]);

  if (!transaction) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen dark:bg-background text-white">
        <TransactionNavbar
          titlehead="Transaction Not Found"
          subtitle="The requested transaction could not be found."
          navId="transactiondetails"
        />
        <div className="mt-8 text-lg">Loading or transaction not found...</div>
      </div>
    );
  }

  return (
    <div className="dark:bg-background text-white min-h-screen">
      <TransactionNavbar
        titlehead="Transactions Details"
        subtitle="Detailed blockchain transaction information"
        navId="transactiondetails"
      />
      <div className="container mx-auto p-4 md:p-8">
        <TransOver data={transaction.transactionDetails} />
        <TechnicalDetails data={transaction.technicalDetails} />
        <ApplicationInformation data={transaction.applicationInfo} />
        <MerkleProof proofs={transaction.merkleProof} />
      </div>
    </div>
  );
};

export default TransactionsDetails;