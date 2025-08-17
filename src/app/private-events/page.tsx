'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Heart, Utensils, Snowflake, Music, Flower, ChevronRight } from 'lucide-react';

export default function PrivateEvents() {
  const eventTypes = [
    {
      icon: <Gift className="w-8 h-8 text-gold" />,
      title: 'Milestone Birthdays',
      description: 'Celebrate life\'s defining moments with events that blend personal significance and sophisticated style.',
      examples: ['Sweet 16', '21st Birthday', '50th Celebration', 'Centennial Parties']
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: 'Anniversaries',
      description: 'Mark enduring love with intimate, romantic gatherings or grand celebrations.',
      examples: ['Silver Anniversary', 'Golden Anniversary', 'Vow Renewals', 'Surprise Celebrations']
    },
    {
      icon: <Utensils className="w-8 h-8 text-gold" />,
      title: 'Dinner Parties',
      description: 'Curated dining experiences that delight guests and create lasting memories.',
      examples: ['Wine Pairings', 'Chef\'s Table', 'Garden Parties', 'Cocktail Soirées']
    },
    {
      icon: <Snowflake className="w-8 h-8 text-gold" />,
      title: 'Seasonal & Holiday Events',
      description: 'Festive affairs infused with distinctive design and impeccable hospitality.',
      examples: ['Holiday Galas', 'New Year\'s Eve', 'Spring Celebrations', 'Harvest Dinners']
    }
  ];

  const eventSpotlights = [
    {
      title: 'Autumn Harvest Dinner',
      description: 'An enchanting autumn harvest dinner under twinkling lights, featuring farm-to-table cuisine and rustic elegance.',
      season: 'Fall',
      guests: '40 guests'
    },
    {
      title: '50th Birthday Celebration',
      description: 'A sophisticated milestone celebration with live jazz, fine wine, and memories spanning five decades.',
      season: 'Summer',
      guests: '150 guests'
    },
    {
      title: 'Winter Holiday Gathering',
      description: 'An intimate winter holiday gathering dressed in rich textures, warm candlelight, and festive splendor.',
      season: 'Winter',
      guests: '60 guests'
    },
    {
      title: 'Garden Tea Party',
      description: 'An elegant afternoon tea in a blooming garden setting with delicate pastries and champagne.',
      season: 'Spring',
      guests: '30 guests'
    },
    {
      title: 'Silver Anniversary',
      description: 'A romantic celebration of 25 years, featuring silver accents, memory lane displays, and heartfelt toasts.',
      season: 'Summer',
      guests: '100 guests'
    },
    {
      title: 'New Year\'s Eve Gala',
      description: 'A glamorous countdown to midnight with champagne towers, live entertainment, and golden details.',
      season: 'Winter',
      guests: '200 guests'
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
            Celebrations Designed<br />
            to <span className="text-gold italic">Captivate</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-10 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in animation-delay-200">
            From milestone birthdays to refined soirées, every occasion is transformed into an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button variant="gold" shape="pill" size="lg">
              Start Planning Your Event
            </Button>
            <Button variant="outline" shape="pill" size="lg">
              View Event Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Event <span className="text-gold italic">Expertise</span>
            </h2>
            <p className="text-lg text-sage/70 max-w-2xl mx-auto font-inter">
              Occasions elevated with style and intention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="mr-6">{event.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-cormorant font-semibold text-sage mb-3">
                      {event.title}
                    </h3>
                    <p className="text-sage/70 font-inter text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.examples.map((example, idx) => (
                        <span key={idx} className="text-xs font-inter text-gold bg-gold/10 px-3 py-1 rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Spotlights */}
      <section className="py-20 md:py-24 bg-gradient-split">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white mb-4">
              Event <span className="text-gold italic">Spotlights</span>
            </h2>
            <p className="text-lg text-text-light/80 max-w-2xl mx-auto font-inter">
              Recent celebrations that showcase our creative vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventSpotlights.map((spotlight, index) => (
              <Card key={index} className="bg-white/10 border-gold/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{spotlight.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm font-inter text-gold/80">
                    <span>{spotlight.season}</span>
                    <span>•</span>
                    <span>{spotlight.guests}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light/90 font-inter text-sm leading-relaxed">
                    {spotlight.description}
                  </p>
                  <Button variant="link" className="text-gold hover:text-gold-dark mt-4 p-0">
                    View Gallery <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Process */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Our Event Planning <span className="text-gold italic">Process</span>
            </h2>
            <p className="text-lg text-sage/70 max-w-2xl mx-auto font-inter">
              A personalized approach to every celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold">
                <span className="text-2xl font-cormorant font-bold text-gold">01</span>
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-sage mb-2">Consultation</h3>
              <p className="text-sage/70 font-inter text-sm">Understanding your vision and celebration goals</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold">
                <span className="text-2xl font-cormorant font-bold text-gold">02</span>
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-sage mb-2">Concept</h3>
              <p className="text-sage/70 font-inter text-sm">Creating a unique theme and design direction</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold">
                <span className="text-2xl font-cormorant font-bold text-gold">03</span>
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-sage mb-2">Curation</h3>
              <p className="text-sage/70 font-inter text-sm">Selecting perfect vendors and venue details</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold">
                <span className="text-2xl font-cormorant font-bold text-gold">04</span>
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-sage mb-2">Celebration</h3>
              <p className="text-sage/70 font-inter text-sm">Flawless execution of your special day</p>
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
