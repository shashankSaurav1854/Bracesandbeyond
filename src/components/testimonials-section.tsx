'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: 'Archana Choudhary',
      text: 'Extremely satisfied with my damon braces treatment by Dr. Puja. Beautiful finishing, minimum pain, and most importantly, in just 8-9 visits, my entire treatment was over. She was so understanding about my inability to visit her frequently and customized everything according to my schedule. I have never seen another doctor do that, so hats off.',
      rating: 5,
    },
    {
      name: 'DHRUVA GUPTA',
      text: 'I had a wonderful experience with Dr. Puja. She is not only highly skilled and knowledgeable, but also incredibly patient and kind. She takes the time to explain every step of the treatment, which really helped ease my anxiety. The clinic is clean, well-equipped, and follows excellent hygiene protocols.',
      rating: 5,
    },
    {
      name: 'Shubhra Khanna',
      text: "I had a fantastic experience at BRACES and BEYOnD! The entire team was incredibly professional, friendly, and made me feel at ease from the moment I walked in. Dr. Puja was thorough, explained everything clearly, and made sure I was comfortable throughout my treatment. The clinic is clean, modern, and well-organized. I highly recommend this place for anyone looking for quality dental care. I'll definitely be coming back for my regular check-ups!",
      rating: 5,
    },
    {
      name: 'Sawan Kumar',
      text: 'I am having a gap in between my teeth and was looking for a right doctor from quite long time. Thanks Dr. Puja for your guidance. She is one of the best dentist I have seen so far',
      rating: 5,
    },
    {
      name: 'Sundaram Pandey',
      text: 'Got my root canal done, I was scared initially thinking about the pain but the treatment was done without any pain. Recommended doctor for any dental needs. Fully Satisfied',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-lg">
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from our satisfied patients (Google Reviews)
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="h-[500px]"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 rounded-lg p-6 h-400">
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-gray-900 font-semibold">- {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
