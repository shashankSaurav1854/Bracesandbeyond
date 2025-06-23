interface Service {
  title: string;
  description: string;
  icon: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      title: 'General Dentistry',
      description:
        'Comprehensive oral health care including cleanings, fillings, and preventive treatments.',
      icon: '🦷',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, whitening, and aesthetic treatments.',
      icon: '✨',
    },
    {
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including extractions and dental implants.',
      icon: '🏥',
    },
    {
      title: 'Emergency Care',
      description: 'Immediate dental care for urgent situations and dental emergencies.',
      icon: '🚨',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs, from routine cleanings to advanced
            treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
