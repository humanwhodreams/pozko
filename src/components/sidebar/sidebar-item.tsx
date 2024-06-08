import * as React from "react";

import { Button } from "../ui/button";

interface SideBarItemProps {
  children: React.ReactNode;
}

export function SideBarItem({ children }: SideBarItemProps) {
  return (
    <Button variant={"ghost"} size={"sm"} className="w-full justify-start mt-4">
      {children}
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
