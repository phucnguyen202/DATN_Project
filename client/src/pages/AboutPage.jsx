import { Breadcrumb, Card, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLogoFacebook, BiLogoInstagram, BiLogoPinterest, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
import PromotionalSectionHome from '../components/Home/PromotionalSectionHome';



const data = [
  'https://www.niraagayurveda.com/assets/imgs/page/about-2.png',
  'https://www.niraagayurveda.com/assets/imgs/page/about-3.png',
  'https://www.niraagayurveda.com/assets/imgs/page/about-4.png',
]
const tagdata = [
  {
    id: 1,
    img: 'https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-1.svg',
    title: 'Giá & Ưu đãi tốt nhất',
    des: 'Chúng tôi mang đến nông sản sạch với giá cả cạnh tranh và ưu đãi hấp dẫn. Đảm bảo chất lượng, giúp bạn tiết kiệm và an tâm trong từng bữa ăn!'
  },
  {
    id: 2,
    img: 'https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-2.svg',
    title: 'Đa dạng sản phẩm',
    des: 'Chúng tôi cung cấp đa dạng các loại nông sản sạch, đáp ứng mọi nhu cầu của khách hàng. Lựa chọn phong phú, phù hợp cho từng bữa ăn và sở thích của gia đình bạn.'
  },
  {
    id: 3,
    img: 'https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-3.svg',
    title: 'Giao hàng miễn phí',
    des: 'Chúng tôi hỗ trợ giao hàng miễn phí đến tận nơi, giúp bạn tiết kiệm chi phí và thời gian. Mua sắm nông sản sạch chưa bao giờ tiện lợi hơn thế!'
  },
  {
    id: 4,
    img: 'https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-4.svg',
    title: 'Chính sách hoàn hàng',
    des: 'Chính sách trả hàng linh hoạt, giúp bạn yên tâm mua sắm. Mọi vấn đề đều được giải quyết nhanh chóng và thuận tiện.'
  },
  {
    id: 5,
    img: 'https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-5.svg',
    title: 'Hài lòng 100%',
    des: 'Chúng tôi cam kết mang đến sự hài lòng 100% cho khách hàng. Mỗi sản phẩm đều được kiểm tra kỹ lưỡng để đảm bảo chất lượng tuyệt vời nhất.'
  }, {
    id: 6,
    img: 'https://www.niraagayurveda.com/assets/imgs/theme/icons/icon-6.svg',
    title: 'Ưu đãi hàng ngày',
    des: 'Chúng tôi cung cấp các ưu đãi hấp dẫn hàng ngày, giúp bạn tiết kiệm chi phí mỗi khi mua sắm nông sản sạch. Đừng bỏ lỡ cơ hội nhận những ưu đãi tuyệt vời này!'
  },
]

const AboutPage = () => {
  const settings = {

    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <div className='border-b-[1px]'>
          <div className='px-4 py-5'>
            <Breadcrumb
              items={[
                {
                  title: <p className='font-medium'>Trang chủ</p>,
                },
                {
                  title: <Link className='font-medium text-greenCustom' to={'/about'}>Giới thiệu</Link>,
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div className='px-4 xl:px-32 py-14'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='col-span-1 flex justify-center'>
                <div className='w-[600px] h-[700px] '>
                  <img className='w-full h-full  rounded-2xl' src="https://www.niraagayurveda.com/assets/imgs/page/about-1.png" alt="" />
                </div>
              </div>
              <div className='col-span-1'>
                <div className='mt-8'>
                  <p className="text-4xl text-customText font-bold pb-3">Welcome to Nest Food</p>
                </div>
                <div className='mt-4'>
                  <p className='text-custom font-medium'>Tại Nest Food, chúng tôi luôn đặt khách hàng lên hàng đầu, nỗ lực không ngừng để mang đến những sản phẩm nông sản sạch và chất lượng nhất. Chúng tôi hiểu rằng sự hài lòng của khách hàng là thành quả lớn nhất, nhưng để đạt được điều đó, cần rất nhiều tâm huyết và sự cống hiến. Mọi việc chúng tôi làm đều xuất phát từ mong muốn mang lại giá trị thực sự, để mỗi sản phẩm không chỉ là thực phẩm sạch mà còn là niềm tin và sự an tâm khi đến tay khách hàng.</p>
                </div>
                <div className='mt-8'>
                  <p className='text-custom font-medium'>Chúng tôi tin rằng nông sản sạch không chỉ là thực phẩm, mà còn là cách kết nối con người với thiên nhiên và với nhau. Từ khâu chọn lọc hạt giống đến khi thu hoạch và giao tận tay khách hàng, mọi quy trình đều được thực hiện với sự tận tâm và trách nhiệm. Mục tiêu của chúng tôi không chỉ là cung cấp sản phẩm chất lượng, mà còn lan tỏa lối sống xanh, lành mạnh đến từng bữa ăn và từng gia đình.</p>
                </div>
                <div className='mt-8'>
                  <Slider {...settings}>
                    {
                      data.map((item, index) => (
                        <div key={index} >
                          <img className='w-full h-full  rounded-2xl' src={item} alt="" />
                        </div>
                      ))
                    }
                  </Slider>
                </div>
              </div>
            </div>
            <div>
              <div className='mt-14 flex justify-center'>
                <div className='flex justify-center flex-col'>
                  <p className="text-4xl text-customText font-bold pb-3">Chúng tôi cung cấp?</p>
                  <div className='flex justify-center'>
                    <img src="https://www.niraagayurveda.com/assets/imgs/theme/wave.png" alt="" />
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-3 gap-6 mt-10'>
                {
                  tagdata.map((item, index) => (
                    <div key={index} className='border-[1px] rounded-2xl px-7 py-12 hover:shadow-lg hover:-translate-y-2 transition-transform transform duration-300 ease-in-out '>
                      <div className='flex justify-center mb-6'>
                        <img className='w-[100px]' src={item.img} alt="" />
                      </div>
                      <div className='flex justify-center flex-col'>
                        <p className='text-2xl text-center font-semibold text-customText mb-6'>{item.title}</p>
                        <p className='text-base text-center text-custom font-medium'>{item.des}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='mt-14 '>
              <div className='grid grid-cols-3 gap-8'>
                <div className='col-span-1'>
                  <h3 className='text-2xl font-bold text-customText mb-6'>Chúng tôi là ai</h3>
                  <p className='text-base text-custom font-medium'>Chúng tôi là Nest Food, chuyên cung cấp nông sản sạch, tươi ngon, an toàn cho sức khỏe. Cam kết mang đến sản phẩm chất lượng và dịch vụ tốt nhất cho mọi gia đình.</p>
                </div>
                <div className='col-span-1'>
                  <h3 className='text-2xl font-bold text-customText mb-6'>Lịch sử của chung tôi</h3>
                  <p className='text-base text-custom font-medium'>Lịch sử của chúng tôi bắt đầu từ niềm đam mê mang đến nông sản sạch, an toàn cho mọi gia đình. Chúng tôi luôn cam kết chất lượng và sự phát triển bền vững.</p>
                </div>
                <div className='col-span-1'>
                  <h3 className='text-2xl font-bold text-customText mb-6'>Sứ mệnh của chung tôi</h3>
                  <p className='text-base text-custom font-medium'>Sứ mệnh của chúng tôi là cung cấp nông sản sạch, an toàn cho sức khỏe cộng đồng. Chúng tôi cam kết mang đến sản phẩm chất lượng và dịch vụ tận tâm.</p>
                </div>
              </div>
            </div>
            <div className="mt-14 relative">
              <img className="w-full rounded-xl shadow-md" src="https://www.niraagayurveda.com/assets/imgs/page/about-9.png" alt="" />
              <div className="absolute top-0 left-0 w-full h-full bg-customBg opacity-30 rounded-xl"></div>
            </div>
            <div className='mt-14 mb-24 '>
              <div className='flex justify-center'>
                <div className='flex justify-center flex-col'>
                  <p className="text-4xl text-customText font-bold pb-3">Đội ngũ lãnh đạo</p>
                  <div className='flex justify-center'>
                    <img src="https://www.niraagayurveda.com/assets/imgs/theme/wave.png" alt="" />
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-3 gap-8 mt-10'>
                <div className='col-span-1'>
                  <p className='text-sm text-greenCustom font-semibold pb-3'>Đội ngũ lãnh đạo</p>
                  <p className="text-4xl text-customText font-bold pb-10">Gặp gỡ đội ngũ chuyên gia</p>
                  <p className='text-base text-custom font-medium pb-10'>Đội ngũ của chúng tôi gồm những chuyên gia tâm huyết, luôn nỗ lực mang đến sản phẩm nông sản sạch và chất lượng nhất. Chúng tôi cam kết cung cấp dịch vụ tận tâm và sự hài lòng tuyệt đối cho khách hàng.</p>
                  <p className='text-base text-custom font-medium'>Với sự kết hợp giữa kinh nghiệm và đam mê, đội ngũ của chúng tôi luôn sẵn sàng phục vụ và mang lại những giải pháp tốt nhất cho khách hàng. Chúng tôi không ngừng cải tiến để đáp ứng mọi nhu cầu và kỳ vọng của bạn.</p>
                </div>
                <div className='col-span-1'>
                  <div className='relative group'>
                    <div className=''>
                      <img className='flex rounded-xl' src="https://www.niraagayurveda.com/assets/imgs/page/about-6.png" alt="" />
                    </div>
                    <div className='absolute z-10 bottom-[-120px] left-12 group-hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                      <div className='shadow-lg px-20 py-10 bg-white rounded-xl'>
                        <h2 className="text-3xl text-center text-customText font-bold pb-2">Mr. Khoa</h2>
                        <p className='text-base text-center text-custom font-medium'>CEO & Co-Founder</p>
                        <div className='flex gap-4 mt-3'>
                          <Link className=''><BiLogoFacebook className='text-greenCustom ' size={18} /></Link>
                          <Link className=''><BiLogoTwitter className='text-greenCustom ' size={18} /></Link>
                          <Link className=''><BiLogoInstagram className='text-greenCustom ' size={18} /></Link>
                          <Link className=''><BiLogoPinterest className='text-greenCustom ' size={18} /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-1'>
                  <div className='relative group'>
                    <div className=''>
                      <img className='flex rounded-xl' src="https://www.niraagayurveda.com/assets/imgs/page/about-8.png" alt="" />
                    </div>
                    <div className='absolute z-10 bottom-[-120px]  left-12 group-hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                      <div className='shadow-lg px-20 py-10 bg-white rounded-xl'>
                        <h2 className="text-3xl text-center text-customText font-bold pb-2">Mr. Khoa</h2>
                        <p className='text-base text-center text-custom font-medium'>Head Engineer</p>
                        <div className='flex gap-4 mt-3'>
                          <Link className=''><BiLogoFacebook className='text-greenCustom ' size={18} /></Link>
                          <Link className=''><BiLogoTwitter className='text-greenCustom ' size={18} /></Link>
                          <Link className=''><BiLogoInstagram className='text-greenCustom ' size={18} /></Link>
                          <Link className=''><BiLogoPinterest className='text-greenCustom ' size={18} /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PromotionalSectionHome />
        </div>
      </div>
    </>
  )
}

export default AboutPage