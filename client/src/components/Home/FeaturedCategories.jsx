import { Typography } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredCategoriesDB } from '../../db/FeaturedCategories.db'
const FeaturedCategories = () => {

  const { Title } = Typography;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    speed: 500,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: true
  };
  return (
    <div className="px-4 mb-10 overflow-hidden">
      <div className="mb-11">
        <Title level={2} className="!text-customText">Featured Categories</Title>
      </div>
      <div className="featuredCategories">
        <Slider {...settings}>
          {
            featuredCategoriesDB.length !== 0 && featuredCategoriesDB.map((item, index) => (
              <div
                key={index}
                className="rounded-md cursor-pointer hover:border-[1px] hover:border-green-200 hover:shadow-lg transition-all duration-100"
              >
                <div
                  style={{ backgroundColor: item.color }}
                  className="py-4"
                >
                  <div className="flex justify-center pb-3 ">
                    <img className="w-20 h-20" src={item.img} alt={item.title} />
                  </div>
                  <p className="text-base font-semibold text-customText text-center">{item.title}</p>
                  <p className="text-sm text-custom text-center">{item.items} items</p>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default FeaturedCategories