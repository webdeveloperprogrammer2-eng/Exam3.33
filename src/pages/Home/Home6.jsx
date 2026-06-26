import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    id: 1,
    name: 'Paul',
    role: 'Owner in Paul.com',
    text: 'Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Robert',
    role: 'Founder in Apple inc.',
    text: 'Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing',
    image: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    id: 3,
    name: 'Michael',
    role: 'Director in FinTech',
    text: 'Great experience working with the team. Delivering exceptional quality design and solid modern architecture for our applications.',
    image: 'https://randomuser.me/api/portraits/men/36.jpg'
  },
  {
    id: 4,
    name: 'Sarah',
    role: 'CEO in TechCorp',
    text: 'Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 5,
    name: 'David',
    role: 'Manager in Global Trade',
    text: 'Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing',
    image: 'https://randomuser.me/api/portraits/men/65.jpg'
  },
  {
    id: 6,
    name: 'Emma',
    role: 'Designer in Creative Studio',
    text: 'Great experience working with the team. Delivering exceptional quality design and solid modern architecture for our applications.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
];

export default function Testimonials() {
  return (
    <div className="bg-[#222222] text-white py-16 px-4 min-h-[500px] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="testimonials-swiper"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id} className="py-8">
              <div className="relative border border-[#E4B74E] bg-[#262626] p-8 rounded-none mt-12 h-full flex flex-col justify-between">
                <div className="absolute -top-12 left-6 w-24 h-24 rounded-full overflow-hidden border-4 border-[#222222]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute top-4 right-6 text-[#E4B74E] text-5xl font-serif select-none opacity-80">
                  ”
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold tracking-wide">{item.name}</h3>
                  <p className="text-sm text-[#E4B74E] mt-1 mb-6">{item.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #555555 !important;
          opacity: 1;
          width: 10px;
          height: 10px;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #E4B74E !important;
        }
        .testimonials-swiper .swiper-pagination {
          position: relative;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}