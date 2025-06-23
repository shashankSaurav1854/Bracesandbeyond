import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'General Dentistry', href: '#services' },
    { label: 'Cosmetic Dentistry', href: '#services' },
    { label: 'Oral Surgery', href: '#services' },
    { label: 'Emergency Care', href: '#services' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com/' },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/bracesbeyondgurugram?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    },
    { icon: <FaTwitter />, href: 'https://twitter.com/' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">🦷 Dr. Puja Priya</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing exceptional dental care with a focus on patient comfort and satisfaction.
              Your smile is our priority.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-500 transition-transform"
                  aria-label="Social link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Dr. Puja Priya Dental Practice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
