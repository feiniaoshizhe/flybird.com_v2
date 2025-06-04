"use client";

import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PageContainer({
  children,
  scrollable = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className="h-[calc(100dvh-52px)]">
          <div className="flex flex-1 z-1 w-full px-6 pt-8 pb-8 lg:px-8 lg:pt-24 lg:pb-16">
            {children}
          </div>
        </ScrollArea>
      ) : (
        <div className="flex flex-1 z-1 w-full px-6 pt-8 pb-8 lg:px-8 lg:pt-24 lg:pb-16">
          {children}
        </div>
      )}
    </>
  );
}
