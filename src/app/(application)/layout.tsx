import { Cone, Gauge, Home, MessageCircleMore, Newspaper, Settings, User } from "lucide-react";
import {
  SideBarItem,
  SideBarItemIcon,
  SideBarItemLabel,
} from "@/components/sidebar/sidebar-item";

import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar/sidebar";
import SideBarToggle from "@/components/sidebar/sidebar-toggle";

const sidenavitems = [
  {
    icon: Gauge,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Newspaper,
    label: "Posts",
    href: "/posts",
  },
  {
    icon: Cone,
    label: "Categories",
    href: "#",
  },
  {
    icon: User,
    label: "Users",
    href: "#",
  },
  {
    icon: MessageCircleMore,
    label: "Comments",
    href: "#",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "#",
  },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <SideBar>
        <SideBarToggle />
        {sidenavitems.map((item, index) => {
          return (
            <SideBarItem key={index}>
              <SideBarItemIcon>
                <item.icon className="mr-2 size-4" />
              </SideBarItemIcon>
              <SideBarItemLabel>{item.label}</SideBarItemLabel>
            </SideBarItem>
          );
        })}
      </SideBar>
      <main className="h-auto p-4 pt-20 md:ml-64 bg-muted/20 md:px-12">{children}</main>
    </>
  );
}
