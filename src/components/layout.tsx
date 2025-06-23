import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header stays at the top */}
      <Header />

      {/* Main content grows and scrolls */}
      <main className="flex-grow animate-fadeIn transition-all duration-700">
        <Outlet />
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
