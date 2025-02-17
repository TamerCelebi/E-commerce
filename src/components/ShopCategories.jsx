const ShopCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Cloths",
      image: "https://source.unsplash.com/300x200/?fashion",
      items: 5,
    },
    {
      id: 2,
      name: "Cloths",
      image: "https://source.unsplash.com/300x200/?clothing",
      items: 5,
    },
    {
      id: 3,
      name: "Cloths",
      image: "https://source.unsplash.com/300x200/?style",
      items: 5,
    },
    {
      id: 4,
      name: "Cloths",
      image: "https://source.unsplash.com/300x200/?apparel",
      items: 5,
    },
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="relative group cursor-pointer">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all">
              {category.name} <br />
              {category.items} Items
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopCategories;
