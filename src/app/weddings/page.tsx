'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Sparkles, Calendar, Users, Star, ChevronRight } from 'lucide-react';

export default function Weddings() {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: 'Full Planning & Design',
      description: 'From concept to celebration, we manage every detail including venue selection, vendor coordination, design direction, and day-of execution to ensure a seamless experience.',
      features: ['Venue Selection', 'Vendor Management', 'Design Direction', 'Complete Timeline', 'Budget Management']
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: 'Partial Planning',
      description: 'Ideal for couples who have begun planning but seek our expertise to refine the details, elevate the design, and manage key milestones.',
      features: ['Design Refinement', 'Vendor Recommendations', 'Timeline Creation', 'Final Details Management']
    },
    {
      icon: <Calendar className="w-8 h-8 text-gold" />,
      title: 'Wedding Day Coordination',
      description: 'Our team orchestrates every moment of your day, overseeing vendors, timelines, and last-minute details so you can focus solely on celebrating.',
      features: ['Vendor Coordination', 'Timeline Management', 'Emergency Support', 'Complete Peace of Mind']
    }
  ];

  const portfolioHighlights = [
    {
      title: 'The Great Gatsby Affair',
      description: 'A roaring twenties inspired soirée under glittering chandeliers, featuring Art Deco details and champagne towers.',
      style: 'Classic Glamour'
    },
    {
      title: 'Alpine Romance',
      description: 'An intimate alpine ceremony framed by sweeping mountain views, with natural wood accents and wildflower arrangements.',
      style: 'Mountain Elegance'
    },
    {
      title: 'Garden Paradise',
      description: 'A romantic garden wedding awash in pastel blooms, featuring cascading florals and twinkling fairy lights.',
      style: 'Romantic Garden'
    },
    {
      title: 'Modern Minimalism',
      description: 'A sleek urban celebration with clean lines, monochromatic palette, and architectural floral installations.',
      style: 'Contemporary Chic'
    },
    {
      title: 'Tuscan Dream',
      description: 'An Italian-inspired celebration with long harvest tables, olive branches, and warm candlelight.',
      style: 'European Romance'
    },
    {
      title: 'Beachside Bliss',
      description: 'A barefoot ceremony on pristine sands with flowing fabrics, tropical blooms, and ocean breezes.',
      style: 'Coastal Luxury'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-sage"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="relative z-10 max-w-[1180px] mx-auto px-6 text-center pt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold text-white mb-6 leading-tight animate-fade-in">
            Extraordinary Weddings,<br />
            <span className="text-gold italic">Impeccably Crafted</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-10 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in animation-delay-200">
            From the first consultation to the final toast, we bring your love story to life with elegance, artistry, and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button variant="gold" shape="pill" size="lg">
              Begin Your Journey
            </Button>
            <Button variant="outline" shape="pill" size="lg">
              View Wedding Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Signature Wedding <span className="text-gold italic">Services</span>
            </h2>
            <p className="text-lg text-sage/70 max-w-2xl mx-auto font-inter">
              Your vision, flawlessly executed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-cormorant font-semibold text-sage mb-4">
                  {service.title}
                </h3>
                <p className="text-sage/70 font-inter text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-sage/60">
                      <Star className="w-3 h-3 text-gold mr-2" />
                      <span className="font-inter">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 md:py-24 bg-gradient-sage">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white mb-4">
              Portfolio <span className="text-gold italic">Highlights</span>
            </h2>
            <p className="text-lg text-text-light/80 max-w-2xl mx-auto font-inter">
              A glimpse into our most memorable celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioHighlights.map((highlight, index) => (
              <Card key={index} className="bg-white/10 border-gold/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{highlight.title}</CardTitle>
                  <p className="text-gold/80 text-sm font-inter">{highlight.style}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light/90 font-inter text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                  <Button variant="link" className="text-gold hover:text-gold-dark mt-4 p-0">
                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Your Wedding <span className="text-gold italic">Investment</span>
            </h2>
            <p className="text-lg text-sage/70 max-w-2xl mx-auto font-inter">
              Transparent pricing for extraordinary celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <h3 className="text-2xl font-cormorant font-semibold text-sage mb-2">
                Day-of Coordination
              </h3>
              <p className="text-3xl font-cormorant text-gold mb-4">From $3,500</p>
              <p className="text-sage/70 font-inter text-sm">
                Perfect for couples who have planned their wedding and need professional coordination.
              </p>
            </div>
            <div className="bg-gradient-sage rounded-lg p-8 shadow-lg text-center transform scale-105">
              <div className="bg-gold text-charcoal text-xs font-inter font-semibold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-cormorant font-semibold text-white mb-2">
                Partial Planning
              </h3>
              <p className="text-3xl font-cormorant text-gold mb-4">From $7,500</p>
              <p className="text-text-light/80 font-inter text-sm">
                Ideal balance of guidance and flexibility for your wedding planning journey.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <h3 className="text-2xl font-cormorant font-semibold text-sage mb-2">
                Full Planning & Design
              </h3>
              <p className="text-3xl font-cormorant text-gold mb-4">From $15,000</p>
              <p className="text-sage/70 font-inter text-sm">
                Complete planning and design services for a truly bespoke celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AsSeenIn />

      <InquirySection />

      <Footer />
    </div>
  );
}
