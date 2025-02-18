import React from 'react';
import HeroBanner from '../components/HeroBanner';
import BrandLogos from '../components/BrandLogos';
import CategoryBanners from '../components/CategoryBanners';
import FeaturedProducts from '../components/FeaturedProducts';
import WeLoveWhatWeDo from '../components/WeLoveWhatWeDo';
import Services from '../components/Services';
import FeaturedPosts from '../components/FeaturedPosts';
import TopProducts from '../components/TopProducts';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Brand Logos */}
      <section className="py-8">
        <BrandLogos />
      </section>

      {/* Category Banners */}
      <section>
        <CategoryBanners />
      </section>

      {/* Top Products */}
      <section>
        <TopProducts />
      </section>

      {/* Featured Products */}
      <section>
        <FeaturedProducts />
      </section>

      {/* We Love What We Do */}
      <section>
        <WeLoveWhatWeDo />
      </section>

      {/* Services */}
      <section>
        <Services />
      </section>

      {/* Featured Posts */}
      <section>
        <FeaturedPosts />
      </section>
    </div>
  );
};

export default Home;
