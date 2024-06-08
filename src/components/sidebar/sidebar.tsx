import * as React from "react";

export default function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="w-64 border-r p-2 fixed top-0 left-0 z-40 h-screen pt-14 transition-transform bg-background md:translate-x-0 -translate-x-full">
      <div className="overflow-y-auto py-5 px-3 h-full bg-background relative">
        {children}
      </div>
    </aside>
  );
}
