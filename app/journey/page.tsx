"use client";

import * as React from "react";

import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { Suspense } from "react";
import ScreenLoadingSpinner from "@/components/screen-loading-spinner";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JourneyCard } from "@/components/journey-card";
// import { JourneyCard } from "@/components/journey-card";

type Journey = {
  date: string;
  title: string;
  content: string;
};

type TimelineEntry = {
  year: number;
  logs: Journey[];
};

const timelineData: TimelineEntry[] = [
  {
    year: 2025,
    logs: [
      {
        date: "至今",
        title: "至今",
        content: "",
      },
    ],
  },
  {
    year: 2023,
    logs: [
      {
        date: "2023-09",
        title: "加入 达观数据",
        content: "string",
      },
    ],
  },
  {
    year: 2021,
    logs: [
      {
        date: "2021-11",
        title: "加入 上海光潾网络科技有限公司",
        content: "",
      },
    ],
  },
  {
    year: 2019,
    logs: [
      {
        date: "2019-07",
        title: "加入 上海联众网络科技有限公司",
        content: "string",
      },
      {
        date: "2019-07",
        title: "毕业",
        content: "string",
      },
    ],
  },
  {
    year: 2015,
    logs: [
      {
        date: "2015-07",
        title: "就读 上海应用技术大学",
        content: "string",
      },
    ],
  },
  {
    year: 1997,
    logs: [
      {
        date: "string",
        title: "string",
        content: "string",
      },
    ],
  },
];

export default function Page() {
  return (
    <PageContainer>
      <div className=" mx-auto w-full lg:mb-0 lg:max-w-3xl">
        <Heading title="Journey" description="" />
        <Suspense fallback={<ScreenLoadingSpinner />}>
          <div className="flex flex-col items-stretch gap-12">
            {timelineData.map((item, itemIndex) => (
              <div
                key={`data_${itemIndex}`}
                className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
              >
                <h2 className=" font-bold">{item.year}</h2>
                <section>
                  {item.logs.map((log, logIndex) => (
                    <div
                      key={`data_${itemIndex}_log_${logIndex}`}
                      className="relative flex pb-8 last:pb-0"
                    >
                      {logIndex !== item.logs.length - 1 && (
                        <Separator
                          orientation="vertical"
                          className="absolute top-4 left-2 bg-muted"
                        />
                      )}
                      <div className="z-0 grid size-5 shrink-0 place-items-center rounded-full border bg-white text-white shadow-xs">
                        <div className="size-2 rounded-full bg-blue-600" />
                      </div>

                      <div className="grow pl-4 lg:pl-8">
                        <JourneyCard {...log} index={logIndex} />
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </PageContainer>
  );
}
