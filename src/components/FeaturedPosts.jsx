import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaChartBar, FaComments } from 'react-icons/fa';

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Google',
      title: 'Loudest à la Madison #1 (L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2023',
      comments: 10,
      views: 325
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Trending',
      title: 'Loudest à la Madison #2 (L\'integral)',
      description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
      date: '22 April 2023',
      comments: 10,
      views: 325
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h6 className="text-[#23A6F0] font-bold mb-2">Practice Advice</h6>
        <h2 className="text-4xl font-bold text-[#252B42] mb-4">Featured Posts</h2>
        <p className="text-[#737373]">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#E74040] text-white px-3 py-1 rounded">
                {post.category}
              </span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 text-[#737373] text-sm mb-4">
                <span className="flex items-center gap-2">
                  <FaClock /> {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaComments /> {post.comments} comments
                </span>
                <span className="flex items-center gap-2">
                  <FaChartBar /> {post.views} views
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#252B42] mb-4">
                {post.title}
              </h3>
              
              <p className="text-[#737373] mb-4">
                {post.description}
              </p>

              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-[#737373] hover:text-[#23A6F0] transition-colors"
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
