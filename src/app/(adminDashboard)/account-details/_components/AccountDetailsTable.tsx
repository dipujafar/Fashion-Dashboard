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
import UserDetails from "@/components/(adminDashboard)/user/UserDetails";

const userFilterOption = [
  {
    text: "Individual Seller",
    value: "individual_seller",
  },
  {
    text: "Charitable Organization",
    value: "charitable_organization",
  },
  {
    text: "Charity Shop",
    value: "charity_shop",
  },
  {
    text: "Celebrity",
    value: "celebrity",
  },
  {
    text: "Ambassador",
    value: "ambassador",
  },
  {
    text: "Professional Seller",
    value: "professional_seller",
  },
  {
    text: "Assisted Seller",
    value: "assisted_seller",
  },
];

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  type: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Muskan Tanaz",
  email: "muskantanaz@gmail.com",
  date: "19 Jun 2025",
  type: "User",
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Blocked the user");
};

const AccountDetailsTable = () => {
  const [open, setOpen] = useState(false);

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
      render: (text, record) => (
        <div className="flex items-center justify-center gap-x-1">
          <Image
            src={"/user_image1.png"}
            alt="profile-picture"
            width={40}
            height={40}
            className="size-10"
          ></Image>
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
    },

    {
      title: "Account Type",
      dataIndex: "type",
      align: "center",
      filters: userFilterOption,
      filterIcon: () => <ArrowDownNarrowWide color="#fff" />,
      onFilter: (value, record) => record.type.indexOf(value as string) === 0,
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
        <div className="flex justify-center gap-2">
          <Eye size={22} color="#000" onClick={() => setOpen(!open)} />
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
      <UserDetails open={open} setOpen={setOpen}></UserDetails>
    </div>
  );
};

export default AccountDetailsTable;
