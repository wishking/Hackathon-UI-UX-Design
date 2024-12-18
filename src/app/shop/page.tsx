// pages/index.tsx
import React from 'react';
import Grid from './gridlayout';
import Pagination from './pagination';
import FeaturesSection from './Features';
import ShopHeader from './Shopheader';


const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto">
        <ShopHeader />
        <Grid />
        <Pagination />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Home;