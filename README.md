# M & A Carpets - Premium Flooring Website

A modern, high-performance, fully responsive website for a premium flooring and carpet company.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with luxury aesthetics
- **Fully Responsive**: Mobile-first approach ensuring perfect display on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Built with SEO best practices and React Helmet Async
- **Fast Performance**: Optimized assets and code splitting for quick loading
- **Interactive Components**: Dynamic testimonials slider, FAQ accordion, and gallery
- **Contact Features**: Multiple contact options including WhatsApp integration

## 🛠 Tech Stack

- **React.js** - Modern functional components with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Helmet Async** - SEO meta tag management
- **React Icons** - Icon library
- **Vite** - Fast build tool and dev server

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── ContactForm.jsx
│   ├── FAQAccordion.jsx
│   ├── FloatingQuoteButton.jsx
│   ├── Footer.jsx
│   ├── GalleryGrid.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── SectionTitle.jsx
│   ├── TestimonialSlider.jsx
│   └── WhatsAppButton.jsx
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Gallery.jsx
│   ├── Home.jsx
│   └── Services.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Color Palette

- **Charcoal** (#2C3539) - Primary dark color
- **Beige** (#F5F1E8) - Background color
- **White** (#FFFFFF) - Secondary background
- **Dark Green** (#2D5016) - Accent color

## 📄 Pages

1. **Home** - Hero section, features, products, testimonials, FAQ
2. **About** - Company information, mission, values, team
3. **Services** - Detailed service offerings with features
4. **Gallery** - Filterable image gallery with lightbox
5. **Contact** - Contact form, booking form, contact information

## ⚙️ Customization

### Update Contact Information

Edit the following files to update contact details:

- `src/components/Footer.jsx` - Footer contact info
- `src/components/Navbar.jsx` - Phone number in nav
- `src/components/WhatsAppButton.jsx` - WhatsApp number
- `src/pages/Contact.jsx` - All contact information

### Modify Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  charcoal: {
    DEFAULT: '#2C3539',
    // ...
  },
  // ...
}
```

### Add/Edit Content

- **Services**: Edit `src/pages/Services.jsx`
- **Testimonials**: Edit `src/components/TestimonialSlider.jsx`
- **FAQs**: Edit `src/components/FAQAccordion.jsx`
- **Gallery Images**: Edit `src/components/GalleryGrid.jsx`

## 🌐 Deployment

This project can be deployed to various platforms:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## 📱 Features Highlights

- ✅ Sticky navigation with smooth scroll
- ✅ Mobile hamburger menu
- ✅ Animated hero sections
- ✅ Feature cards with hover effects
- ✅ Product showcase with images
- ✅ Testimonial carousel
- ✅ FAQ accordion
- ✅ Filterable gallery with lightbox
- ✅ Contact form with validation
- ✅ Booking form
- ✅ Floating quote button
- ✅ WhatsApp quick contact
- ✅ SEO optimized pages
- ✅ Fast loading with lazy images

## 📞 Support

For any questions or support, please contact:
- Email: info@macarpets.co.uk
- Phone: +44 123 456 7890

## 📝 License

This project is proprietary and belongs to M & A Carpets.

---

Built with ❤️ using React & Tailwind CSS
