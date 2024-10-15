import React from 'react'

import { BannerHome, BestSellingProduct, DealsOfTheDayHome, FeaturedCategories, PopularProducts, ProductSectionHome } from '../components';
const HomePage = () => {

  return (
    <>
      <BannerHome />
      <FeaturedCategories />
      <PopularProducts />
      <BestSellingProduct />
      <DealsOfTheDayHome />
      <ProductSectionHome />

    </>
  )
}

export default HomePage