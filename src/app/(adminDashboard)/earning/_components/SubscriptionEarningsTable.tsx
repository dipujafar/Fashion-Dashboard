"use client";
import { Image, Input, TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import { ArrowDownNarrowWide, Search } from "lucide-react";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  type: string;
  subscriptionType: string;
  expireDate: string;
  purchaseDate: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Robert",
  type: "Eco-Friendly",
  subscriptionType: inx % 2 === 0 ? "Free Trial" : "Monthly",
  expireDate: "19 Sep 2025",
  purchaseDate: "19 Aug 2025",
}));

const SubscriptionEarningsTable = () => {
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
      title: "Account Type",
      dataIndex: "type",
      align: "center",
    },
    {
      title: "Subscription Type",
      dataIndex: "subscriptionType",
      align: "center",
      filters: [
        {
          text: "Free Trial",
          value: "Free Trial",
        },
        {
          text: "Monthly",
          value: "Monthly",
        },
      ],
      filterIcon: () => <ArrowDownNarrowWide color="#fff" />,
      onFilter: (value, record) =>
        record.subscriptionType.indexOf(value as string) === 0,
    },

    {
      title: "Expire Date",
      dataIndex: "expireDate",
      align: "center",
    },
    {
      title: "Purchase Date",
      dataIndex: "purchaseDate",
      align: "center",
    },
  ];

  return (
    <div className="bg-[#F9F9FA] rounded-md">
      <DataTable columns={columns} data={data} pageSize={11}></DataTable>
    </div>
  );
};

export default SubscriptionEarningsTable;
