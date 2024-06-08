import * as React from "react";

export default function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen p-2 transition-transform -translate-x-full border-r pt-14 bg-background md:translate-x-0">
      <div className="relative h-full px-3 py-5 overflow-y-auto bg-background">
        {children}
      </div>
    </aside>
  );
}
