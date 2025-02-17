import React, { Suspense } from 'react';
import Navbarr from '../components/Navbarr';
import Footer from '../components/Footer';

// Lazy loading components
const HeroBanner = React.lazy(() => import('../components/HeroBanner'));
const Brands = React.lazy(() => import('../components/Brands'));
const CategoryGrid = React.lazy(() => import('../components/CategoryGrid'));
const BestsellerProducts = React.lazy(() => import('../components/BestsellerProducts'));
const WeLoveSection = React.lazy(() => import('../components/WeLoveSection'));
const FeaturedServices = React.lazy(() => import('../components/FeaturedServices'));
const FeaturedPosts = React.lazy(() => import('../components/FeaturedPosts'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#23A6F0]"></div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbarr />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <HeroBanner />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Brands />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <CategoryGrid />
        </Suspense>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-bold text-[#252B42] mb-16">
              BESTSELLER PRODUCTS
            </h2>
            <Suspense fallback={<LoadingSpinner />}>
              <BestsellerProducts />
            </Suspense>
          </div>
        </section>

        <Suspense fallback={<LoadingSpinner />}>
          <WeLoveSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <FeaturedServices />
        </Suspense>

        <section className="py-20 bg-[#FAFAFA]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-[#252B42] mb-4">
                FEATURED POSTS
              </h2>
              <p className="text-[#737373]">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <Suspense fallback={<LoadingSpinner />}>
              <FeaturedPosts />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
