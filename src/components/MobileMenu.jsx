import { useState } from "react";
import { FaTimes, FaHome, FaThList, FaTags, FaMapMarkerAlt, FaInfoCircle, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import products from "../data/products"; // Import from products.js
import { Link } from "react-router-dom";

// 🔁 Get unique category names from products (dynamic extraction from products.js)
const uniqueCategories = [...new Set(products.map(p => p.category))]; // Get unique categories

// 🔁 Get unique brand names from products (dynamic extraction from products.js)
const uniqueBrands = [...new Set(products.map(p => p.brand))]; // Get unique brands

const MobileMenu = ({ isOpen, onClose }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50">
      <div className="bg-white w-80 h-full p-5 shadow-md overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg text-primary">Ittefaq Electronics</h2>
          <button onClick={onClose}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="text-sm text-gray-800">
          <MenuItem icon={<FaHome />} label="Home" to="/" onClick={onClose} />

          {/* Categories Dropdown */}
          <MenuDropdown
            icon={<FaThList />}
            label="Categories"
            isOpen={showCategories}
            onToggle={() => setShowCategories(!showCategories)}
            items={uniqueCategories.map((cat, idx) => ({
              label: formatCategoryName(cat),  // Format the category name
              to: `/category/${cat.toLowerCase().replace(/\s+/g, '-')}`  // Navigate to category page
            }))}
            onItemClick={onClose}
          />

          {/* Shop By Brands Dropdown */}
          <MenuDropdown
            icon={<FaTags />}
            label="Shop By Brands"
            isOpen={showBrands}
            onToggle={() => setShowBrands(!showBrands)}
            items={uniqueBrands.map((brand, idx) => ({
              label: brand,
              to: `/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`  // Navigate to brand page
            }))}
            onItemClick={onClose}
          />

          <MenuItem icon={<FaMapMarkerAlt />} label="Store Location" to="/store-location" onClick={onClose} />
          <MenuItem icon={<FaInfoCircle />} label="About Us" to="/about" onClick={onClose} />
        </nav>

        <hr className="my-4 border-gray-200" />

        {/* Contact Info */}
        <div className="text-sm space-y-3">
          <a
            href="https://wa.me/923216126870"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:underline"
          >
            <FaWhatsapp className="text-green-500" />
            Whatsapp: +92 321 6126870
          </a>

          <a
            href="tel:+923216126870"
            className="flex items-center gap-2 text-gray-700 hover:underline"
          >
            <FaPhoneAlt className="text-pink-500" />
            Call: +92 321 6126870
          </a>

          <a
            href="mailto:faizanjum79@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:underline"
          >
            <FaEnvelope className="text-blue-500" />
            faizanjum79@gmail.com
          </a>

          <a
            href="https://www.facebook.com/Anjummushta/"
            className="flex items-center gap-2 text-gray-700 hover:underline"
          >
            <FaFacebookF className="text-blue-500" />
            Facebook | Ittefaq Electronics
          </a>

          <a
            href="https://www.instagram.com/ittefaqelectronicssialkot/"
            className="flex items-center gap-2 text-gray-700 hover:underline"
          >
            <FaInstagram className="text-red-500" />
            Instagram | Ittefaq Electronics
          </a>
          
        </div>

      </div>
    </div>
  );
};

export default MobileMenu;

// 🔹 Menu Item
const MenuItem = ({ icon, label, to, onClick }) => (
  <>
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100"
    >
      {icon}
      <span>{label}</span>
    </Link>
    <hr className="border-gray-200" />
  </>
);

// 🔹 Dropdown with toggle
const MenuDropdown = ({ icon, label, isOpen, onToggle, items, onItemClick }) => (
  <>
    <button onClick={onToggle} className="w-full flex justify-between items-center px-2 py-3 hover:bg-gray-100">
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      <span className="text-xl">{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && (
      <div className="ml-6">
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            onClick={onItemClick}
            className="block py-2 text-sm text-gray-600 hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
    <hr className="border-gray-200" />
  </>
);

// 🔹 Contact Info
const ContactItem = ({ icon, text }) => (
  <p className="flex items-center gap-2 text-gray-700">{icon}{text}</p>
);

// Helper function to format category names
const formatCategoryName = (name) => {
  return name
    .replace("-", " ") // Replace hyphens with spaces
    .split(" ") // Split by spaces to capitalize each word
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(" "); // Join back with spaces
};
