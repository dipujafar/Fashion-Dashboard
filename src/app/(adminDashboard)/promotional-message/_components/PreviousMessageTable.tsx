"use client";
import { Input, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { Eye, Search } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  lastName: string;
  email: string;
  date: string;
  item: string;
  reason: string;
};

const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  item: "#A0111235",
  serial: inx + 1,
  name: "Muskan",
  lastName: "Tanaz",
  email: inx % 2 === 0 ? "All Users" : "Specific Users",
  reason: "Inappropriate Content",
  date: "11 Aug 2025",
}));

const PreviousMessageTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
      render: (text) =>
        text === "Specific Users" ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>{text}</TooltipTrigger>
              <TooltipContent>
                <p>User1@gmail.com, User2@gmail.com, User3@gmail.com</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <p>{text}</p>
        ),
    },
    {
      title: "Date",
      dataIndex: "date",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: () => (
        <Link href={`/promotional-message/add-message`} className="flex justify-center gap-2 cursor-pointer">
          <Eye size={22} color="gray" onClick={() => setOpen(!open)} />
        </Link>
      ),
    },
  ];

  return (
    <div className="bg-[#F9F9FA] rounded-md">
      <div className="flex justify-between items-center px-3 py-5">
        <div></div>
        <Input
          className="!w-[180px] lg:!w-[250px] !py-2 placeholder:text-white !border-none !bg-[#d6d2d2]"
          placeholder="Search Here..."
          prefix={<Search size={16} color="#000"></Search>}
        ></Input>
      </div>
      <DataTable columns={columns} data={data} pageSize={11}></DataTable>
    </div>
  );
};

export default PreviousMessageTable;
