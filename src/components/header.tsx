import MailIcon from '../assets/mail';
import PhoneIcon from '../assets/phone';

export default function Header() {
  return (
    <header className="bg-amber-50 shadow-md w-full left-0 z-50  h-28 sm:h-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 text-center">
          <div className="flex items-center gap-2 border-b sm:border-b-0 sm:border-r-2 border-black pb-2 sm:pb-0 sm:pr-6 cursor-pointer">
            <PhoneIcon className="w-6 h-6 text-blue-600" />
            <a
              href="tel:+919053419388"
              className="text-base sm:text-lg font-bold text-gray-600 whitespace-nowrap"
            >
              +91 9053419388
            </a>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <MailIcon className="w-6 h-6 text-blue-600" />
            <a
              href="mailto:BBDentalGurugram@gmail.com"
              className="text-base sm:text-lg font-bold text-gray-600 whitespace-nowrap "
            >
              BBDentalGurugram@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
