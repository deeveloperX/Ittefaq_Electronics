import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; // Import products.js
import { FaPhoneAlt, FaEnvelope,FaFacebookF,FaInstagram } from "react-icons/fa";


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
      <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between text-sm">

        {/* Left Section: Menus */}
        <div className="flex items-center relative">

          {/* SHOP BY CATEGORY */}
          <div
            className="relative"
            onMouseEnter={() => setIsCatOpen(true)}
            onMouseLeave={() => setIsCatOpen(false)}
          >
            <span className="hover:text-hovertext cursor-pointer bg-primary py-4 pl-5 pr-10 font-medium">☰ CATEGORIES</span>

            {isCatOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white text-black rounded shadow z-30 w-50">
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
                    <div className="absolute top-0 left-full bg-white text-black rounded shadow w-50 hidden group-hover:block z-40">
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
            <span className="hover:text-hovertext cursor-pointer py-4 md:px-3 lg:px-4">☰ Shop By Brand</span>

            {isBrandsOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white text-black rounded shadow z-30 w-50">
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
          <Link to="/store-location" className="hover:text-hovertext md:px-3 lg:px-4">
            Store Location
          </Link>
          <Link to="/about" className="hover:text-hovertext md:px-3 lg:px-4">
            About Us
          </Link>
        </div>

        {/* Right: Contact Info */}
        <div className="flex items-center gap-6 text-white text-sm">
          <a
            href="tel:+923216126870"
            className="flex items-center gap-2 text-white hover:text-green-400"
          >
            <FaPhoneAlt />
            <span className="hidden lg:block">Call: +92 321 6126870</span>
          </a>

          <a
            href="mailto:faizanjum79@gmail.com"
            className="flex items-center gap-2 text-white hover:text-green-400"
          >
            <FaEnvelope />
            <span className="hidden lg:block">faizanjum79@gmail.com</span>
          </a>

          <a
            href="https://www.facebook.com/Anjummushta/"
          >
            <FaFacebookF className="text-blue-500 lg:text-xl hover:text-blue-300" />
          </a>
          
          <a
            href="https://www.instagram.com/ittefaqelectronicssialkot/"
          >
            <FaInstagram className="text-red-500 lg:text-xl hover:text-red-300" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
