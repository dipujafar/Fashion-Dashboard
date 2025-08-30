"use client";
import { Image, message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { CgUnblock } from "react-icons/cg";
import { ArrowDownNarrowWide, Eye } from "lucide-react";
import UserDetails from "@/components/(adminDashboard)/user/UserDetails";
import { text } from "stream/consumers";
import Link from "next/link";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  location: string;
  date: string;
  type: string;
};

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

const data: TDataType[] = Array.from({ length: 6 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Muskan Tanaz",
  email: "muskantanaz@gmail.com",
  location: "Dhanmondi",
  date: "19 Jun 2025",
  type: "User",
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  message.success("Blocked the user");
};
const RecentlyUser = () => {
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
      onFilter: (value, record) => record.type.indexOf(value as string) === 0,
      filterIcon: () => <ArrowDownNarrowWide color="#fff" />,
    },

    {
      title: " Date",
      dataIndex: "date",
      align: "center",
    },

    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      render: () => (
        <div className="flex justify-center gap-2">
          <Link href={"/account-details/2"}>
          <Eye
            size={22}
            color="#000"
            className="cursor-pointer"
          />
          </Link>
          <Popconfirm
            title="Block the user"
            description="Are you sure to block this user?"
            onConfirm={confirmBlock}
            okText="Yes"
            cancelText="No"
          >
            <CgUnblock size={22} color="#CD0335" className="cursor-pointer" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#F9F9FA] rounded-2xl">
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
};

export default RecentlyUser;
