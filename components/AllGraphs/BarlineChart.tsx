"use client";

import { Card, CardHeader } from "@heroui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", blocks: 1200, transactions: 4800, applications: 3200 },
  { name: "Feb", blocks: 1400, transactions: 4300, applications: 3000 },
  { name: "Mar", blocks: 1500, transactions: 5000, applications: 3500 },
  { name: "Ap", blocks: 1000, transactions: 5500, applications: 4500 },
  { name: "May", blocks: 750, transactions: 4500, applications: 3500 },
  { name: "Jun", blocks: 500, transactions: 4600, applications: 6500 },
  { name: "Jul", blocks: 4500, transactions: 3000, applications: 2500 },
];

const colors = {
  blocks: "#60a5fa",
  transactions: "#8b5cf6",
  applications: "#4ade80",
};

export default function MyLineChart() {
  return (
    <Card className="bg-[#0b0f1a] text-white border-none shadow-lg rounded-2xl p-2">
      <CardHeader className="text-lg font-semibold">
        Trends Over Time
      </CardHeader>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          >
            <CartesianGrid stroke="#444" strokeDasharray="3 3" />{" "}
            <XAxis dataKey="name" stroke="#888" fontSize={12} />
            <YAxis stroke="#888" fontSize={12} />
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
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={color}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
