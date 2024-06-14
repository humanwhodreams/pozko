import * as React from "react";

import { Button } from "../ui/button";
import Link from "next/link";

interface SideBarItemProps {
  children: React.ReactNode;
  href: string;
}

export function SideBarItem({ children, href }: SideBarItemProps) {
  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      className="w-full justify-start mt-4"
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

interface SideBarItemIconProps {
  children: React.ReactNode;
}

export function SideBarItemIcon({ children }: SideBarItemIconProps) {
  return <>{children}</>;
}

interface SideBarItemLabelProps {
  children: React.ReactNode;
}

export function SideBarItemLabel({ children }: SideBarItemLabelProps) {
  return <>{children}</>;
}
