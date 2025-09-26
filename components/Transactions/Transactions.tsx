"use client";

import React, { useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Button,
} from "@heroui/react";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle,
  CircleCheckBig,
  CircleX,
  ExternalLink,
  Eye,
  FileText,
  UserIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const columns = [
  { name: "Hash", uid: "hash" },
  { name: "Type", uid: "type" },
  { name: "Candidate", uid: "candidate" },
  { name: "Block", uid: "block" },
  { name: "Status", uid: "status" },
  { name: "Time", uid: "time" },
  { name: "ACTIONS", uid: "actions" },
];
const users = [
  {
    id: 1,
    hash: "# 0x4a5e1e...fdeda33b",
    type: "Application",
    candidate: "AIIMS2024001",
    icon: "BlocksIcon",
    status: "confirmed" as Status,
    block: "#15847",
    time: "2024-01-15 14:30:22",
  },
  {
    id: 2,
    hash: "# 0x4a5e1e...fdeda33b",
    type: "Payment",
    candidate: "AIIMS2024002",
    icon: "Candidate",
    status: "pending" as Status,
    block: "#15848",
    time: "2024-01-15 14:30:22",
  },
  {
    id: 3,
    hash: "# 0x4a5e1e...fdeda33b",
    type: "Result",
    candidate: "AIIMS2024003",
    icon: "Document",
    status: "failed" as Status,
    block: "#15849",
    time: "2024-01-15 14:30:22",
  },
  {
    id: 4,
    hash: "# 0x4a5e1e...fdeda33b",
    type: "Result",
    candidate: "AIIMS2024004",
    icon: "Document",
    status: "pending" as Status,
    block: "#15850",
    time: "2024-01-15 14:30:22",
  },
  {
    id: 5,
    hash: "# 0x4a5e1e...fdeda33b",
    type: "Application",
    candidate: "AIIMS2024005",
    icon: "Document",
    status: "confirmed" as Status,
    block: "#15851",
    time: "2024-01-15 14:30:22",
  },
  {
    id: 6,
    hash: "# 0x4a5e1e...fdeda33b",
    type: "Admit Card",
    candidate: "AIIMS2024006",
    icon: "Document",
    status: "confirmed" as Status,
    block: "#15852",
    time: "2024-01-15 14:30:22",
  },
];

const typeIconMap: Record<string, React.ReactNode> = {
  Application: <FileText className="w-4 h-4 text-blue-500" />,
  "Admit Card": <FileText className="w-4 h-4 text-purple-500" />,
  Payment: <UserIcon className="w-4 h-4 text-yellow-500" />,
  Result: <CircleCheckBig className="w-4 h-4 text-success-500" />,
};

type Status = "confirmed" | "pending" | "failed";

const statusMap: Record<
  Status,
  { color: "success" | "danger" | "warning"; icon: React.ReactNode }
> = {
  confirmed: {
    color: "success",
    icon: <CheckCircle className="w-4 h-4 text-green-500" />,
  },
  pending: {
    color: "warning",
    icon: <AlertCircle className="w-4 h-4 text-yellow-500" />,
  },
  failed: {
    color: "danger",
    icon: <CircleX className="w-4 h-4 text-red-500" />,
  },
};

export default function TransactionsTable() {
  const router = useRouter();
  const renderCell = useCallback(
    (
      user: {
        id: number;
        type: string;
        candidate: string;
        block: string;
        status: Status;
        time: string;
        hash: string;
        icon?: string;
        actions?: any;
      },
      columnKey: keyof typeof user
    ) => {
      const cellValue = user[columnKey];
      switch (columnKey) {
        case "hash":
          return <span>{user.hash}</span>;
        case "type":
          return (
            <div className="flex items-center gap-2">
              {typeIconMap[user.type]}
              <span>{user.type}</span>
            </div>
          );
        case "status":
          return (
            <div className="flex items-center gap-2">
              {statusMap[user.status].icon}
              <Chip
                className="capitalize flex items-center gap-1"
                color={statusMap[user.status].color}
                size="sm"
                variant="flat"
              >
                <span>{cellValue}</span>
              </Chip>
            </div>
          );

        case "actions":
          return (
            <div className="relative flex justify-center items-end gap-2">
              <Tooltip content="View">
                <span
                  className="flex gap-2  text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => router.push(`/landing-page/${user.id}`)}
                >
                  <Eye /> View
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <Table
      isVirtualized
      rowHeight={70}
      className="mb-10"
      aria-label="Example table with custom cells"
      topContent={
        <div className="flex justify-between my-4">
          <h2 className="text-3xl"># Recent Transactions</h2>
          <Button
            as={Link}
            href="/all-transactions"
            color="primary"
            variant="ghost"
            className="flex gap-2 rounded-2xl"
          >
            View All
            <ExternalLink />
          </Button>
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell className="border-b border-gray-200/25">
                {renderCell(item, columnKey as keyof typeof item)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
