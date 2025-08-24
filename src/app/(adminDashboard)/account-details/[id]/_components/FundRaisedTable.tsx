"use client";
import { TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import { ArrowDownNarrowWide } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductDetailsModal } from "@/components/shared/modal/ProductDetails";

const returnStatusColor = (status: string) => {
  switch (status) {
    case "Sale":
      return "text-green-600";
    case "Ongoing":
      return "text-yellow-600";
    case "Returned":
      return "text-red-600";
    case "Purchase":
      return "text-blue-600";
    default:
      return "text-black";
  }
};

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  date: string;
  status: string;
  amount: number;
};

const statusFilterOption = [
  {
    text: "Direct Donation",
    value: "Direct Donation",
  },
  {
    text: "Sales Contribution",
    value: "Sales Contribution",
  },
];

const returnStatusOption = () => {ProductDetailsModal
  return Math.floor(Math.random() * 2);
};

const data: TDataType[] = Array.from({ length: 16 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Arisha. M.",
  date: "19 Aug 2025",
  status: statusFilterOption[returnStatusOption()]?.text,
  amount: 1000,
}));

const FundRaisedTable = () => {

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial No.",
      dataIndex: "serial",
      align: "center",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
    },

    {
      title: " Date",
      dataIndex: "date",
      align: "center",
    },

    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (text) => <p className={cn(returnStatusColor(text))}>{text}</p>,
      filters: statusFilterOption,
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
      filterIcon: () => <ArrowDownNarrowWide color="#fff" />,
    },

    {
      title: "Amount",
      dataIndex: "amount",
      align: "center",
      render: (amount) => <p>${amount}</p>,
    },
  ];

  return (
    <div className="bg-[#F9F9FA] rounded-2xl">
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
};

export default FundRaisedTable;
