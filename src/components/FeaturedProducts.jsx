import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: "https://picsum.photos/200/300?random=1",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      sale: true
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300?random=2",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      sale: true
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300?random=3",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      sale: true
    },
    {
      id: 4,
      image: "https://picsum.photos/200/300?random=4",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      sale: true
    },
    {
      id: 5,
      image: "https://picsum.photos/200/300?random=5",
      title: "Graphic Design",
      category: "English Department",
      price: "$16.48",
      discountedPrice: "$6.48",
      sale: true
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#252B42] text-2xl font-bold mb-4">BESTSELLER PRODUCTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sol taraftaki resim */}
              <div className="relative h-[600px] overflow-hidden rounded-lg">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Sağ taraftaki içerik */}
              <div className="flex flex-col justify-center">
                <h5 className="text-[#23A6F0] text-xl mb-4">Featured Products</h5>
                <h2 className="text-[#252B42] text-4xl font-bold mb-6">{product.title}</h2>
                
                <div className="space-y-4 text-[#737373]">
                  <p>
                    Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: 
                    Newtonian mechanics.
                  </p>
                  <p>
                    Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: 
                    Newtonian mechanics
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FeaturedProducts);
