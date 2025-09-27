"use client";

import React from "react";
import {
    FileText,
    Calendar,
    MapPin,
    DollarSign,
    CheckCircle,
} from "lucide-react";

interface ApplicationInformationProps {
    data: {
        examType: string;
        examDate: string;
        examCenter: string;
        categoryApplied: string;
        paymentStatus: string;
        documentsSubmitted: string[];
        lastModified: string;
    };
}

const DetailDisplay = ({
    label,
    value,
    icon: Icon,
    valueClass = "text-white font-semibold",
}: {
    label: string;
    value: string;
    icon?: React.ElementType;
    valueClass?: string;
}) => (
    <div className="flex flex-col">
        <h3 className="text-default-500 text-small mb-1">{label}</h3>
        <div className="flex items-center gap-2 text-sm">
            <span className={valueClass}>{value}</span>
        </div>
    </div>
);

const PaymentStatusBadge = ({ status }: { status: string }) => {
    const isCompleted = status.toLowerCase() === "completed";
    const colorClass = isCompleted
        ? "bg-green-600/20 text-green-400 border border-green-600"
        : "bg-yellow-600/20 text-yellow-400 border border-yellow-600";

    return (
        <div
            className={`px-2 py-0.5 rounded-full text-xs w-20 font-medium ${colorClass} flex items-center gap-1`}
        >
            {status}
        </div>
    );
};

const DocumentBadges = ({ documents }: { documents: string[] }) => (
    <div className="flex flex-wrap gap-2 mt-1">
        {documents.map((doc, index) => (
            <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-black text-gray-300 rounded-full border border-gray-600"
            >
                {doc}
            </span>
        ))}
    </div>
);

const ApplicationInformation: React.FC<ApplicationInformationProps> = ({ data }) => {
    const {
        examType,
        examDate,
        examCenter,
        categoryApplied,
        paymentStatus,
        documentsSubmitted,
        lastModified,
    } = data;

    return (
        <div className="bg-content1 p-6 rounded-lg text-white shadow-md mt-6 mx-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5" /> Application Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-6">
                    <DetailDisplay label="Exam Type" value={examType} icon={FileText} />
                    <DetailDisplay label="Exam Date" value={examDate} icon={Calendar} />
                    <DetailDisplay label="Exam Center" value={examCenter} icon={MapPin} />
                    <DetailDisplay label="Category Applied" value={categoryApplied} icon={DollarSign} />
                </div>

                <div className="space-y-6">
                    <div className="flex flex-col">
                        <h3 className="text-default-500 text-small mb-3">Payment Status</h3>
                        <PaymentStatusBadge status={paymentStatus} />
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-default-500 text-small mb-1">Documents Submitted</h3>
                        <DocumentBadges documents={documentsSubmitted} />
                    </div>

                    <DetailDisplay label="Last Modified" value={lastModified} icon={Calendar} />
                </div>
            </div>
        </div>
    );
};

export default ApplicationInformation;