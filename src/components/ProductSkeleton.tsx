export const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-square bg-gray-200"></div>
      
      {/* Content Skeleton */}
      <div className="p-4">
        {/* Title Skeleton */}
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        
        {/* Rating Skeleton */}
        <div className="flex items-center mb-2">
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-4 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-3 bg-gray-200 rounded w-12 ml-2"></div>
        </div>
        
        {/* Price Skeleton */}
        <div className="h-6 bg-gray-200 rounded w-20 mb-4"></div>
        
        {/* Button Skeleton */}
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};
