"use client";

import React, { useCallback, useState, useMemo } from "react";
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
  ExternalLink,
  Eye,
  FileText,
  Funnel,
  Search,
  UserIcon,
} from "lucide-react";
import TransactionNavbar from "@/components/Nav/TransactionNavbar";
import { useRouter } from "next/navigation";
interface TransactionItem {
  id: number;
  hash: string;
  type: "Application" | "Payment" | "Result" | "Admit Card";
  candidate: string;
  name: string;
  block: string;
  status: Status;
  time: string;
  icon?: string;
  actions?: any;
}

const users: TransactionItem[] = [
  { id: 1, hash: "# 0x4a5e1e...fdeda33b", type: "Application", candidate: "AIIMS2024001", name: "Rahul kumar Singh", block: "#15847", status: "confirmed", time: "2024-01-15 14:30:22" },
  { id: 2, hash: "# 0x7c8d9e...a1b2c3d4", type: "Payment", candidate: "AIIMS2024002", name: "Priya Sharma", block: "#15848", status: "pending", time: "2024-01-15 14:31:00" },
  { id: 3, hash: "# 0x3f2b1a...e6f7a8b9", type: "Result", candidate: "AIIMS2024003", name: "Vijay Mehra", block: "#15849", status: "failed", time: "2024-01-15 14:32:15" },
  { id: 4, hash: "# 0x8d3e4f...0b1c2d3e", type: "Result", candidate: "AIIMS2024004", name: "Sonia Gupta", block: "#15850", status: "failed", time: "2024-01-15 14:33:40" },
  { id: 5, hash: "# 0x5g6h7i...j1k2l3m4", type: "Application", candidate: "AIIMS2024005", name: "Abhishek Singh", block: "#15851", status: "confirmed", time: "2024-01-15 14:34:55" },
  { id: 6, hash: "# 0x6n7o8p...q9r0s1t2", type: "Admit Card", candidate: "AIIMS2024006", name: "Sneha Reddy", block: "#15852", status: "confirmed", time: "2024-01-15 14:36:10" },
  { id: 7, hash: "# 0x1u2v3w...x4y5z6a7", type: "Payment", candidate: "AIIMS2024007", name: "Anil Kumar", block: "#15853", status: "pending", time: "2024-01-16 09:00:00" },
  { id: 8, hash: "# 0x8b9c1d...e2f3g4h5", type: "Result", candidate: "AIIMS2024008", name: "Bhavna Patel", block: "#15854", status: "confirmed", time: "2024-01-16 10:30:00" },
];

const columns = [
  { name: "Hash", uid: "hash" },
  { name: "Type", uid: "type" },
  { name: "Candidate", uid: "candidate" },
  { name: "Block", uid: "block" },
  { name: "Status", uid: "status" },
  { name: "Time", uid: "time" },
  { name: "ACTIONS", uid: "actions" },
];

const typeIconMap: Record<TransactionItem['type'], React.ReactNode> = {
  Application: <FileText className="w-4 h-4 text-blue-500" />,
  "Admit Card": <FileText className="w-4 h-4 text-purple-500" />,
  Payment: <UserIcon className="w-4 h-4 text-yellow-500" />,
  Result: <CircleCheckBig className="w-4 h-4 text-success-500" />,
};

type Status = "confirmed" | "pending" | "failed";

