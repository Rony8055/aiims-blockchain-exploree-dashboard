"use client";

import React from "react";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import { CheckCircle, AlertTriangle, XCircle, Shield } from "lucide-react";

interface SummaryItem {
  label: string;
  value: string | number;
  color: string;
  textColor: string;
  iconBg: string;
  icon: React.ReactNode;
}

interface AuditItem {
  id: string;
  title: string;
  status: "Passed" | "Warning" | "Failed";
  description: string;
  timestamp: string;
  severity: "low" | "medium" | "high";
  findings: number;
}

const summaryData: SummaryItem[] = [
  {
    label: "Passed",
    value: 15,
    color: "#11211d",
    textColor: "text-green-500",
    iconBg: "#1b3a34", // any hex or rgba
    icon: <CheckCircle className="w-6 h-6 text-green-300" />,
  },
  {
    label: "Warnings",
    value: 3,
    color: "#272117",
    textColor: "text-yellow-500",
    iconBg: "#3a2c15",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-300" />,
  },
  {
    label: "Failed",
    value: 1,
    color: "#27181d",
    textColor: "text-red-500",
    iconBg: "#3a1c24",
    icon: <XCircle className="w-6 h-6 text-red-300" />,
  },
  {
    label: "Compliance",
    value: "98.5%",
    color: "#151e2f",
    textColor: "text-blue-500",
    iconBg: "#1a2740",
    icon: <Shield className="w-6 h-6 text-blue-300" />,
  },
];

const auditLogs: AuditItem[] = [
  {
    id: "AUDIT-2024-001",
    title: "Security Check",
    status: "Passed",
    description: "All candidate application hashes verified",
    timestamp: "2024-01-15 14:30:22",
    severity: "low",
    findings: 0,
  },
  {
    id: "AUDIT-2024-002",
    title: "Data Integrity",
    status: "Warning",
    description: "Minor discrepancy in block timestamps",
    timestamp: "2024-01-15 14:25:15",
    severity: "medium",
    findings: 3,
  },
  {
    id: "AUDIT-2024-003",
    title: "Transaction Validation",
    status: "Passed",
    description: "All payment transactions validated successfully",
    timestamp: "2024-01-15 14:20:08",
    severity: "low",
    findings: 0,
  },
  {
    id: "AUDIT-2024-004",
    title: "Compliance Check",
    status: "Failed",
    description: "Missing backup verification for critical blocks",
    timestamp: "2024-01-15 14:15:42",
    severity: "high",
    findings: 12,
  },
];

const statusColorMap: Record<
  AuditItem["status"],
  "success" | "warning" | "danger"
> = {
  Passed: "success",
  Warning: "warning",
  Failed: "danger",
};

const statusIconMap = {
  Passed: <CheckCircle size={16} className="text-green-400" />,
  Warning: <AlertTriangle size={16} className="text-yellow-400" />,
  Failed: <XCircle size={16} className="text-red-400" />,
};

export default function BlockReport() {
  return (
    <div className="p-3 text-white space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryData.map((item) => (
          <Card
            shadow="none"
            key={item.label}
            style={{ backgroundColor: item.color }}
            className={`rounded-xl shadow-md `}
          >
            <CardBody className="flex flex-col items-center justify-center text-center space-y-3 ">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: item.iconBg }}
              >
                {item.icon}
              </div>
              <div>
                <p className={`text-2xl font-bold ${item.textColor}`}>
                  {item.value}
                </p>
                <p className="text-small text-gray-500">{item.label}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        {auditLogs.map((log) => (
          <Card
            shadow="none"
            key={log.id}
            className="rounded-xl border border-gray-700 bg-[#18181b]"
          >
            <CardBody className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {statusIconMap[log.status]}
                  <p>{log.title}</p>

                  <Chip
                    size="sm"
                    color={statusColorMap[log.status]}
                    className="px-1 py-0 text-xs h-5 min-h-0 text-white"
                  >
                    {log.status}
                  </Chip>

                  <Chip
                    variant="flat"
                    size="sm"
                    className="px-1 py-0 text-xs h-5 min-h-0 text-white"
                  >
                    <span className="text-xs text-gray-400">{log.id}</span>
                  </Chip>
                </div>

                <p className="text-small text-gray-300">{log.description}</p>
                <p className="text-xs text-gray-400">
                  {log.timestamp} • Severity: {log.severity} • Findings:{" "}
                  {log.findings}
                </p>
              </div>

              <Button
                size="sm"
                variant="light"
                className="text-white hover:underline"
              >
                View Details
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
