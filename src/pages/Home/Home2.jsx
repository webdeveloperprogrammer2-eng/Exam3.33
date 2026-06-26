import { useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const projectsData = [
  { id: 1, type: "villas", title: "Villas", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur.", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600" },
  { id: 2, type: "building", title: "Houses", text: "Faucibus vitae dui massa tellus magna sit. Consequat molestie integer aliquam consectetur.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600" },
  { id: 3, type: "interior", title: "Villas", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus vitae dui massa tellus magna sit.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600" },
  { id: 4, type: "villas", title: "Modern Villa", text: "Consequat molestie integer aliquam consectetur. Lorem ipsum dolor sit amet.", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600" },
  ...Array.from({ length: 16 }, (_, i) => ({
    id: i + 5,
    type: i % 2 === 0 ? "building" : "interior",
    title: i % 2 === 0 ? "Luxury House" : "Penthouse",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus vitae dui massa tellus magna sit.",
    img: i % 2 === 0
      ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
      : "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600"
  }))
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter(p => p.type === filter);

  return (
    <Box className="bg-[#111111] text-white py-16 font-sans">
      <Container maxWidth="xl">

        <Box className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <Typography variant="h4" className="font-bold tracking-wide text-2xl sm:text-4xl">
            Latest projects
          </Typography>

          <Box className="flex items-center gap-6 text-sm font-medium">
            {["all", "building", "interior"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`capitalize transition-colors ${filter === type ? "text-amber-400 font-semibold" : "text-stone-400 hover:text-white"}`}
              >
                {type === "all" ? "All" : type}
              </button>
            ))}
            <span className="text-stone-600">|</span>
            <button className="text-stone-400 hover:text-white text-xs underline decoration-amber-400 underline-offset-4">
              View all projects
            </button>
          </Box>
        </Box>

        <Box className="projects-swiper-container">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1.2}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3
              },
              1280: {
                slidesPerView: 4,
                slidesPerGroup: 4
              },
            }}
            className="pb-14"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <Box className="w-full h-[400px] group [perspective:1000px] cursor-pointer">
                  <Box className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    <Box className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <Box className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <Typography className="absolute bottom-6 left-6 text-xl font-bold tracking-wide">
                        {project.title}
                      </Typography>
                    </Box>

                    <Box className="absolute inset-0 w-full h-full bg-amber-400 text-stone-900 p-8 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <Box>
                        <Typography className="text-2xl font-bold mb-6">
                          Dubai
                        </Typography>
                        <Typography className="text-sm leading-relaxed font-medium text-stone-800">
                          {project.text}
                        </Typography>
                      </Box>
                      <Button
                        className="text-stone-900 text-xs font-bold normal-case p-0 justify-start hover:bg-transparent"
                        endIcon={<span>➔</span>}
                      >
                        See project
                      </Button>
                    </Box>

                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <style jsx global>{`
          .projects-swiper-container .swiper-pagination-bullet {
            background: #52525b !important;
            opacity: 1;
            width: 8px;
            height: 8px;
            transition: all 0.3s ease;
          }
          .projects-swiper-container .swiper-pagination-bullet-active {
            background: #fbbf24 !important;
            width: 24px;
            border-radius: 4px;
          }
          .projects-swiper-container .swiper-pagination {
            bottom: 0px !important;
          }
        `}</style>

      </Container>


      <div className='mt-18 text-start w-[50%] m-auto '>
        <p className='text-[#FCD54C] text-[18px] '>Our expertise</p>
        <h1 className='text-[70px]'>
          "The best apartment <br />
          in Dubai" we will find <br />
          your dream
        </h1>

        <p className='text-[18px] text-[#888] mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, <br />
          euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam egestas <br />
          ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In efficitur <br />
          vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac elit <br />
          commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis <br />
          sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. <br />
          Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa. Praesent ac <br />
          eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor <br />
          dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a <br />
          lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </Box>

  );
}