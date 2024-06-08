import { Cone, Gauge, Home, Newspaper, Settings } from "lucide-react";
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
    href: "/categories",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
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
                <item.icon className="size-4 mr-2" />
              </SideBarItemIcon>
              <SideBarItemLabel>{item.label}</SideBarItemLabel>
            </SideBarItem>
          );
        })}
      </SideBar>
      <main className="p-4 md:ml-64 h-auto bg-muted/50 pt-20 md:px-12">{children}</main>
    </>
  );
}
