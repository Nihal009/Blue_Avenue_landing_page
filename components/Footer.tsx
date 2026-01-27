import { SiInstagram, SiFacebook, SiLinkedin, SiPinterest } from 'react-icons/si';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const footerLinks = {
  services: [
    { label: 'Custom Suits', href: '#services' },
    { label: 'Alterations', href: '#services' },
    { label: 'Shirt Tailoring', href: '#services' },
    { label: 'Wedding Attire', href: '#services' },
    { label: 'Luxury Fabrics', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#services' },
    { label: 'Our Portfolio', href: '#portfolio' },

  ],

};

const socialLinks = [
  { icon: SiInstagram, label: 'Instagram', href: '#' },
  { icon: SiFacebook, label: 'Facebook', href: '#' },
  { icon: SiLinkedin, label: 'LinkedIn', href: '#' },
  { icon: SiPinterest, label: 'Pinterest', href: '#' },
];

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Subscribed',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    }
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-sidebar text-sidebar-foreground" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <span className="font-serif text-2xl font-bold">Blue Avenue</span>
            <p className="text-sm text-sidebar-foreground/70 leading-relaxed">
              Professional tailoring services in Dubai.
            </p>
            {/* <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-sidebar-accent flex items-center justify-center hover-elevate transition-all"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        <div className="mt-12 pt-8 border-t border-sidebar-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm text-sidebar-foreground/60">
              &copy; 2026 Blue Avenue. All rights reserved.
            </p>
            <p className="text-sm text-sidebar-foreground/60 border-l border-sidebar-border pl-4 hidden md:block">
              Powered by <span className="font-outfit font-semibold text-sidebar-foreground/80 tracking-tight">ZynkLabs</span>
            </p>
            <p className="text-sm text-sidebar-foreground/60 md:hidden">
              Powered by <span className="font-outfit font-semibold text-sidebar-foreground/80 tracking-tight">ZynkLabs</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
