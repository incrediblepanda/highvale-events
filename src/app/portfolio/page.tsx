'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Heart, Calendar, Users } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Rustic Mountain Wedding',
      category: 'weddings',
      description: 'Rustic elegance meets mountain grandeur in this unforgettable celebration.',
      location: 'Aspen, Colorado',
      season: 'Fall',
      guests: '200'
    },
    {
      id: 2,
      title: 'Garden Romance Wedding',
      category: 'weddings',
      description: 'A garden celebration brimming with romance and delicate florals.',
      location: 'Denver Botanic Gardens',
      season: 'Spring',
      guests: '150'
    },
    {
      id: 3,
      title: 'Corporate Gala',
      category: 'corporate',
      description: 'Contemporary glamour with artistic detail for a Fortune 500 company.',
      location: 'The Broadmoor',
      season: 'Winter',
      guests: '500'
    },
    {
      id: 4,
      title: '50th Anniversary',
      category: 'private',
      description: 'Golden celebration honoring five decades of love and family.',
      location: 'Private Estate',
      season: 'Summer',
      guests: '120'
    },
    {
      id: 5,
      title: 'Art Deco Wedding',
      category: 'weddings',
      description: 'Great Gatsby inspired celebration with champagne towers and jazz.',
      location: 'Historic Ballroom',
      season: 'Summer',
      guests: '300'
    },
    {
      id: 6,
      title: 'Product Launch',
      category: 'corporate',
      description: 'Innovative product reveal with immersive brand experiences.',
      location: 'Downtown Loft',
      season: 'Fall',
      guests: '250'
    },
    {
      id: 7,
      title: 'Birthday Soirée',
      category: 'private',
      description: 'Elegant milestone celebration with personalized touches.',
      location: 'Country Club',
      season: 'Spring',
      guests: '100'
    },
    {
      id: 8,
      title: 'Beachside Wedding',
      category: 'weddings',
      description: 'Coastal luxury with barefoot elegance and ocean views.',
      location: 'Destination',
      season: 'Summer',
      guests: '75'
    },
    {
      id: 9,
      title: 'Holiday Gala',
      category: 'corporate',
      description: 'Festive corporate celebration with sophisticated holiday décor.',
      location: 'Grand Hotel',
      season: 'Winter',
      guests: '400'
    },
    {
      id: 10,
      title: 'Intimate Elopement',
      category: 'weddings',
      description: 'Romantic mountain elopement for two with stunning vistas.',
      location: 'Rocky Mountains',
      season: 'Fall',
      guests: '10'
    },
    {
      id: 11,
      title: 'Wine Dinner',
      category: 'private',
      description: 'Exclusive wine pairing dinner with renowned sommelier.',
      location: 'Private Vineyard',
      season: 'Fall',
      guests: '40'
    },
    {
      id: 12,
      title: 'Awards Ceremony',
      category: 'corporate',
      description: 'Annual recognition event celebrating excellence and achievement.',
      location: 'Convention Center',
      season: 'Spring',
      guests: '600'
    }
  ];

  const filters = [
    { value: 'all', label: 'All Events', icon: null },
    { value: 'weddings', label: 'Weddings', icon: <Heart className="w-4 h-4" /> },
    { value: 'private', label: 'Private Events', icon: <Users className="w-4 h-4" /> },
    { value: 'corporate', label: 'Corporate Events', icon: <Calendar className="w-4 h-4" /> }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
            A Collection of<br />
            <span className="text-gold italic">Unforgettable Moments</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-10 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in animation-delay-200">
            Explore our curated portfolio of weddings and celebrations, each a reflection of our clients' distinct visions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-[100px] z-40 shadow-sm">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-full font-inter text-sm transition-all flex items-center gap-2 ${
                  activeFilter === filter.value
                    ? 'bg-gradient-sage text-white shadow-lg'
                    : 'bg-white text-sage border border-sage/20 hover:border-gold hover:text-gold'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Placeholder for image */}
                <div className="h-64 bg-gradient-sage relative overflow-hidden">
                  <div className="absolute inset-0 bg-charcoal/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white font-cormorant text-2xl mb-2">{item.title}</p>
                      <p className="text-gold text-sm font-inter">{item.location}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-cormorant font-semibold text-sage mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sage/70 font-inter text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs font-inter text-sage/50">
                    <span>{item.season} • {item.guests} guests</span>
                    <Button variant="link" className="text-gold hover:text-gold-dark p-0 text-xs">
                      View Details <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" shape="pill" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
              Load More Events
            </Button>
          </div>
        </div>
      </section>

      <AsSeenIn />

      <InquirySection />

      <Footer />
    </div>
  );
}
