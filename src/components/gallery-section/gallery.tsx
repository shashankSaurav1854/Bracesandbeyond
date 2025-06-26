'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Header from '../header';
import Navigation from '../navigation';
import Footer from '../footer';
import ContactSection from '../contact-section';

type GalleryImage = { id: number; src: string; alt: string; category: string[] };

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: '/gallery/reception.webp',
      alt: 'Modern dental office reception area',
      category: ['Office', 'Clinic'],
    },
    {
      id: 2,
      src: '/gallery/office.webp',
      alt: 'clinic building',
      category: ['Office', 'Clinic'],
    },
    {
      id: 3,
      src: '/gallery/drPPproffesional.jpeg',
      alt: 'meet Dr. Puja Priya',
      category: ['Clinic', 'Office'],
    },
    {
      id: 4,
      src: '/gallery/DrPPinoffice.jpg',
      alt: 'Dr. Puja Priya in the clinic',
      category: ['Clinic', 'Office'],
    },
    {
      id: 5,
      src: '/gallery/equipment.jpg',
      alt: 'equipments in the clinic',
      category: ['Clinic', 'Equipment'],
    },
    {
      id: 6,
      src: '/gallery/patient.webp',
      alt: 'patient tranformation',
      category: ['Clinic', 'Results'],
    },
  ];

  const categories = ['All', 'Office', 'Clinic', 'Equipment', 'Results'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category.includes(activeCategory));

  const openModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="bg-amber-50">
      <Header />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-r bg-amber-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Camera className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-blue-600 mb-6">Our Gallery</h1>
          <p className="text-xl text-blue-600 mb-8">
            Take a look at our facility, amazing transformations, and happy patients
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-amber-100 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => openModal(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    {image.category.map((category) => (
                      <span
                        key={category}
                        className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-2 mr-2"
                      >
                        {category}
                      </span>
                    ))}
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors cursor-pointer  bg-white/20 hover:bg-white/30 rounded-full w-10 h-10 items-center justify-center flex"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-cover rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-2">
                {selectedImage.category}
              </span>
              <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-50/20 hover:bg-amber-50/30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-50/20 hover:bg-amber-50/30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-amber-50 from-blue-600 to-amber-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-600  mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-blue-600 mb-8">
            Schedule your consultation today and join our gallery of beautiful smiles!
          </p>
          <a
            href="https://booking.appointy.com/en-US/bracesandbeyond/bookings/calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Consultation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
