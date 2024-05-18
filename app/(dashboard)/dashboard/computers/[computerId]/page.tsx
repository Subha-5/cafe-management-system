import { ComputerForm } from "@/components/forms/Admin Forms/computer-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getComputer } from "@/server/DashboardList/computers";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

import React from "react";

export default async function Page({
  params,
}: {
  params: { computerId: string };
}) {
  const { computerId } = params;
  const computer = await getComputer(computerId);
  return (
    <ScrollArea className="relative h-screen">
      <div className="flex-1 space-y-4 p-8">
        <ComputerForm
          initialData={computer}
          key={null}
          computerId={computerId}
        />
      </div>
    </ScrollArea>
  );
}
