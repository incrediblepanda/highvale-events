import Link from 'next/link';
import { MapPin, Clock, Mail, Phone, Instagram } from 'lucide-react';

// Custom Pinterest icon since lucide doesn't have it
const PinterestIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.21-2.201 3.21-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.89-.986-.705 0-1.269.73-1.269 1.708 0 .623.21 1.044.21 1.044s-.7 2.964-.828 3.51c-.142.607-.086 1.454-.024 2.062A7.532 7.532 0 0 1 12 19z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-charcoal py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-cormorant font-bold text-white mb-4">
              Highvale <span className="text-gold italic">Events</span>
            </h3>
            <p className="text-text-light/70 font-inter text-sm leading-relaxed mb-4">
              Creating unforgettable experiences through meticulous planning and creative vision since 2010.
            </p>
            <div className="w-20 h-[2px] bg-gold mb-4"></div>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/highvaleevents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com/highvaleevents"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light/70 hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-cormorant font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/weddings" className="text-text-light/70 hover:text-gold transition-colors font-inter text-sm">Weddings</Link></li>
              <li><Link href="/private-events" className="text-text-light/70 hover:text-gold transition-colors font-inter text-sm">Private Events</Link></li>
              <li><Link href="/portfolio" className="text-text-light/70 hover:text-gold transition-colors font-inter text-sm">Portfolio</Link></li>
              <li><Link href="/about" className="text-text-light/70 hover:text-gold transition-colors font-inter text-sm">About</Link></li>
              <li><Link href="/testimonials" className="text-text-light/70 hover:text-gold transition-colors font-inter text-sm">Testimonials</Link></li>
              <li><Link href="/faq" className="text-text-light/70 hover:text-gold transition-colors font-inter text-sm">FAQ</Link></li>
              <li><Link href="/contact" className="text-text-light/70 hover:text-gold transition-colors font-inter text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-cormorant font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold mt-1" />
                <p className="text-text-light/70 font-inter text-sm">
                  Colorado Springs, CO
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gold" />
                <p className="text-text-light/70 font-inter text-sm">
                  Mon-Fri: 9AM - 6PM
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <p className="text-text-light/70 font-inter text-sm">
                  info@highvaleevents.com
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <p className="text-text-light/70 font-inter text-sm">
                  (719) 555-0100
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10">
          <p className="text-center text-text-light/50 font-inter text-sm">
            © 2024 Highvale Events. All rights reserved. | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