const statusMap: Record<Status, { color: "success" | "danger" | "warning"; icon: React.ReactNode }> = {
  confirmed: { color: "success", icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
  pending: { color: "warning", icon: <AlertCircle className="w-4 h-4 text-yellow-500" /> },
  failed: { color: "danger", icon: <CircleX className="w-4 h-4 text-red-500" /> },
};

const statusOptions = [
  { key: "all", label: "All Status" },
  { key: "confirmed", label: "Confirmed" },
  { key: "pending", label: "Pending" },
  { key: "failed", label: "Failed" },
];

const allTypesOptions = [
  { key: "all", label: "All Types" },
  { key: "Application", label: "Application" },
  { key: "Admit Card", label: "Admit Card" },
  { key: "Payment", label: "Payment" },
  { key: "Result", label: "Result" },
];

const allTimesOptions = [
  { key: "all", label: "All Times" },
  { key: "today", label: "Today" },
  { key: "thisweek", label: "This Week" },
  { key: "thismonth", label: "This Month" },
];

export default function AllTransactions() {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  // const [filterTime, setFilterTime] = useState("all"); // Time filtering requires more complex date logic, kept simple here

  // --- FILTERED DATA LOGIC (useMemo for performance) ---
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      // 1. Search Filter (Hash, Candidate ID, Name)
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = user.hash.toLowerCase().includes(searchLower) ||
        user.candidate.toLowerCase().includes(searchLower) ||
        user.name.toLowerCase().includes(searchLower);

      const matchesStatus = filterStatus === "all" || user.status === filterStatus;

      const matchesType = filterType === "all" || user.type === filterType;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [searchTerm, filterStatus, filterType]);

  const renderCell = useCallback(
    (user: TransactionItem, columnKey: keyof TransactionItem) => {
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
              <Tooltip content="View">
                <span
                  className="flex gap-2 text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => router.push(`/transactions/${user.id}`)}
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
    [router]
  );

  const confirmedCount = filteredUsers.filter(u => u.status === 'confirmed').length;
  const pendingCount = filteredUsers.filter(u => u.status === 'pending').length;
  const failedCount = filteredUsers.filter(u => u.status === 'failed').length;
  const totalCount = filteredUsers.length;

  return (
    <>
      <TransactionNavbar
        titlehead="All Transactions"
        subtitle="Browse and filter all blockchain transactions"
        navId="alltrasactions"
      />
      <div className="p-5">
        <div className="bg-[#18181b] rounded-xl border border-gray-700 my-10 p-5">
          <h2 className="flex gap-2 text-white">
            <Funnel /> Filter & Search
          </h2>
          <div className="flex justify-between gap-3 my-5">
            <Input
              startContent={<Search />}
              placeholder="Search hash, candidate, or name"
              size="md"
              type="text"
              className="max-w-xs"
              value={searchTerm}
              onValueChange={setSearchTerm}
            />
            <Select
              size="md"
              placeholder="All Status"
              className="max-w-[150px]"
              selectedKeys={[filterStatus]} // This prop correctly controls the selected item
              onSelectionChange={(keys) => setFilterStatus(Array.from(keys)[0] as Status | 'all')}
            >
              {statusOptions.map((item) => (
                <SelectItem key={item.key}>
                  {item.label}
                </SelectItem>
              ))}
            </Select>

            <Select
              size="md"
              placeholder="All Types"
              className="max-w-[150px]"
              selectedKeys={[filterType]}
              onSelectionChange={(keys) => setFilterType(Array.from(keys)[0] as TransactionItem['type'] | 'all')}
            >
              {allTypesOptions.map((item) => (
                <SelectItem key={item.key}>
                  {item.label}
                </SelectItem>
              ))}
            </Select>

            <Select
              size="md"
              placeholder="All Times"
              className="max-w-[150px]"
            >
              {allTimesOptions.map((item) => (
                <SelectItem key={item.key}>
                  {item.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex justify-between text-white">
            <span className="text-small">
              Showing {totalCount} of {users.length} total transactions
            </span>
            <div className="flex gap-2">
              <Chip size="sm" color="success">{confirmedCount} Confirmed</Chip>
              <Chip size="sm" color="warning">{pendingCount} Pending</Chip>
              <Chip size="sm" color="danger">{failedCount} Failed</Chip>
            </div>
          </div>
        </div>
        <Table
          isVirtualized
          rowHeight={70}
          className="mb-10"
          aria-label="All Transactions Table"
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
          <TableBody items={filteredUsers}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell className="border-b border-gray-700/50">
                    {renderCell(item, columnKey as keyof TransactionItem)}
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