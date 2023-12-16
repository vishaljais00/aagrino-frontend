// pages/signup.tsx

import React from 'react';

const Signup: React.FC = () => {
  return (
    <>
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form className="space-y-4">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Full Name
            </label>
            <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="John Doe"
            />
            </div>
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
            </label>
            <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="john.doe@example.com"
            />
            </div>
            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
            </label>
            <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="********"
            />
            </div>
            <div>
            <button
                type="submit"
                className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
                Sign Up
            </button>
            </div>
        </form>
    </>
  );
};

export default Signup;
