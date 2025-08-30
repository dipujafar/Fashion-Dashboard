import { RiDashboardHorizontalFill, RiLogoutCircleLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import Link from "next/link";
import {
  Award,
  Coins,
  Flag,
  IdCard,
  ListChecks,
  LogOut,
  MailSearch,
  SquareChartGantt,
  SquareLibrary,
  Star,
  Wallet,
  WalletCards,
} from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "customers",
    icon: <GoPeople size={18} />,
    label: <Link href={"/account-details"}>Account Details</Link>,
  },
  {
    key: "authentication-process",
    icon: <IdCard   size={18} />,
    label: <Link href={"/authentication-process"}>Authentication Process</Link>,
  },
  {
    key: "product-listing",
    icon: <SquareChartGantt    size={18} />,
    label: <Link href={"/product-listing"}>Product Listing</Link>,
  },
  {
    key: "charity-fund-tracking",
    icon: <Coins  size={18} />,
    label: <Link href={"/charity-fund-tracking"}>Charity Fund Tracking</Link>,
  },
  {
    key: "earning",
    icon: <Wallet size={18} />,
    label: <Link href={"/earning"}>Earning</Link>,
  },
  {
    key: "manage_subscription",
    icon: <WalletCards size={18} />,
    label: <Link href={"/manage-subscription"}>Manage Subscription</Link>,
  },
  {
    key: "report-content",
    icon: <Flag  size={18} />,
    label: <Link href={"/report-content"}>Report Content</Link>,
  },
  {
    key: "style-blog-list",
    icon: <SquareLibrary  size={18} />,
    label: <Link href={"/style-blog-list"}>Style Blog List</Link>,
  },
  {
    key: "contact-list",
    icon: <ListChecks   size={18} />,
    label: <Link href={"/contact-list"}>Contact List</Link>,
  },
  {
    key: "promotional-message",
    icon: <MailSearch   size={18} />,
    label: <Link href={"/promotional-message"}>Promotional Message</Link>,
  },
  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
  {
    key: "logout",
    icon: <LogOut size={18} />,
    label: <Link href={"/login"} className="!text-[#5F1011]">Logout</Link>,
  }
  //   {
  //     key: "user-request",
  //     icon: <PiListPlusFill size={20} />,
  //     label: <Link href={"/user-request"}>User Request</Link>,
  //   },
  // {
  //     key: "team-member",
  //     icon: <GoPeople size={18} />,
  //     label: <Link href={"/user"}>Team Member</Link>,
  //   },

  //   {
  //     key: "settings",
  //     icon: <IoSettingsOutline size={18} />,
  //     label: <Link href={"/settings"}>Settings</Link>,
  //   },
];
