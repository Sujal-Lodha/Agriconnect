import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto flex min-h-screen bg-[#f0fff0] flex-col">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
