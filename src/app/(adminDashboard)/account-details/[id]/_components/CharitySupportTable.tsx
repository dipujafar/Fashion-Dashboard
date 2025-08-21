"use client";;
import { TableProps } from "antd";
import DataTable from "@/utils/DataTable";

type TDataType = {
  key?: number;
  serial: number;
  charity: string;
  date: string;
  amount: string;
};



const data: TDataType[] = Array.from({ length: 16 }).map((_, inx) => ({
  key: inx,
  serial: inx + 1,
  charity: "Save The Ocean",
  date: "19 Aug 2025",
  amount: "20%",
}));

const CharitySupportTable = () => {

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial No.",
      dataIndex: "serial",
      align: "center",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Charity Name",
      dataIndex: "charity",
      align: "center",
    },

    {
      title: "Date & Time",
      dataIndex: "date",
      align: "center",
    },


    {
      title: "Amount Percentage",
      dataIndex: "amount",
      align: "center",
    },
  ];

  return (
    <div className="bg-[#F9F9FA] rounded-2xl">
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
};

export default CharitySupportTable;
