import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
            {props.children}
        </div>
       
    </div>
  );
};

export default AuthLayout;
