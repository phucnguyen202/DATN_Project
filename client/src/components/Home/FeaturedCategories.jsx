import { Button, Typography } from "antd";
import { useRef } from "react";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { featuredCategoriesDB } from '../../db/FeaturedCategories.db';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
const FeaturedCategories = () => {
  const sliderRef = useRef(null);
  const { Title } = Typography;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1366, // Màn hình có độ rộng nhỏ hơn 1366px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Màn hình có độ rộng nhỏ hơn 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Màn hình có độ rộng nhỏ hơn 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ]
  };
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="px-4 mb-6 overflow-hidden">
      <div className=" flex justify-between items-center">
        <Title level={2}
          style={{ margin: '0px' }}
          className="!text-customText">Danh Mục Nổi Bật</Title>
        <div className="flex gap-4 items-center max-md:hidden">
          <Button className="rounded-full" onClick={handlePrev}>
            <MdChevronLeft className="" size={20} />
          </Button>
          <Button className="rounded-full" onClick={handleNext}>
            <MdChevronRight size={20} />
          </Button>
        </div>
      </div>
      <div className="featuredCategories py-10">
        <Slider ref={sliderRef} {...settings}>
          {
            featuredCategoriesDB.length !== 0 && featuredCategoriesDB.map((item, index) => (
              <div
                key={index}
              >
                <div
                  style={{ backgroundColor: item.color }}
                  className="py-4 cursor-pointer rounded-lg hover:border-[1px] hover:border-green-200 hover:shadow-lg transition-all duration-100"
                >
                  <div className="flex justify-center pb-3 ">
                    <img className="w-20 h-20 transform transition-transform duration-200 ease-in-out hover:scale-110"
                      src={item.img}
                      alt={item.title} />
                  </div>
                  <p className="text-base font-semibold text-customText text-center">{item.title}</p>
                  <p className="text-sm text-custom text-center">{item.items} items</p>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>

      <div className="">
        <div className="grid max-md:grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className=" xl:h-[300px] max-md:h-[215px] lg:h-[174px] rounded-lg banner-featuredCategory"
              style={{
                backgroundImage: "url(https://www.niraagayurveda.com/assets/imgs/banner/banner-1.png)"
              }}>
              <div className="xl:pt-16 max-md:pt-10 pt-6 xl:pl-12 pl-10">
                <p
                  style={{ margin: '0px' }}
                  className="!text-customText text-lg xl:text-2xl font-semibold h-[84px] xl:h-[95px]">
                  Everyday Fresh &amp; <br />
                  Clean with Our<br />
                  Products
                </p>
                <Button
                  className="text-slate-50 bg-customBg hover:bg-customBg lg:text-xs xl:mt-6 mt-2"
                  icon={<GrFormNextLink size={20} />}>Shop Now</Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}>
            <div className=" xl:h-[300px] max-md:h-[215px] lg:h-[174px] rounded-lg banner-featuredCategory"
              style={{
                backgroundImage: "url(https://www.niraagayurveda.com/assets/imgs/banner/banner-2.png)"
              }}>
              <div className="xl:pt-16 max-md:pt-10 pt-6 xl:pl-12 pl-10">
                <p
                  style={{ margin: '0px' }}
                  className="!text-customText text-lg xl:text-2xl font-semibold h-[84px] xl:h-[95px]">
                  Make your Breakfast <br />
                  Healthy and Easy <br />
                </p>
                <Button
                  className="text-slate-50 bg-customBg hover:bg-customBg lg:text-xs xl:mt-6 mt-2"
                  icon={<GrFormNextLink size={20} />}>Shop Now</Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className=" xl:h-[300px] max-md:h-[215px] lg:h-[174px] rounded-lg banner-featuredCategory"
              style={{
                backgroundImage: "url(https://www.niraagayurveda.com/assets/imgs/banner/banner-3.png)"
              }}>
              <div className="xl:pt-16 max-md:pt-10 pt-6 xl:pl-12 pl-10">
                <p
                  style={{ margin: '0px' }}
                  className="!text-customText text-lg xl:text-2xl font-semibold h-[84px] xl:h-[95px]">
                  The best Organic  <br />
                  Products Online<br />
                </p>
                <Button
                  className="text-slate-50 bg-customBg hover:bg-customBg lg:text-xs xl:mt-6 mt-2"
                  icon={<GrFormNextLink size={20} />}>Shop Now</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCategories