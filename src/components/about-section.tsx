import Image from 'next/image';

export default function AboutSection() {
  const credentials = [
    'BDS, MDS in Orthodontics',
    'Specializing in Aesthetic Dentistry',
    'Certified in Advanced Cosmetic Dentistry',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Dr. Puja Priya
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 5 years of experience in dental care, Dr. Puja Priya is committed to
              providing the highest quality treatment while ensuring patient comfort and
              satisfaction.
            </p>
            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{credential}</span>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center"> */}
          <div className="rounded-lg h-96 overflow-hidden">
            <Image
              src="/drPP.jpg"
              alt="Dr. Puja Priya"
              width={512}
              height={384}
              className="object-cover w-full h-full"
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
