// Pexels API için basit bir wrapper
const PEXELS_API_KEY = 'YOUR_PEXELS_API_KEY'; // Gerçek API anahtarınızı buraya ekleyin
const BASE_URL = 'https://api.pexels.com/v1';

export const fetchProductImages = async (query = 'fashion clothing', perPage = 40) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?query=${query}&per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );
    const data = await response.json();
    return data.photos;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

// Örnek ürün verileri
export const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    department: "Men's Fashion",
    price: 24.99,
    colors: ['white', 'black', 'gray', 'navy'],
    category: 'tshirt'
  },
  {
    id: 2,
    name: "Denim Jacket",
    department: "Women's Fashion",
    price: 89.99,
    colors: ['blue', 'black', 'lightBlue'],
    category: 'jacket'
  },
  {
    id: 3,
    name: "Running Shoes",
    department: "Sports",
    price: 129.99,
    colors: ['red', 'black', 'white', 'blue'],
    category: 'shoes'
  },
  {
    id: 4,
    name: "Summer Dress",
    department: "Women's Fashion",
    price: 59.99,
    colors: ['pink', 'yellow', 'blue', 'green'],
    category: 'dress'
  },
  {
    id: 5,
    name: "Leather Backpack",
    department: "Accessories",
    price: 79.99,
    colors: ['brown', 'black', 'tan'],
    category: 'bag'
  },
  {
    id: 6,
    name: "Slim Fit Jeans",
    department: "Men's Fashion",
    price: 69.99,
    colors: ['blue', 'black', 'gray'],
    category: 'jeans'
  },
  {
    id: 7,
    name: "Wool Sweater",
    department: "Winter Collection",
    price: 94.99,
    colors: ['gray', 'navy', 'burgundy', 'green'],
    category: 'sweater'
  },
  {
    id: 8,
    name: "Sport Watch",
    department: "Accessories",
    price: 199.99,
    colors: ['black', 'silver', 'gold'],
    category: 'watch'
  },
  {
    id: 9,
    name: "Yoga Pants",
    department: "Sports",
    price: 49.99,
    colors: ['black', 'gray', 'navy', 'purple'],
    category: 'pants'
  },
  {
    id: 10,
    name: "Sun Glasses",
    department: "Accessories",
    price: 159.99,
    colors: ['black', 'brown', 'gold'],
    category: 'sunglasses'
  },
  {
    id: 11,
    name: "Winter Coat",
    department: "Winter Collection",
    price: 199.99,
    colors: ['black', 'navy', 'olive', 'burgundy'],
    category: 'coat'
  },
  {
    id: 12,
    name: "Canvas Sneakers",
    department: "Footwear",
    price: 44.99,
    colors: ['white', 'black', 'red', 'blue'],
    category: 'sneakers'
  }
];
