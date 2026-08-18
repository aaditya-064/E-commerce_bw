import CategoryList from "./list";
import SectionHeading from "../section-heading";

const CategoriesList = () => {
  return (
    <section className="px-30 py-10">
      {/* heading section */}
      <SectionHeading
        heading="Featured Categories"
        subHeading="Discover our featured categories"
        link="#"
      />
      {/* list categories */}
      <CategoryList />
    </section>
  );
};

export default CategoriesList;
