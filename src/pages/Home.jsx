import AllCategories from "../components/AllCategories";
import ProductRow from "../components/ProductRow";

const Home = () => {
  return (
    <div>
      {/* Banner, sliders, or hero image can be added here later */}

      <AllCategories />

      {/* Product Rows */}
      <ProductRow category="air-conditioners" title="Air Conditioners" />
      <ProductRow category="refrigerators" title="Refrigerators" />
      <ProductRow category="air-coolers" title="Air Coolers" />
      {/* Add more rows as needed */}
    </div>
  );
};

export default Home;
