import { useSelector, useDispatch } from "react-redux";
import { removeLike } from "../store/likesSlice";
import { addToCart } from "../store/cartSlice";
import { useLanguage } from "../contexts/LanguageContext";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";

export const LikePage = () => {
  const likedItems = useSelector((state) => state.likes.items);
  const dispatch = useDispatch();
  const { t } = useLanguage();

  const handleRemoveLike = (id) => {
    dispatch(removeLike(id));
    toast.success(t("unliked"));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(t("addedToCart"));
  };

  if (likedItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("likesTitle")}</h1>
          <div className="bg-white rounded-lg shadow-md p-12">
            <div className="text-gray-500 text-xl">{t("likesEmpty")}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("likesTitle")}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {likedItems.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-100 aspect-square">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-110"
              />
              
              {/* Remove Like Button */}
              <button
                onClick={() => handleRemoveLike(product._id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110"
              >
                <HeartIcon className="w-5 h-5 text-red-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon
                      key={index}
                      className={`w-4 h-4 ${
                        index < Math.floor(product.rating.rate)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  ({product.rating.count})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <ShoppingCartIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{t("addToCart")}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
