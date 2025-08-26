"use client";
import {TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import { ArrowDownNarrowWide } from "lucide-react";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  itemNumber: string;
  salePrice: string;
  commission: string;
  date: string;
  sellerProfit: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Robert",
  itemNumber: "#A12345",
  salePrice: "$123.00",
  commission: "10%",
  date: "19 Aug 2025",
  sellerProfit: "80.00",
}));


const CommissionEarningsTable = () => {
  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
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
      title: "Item Number",
      dataIndex: "itemNumber",
      align: "center",
    },
    {
      title: "Sale Price",
      dataIndex: "salePrice",
      align: "center",

    },

    {
      title: "Commission (%)",
      dataIndex: "commission",
      align: "center",
    },
    {
      title: "Seller's Profit",
      dataIndex: "sellerProfit",
      align: "center",
    },
    {
      title: "Transaction Date",
      dataIndex: "date",
      align: "center",
    },
  ];

  return (
    <div className="bg-[#F9F9FA] rounded-md">
      <DataTable columns={columns} data={data} pageSize={11}></DataTable>
    </div>
  );
};

export default CommissionEarningsTable;
