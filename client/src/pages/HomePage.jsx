import React from 'react'

import { BannerHome, BestSellingProduct, DealsOfTheDayHome, FeaturedCategories, PopularProducts } from '../components';
const HomePage = () => {

  return (
    <>
      <BannerHome />
      <FeaturedCategories />
      <PopularProducts />
      <BestSellingProduct />
      <DealsOfTheDayHome />
    </>
  )
}

export default HomePage