"use client"
import { Button } from "@/components/ui/button";
import { PackageCard } from "./PackageCard";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { AddAndEditSubscriptionDialog } from "./AddAndEditSubscriptionDialog";

const packagesData = [
  {
    _id: "1",
    title: "Free Trial",
    subTitle: "3 months free trial at sign-up.",
    description: "Ideal for new eco-friendly sellers exploring the platform.",
    price: "free",
    duration: "3 months",
  },
  {
    _id: "2",
    title: "Pro Plan",
    subTitle: "Unlimited Eco-friendly features all monthly.",
    description:
      "Unlimited product listings & Featured placement for increased visibility.",
    price: "$50.00",
    duration: "monthly",
  },
];

export default function ManageSubscriptionContainer() {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)} className="w-full"> <PlusCircle size={24} className="mr-2" /> Add New Subscription Plan</Button>
      <div className="max-w-5xl mx-auto mt-20">
        <PackageCard packages={packagesData} openEditModal={setOpen} />
      </div>
      <AddAndEditSubscriptionDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
