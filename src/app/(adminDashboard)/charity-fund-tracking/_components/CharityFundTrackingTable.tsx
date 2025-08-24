"use client";
import { Input, message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { CgUnblock } from "react-icons/cg";
import { ArrowDownNarrowWide, Eye, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

const userFilterOption = [
  {
    text: "Individual Seller",
    value: "Individual Seller",
  },
  {
    text: "Charitable Organization",
    value: "Charitable Organization",
  },
  {
    text: "Charity Shop",
    value: "Charity Shop",
  },
  {
    text: "Celebrity",
    value: "Celebrity",
  },
  {
    text: "Eco-Friendly Shop",
    value: "Eco-Friendly Shop",
  },
  {
    text: "Ambassador",
    value: "Ambassador",
  },
  {
    text: "Professional Seller",
    value: "Professional Seller",
  },
  {
    text: "Assisted Seller",
    value: "Assisted Seller",
  },
];

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

const randomUserRole = (length: number) => {
  return Math.floor(Math.random() * length);
};

type TDataType = {
  key?: number;
  serial: number;
  charityName: string;
  received: string;
  date: string;
  item: string;
  directDonations: string;
  salesContributions: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  item: "#A0111235",
  serial: inx + 1,
  charityName: "Save the Children",
  received : "$8,000",
  date: "19 Jun 2025",
  directDonations: "$3,000",
  salesContributions: "$5,000",
}));

const CharityFundTrackingTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Charity Name",
      dataIndex: "charityName",
      align: "center",
    },
    {
      title: "Total Received ",
      dataIndex: "received",
      align: "center",
    },
    {
      title: "Direct Donations",
      dataIndex: "directDonations",
      align: "center",
    },

    {
      title: "Sales Contributions",
      dataIndex: "salesContributions",
      align: "center",
    },
  

    {
      title: "Date",
      dataIndex: "date",
      align: "center",
    }
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

export default CharityFundTrackingTable;
