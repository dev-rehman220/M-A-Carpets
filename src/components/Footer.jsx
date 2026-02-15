import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    'Carpet Supply & Fitting',
    'Laminate Flooring',
    'Vinyl Flooring',
    'Luxury Vinyl Tile (LVT)',
    'Stair Carpets',
    'Commercial Flooring',
  ]

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">M & A CARPETS</h3>
            <p className="text-gray-300 mb-4">
              Premium carpet and flooring solutions with professional fitting services at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dark-green transition-colors duration-300"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dark-green transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-dark-green transition-colors duration-300"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-dark-green transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-300">
                <FiMapPin size={20} className="mt-1 flex-shrink-0" />
                <span>123 Flooring Street, London, UK</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FiPhone size={20} className="flex-shrink-0" />
                <a href="tel:+441234567890" className="hover:text-dark-green transition-colors">
                  +44 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <FiMail size={20} className="flex-shrink-0" />
                <a href="mailto:info@macarpets.co.uk" className="hover:text-dark-green transition-colors">
                  info@macarpets.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} M & A Carpets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
