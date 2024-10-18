import React from 'react'

import { BannerHome, BestSellingProduct, DealsOfTheDayHome, FeaturedCategories, PopularProducts, ProductSectionHome, PromotionalSectionHome } from '../components';
const HomePage = () => {

  return (
    <>
      <BannerHome />
      <FeaturedCategories />
      <PopularProducts />
      <BestSellingProduct />
      <DealsOfTheDayHome />
      <ProductSectionHome />
      <PromotionalSectionHome />
    </>
  )
}

export default HomePage