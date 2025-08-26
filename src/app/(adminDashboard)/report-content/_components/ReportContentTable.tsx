"use client";
import { Input,  TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { ArrowDownNarrowWide, Eye, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const statusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "text-[#00B047]";
    case "Approved":
      return "text-[#1372C4]";
    case "Rejected":
      return "text-[#E12728]";
  }
};

const statusPendingFilterOption = [
  {
    text: "Pending",
    value: "Pending",
  },
  {
    text: "Approved",
    value: "Approved",
  },
  {
    text: "Rejected",
    value: "Rejected",
  },
];

const findRandomStatus = (length: number) => {
  return Math.floor(Math.random() * length);
};

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  status: string;
  item: string;
  reason: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  item: "#A0111235",
  serial: inx + 1,
  name: "Muskan Tanaz",
  email: "fashion@gmail.com",
  reason: "Inappropriate Content",
  date: "19 Jun 2025",

  status:
    statusPendingFilterOption[findRandomStatus(statusPendingFilterOption?.length)]
      ?.value,
}));

const ReportContentTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Reported By",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "Item Number",
      dataIndex: "item",
      align: "center",
    },
    {
      title: "Reason For Report",
      dataIndex: "reason",
      align: "center",
    },

    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (text) => <p className={cn(statusColor(text))}>{text}</p>,
      filters: statusPendingFilterOption,
      filterIcon: () => <ArrowDownNarrowWide color="#fff" />,
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
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
      render: (text, record) => (
        <div className="flex justify-center gap-2">
          <Eye size={22} color="gray" onClick={() => setOpen(!open)} />
        </div>
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

export default ReportContentTable;
