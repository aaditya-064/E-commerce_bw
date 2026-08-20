import React from "react";
import ReactQueryClientProvider from "./query-client.provider";
import WishlistProvider from "./wishlist.provider";
import AuthProvider from "./auth.provider";
import BrandProvider from "./brand.provider";
import CategoryProvider from "./category.provider";
import ProductProvider from "./product.provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryClientProvider>
      <AuthProvider>
        <CategoryProvider>
          <BrandProvider>
            <ProductProvider>
              <WishlistProvider>{children}</WishlistProvider>
            </ProductProvider>
          </BrandProvider>
        </CategoryProvider>
      </AuthProvider>
    </ReactQueryClientProvider>
  );
};

export default Providers;
