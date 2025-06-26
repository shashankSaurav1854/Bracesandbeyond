import { Award, Shield, Users } from 'lucide-react';

export default function ClinicAbout() {
  return (
    <>
      {/* About Braces and Beyond Clinic */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Braces and Beyond Clinic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in achieving beautiful, healthy smiles through innovative
              orthodontic care
            </p>
          </div>

          <div className="flex text-center gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in personalized orthodontic treatments, including metal braces,
                ceramic braces, clear aligners and retainers. We offer myofunctional therapy to
                address improper oral habits in children. Additionally for severe jaw misalignments,
                we offer surgical orthodontic treatments in collaboration with experienced oral and
                maxillofacial surgeons. At Braces & Beyond led by Dr. Puja Priya, we prioritize a
                welcoming environment providing affordable treatment and flexible scheduling to
                accommodate your needs. Book your consultation today and take the first step towards
                a confident smile!{' '}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Excellence in Care</h4>
              <p className="text-gray-600">
                Our commitment to excellence has earned us recognition as one of the top orthodontic
                practices in the region, with numerous awards and certifications.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Patient-Centered Approach</h4>
              <p className="text-gray-600">
                We prioritize your comfort and satisfaction, ensuring every visit is pleasant and
                stress-free with personalized care plans tailored to your lifestyle.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Comfortable Experience</h4>
              <p className="text-gray-600">
                We focus on creating a relaxing, pain-free environment with gentle techniques,
                sedation options, and amenities to make every visit comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
