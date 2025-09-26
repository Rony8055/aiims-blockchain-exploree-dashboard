"use client";

import { Card, CardBody } from "@heroui/react";
import { Database, TrendingUp, Clock, Circle } from "lucide-react";

export default function NetworkStatus() {
  return (
    <Card className="w-full my-10 p-4">
      <div className="flex items-center gap-2">
        <Database size={28} className=" text-gray-300" />
        <h2 className="text-xl font-semibold text-white">Network Status</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-6">
          <div className="w-16 h-16 rounded-full bg-green-900/40 flex items-center justify-center mb-3">
            <Circle className="w-8 h-8 text-green-400 fill-green-400" />
          </div>
          <p className="text-sm text-gray-400">Network Status</p>
          <p className="text-lg font-semibold text-green-500">Healthy</p>
        </div>

        <div className="flex flex-col items-center p-6">
          <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mb-3">
            <TrendingUp className="text-blue-500 w-8 h-8" />
          </div>
          <p className="text-sm text-gray-400">Block Time</p>
          <p className="text-lg font-semibold text-white">12.3s</p>
        </div>

        <div className="flex flex-col items-center p-6">
          <div className="w-16 h-16 rounded-full bg-blue-900/40 flex items-center justify-center mb-3">
            <Clock className="w-8 h-8 text-purple-500" />
          </div>
          <p className="text-sm text-gray-400">Last Block</p>
          <p className="text-lg font-semibold text-white">2 min ago</p>
        </div>
      </div>
    </Card>
  );
}
