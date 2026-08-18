import Footer from "@/components/client/layout/footer";
import Nav from "@/components/client/layout/navbar";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
