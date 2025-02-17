import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { bestsellerProducts } from '../data/bestsellerProducts';

const BestsellerProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(5);
  const [loadedImages, setLoadedImages] = useState([]);
  const productRefs = useRef([]);
  const observerRef = useRef(null);

  // Görünür ürünleri hesapla
  const visibleProductList = useMemo(() => {
    return bestsellerProducts.slice(0, visibleProducts);
  }, [visibleProducts]);

  // Load More butonunun görünürlüğünü hesapla
  const showLoadMore = useMemo(() => {
    return visibleProducts < bestsellerProducts.length;
  }, [visibleProducts]);

  // Ürün fiyatını formatla
  const formatPrice = useCallback((price) => {
    return `$${Number(price).toFixed(2)}`;
  }, []);

  // Intersection Observer kurulumu
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              setLoadedImages(prev => [...prev, src]);
              observerRef.current.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Yeni görselleri gözlemle
  useEffect(() => {
    const images = document.querySelectorAll('[data-src]');
    images.forEach(img => {
      if (observerRef.current && !loadedImages.includes(img.getAttribute('data-src'))) {
        observerRef.current.observe(img);
      }
    });
  }, [visibleProducts, loadedImages]);

  // Daha fazla ürün yükle
  const loadMore = useCallback(() => {
    setVisibleProducts(prev => prev + 5);
    // Yeni yüklenen ürünlerin olduğu kısma smooth scroll
    const lastVisibleIndex = Math.min(visibleProducts, bestsellerProducts.length - 1);
    productRefs.current[lastVisibleIndex]?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleProducts]);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h5 className="text-[#737373] text-xl mb-2">Featured Products</h5>
          <h2 className="text-[#252B42] text-2xl font-bold mb-2">BESTSELLER PRODUCTS</h2>
          <p className="text-[#737373]">Problems trying to resolve the conflict between</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {visibleProductList.map((product, index) => (
            <div 
              key={product.id} 
              className="group"
              ref={el => productRefs.current[index] = el}
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                <img
                  data-src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                />
              </div>
              <h3 className="text-[#252B42] font-bold mb-2">{product.title}</h3>
              <p className="text-[#737373] mb-2">{product.department}</p>
              <div className="flex gap-2 items-center">
                <span className="text-[#BDBDBD] line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="text-[#23856D] font-bold">
                  {formatPrice(product.salePrice)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {showLoadMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="border-2 border-[#23A6F0] text-[#23A6F0] px-10 py-4 rounded-md hover:bg-[#23A6F0] hover:text-white transition-colors"
            >
              LOAD MORE PRODUCTS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(BestsellerProducts);
