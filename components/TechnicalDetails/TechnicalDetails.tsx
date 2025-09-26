"use client";

import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import {
    Copy,
    Check,
    Layers,
} from "lucide-react";

interface TechnicalDetailsProps {
    data: {
        fromAddress: string;
        toAddress: string;
        value: string;
        gasUsed: number;
        gasPrice: string;
        nonce: number;
        blockHash: string;
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
        <div className="flex flex-col gap-2 w-full">
            <label className="text-default-500 text-small">{label}</label>
            <div className="flex items-end gap-2 w-full">
                <Input
                    labelPlacement="outside"
                    value={value}
                    variant="underlined"
                    radius="sm"
                    readOnly
                    size="md"
                    className="w-full text-white border-none"
                />
                <Button
                    isIconOnly
                    aria-label={`Copy ${label}`}
                    onPress={handleCopy}
                    variant="flat"
                    color="default"
                    className="min-w-unit-10 h-10 bg-transparent hover:bg-purple-700"
                >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
            </div>
        </div>
    );
};

const TechnicalDetails: React.FC<TechnicalDetailsProps> = ({ data }) => {
    const { fromAddress, toAddress, value, gasUsed, gasPrice, nonce, blockHash } = data;

    const DetailDisplay = ({
        label,
        value,
    }: {
        label: string;
        value: string;
    }) => (
        <div className="flex flex-col">
            <h3 className="text-default-500 text-small mb-4">{label}</h3>
            <div className="flex items-center gap-2 text-sm text-white font-semibold">

                <span>{value}</span>
            </div>
        </div>
    );

    return (
        <div className="bg-content1 p-6 rounded-lg text-white shadow-md mt-6 mx-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5" /> Technical Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 ">
                <CopyField label="From Address" value={fromAddress} />
                <CopyField label="To Address" value={toAddress} />
                <DetailDisplay label="Value" value={value}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-gray-800">
                <DetailDisplay label="Gas Used" value={gasUsed.toLocaleString()}/>
                <DetailDisplay label="Gas Price" value={gasPrice} />
                <DetailDisplay label="Nonce" value={nonce.toString()} />
            </div>

            <CopyField label="Block Hash" value={blockHash} />
        </div>
    );
};

export default TechnicalDetails;
