"use client";

import React, { useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import {
  AlertCircle,
  CheckCircle,
  CircleCheckBig,
  CircleX,
  Eye,
  FileText,
  Funnel,
  Search,
  UserIcon,
} from "lucide-react";
import TransactionNavbar from "@/components/Nav/TransactionNavbar";

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
    name: "Rahul kumar Singh",
    icon: "BlocksIcon",
    status: "confirmed" as Status,
    block: "#15847",
    time: "2024-01-15 14:30:22",
  },
  {
    id: 2,
    hash: "# 0x4a5e1e...fdeda33b",
    type: "Payment",
    candidate: "AIIMS2024001",
    name: "Rahul kumar Singh",
    icon: "Candidate",
    status: "pending" as Status,
    block: "#15847",
    time: "2024-01-15 14:30:22",
  },
  {
    id: 3,
    hash: "# 0x4a5e1e...fdeda33b",
    type: "Result",
    candidate: "AIIMS2024001",
    name: "Rahul kumar Singh",
    icon: "Document",
    status: "failed" as Status,
    block: "#15847",
    time: "2024-01-15 14:30:22",
  },
  {
    id: 4,
    hash: "# 0x8d3e4f...0b1c2d3e",
    type: "Result",
    candidate: "AIIMS2024004",
    name: "Rahul kumar Singh",
    icon: "Document",
    status: "failed" as Status,
    block: "#15847",
    time: "2024-01-15 14:30:22",
  },
  {
    id: 5,
    hash: "# 0x4a5e1e...fdeda33b",
    type: "Result",
    candidate: "AIIMS2024001",
    name: "Abhishek  Singh",
    icon: "Document",
    status: "failed" as Status,
    block: "#15847",
    time: "2024-01-15 14:30:22",
  },
];

const typeIconMap: Record<string, React.ReactNode> = {
  Application: <FileText className="w-4 h-4 text-blue-500" />,
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

const status = [
  { key: "allstatus", label: "All Status" },
  { key: "confirmed", label: "Confirmed" },
  { key: "pending", label: "Pending" },
  { key: "failed", label: "Failed" },
];
const allTypes = [
  { key: "alltypes", label: "All Types" },
  { key: "application", label: "Application" },
  { key: "admitcard", label: "Admit Card" },
  { key: "payment", label: "Payment" },
  { key: "result", label: "Result" },
];
const allTimes = [
  { key: "alltimes", label: "All Times" },
  { key: "today", label: "Today" },
  { key: "admitcard", label: "Admit Card" },
  { key: "thisweek", label: "This Week" },
  { key: "thismonth", label: "This Month" },
];

export default function AllTransactions() {
  const renderCell = useCallback(
    (
      user: {
        id: number;
        type: string;
        name: string;
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
        case "candidate":
          return (
            <div>
              <p>{user.candidate}</p>
              <span className="text-xs font-light">{user.name}</span>
            </div>
          );
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
              <Tooltip content="Edit user">
                <span className="flex gap-2  text-default-400 cursor-pointer active:opacity-50">
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
    <>
      <TransactionNavbar
        titlehead="All Transactions"
        subtitle="Browse and filter all blockchain transactions"
        navId="alltrasactions"
      />
      <div className="p-5">
        <div className="bg-[#18181b] rounded-xl border border-gray-700 my-10 p-5">
          <h2 className="flex gap-2">
            <Funnel /> Filter & Search
          </h2>
          <div className="flex justify-between gap-3 my-5">
            <Input
              startContent={<Search />}
              placeholder="Search hash, candidate"
              size="md"
              type="text"
            />
            <Select size="md" placeholder="All Status">
              {status.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
            <Select size="md" placeholder="All Types">
              {allTypes.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
            <Select size="md" placeholder="All Times">
              {allTimes.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex justify-between">
            <span className="text-small">Showing 8 of 8 transactions </span>
            <div className="flex gap-2">
              <Chip size="sm">5 Confirmed</Chip>
              <Chip size="sm">2 Pending</Chip>
              <Chip size="sm">1 Failed</Chip>
            </div>
          </div>
        </div>
        <Table
          isVirtualized
          rowHeight={70}
          className="mb-10"
          aria-label="Example table with custom cells"
          topContent={
            <div className="flex justify-between my-4">
              <h2 className="text-3xl"># Recent Transactions</h2>
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
      </div>
    </>
  );
}
