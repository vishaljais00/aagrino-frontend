import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
        <h3 className="text-xl"> Logo</h3>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="flex flex-1 overflow-hidden">
        <div className="bg-black w-[15vw] text-white text-1.5xl overflow-y-auto">
          <ul className="pt-5 flex flex-col gap-5 px-2">
            <li>Dashboard</li>
            <li>Credits </li>
            <li>Payment</li>
            <li>Profile</li>
          </ul>
        </div>
        <main className="flex-1 overflow-y-auto">{props.children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
