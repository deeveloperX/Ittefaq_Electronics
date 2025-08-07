import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard"; // If you have it

const Category = () => {
  const { categorySlug, brandSlug } = useParams();

  // Filter products based on category and brand if provided
  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = product.category.toLowerCase().replace(/\s+/g, "-") === categorySlug;
    const isBrandMatch = brandSlug ? product.brand.toLowerCase().replace(/\s+/g, "-") === brandSlug : true;
    return isCategoryMatch && isBrandMatch;
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 capitalize">
        Category: {categorySlug.replace("-", " ")}
      </h1>

      {brandSlug && (
        <h2 className="text-lg text-gray-600 capitalize mb-4">
          Brand: {brandSlug.replace("-", " ")}
        </h2>
      )}

      {/* Show products if available, else display a message */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No products found for this category.</p>
      )}
    </div>
  );
};

export default Category;
