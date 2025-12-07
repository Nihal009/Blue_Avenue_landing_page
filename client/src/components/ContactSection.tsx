import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '123 Fashion Avenue, New York, NY 10001',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (555) 123-4567',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@blueavenue.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9am-6pm | Sat: 10am-4pm',
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent',
      description: "Thank you for reaching out. We'll be in touch shortly.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Get In Touch
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            data-testid="text-contact-title"
          >
            Contact <span className="italic">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience bespoke tailoring? Schedule a consultation or send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <Card className="lg:col-span-3 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-contact-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-contact-email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="input-contact-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger data-testid="select-contact-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom-suits">Custom Suits</SelectItem>
                      <SelectItem value="alterations">Alterations</SelectItem>
                      <SelectItem value="shirt-tailoring">Shirt Tailoring</SelectItem>
                      <SelectItem value="wedding-attire">Wedding Attire</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your tailoring needs..."
                  className="min-h-[120px] resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-contact-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full uppercase tracking-wider font-semibold py-6"
                disabled={isSubmitting}
                data-testid="button-contact-submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4"
                  data-testid={`contact-info-${index}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="aspect-[4/3] rounded-lg overflow-hidden mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519427547!2d-73.99022492346944!3d40.74844097138958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blue Avenue Location"
                data-testid="map-contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
