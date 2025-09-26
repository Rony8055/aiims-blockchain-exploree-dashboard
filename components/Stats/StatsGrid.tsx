"use client";

import statsData from "../mock";
import { Card, CardBody } from "@heroui/react";
import { Blocks, FileText, Users, Hash } from "lucide-react";

const icons: Record<string, JSX.Element> = {
  BlocksIcon: <Blocks size={24} />,
  FileIcon: <FileText size={24} />,
  UsersIcon: <Users size={24} />,
  HashIcon: <Hash size={24} />,
};

export default function StatsGrid() {
  // console.log("stats data", statsData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 w-full">
      {statsData.map((item: any, idx: number) => (
        <Card
          key={idx}
          className="relative overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <div
            style={{ backgroundColor: item.bgColor }}
            className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-300 group-hover:scale-110`}
          />

          <CardBody className="relative z-10 flex flex-col gap-6 justify-between p-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-medium">{item.title}</span>
              {icons[item.icon]}
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{item.value}</span>
              <span className="text-sm opacity-90">{item.change}</span>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
