"use client";
import {
  Image,
  Input,
  message,
  Popconfirm,
  PopconfirmProps,
  TableProps,
} from "antd";
// import UserDetails from "./UserDetails";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { CgUnblock } from "react-icons/cg";
import { ArrowDownNarrowWide, Eye, Search } from "lucide-react";
import Link from "next/link";

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



const randomUserRole = ()=>{
  return userFilterOption[Math.floor(Math.random() * userFilterOption.length)];
}

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  userRole: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Muskan Tanaz",
  email: "muskantanaz@gmail.com",
  date: "19 Jun 2025",
  userRole: randomUserRole().value,
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  message.success("Blocked the user");
};

const AccountDetailsTable = () => {

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "serial",
      align: "center",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
    },

    {
      title: "Account Type",
      dataIndex: "userRole",
      align: "center",
      filters: userFilterOption,
      filterIcon: () => <ArrowDownNarrowWide color="#fff" />,
      onFilter: (value, record) => record.userRole.indexOf(value as string) === 0,
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
      render: (text,record) => (
        <div className="flex justify-center gap-2">
          <Link href={`/account-details/1?userRole=${record?.userRole}`}>
            <Eye size={22} color="gray" />{" "}
          </Link>
          <Popconfirm
            title="Block the user"
            description="Are you sure to block this user?"
            onConfirm={confirmBlock}
            okText="Yes"
            cancelText="No"
          >
            <CgUnblock size={22} color="#CD0335" />
          </Popconfirm>
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
          placeholder="Search Users..."
          prefix={<Search size={16} color="#000"></Search>}
        ></Input>
      </div>
      <DataTable columns={columns} data={data} pageSize={11}></DataTable>
    </div>
  );
};

export default AccountDetailsTable;
