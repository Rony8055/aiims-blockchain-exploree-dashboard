"use client";

import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import {
    Copy,
    Check,
    Clock,
    Hash,
    User,
    Layers,
    FileText,
    ExternalLink,
} from "lucide-react";

interface TransOverProps {
    data: {
        transactionHash: string;
        applicationId: string;
        blockHeight: string;
        confirmations: string;
        candidateId: string;
        timestamp: string;
        candidateName: string;
        transactionType: string;
        sizeAndFee: string;
    };
}

const CopyField = ({
    label,
    value,
}: {
    label: string;
    value: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className="flex items-end gap-2 w-full">
            <Input
                label={label}
                labelPlacement="outside"
                value={value}
                variant="bordered"
                radius="sm"
                readOnly
                size="md"
                className="w-full"
            />
            <Button
                isIconOnly
                aria-label={`Copy ${label}`}
                onPress={handleCopy}
                variant="bordered"
                color="default"
                className="min-w-unit-10 hover:bg-purple-700"
            >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </Button>
        </div>
    );
};

const TransOver: React.FC<TransOverProps> = ({ data }) => {
    return (
        <div className="bg-content1 p-6 rounded-lg  shadow-md mt-6 mx-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Hash className="w-5 h-5 text-white" /> Transaction Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-4">
                    <CopyField label="Transaction Hash" value={data.transactionHash} />

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="flex flex-col">
                            <label>Block Height</label>
                            <Button className="hover:bg-purple-700 mt-3" startContent={<Layers size={16} />} endContent={<ExternalLink size={16} />} radius="lg" variant="bordered">
                                {data.blockHeight}
                            </Button>
                        </div>
                        <span className="mt-8 ">156 confirmations</span>
                    </div>

                    <h3 className="text-default-500 text-small">Timestamp</h3>
                    <div className="flex items-center gap-2 text-sm text-white">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{data.timestamp}</span>
                    </div>

                    <h3 className="text-default-500 text-small">Transaction Type</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <FileText className="w-4 h-4 text-purple-700" />
                        <span className="text-white">{data.transactionType}</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <CopyField label="Application ID" value={data.applicationId} />

                     <h3 className="text-default-500 text-small">Candidate ID</h3>
                    <div className="flex items-center gap-2 text-sm text-white">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>{data.candidateId}</span>
                    </div>

                    <h3 className="text-default-500 text-small">Candidate Name</h3>
                    <div className="text-sm text-gray-400">
                        <div className="text-white font-semibold">{data.candidateName}</div>
                    </div>

                    <h3 className="text-default-500 text-small">Size & Fee</h3>
                    <div className="text-sm text-gray-400">
                        <div className="text-white">{data.sizeAndFee}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransOver;
