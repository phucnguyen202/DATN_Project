import { useEffect, useState } from 'react';
import {
  BannerHome, BestSellingProduct, DealsOfTheDayHome, FeaturedCategories,
  PopularProducts, ProductSectionHome, PromotionalSectionHome
} from '../components';
import { ConfigProvider, Spin } from 'antd';
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