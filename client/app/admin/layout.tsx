import Header from "@/components/admin/layout/header";
import SideBar from "@/components/admin/layout/sidebar";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex h-screen">
      {/* sidebar */}
      <section className="border-r border-gray-300 w-70">
        <SideBar />
      </section>
      {/* header */}
      <section className="w-full h-full relative">
        <nav className="w-full h-14 border-b border-gray-300">
          <Header />
        </nav>
        <section className="h-[calc(h-screen-64px)] absolute top-16 z-1 overflow-y-auto pl-2">
          {children}
        </section>
      </section>
      {/* page */}
    </main>
  );
};

export default Layout;
