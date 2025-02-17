import React from 'react';
import { FaRegClock, FaChartArea, FaRegComments } from 'react-icons/fa';
import { featuredPosts } from '../data/featuredPosts';

const FeaturedPosts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {featuredPosts.map((post) => (
        <div key={post.id} className="bg-white group">
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#E74040] text-white text-sm px-3 py-1 rounded">
                NEW
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Categories */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#737373]">{post.category}</span>
              <span className="text-[#737373]">|</span>
              <span className="text-[#737373]">Fashion</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#252B42] mb-4">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-[#737373] mb-4">
              {post.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#737373]">
                <FaRegClock />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#737373]">
                <FaRegComments />
                <span>{post.comments} comments</span>
              </div>
              <div className="flex items-center gap-2 text-[#737373]">
                <FaChartArea />
                <span>{post.views} views</span>
              </div>
            </div>

            {/* Learn More */}
            <a href="#" className="inline-block mt-6 text-[#737373] hover:text-[#252B42] transition-colors">
              Learn More →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedPosts;
