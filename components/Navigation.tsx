import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    onNavigate?.(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
        }`}
      data-testid="navigation-header"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <span
              className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
                }`}
            >
              Blue Avenue
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:opacity-80 ${isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              onClick={() => handleNavClick('#contact')}
              className={`uppercase tracking-wider font-semibold px-6 ${isScrolled
                  ? ''
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white'
                }`}
              data-testid="button-book-consultation"
            >
              Book Consultation
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? '' : 'text-white hover:bg-white/20'}
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                <span className="font-serif text-2xl font-bold">Blue Avenue</span>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-lg font-medium py-2 border-b border-border transition-colors hover:text-primary"
                      data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className="mt-4 uppercase tracking-wider font-semibold"
                  data-testid="button-mobile-book-consultation"
                >
                  Book Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
