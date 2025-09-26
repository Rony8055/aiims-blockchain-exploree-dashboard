

"use client";

import { useState } from "react";
import {
  DateRangePicker,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@heroui/react";
import { Calendar } from "lucide-react";
import { parseDate } from "@internationalized/date";

export default function App() {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<{ start: any; end: any } | null>(null);

  function formatDate(date: any) {
    return `${date.month}/${date.day}/${date.year}`;
  }

  return (
    <Popover isOpen={open} onOpenChange={setOpen}>
    
      <PopoverTrigger>
        <Button variant="ghost" size="sm" className="gap-2">
          <Calendar size={14} />
          {range?.start && range?.end
            ? `${formatDate(range.start)} - ${formatDate(range.end)}`
            : "Date Range"}
        </Button>
      </PopoverTrigger>


      <PopoverContent className="p-2">
        <DateRangePicker
          className="max-w-xs"
          defaultValue={{
            start: parseDate("2024-04-01"),
            end: parseDate("2024-04-08"),
          }}
          onChange={(val: any) => {
            setRange(val);   
            setOpen(false); 
          }}
          label="Stay duration"
          variant="bordered"
          errorMessage={(value) =>
            value.isInvalid ? "Please enter your stay duration" : ""
          }
        />
      </PopoverContent>
    </Popover>
  );
}
