"use client";

import { Card, CardHeader } from "@heroui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", blocks: 1200, transactions: 4800, applications: 3200 },
  { name: "Feb", blocks: 1400, transactions: 5100, applications: 3800 },
  { name: "Mar", blocks: 1300, transactions: 4900, applications: 3500 },
  { name: "Apr", blocks: 1600, transactions: 5800, applications: 4200 },
  { name: "May", blocks: 1700, transactions: 6100, applications: 4500 },
  { name: "Jun", blocks: 1890, transactions: 6800, applications: 5100 },
  { name: "Jul", blocks: 2000, transactions: 7600, applications: 5800 },
];

const colors: Record<string, string> = {
  blocks: "#60a5fa",
  transactions: "#8b5cf6",
  applications: "#22c55e",
};

export default function BlockchainActivityChart() {
  return (
    <Card className="bg-[#0b0f1a] text-white border-none shadow-lg rounded-2xl p-2">
      <CardHeader className="text-lg font-semibold">
        Monthly Blockchain Activity
      </CardHeader>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={14} barCategoryGap={14}>
            <CartesianGrid stroke="#444" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888" fontSize={12} />
            <YAxis stroke="#888" fontSize={12}/>
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                borderRadius: "8px",
                border: "none",
                color: "#fff",
                fontSize: "12px"
              }}
            />
            {/* <Legend /> */}
            {Object.entries(colors).map(([key, color]) => (
              <Bar key={key} dataKey={key} fill={color} radius={[6, 6, 0, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
