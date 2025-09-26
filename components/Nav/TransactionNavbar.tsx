"use client";

import { Button, Chip } from "@heroui/react";
import { ArrowDownToLine, ArrowLeft, CheckCircle, CircleCheckBig } from "lucide-react";
import { useRouter } from "next/navigation";

interface TransactionNavbarProps {
  titlehead: string;
  subtitle: string;
  navId: string;
}

export default function TransactionNavbar({
  titlehead,
  subtitle,
  navId,
}: TransactionNavbarProps) {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-[#0d0d0d] text-white border-b border-gray-800">
      <div className="flex items-center gap-8">
        <Button
          variant="flat"
          size="sm"
          radius="md"
          startContent={<ArrowLeft size={16} />}
          className="hover:bg-purple-700"
          onPress={() => router.back()}
        >
          Back to Dashboard
        </Button>

        <div>
          <h1 className="text-lg font-semibold mb-0">{titlehead}</h1>
          <span className="text-sm text-gray-400">{subtitle}</span>
        </div>
      </div>
      {navId === "alltrasactions" ? (
        <Chip
          variant="bordered"
          startContent={<ArrowDownToLine size={16} />}
          className="font-normal p-2"
        >
          Export CSV
        </Chip>
      ) : (
        <div className="flex gap-2 items-center">
          <CircleCheckBig size={16} className="text-green-500" />
          <Chip size="sm" color="success" variant="faded" className="font-normal p-2">
            Confirmed
          </Chip>
        </div>
      )}
    </header>
  );
}
