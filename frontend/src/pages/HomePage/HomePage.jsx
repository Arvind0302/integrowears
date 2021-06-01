import React from 'react';
import Brand from '../../components/Brand/Brand';
import ExclusiveProduct from '../../components/ExclusiveProduct/ExclusiveProduct';
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import Header from '../../components/Header/Header';
import LatestProduct from '../../components/LatestProduct/LatestProduct';
import Sidebar from '../../components/Sidebar/Sidebar';
import Testimonial from '../../components/Testimonial/Testimonial';
import Navbar from '../../components/Navbar/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Header />
      <FeaturedCategories />
      <FeaturedProduct />
      <LatestProduct />
      <ExclusiveProduct />
      <Testimonial />
      <Brand />
    </>
  );
}

export default HomePage;
