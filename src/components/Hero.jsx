import { useLanguage } from "../contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t("heroSubtitle")}
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
            {t("shopNow")}
          </button>
        </div>
      </div>
    </div>
  );
};
