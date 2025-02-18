import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-[#252B42] text-3xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[#252B42] font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-[#E6E6E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-[#252B42] font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-[#E6E6E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-[#23A6F0] focus:ring-[#23A6F0] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-[#737373]">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-[#23A6F0] hover:text-[#1A8CD8] transition-colors">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#23A6F0] text-white py-3 rounded-md hover:bg-[#1A8CD8] transition-colors"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-[#737373]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#23A6F0] hover:text-[#1A8CD8] transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
