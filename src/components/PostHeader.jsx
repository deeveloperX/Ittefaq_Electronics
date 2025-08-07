import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; // Import products.js

// Get unique categories from products.js (dynamic extraction)
const uniqueCategories = [...new Set(products.map(p => p.category))]; // Extract unique categories

// Get unique brand names from products.js (dynamic extraction)
const uniqueBrands = [...new Set(products.map(p => p.brand))]; // Get unique brands

// Function to format category name
const formatCategoryName = (name) => {
  return name
    .replace("-", " ") // Replace hyphens with spaces
    .split(" ") // Split by spaces to capitalize each word
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(" "); // Join back with spaces
};

const PostHeader = () => {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false); // State to toggle Shop By Brand dropdown

  return (
    <div className="bg-secondry text-white hidden md:block shadow sticky top-26 z-50">
      <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between text-sm font-medium">

        {/* Left Section: Menus */}
        <div className="flex items-center relative">

          {/* SHOP BY CATEGORY */}
          <div
            className="relative"
            onMouseEnter={() => setIsCatOpen(true)}
            onMouseLeave={() => setIsCatOpen(false)}
          >
            <span className="hover:text-hovertext cursor-pointer bg-primary py-4 pl-5 pr-15">☰ SHOP BY CATEGORY</span>

            {isCatOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white text-black rounded shadow z-30 w-64">
                {uniqueCategories.map((cat) => (
                  <div key={cat} className="relative group">
                    {/* Parent Category Link */}
                    <Link
                      to={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {formatCategoryName(cat)}
                    </Link>

                    {/* Nested Brands */}
                    <div className="absolute top-0 left-full bg-white text-black rounded shadow w-64 hidden group-hover:block z-40">
                      {/* Get unique brands for this category */}
                      {[...new Set(products.filter((product) => product.category === cat).map((product) => product.brand))].map((brand, idx) => (
                        <Link
                          key={idx}
                          to={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SHOP BY BRAND */}
          <div
            className="relative"
            onMouseEnter={() => setIsBrandsOpen(true)}
            onMouseLeave={() => setIsBrandsOpen(false)}
          >
            <span className="hover:text-hovertext cursor-pointer py-4 pl-5 pr-8">☰ Shop By Brand</span>

            {isBrandsOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white text-black rounded shadow z-30 w-64">
                {uniqueBrands.map((brand, idx) => (
                  <Link
                    key={idx}
                    to={`/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {brand}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* STATIC LINKS */}
          <Link to="/store-location" className="hover:text-hovertext px-5">
            Store Location
          </Link>
          <Link to="/about" className="hover:text-hovertext px-5">
            About Us
          </Link>
        </div>

        {/* Right: Contact Info */}
        <div className="flex items-center gap-6 text-sm text-white">
          <p>📞 <a href="tel:+923216126870" className="text-light text-decoration-none">+92 321 6126870</a></p>
          <p>✉️ <a href="mailto:faizanjum79@gmail.com" className="text-light text-decoration-none">faizanjum79@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
