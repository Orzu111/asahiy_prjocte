import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import { useLanguage } from "../contexts/LanguageContext";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import { RootState } from "../store/store";

export const CartPage = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const { t } = useLanguage();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success(t("removedFromCart"));
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t("cartTitle")}</h1>
          <div className="bg-white rounded-lg shadow-md p-12">
            <div className="text-gray-500 text-xl">{t("cartEmpty")}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t("cartTitle")}</h1>
        <button
          onClick={handleClearCart}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          {t("clearCart")}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          {items.map((item) => (
            <div key={item._id} className="p-6 flex items-center space-x-4">
              {/* Product Image */}
              <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900 truncate">
                  {item.title}
                </h3>
                <p className="text-lg font-bold text-blue-600">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <MinusIcon className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>

              {/* Item Total */}
              <div className="text-lg font-bold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveItem(item._id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Cart Total */}
        <div className="bg-gray-50 px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">{t("total")}:</span>
            <span className="text-2xl font-bold text-blue-600">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
