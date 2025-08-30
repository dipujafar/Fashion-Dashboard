"use client";
import { Input, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { Eye, Search } from "lucide-react";
import ContactDetailsDialog from "./ContactDetailsDialog";

const findRandomStatus = (length: number) => {
  return Math.floor(Math.random() * length);
};

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  lastName: string;
  email: string;
  item: string;
  reason: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  item: "#A0111235",
  serial: inx + 1,
  name: "Muskan",
  lastName: "Tanaz",
  email: "robertfox@gmail.com",
  reason: "Inappropriate Content",
  date: "11 Aug 2025",
}));

const ContactListTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "First Name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
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
        <div className="flex justify-center gap-2 cursor-pointer">
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
      <ContactDetailsDialog
        open={open}
        setOpen={setOpen}
      ></ContactDetailsDialog>
    </div>
  );
};

export default ContactListTable;
