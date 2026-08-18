import React from "react";
import SectionHeading from "../section-heading";
import FeaturedProductList from "./list";

const FeaturedProducts = () => {
  return (
    <section className="px-30 py-10">
      <SectionHeading
        heading="Featured Products"
        subHeading="Discover our featured products"
        link="#"
      />

      {/* list */}
      <FeaturedProductList />
    </section>
  );
};

export default FeaturedProducts;
