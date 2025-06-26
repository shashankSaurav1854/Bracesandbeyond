import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: 'General Dentistry',
      description:
        'Comprehensive oral health care including cleanings, fillings, and preventive treatments.',
      image: '/services/general-dentistry.jpg',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, whitening, and aesthetic treatments.',
      image: '/services/cosmetic-dentistry.webp',
    },
    {
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including extractions and dental implants.',
      image: '/services/oral-surgery.jpg',
    },
    {
      title: 'Metal Braces',
      description:
        'Traditional and effective orthodontic treatment for straightening teeth and correcting bite issues.',
      icon: '🦷',
      image: '/services/metal-braces.jpg',
    },
    {
      title: 'Ceramic Braces',
      description:
        'Clear or tooth-colored braces that provide effective treatment with improved aesthetics.',
      icon: '💎',
      image: '/services/ceramic-braces.jpg',
    },
    {
      title: 'Invisalign',
      description:
        'Clear, removable aligners that straighten teeth discreetly without traditional braces.',
      icon: '🔍',
      image: '/services/invisalign.jpg',
    },
    {
      title: 'Retainers',
      description: 'Custom-made devices to maintain teeth alignment after orthodontic treatment.',
      icon: '🔒',
      image: '/services/retainers.jpg',
    },
    {
      title: 'Myofunctional Therapy for Kids',
      description: 'Specialized exercises to improve oral and facial muscle function in children.',
      icon: '👶',
      image: '/services/myofunctional-therapy.jpg',
    },
    {
      title: 'Teeth Cleaning',
      description:
        'Professional dental hygiene services to remove plaque, tartar, and maintain oral health.',
      icon: '🪥',
      image: '/services/teeth-cleaning.jpg',
    },
    {
      title: 'Root Canal Treatment',
      description: 'Advanced endodontic therapy to save infected or severely damaged teeth.',
      icon: '🩺',
      image: '/services/root-canal-treatment.jpeg',
    },
    {
      title: 'Tooth Filling',
      description: 'Restore damaged teeth with durable composite or amalgam filling materials.',
      icon: '🔧',
      image: '/services/tooth-filling.jpg',
    },
    {
      title: 'Dental Crown',
      description:
        'Custom-fitted caps to restore strength, function, and appearance of damaged teeth.',
      icon: '👑',
      image: '/services/dental-crown.jpeg',
    },
    {
      title: 'Dental Bridges',
      description: 'Fixed prosthetic devices to replace missing teeth and restore your smile.',
      icon: '🌉',
      image: '/services/dental-bridge.webp',
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional bleaching treatments to brighten and enhance your smile.',
      icon: '⚡',
      image: '/services/teeth-whitening.jpg',
    },
    {
      title: 'Tooth Extraction',
      description: 'Safe and comfortable removal of damaged, impacted, or problematic teeth.',
      icon: '🩹',
      image: '/services/tooth-extraction.webp',
    },
    {
      title: 'Dental Implants',
      description:
        'Permanent tooth replacement solution with titanium implants and natural-looking crowns.',
      icon: '🦴',
      image: '/services/dental-implants.webp',
    },
  ];

  return (
    <section id="services" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs, from routine cleanings to advanced
            treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div className="text-4xl mb-4 ">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover w-full h-64"
                  />
                ) : (
                  <div className="text-6xl">{service.icon}</div>
                )}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Button */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-amber-700 transition duration-300 shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
