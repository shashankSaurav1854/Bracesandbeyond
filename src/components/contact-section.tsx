'use client';

interface ContactInfo {
  icon: string;
  title: string;
  content: string;
}

export default function ContactSection() {
  const contactInfo: ContactInfo[] = [
    {
      icon: '📍',
      title: 'Address',
      content:
        '2nd Floor, Profrea Smart Clinic, A1/231, Golf Course Ext Rd, Sushant Lok 2, Sector 55, Gurugram, Haryana 122001',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+91 9053419388',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'ppvision18@gmail.com',
    },
    {
      icon: '🕒',
      title: 'Office Hours',
      content: 'Mon-Sun: 10AM - 8PM\nTue: closed',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Appointment</h2>
          <p className="text-lg text-blue-100">Ready to transform your smile? Contact us today!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-2xl mr-4">{info.icon}</span>
                  <div>
                    <p className="font-semibold">{info.title}</p>
                    <p className="text-blue-100 whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Find Us on the Maps</h3>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7496519112615!2d77.10310347552611!3d28.426809993393068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21c0ac972e35%3A0xed84ff2a96f9b485!2sBraces%20%26%20Beyond%20Dental%20Clinic%20-%20Dr.%20Puja%20Priya!5e0!3m2!1sen!2sin!4v1750714667031!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
