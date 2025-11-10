import { useState } from "react";
import { useSelector } from "react-redux";
import { useLanguage } from "../contexts/LanguageContext";
import { ShoppingCartIcon, HeartIcon, HomeIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { RootState } from "../store/store";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const likedItems = useSelector((state: RootState) => state.likes.items);

  const languages = [
    { code: "uz", name: "O'zbek", flag: "🇺🇿" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">Asaxiy</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => setCurrentPage("home")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === "home"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                <HomeIcon className="w-5 h-5 inline mr-1" />
                {t("home")}
              </button>
              <button
                onClick={() => setCurrentPage("cart")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  currentPage === "cart"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                <ShoppingCartIcon className="w-5 h-5 inline mr-1" />
                {t("cart")}
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
              <button
                onClick={() => setCurrentPage("likes")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  currentPage === "likes"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                <HeartIcon className="w-5 h-5 inline mr-1" />
                {t("likes")}
                {likedItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {likedItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <span className="mr-2">{currentLang?.flag}</span>
              <span className="hidden sm:inline">{currentLang?.name}</span>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      currentLanguage === lang.code ? "bg-blue-50 text-blue-700" : "text-gray-700"
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-t">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button
            onClick={() => setCurrentPage("home")}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
              currentPage === "home"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            }`}
          >
            <HomeIcon className="w-5 h-5 inline mr-2" />
            {t("home")}
          </button>
          <button
            onClick={() => setCurrentPage("cart")}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors relative ${
              currentPage === "cart"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            }`}
          >
            <ShoppingCartIcon className="w-5 h-5 inline mr-2" />
            {t("cart")}
            {cartItems.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
          <button
            onClick={() => setCurrentPage("likes")}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors relative ${
              currentPage === "likes"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            }`}
          >
            <HeartIcon className="w-5 h-5 inline mr-2" />
            {t("likes")}
            {likedItems.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {likedItems.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
