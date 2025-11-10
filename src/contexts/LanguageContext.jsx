import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  uz: {
    // Navbar
    home: "Bosh sahifa",
    cart: "Savatcha",
    likes: "Yoqtirilganlar",
    language: "Til",
    
    // Hero
    heroTitle: "Eng yaxshi mahsulotlar",
    heroSubtitle: "Sifatli va arzon narxlarda xarid qiling",
    shopNow: "Xarid qilish",
    
    // Products
    addToCart: "Savatga qo'shish",
    price: "Narx",
    rating: "Reyting",
    
    // Cart
    cartTitle: "Savatcha",
    cartEmpty: "Savatcha bo'sh",
    total: "Jami",
    quantity: "Miqdor",
    remove: "O'chirish",
    clearCart: "Savatni tozalash",
    
    // Likes
    likesTitle: "Yoqtirilgan mahsulotlar",
    likesEmpty: "Yoqtirilgan mahsulotlar yo'q",
    
    // Footer
    aboutUs: "Biz haqimizda",
    contact: "Aloqa",
    privacy: "Maxfiylik siyosati",
    terms: "Foydalanish shartlari",
    
    // Toast messages
    addedToCart: "Mahsulot savatga qo'shildi",
    removedFromCart: "Mahsulot savatdan o'chirildi",
    liked: "Mahsulot yoqtirildi",
    unliked: "Mahsulot yoqtirilmadi",
  },
  ru: {
    // Navbar
    home: "Главная",
    cart: "Корзина",
    likes: "Избранное",
    language: "Язык",
    
    // Hero
    heroTitle: "Лучшие товары",
    heroSubtitle: "Покупайте качественные товары по доступным ценам",
    shopNow: "Купить сейчас",
    
    // Products
    addToCart: "В корзину",
    price: "Цена",
    rating: "Рейтинг",
    
    // Cart
    cartTitle: "Корзина",
    cartEmpty: "Корзина пуста",
    total: "Итого",
    quantity: "Количество",
    remove: "Удалить",
    clearCart: "Очистить корзину",
    
    // Likes
    likesTitle: "Избранные товары",
    likesEmpty: "Нет избранных товаров",
    
    // Footer
    aboutUs: "О нас",
    contact: "Контакты",
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    
    // Toast messages
    addedToCart: "Товар добавлен в корзину",
    removedFromCart: "Товар удален из корзины",
    liked: "Товар добавлен в избранное",
    unliked: "Товар удален из избранного",
  },
  en: {
    // Navbar
    home: "Home",
    cart: "Cart",
    likes: "Likes",
    language: "Language",
    
    // Hero
    heroTitle: "Best Products",
    heroSubtitle: "Shop quality products at affordable prices",
    shopNow: "Shop Now",
    
    // Products
    addToCart: "Add to Cart",
    price: "Price",
    rating: "Rating",
    
    // Cart
    cartTitle: "Shopping Cart",
    cartEmpty: "Cart is empty",
    total: "Total",
    quantity: "Quantity",
    remove: "Remove",
    clearCart: "Clear Cart",
    
    // Likes
    likesTitle: "Liked Products",
    likesEmpty: "No liked products",
    
    // Footer
    aboutUs: "About Us",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    
    // Toast messages
    addedToCart: "Product added to cart",
    removedFromCart: "Product removed from cart",
    liked: "Product liked",
    unliked: "Product unliked",
  },
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
