import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Flymize</h3>
            <p className="text-muted-foreground">
              Your complete business growth partner. Seamless solutions in marketing, web development, and beyond.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Linkedin size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Strategic Marketing</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Creative Design</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Social Media Management</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Technical Solutions</li>
              <li className="hover:text-primary cursor-pointer transition-colors">SEO Optimization</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Automation Services</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>contact@flymize.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2024 Flymize. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ for growing businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;