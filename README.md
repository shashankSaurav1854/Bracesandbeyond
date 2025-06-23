# 🦷 Dental Landing Page

A modern, responsive dental practice landing page built with Next.js, TypeScript, and Tailwind CSS. Designed to help dental practices attract new patients and showcase their services professionally.

## Link - **https://shashanksaurav1854.github.io/Bracesandbeyond/

## ✨ Features

- **Modern Design** - Clean, professional interface with dental-focused aesthetics
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Built with Next.js for optimal loading speeds
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Contact Forms** - Easy appointment booking and contact functionality
- **Service Showcase** - Highlight dental services with engaging visuals
- **Team Section** - Meet the dentists and staff
- **Patient Testimonials** - Build trust with social proof
- **Location & Hours** - Easy-to-find practice information

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Carousel**: [Swiper.js](https://swiperjs.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0 or later
- pnpm (recommended) or npm

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/dental-landing-page.git
   cd dental-landing-page
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dental-landing-page/
├── public/                 # Static assets
│   ├── images/            # Images and graphics
│   └── favicon.ico        # Site favicon
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Services.tsx   # Services section
│   │   ├── About.tsx      # About section
│   │   ├── Team.tsx       # Team section
│   │   ├── Testimonials.tsx # Patient reviews
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Site footer
│   └── styles/            # Additional styles
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .stylelintrc.json      # Stylelint configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors and Branding

Update your brand colors in `src/app/globals.css`:

```css
@import 'tailwindcss';

:root {
  --primary-color: #your-brand-color;
  --secondary-color: #your-secondary-color;
}
```

### Content

1. **Practice Information**: Update practice details in components
2. **Services**: Modify services in `src/components/Services.tsx`
3. **Team**: Add team members in `src/components/Team.tsx`
4. **Contact**: Update contact information and forms

### Images

Replace placeholder images in the `public/images/` directory with your practice photos.

## 📱 Sections Included

- **Hero Section** - Eye-catching banner with call-to-action
- **Services** - Comprehensive dental services showcase
- **About Us** - Practice story and mission
- **Our Team** - Meet the dental professionals
- **Testimonials** - Patient reviews and success stories
- **Contact** - Appointment booking and location info
- **Footer** - Additional links and information

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Netlify

1. Build the project: `pnpm build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms

```bash
pnpm build
pnpm start
```

## 📊 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm format` - Format code with Prettier
- `pnpm stylelint` - Run Stylelint
- `pnpm type-check` - Run TypeScript checks

## 🔧 Code Quality

This project includes:

- **ESLint** for code linting
- **Prettier** for code formatting
- **Stylelint** for CSS linting
- **TypeScript** for type safety

Run quality checks:

```bash
pnpm lint && pnpm stylelint && pnpm type-check
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/dental-landing-page/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/) for the beautiful icon library
- [Swiper.js](https://swiperjs.com/) for the touch slider functionality

---

Made with ❤️ for dental practices worldwide
