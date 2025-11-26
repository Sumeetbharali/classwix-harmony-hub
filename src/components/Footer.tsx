import { Music, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="gradient-primary p-2 rounded-lg">
                <Music className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">CLASSWiX</span>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Your trusted partner in music education. Learn, grow, and perform
              with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#courses" className="hover:text-background transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://www.classwix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  Main Website
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Hindustani Classical Vocal</li>
              <li>Guitar</li>
              <li>Keyboard (Piano)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@classwix.com"
                  className="hover:text-background transition-colors"
                >
                  info@classwix.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-background transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Online Music Classes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; 2025 CLASSWiX. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
