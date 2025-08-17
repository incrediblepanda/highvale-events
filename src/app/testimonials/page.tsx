'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & Michael Chen',
      event: 'Wedding',
      date: 'September 2024',
      rating: 5,
      quote: 'Highvale Events transformed our wedding into the most magical day of our lives. Every detail was perfect.',
      review: 'From our first meeting with Alexandra, we knew we were in the best hands. The team\'s attention to detail, creative vision, and flawless execution exceeded every expectation. Our garden wedding was more beautiful than we could have imagined, and our guests are still talking about it months later.'
    },
    {
      name: 'Jennifer Martinez',
      event: 'Corporate Gala',
      date: 'October 2024',
      rating: 5,
      quote: 'Our corporate gala was a tremendous success thanks to Highvale\'s expertise. The atmosphere was unforgettable.',
      review: 'Managing a 500-person corporate event seemed daunting until we partnered with Highvale. David and his team handled every aspect with professionalism and creativity. The event not only met our objectives but became the highlight of our company\'s year.'
    },
    {
      name: 'Robert & Elizabeth Thompson',
      event: '50th Anniversary',
      date: 'July 2024',
      rating: 5,
      quote: 'They captured the essence of our 50 years together in one perfect evening.',
      review: 'Highvale Events created a celebration that honored our journey while bringing together five decades of friends and family. The personal touches, from the memory lane display to the golden details, showed how much they cared about making our day special.'
    },
    {
      name: 'Amanda Foster',
      event: 'Birthday Celebration',
      date: 'May 2024',
      rating: 5,
      quote: 'My 40th birthday party exceeded every expectation. Absolutely stunning!',
      review: 'I wanted something sophisticated yet fun for my milestone birthday, and Highvale delivered beyond my wildest dreams. The attention to detail, from the custom cocktails to the surprise entertainment, made it a night I\'ll never forget.'
    },
    {
      name: 'David & Lauren Mitchell',
      event: 'Destination Wedding',
      date: 'June 2024',
      rating: 5,
      quote: 'They made our destination wedding in Aspen absolutely seamless and breathtaking.',
      review: 'Planning a wedding from out of state seemed impossible until we found Highvale. Isabella guided us through every decision with patience and expertise. The mountain ceremony was spectacular, and the reception was pure magic. We\' couldn\'t have asked for a better team.'
    },
    {
      name: 'TechCorp Industries',
      event: 'Product Launch',
      date: 'November 2024',
      rating: 5,
      quote: 'The product launch event was innovative, engaging, and perfectly executed.',
      review: 'Highvale Events understood our brand vision and translated it into an immersive experience for our guests. The creative concepts, flawless logistics, and attention to our corporate identity made this launch our most successful to date.'
    },
    {
      name: 'Maria Rodriguez',
      event: 'Quinceañera',
      date: 'August 2024',
      rating: 5,
      quote: 'They made my daughter\'s quinceañera a fairytale come true.',
      review: 'Every cultural tradition was honored while adding modern elegance. The team\'s respect for our customs and ability to blend them with contemporary design created a celebration that bridged generations beautifully.'
    },
    {
      name: 'James & Patricia Wilson',
      event: 'Vow Renewal',
      date: 'April 2024',
      rating: 5,
      quote: 'Our 25th anniversary vow renewal was more romantic than our original wedding.',
      review: 'Highvale Events created an intimate, romantic atmosphere that perfectly captured our journey together. The sunset ceremony and candlelit dinner were beyond our dreams. It felt like falling in love all over again.'
    },
    {
      name: 'Global Finance Corp',
      event: 'Annual Awards Gala',
      date: 'December 2023',
      rating: 5,
      quote: 'The most impressive corporate event we\'ve ever hosted.',
      review: 'With 600 attendees and multiple award presentations, this event required military precision. Highvale\'s team managed every detail flawlessly while maintaining an atmosphere of celebration and elegance that impressed our executives and clients alike.'
    },
    {
      name: 'Sophia Laurent',
      event: 'Charity Fundraiser',
      date: 'March 2024',
      rating: 5,
      quote: 'They helped us raise 40% more than our goal while creating an unforgettable evening.',
      review: 'The Highvale team understood that this event was about more than celebration - it was about making a difference. Their creative approach to the auction, entertainment, and guest experience directly contributed to our fundraising success.'
    },
    {
      name: 'Mark & Jessica Davis',
      event: 'Elopement',
      date: 'October 2024',
      rating: 5,
      quote: 'Our intimate mountain elopement was absolutely perfect in every way.',
      review: 'We wanted something small but extraordinary, and Highvale delivered. The stunning location, beautiful florals, and thoughtful details made our elopement feel grand despite being intimate. It was exactly what we dreamed of.'
    },
    {
      name: 'The Anderson Family',
      event: 'Holiday Party',
      date: 'December 2023',
      rating: 5,
      quote: 'The holiday party set a new standard for family gatherings.',
      review: 'Bringing together 80 family members from across the country, Highvale created a warm, festive atmosphere that made everyone feel special. The activities for all ages and beautiful winter wonderland theme made it our best family reunion ever.'
    }
  ];

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
            What Our<br />
            <span className="text-gold italic">Clients Say</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-10 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in animation-delay-200">
            Celebrations brought to life with artistry and precision.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-cormorant font-bold text-gold mb-2">500+</p>
              <p className="text-sage/70 font-inter text-sm">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-cormorant font-bold text-gold mb-2">5.0</p>
              <p className="text-sage/70 font-inter text-sm">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-cormorant font-bold text-gold mb-2">98%</p>
              <p className="text-sage/70 font-inter text-sm">Would Recommend</p>
            </div>
            <div>
              <p className="text-4xl font-cormorant font-bold text-gold mb-2">100%</p>
              <p className="text-sage/70 font-inter text-sm">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-cormorant font-semibold text-sage">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-inter text-sage/60">
                        {testimonial.event} • {testimonial.date}
                      </p>
                    </div>
                    <Quote className="w-8 h-8 text-gold/30" />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sage font-cormorant text-lg italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sage/70 font-inter text-sm leading-relaxed">
                    {testimonial.review}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AsSeenIn />

      <InquirySection />

      <Footer />
    </div>
  );
}
