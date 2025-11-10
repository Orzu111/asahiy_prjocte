import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { Footer } from "./components/Footer";
import { CartPage } from "./components/CartPage";
import { LikePage } from "./components/LikePage";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "sonner";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const seedProducts = useMutation(api.products.seedProducts);

  useEffect(() => {
    // Seed products on app start
    seedProducts();
  }, [seedProducts]);

  const renderPage = () => {
    switch (currentPage) {
      case "cart":
        return <CartPage />;
      case "likes":
        return <LikePage />;
      default:
        return (
          <>
            <Hero />
            <ProductGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Provider>
  );
}
