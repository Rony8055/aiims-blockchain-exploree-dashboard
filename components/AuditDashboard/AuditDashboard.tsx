import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { ArrowDownToLine, Calendar, FileCheck, FunnelX } from "lucide-react";
import React from "react";
import BlockReport from "./BlockReport";
import CalendarRange from "./CalendarRange";

const AuditDashboard = () => {
  return (
    <div className="p-6 bg-[#18181b] rounded-xl mb-10">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4 flex gap-2 text-white">
          <FileCheck /> Blockchain Audit Report
        </h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <FunnelX size={14} /> Filter
          </Button>
        
          <CalendarRange />

          <Button variant="ghost" size="sm">
            <ArrowDownToLine size={14} />
            Export
          </Button>
        </div>
      </div>

      <div className="my-2">
        <BlockReport />
      </div>
    </div>
  );
};

export default AuditDashboard;
