"use client";
import { TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { ArrowDownNarrowWide, Eye } from "lucide-react";

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
  item: string;
  date: string;
  status: string;
};

const statusFilterOption = [
  {
    text: "Sale",
    value: "sale",
  },
  {
    text: "Ongoing",
    value: "ongoing",
  },
  {
    text: "Returned",
    value: "returned",
  },
  {
    text: "Purchase",
    value: "purchase",
  },
];

const returnStatusOption = () => {
  return Math.floor(Math.random() * 4);
};

const data: TDataType[] = Array.from({ length: 16 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  item: "#A012345",
  date: "19 Aug 2025",
  status: statusFilterOption[returnStatusOption()]?.text,
}));

const ProductListingTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial No.",
      dataIndex: "serial",
      align: "center",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Item Number",
      dataIndex: "item",
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
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: () => (
        <div className="flex items-center justify-center gap-x-1">
          <Eye
            size={22}
            color="gray"
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#F9F9FA] rounded-2xl">
      <DataTable columns={columns} data={data}></DataTable>
      <ProductDetailsModal open={open} setOpen={setOpen}></ProductDetailsModal>
    </div>
  );
};

export default ProductListingTable;
