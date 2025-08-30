import { GownIcon, UsersIcon } from "@/icons";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

export function StatCard({ title, value, className, icon, iconClassName }: StatCardProps) {
  return (
    <div className={cn("rounded-2xl p-6 flex items-center gap-x-5 ", className)}>
      <div className={cn("bg-white flex-shrink-0  size-16 flex justify-center items-center rounded-full", iconClassName)}>
        {icon}
      </div>
      <div className="space-y-0.5">
        <h3 className="text-2xl  font-bold">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
