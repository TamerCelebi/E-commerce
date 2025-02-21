import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Gravatar from 'react-gravatar';
import { loginUser } from '../store/actions/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(loginUser({ 
        ...data,
        avatarUrl: `https://www.gravatar.com/avatar/${encodeURIComponent(data.email)}?d=identicon`
      }));

      if (result.success) {
        if (data.remember) {
          localStorage.setItem('token', result.token);
        }
        const redirectTo = location.state?.from || '/';
        history.push(redirectTo);
        toast.success('Successfully logged in!');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to login. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-[#252B42] text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[#252B42] font-medium mb-2">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                id="email"
                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-[#E6E6E6]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-[#252B42] font-medium mb-2">
                Password
              </label>
              <input
                {...register('password', {
                  required: 'Password is required'
                })}
                type="password"
                id="password"
                className={`w-full px-4 py-3 border ${errors.password ? 'border-red-500' : 'border-[#E6E6E6]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  {...register('remember')}
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-[#23A6F0] focus:ring-[#23A6F0] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-[#737373]">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-[#23A6F0] hover:text-[#1A8CD8] transition-colors">
                Forgot Password?
              </Link>
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
