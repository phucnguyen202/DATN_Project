import { Breadcrumb, Checkbox, Divider, Input, InputNumber, Rate, Slider, Space, Tabs, Tag, Typography } from 'antd';
import { CiFilter } from "react-icons/ci";
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';

const { Title, Text } = Typography;
const { TextArea } = Input;
const items = [
  {
    key: '1',
    label: 'Mô Tả Sản Phẩm',
    children:
      <div>
        <div className='mt-8'>
          <p className='text-custom text-base mb-2'>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
          <p className='text-custom text-base'>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
          <div>
            <Divider orientation="left"
              style={{
                fontSize: '24px',
                color: '#253D4E'
              }}>Đóng gói & Giao hàng</Divider>
            <p className='text-custom text-base mb-2'>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
            <p className='text-custom text-base'>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
          </div>
          <div>
            <Divider orientation="left"
              style={{
                fontSize: '24px',
                color: '#253D4E'
              }}>Đề xuất sử dụng</Divider>
            <p className='text-custom text-base mb-2'>Refrigeration not necessary.</p>
            <p className='text-custom text-base'>Stir before serving</p>
          </div>
          <div>
            <Divider orientation="left"
              style={{
                fontSize: '24px',
                color: '#253D4E'
              }}>Cảnh báo</Divider>
            <p className='text-custom text-base mb-2'>Oil separation occurs naturally. May contain pieces of shell.</p>
          </div>
        </div>
      </div>,
  },
  {
    key: '2',
    label: 'Đánh Giá',
    children:
      <div className='mt-8'>
        <ul className='flex flex-col gap-6'>
          <li className='flex gap-4 border-[1px] rounded-md p-6'>
            <div className='flex flex-col justify-center gap-2'>
              <img className='w-40' src="https://www.niraagayurveda.com/assets/imgs/blog/author-2.png" alt="" />
              <p className='text-center text-base font-medium text-greenCustom'>Sienna</p>
            </div>
            <div>
              <div className='flex max-md:flex-col justify-between'>
                <p className='text-custom1 text-sm mb-4 max-md:mb-2'>December 4, 2022 at 3:12 pm </p>
                <Rate defaultValue={4} className='text-sm max-md:mb-2' />
              </div>
              <p className='text-custom text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? </p>
            </div>
          </li>
          <li className='flex gap-4 border-[1px] rounded-md p-6'>
            <div className='flex flex-col justify-center gap-2'>
              <img className='w-40' src="https://www.niraagayurveda.com/assets/imgs/blog/author-2.png" alt="" />
              <p className='text-center text-base font-medium text-greenCustom'>Sienna</p>
            </div>
            <div>
              <div className='flex max-md:flex-col justify-between'>
                <p className='text-custom1 text-sm mb-4 max-md:mb-2'>December 4, 2022 at 3:12 pm </p>
                <Rate defaultValue={4} className='text-sm max-md:mb-2' />
              </div>
              <p className='text-custom text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? </p>
            </div>
          </li>
          <li className='flex gap-4 border-[1px] rounded-md p-6'>
            <div className='flex flex-col justify-center gap-2'>
              <img className='w-40' src="https://www.niraagayurveda.com/assets/imgs/blog/author-2.png" alt="" />
              <p className='text-center text-base font-medium text-greenCustom'>Sienna</p>
            </div>
            <div>
              <div className='flex max-md:flex-col justify-between'>
                <p className='text-custom1 text-sm mb-4 max-md:mb-2'>December 4, 2022 at 3:12 pm </p>
                <Rate defaultValue={4} className='text-sm max-md:mb-2' />
              </div>
              <p className='text-custom text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? </p>
            </div>
          </li>
        </ul>
        <div className='mt-20'>
          <h2 className='text-3xl mb-2 text-customText font-semibold'>Thêm Đánh Già</h2>
          <Rate defaultValue={0} className='text-sm mb-4' />
          <div className='w-[600px] max-md:w-full flex flex-col gap-4'>
            <TextArea
              placeholder="Nhập đánh giá"
              className="custom"
              style={{
                width: '100%',
                height: 200,
              }}
            />
            <div className='flex gap-4' >
              <Input placeholder="Tên" />
              <Input placeholder="Email" />
            </div>
            <div>
              <button className='bg-customBg flex justify-center items-center gap-1 px-4 py-2 text-white text-base font-medium rounded-md'>Gửi Đánh Giá</button>
            </div>
          </div>
        </div>
      </div>
  },
];
const DetailPage = () => {
  const param = useParams()
  return (
    <div className=''>
      <div className='border-b-[1px]'>
        <div className='px-4 py-5'>
          <Breadcrumb
            items={[
              {
                title: <p className='font-medium'>Home</p>,
              },
              {
                title: <Link className='font-medium' to={'/product'}>Products</Link>,
              },
              {
                title: <p className='font-medium text-greenCustom'>Application List</p>,
              }
            ]}
          />
        </div>
      </div>
      <div className='xl:px-10 px-4 max-md:px-4 pt-8'>
        <div className='grid grid-cols-12'>
          <div className='xl:col-span-9 col-span-12'>
            <div className='flex max-md:flex-col gap-12'>
              <div className='w-1/2 max-md:w-full'>
                <div className=' flex justify-center border-[1px] rounded-2xl'>
                  <img className='w-[480px] h-[480px] max-md:h-[360px] rounded-2xl' src="https://www.niraagayurveda.com/assets/imgs/shop/product-16-2.jpg" alt="" />
                </div>
                <div className='mt-8'>
                  <div className=' grid grid-cols-4 gap-4'>
                    <div className='border-[1px] rounded-md'>
                      <img className='rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-4.jpg" alt="" />
                    </div>
                    <div className='border-[1px] rounded-md'>
                      <img className='rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-5.jpg" alt="" />
                    </div>
                    <div className='border-[1px] rounded-md'>
                      <img className='rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-6.jpg" alt="" />
                    </div>
                    <div className='border-[1px] rounded-md'>
                      <img className='rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-7.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-1/2 max-md:w-full xl:pr-8'>
                <Tag color="red">Save Off</Tag>
                <div className='mt-4'>
                  <h2 className='text-[44px] text-customText font-semibold max-md:text-[32px]'>Seeds of Change Organic Quinoa, Brown</h2>
                  <Space className='py-4'>
                    <Rate value={3} className='text-sm' />
                    <p className='text-custom1'>(32 reviews)</p>
                  </Space>
                  <div className='flex items-center gap-2 py-6'>
                    <p className='text-6xl text-greenCustom font-semibold'>$38</p>
                    <div>
                      <p className='text-[#FDC040]'>
                        26% Off
                      </p>
                      <p className='text-4xl text-custom1 font-semibold'>$52</p>
                    </div>
                  </div>
                  <p className='text-lg pb-6 text-custom'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi. </p>
                  <p className='pb-6 text-custom'><b>Size/weight:</b> 1kg</p>
                  <div className='flex gap-2 items-center'>
                    <div>
                      <InputNumber
                        style={{
                          paddingTop: '10px',
                          paddingBottom: '10px',
                          fontSize: '20px'
                        }
                        }
                        min={1} max={10}
                        defaultValue={3}
                        size="large"
                      // onChange={onChange}
                      />
                    </div>
                    <button className=' flex justify-center items-center gap-2 font-medium rounded-sm bg-[#DEF9EC] text-greenCustom hover:bg-customBg hover:text-slate-50 p-5'>
                      <IoCartOutline size={20} />
                      Add To Cart
                    </button>
                    <button className='text-[#cf1322] bg-[#f8bfbb] rounded-sm p-5 '>
                      <IoMdHeartEmpty size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-16 xl:mr-8'>
              <div className='border-[1px] rounded-2xl p-10  max-md:p-4'>
                <Tabs defaultActiveKey="1" items={items} />
              </div>
            </div>
          </div>
          <div className='xl:col-span-3 mt-6 xl:mt-0 col-span-12 '>
            <div className='flex flex-col gap-6'>
              <div className='border-[1px] rounded-2xl p-6'>
                <div className="relative">
                  <h2 className="text-2xl font-bold text-customText pb-3">Danh mục</h2>
                  {/* Underline */}
                  <div className="absolute left-0 bottom-0 w-28 h-[2px] bg-customBg mt-1"></div>
                  {/* Full line */}
                  <div className="border-b border-gray-200 mt-2"></div>
                </div>
                <div className='pt-6'>
                  <ul className='flex flex-col gap-4'>
                    <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                      <a href="" className='text-gray-custom flex gap-3 items-center'>
                        <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-1.svg" alt="" />
                        <span className=' font-semibold text-customText'>Milks & Dairies</span>
                      </a>
                      <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                    </li>
                    <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                      <a href="" className='text-gray-custom flex gap-3 items-center'>
                        <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-2.svg" alt="" />
                        <span className=' font-semibold  text-customText'>Clothing</span>
                      </a>
                      <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                    </li>
                    <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                      <a href="" className='text-gray-custom flex gap-3 items-center'>
                        <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-3.svg" alt="" />
                        <span className=' font-semibold  text-customText'>Pet Foods</span>
                      </a>
                      <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                    </li>
                    <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                      <a href="" className='text-gray-custom flex gap-3 items-center'>
                        <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-4.svg" alt="" />
                        <span className=' font-semibold  text-customText'>Baking material</span>
                      </a>
                      <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                    </li>
                    <li className='border-[1px] rounded-xl px-4 py-3 flex justify-between'>
                      <a href="" className='text-gray-custom flex gap-3 items-center'>
                        <img className='w-7 h-7' src="https://www.niraagayurveda.com/assets/imgs/theme/icons/category-5.svg" alt="" />
                        <span className=' font-semibold  text-customText'>Fresh Fruit</span>
                      </a>
                      <p className='flex justify-center items-center rounded-full w-8 h-8 text-sm bg-custombg2 text-customText'>30</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='border-[1px] rounded-2xl p-6 relative'>
                <div className="relative">
                  <h2 className="text-2xl font-bold text-customText pb-3">Lọc sản phẩm</h2>
                  {/* Underline */}
                  <div className="absolute left-0 bottom-0 w-28 h-[2px] bg-customBg mt-1"></div>
                  {/* Full line */}
                  <div className="border-b border-gray-200 mt-2"></div>
                </div>
                <div className='pt-6'>
                  <div className=''>
                    <Slider range defaultValue={[20, 80]} />
                    <div className='flex justify-between pt-2'>
                      <p className='text-custom'>Từ: <span className='text-greenCustom font-medium'>$3000</span></p>
                      <p className='text-custom'>Đến: <span className='text-greenCustom font-medium'>$6000</span></p>
                    </div>
                    <div className='pt-6'>
                      <h5 className="text-lg font-bold text-custom pb-3">Màu sắc</h5>
                      <ul>
                        <li ><Checkbox className='text-custom'>Đỏ <span>(30)</span></Checkbox></li>
                        <li><Checkbox className='text-custom'>Xanh <span>(30)</span></Checkbox></li>
                        <li><Checkbox className='text-custom'>Vàng <span>(30)</span></Checkbox></li>
                      </ul>
                    </div>
                    <div className='mt-6'>
                      <button className='bg-customBg flex justify-center items-center gap-1 px-4 py-2 text-white text-lg font-medium rounded-md'><CiFilter size={20} />Lọc</button>
                    </div>
                  </div>
                </div>
                <div className=' absolute bottom-1 right-2 '>
                  <img className='w-36' src="https://www.niraagayurveda.com/assets/imgs/banner/fillter-widget-bg.png" alt="" />
                </div>
              </div>
              <div className='border-[1px] rounded-2xl p-6'>
                <div className="relative">
                  <h2 className="text-2xl font-bold text-customText pb-3">Danh mục</h2>
                  {/* Underline */}
                  <div className="absolute left-0 bottom-0 w-28 h-[2px] bg-customBg mt-1"></div>
                  {/* Full line */}
                  <div className="border-b border-gray-200 mt-2"></div>
                </div>
                <div className='mt-6 flex flex-col gap-4'>
                  <div className='flex items-center gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                    <div className='w-24'>
                      <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-1.jpg" alt="" />
                    </div>
                    <div>
                      <h5 className='text-greenCustom font-bold text-xl'>Chen Cardigan</h5>
                      <Space className=''>
                        <Rate value={3} className='text-sm' />
                      </Space>
                      <Space className=''>
                        <Text className='text-custom font-medium text-lg'>$14.99</Text>
                      </Space>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                    <div className='w-24'>
                      <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-2.jpg" alt="" />
                    </div>
                    <div>
                      <h5 className='text-greenCustom font-bold text-xl'>Chen Cardigan</h5>
                      <Space className=''>
                        <Rate value={3} className='text-sm' />
                      </Space>
                      <Space className=''>
                        <Text className='text-custom font-medium text-lg'>$14.99</Text>
                      </Space>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                    <div className='w-24'>
                      <img className='w-full h-full rounded-md' src="https://www.niraagayurveda.com/assets/imgs/shop/thumbnail-3.jpg" alt="" />
                    </div>
                    <div>
                      <h5 className='text-greenCustom font-bold text-xl'>Chen Cardigan</h5>
                      <Space className=''>
                        <Rate value={3} className='text-sm' />
                      </Space>
                      <Space className=''>
                        <Text className='text-custom font-medium text-lg'>$14.99</Text>
                      </Space>
                    </div>
                  </div>
                </div>
                <div className='mt-6 flex flex-col gap-4'>
                  <div className='relative group'>
                    <img className='rounded-2xl' src="https://www.niraagayurveda.com/assets/imgs/banner/banner-11.png" alt="" />
                    <div className=' absolute top-60 xl:top-24 max-md:top-10 pl-10 group-hover:-translate-y-2 transition-transform transform duration-300 ease-in-out'>
                      <p className='text-custom text-2xl max-md:text-lg'>Oganic</p>
                      <p className='text-customText xl:text-2xl text-5xl max-md:text-2xl font-semibold'>Save 17%<br /> on  <span className='text-greenCustom'>Oganic</span><br />juice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DetailPage