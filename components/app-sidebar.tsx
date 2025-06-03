"use client";

import * as React from "react";
import {
  IconBookmark,
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconLocation,
  IconPhotoHeart,
  IconReport,
  IconSearch,
  IconSettings,
  IconSpaces,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";

import { NavOnline } from "@/components/nav-online";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

const data = {
  user: {
    name: "Xu Edward",
    email: "Software Engineer",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: IconSpaces,
    },
    {
      title: "Journey",
      url: "/journey",
      icon: IconLocation,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: IconChartBar,
    },
    {
      title: "Gallery",
      url: "/gallery",
      icon: IconPhotoHeart,
    },
    {
      title: "Bookmark",
      url: "/bookmark",
      icon: IconBookmark,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <SidebarSeparator className=" my-4" />
        <NavOnline items={data.documents} />
      </SidebarContent>
    </Sidebar>
  );
}
