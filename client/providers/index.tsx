import React from "react";
import ReactQueryClientProvider from "./query-client.provider";
import WishlistProvider from "./wishlist.provider";
import AuthProvider from "./auth.provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryClientProvider>
      <AuthProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </AuthProvider>
    </ReactQueryClientProvider>
  );
};

export default Providers;
