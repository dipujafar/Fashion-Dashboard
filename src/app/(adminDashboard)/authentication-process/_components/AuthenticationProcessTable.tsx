"use client";
import {
  Input,
  message,
  Popconfirm,
  PopconfirmProps,
  TableProps,
} from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { CgUnblock } from "react-icons/cg";
import { ArrowDownNarrowWide, Eye, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import UserDetailsModal from "./UserDetailsModal";

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
  name: string;
  email: string;
  date: string;
  userRole: string;
  status: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Muskan Tanaz",
  email: "muskantanaz@gmail.com",
  date: "19 Jun 2025",
  userRole: userFilterOption[randomUserRole(userFilterOption?.length)]?.value,
  status:
    statusPendingFilterOption[randomUserRole(statusPendingFilterOption?.length)]
      ?.value,
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  message.success("Blocked the user");
};

const AuthenticationProcessTable = () => {
  const [open, setOpen] = useState(false);
  const [userRole, setUserRole] = useState("");

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
      onFilter: (value, record) =>
        record.userRole.indexOf(value as string) === 0,
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (text) => <p className={cn(statusColor(text))}>{text}</p>,
      filters: statusPendingFilterOption,
      filterIcon: () => <ArrowDownNarrowWide color="#fff" />,
      onFilter: (value, record) =>
        record.status.indexOf(value as string) === 0,
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
      render: (text, record) => (
        <div className="flex justify-center gap-2">
          <Eye size={22} color="gray" onClick={() => {setOpen(!open); setUserRole(record?.userRole)} } />{" "}
          <Popconfirm
            title="Authentication Process"
            description="what do you want?"
            onConfirm={confirmBlock}
            okText="Approve"
            cancelText="Reject"
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
      <UserDetailsModal open={open} setOpen={setOpen} userRole={userRole}></UserDetailsModal>
    </div>
  );
};

export default AuthenticationProcessTable;
