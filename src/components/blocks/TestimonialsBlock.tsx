'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface TestimonialsBlockProps {
  data: {
    headline?: string;
    layout?: 'grid' | 'carousel' | 'masonry';
    testimonials?: Array<{
      name: string;
      role?: string;
      quote: string;
      image?: string;
      rating?: number;
    }>;
    style?: {
      backgroundColor?: string;
      showQuoteMarks?: boolean;
      showRatings?: boolean;
    };
  };
}

export default function TestimonialsBlock({ data }: TestimonialsBlockProps) {
  const { headline, layout = 'grid', testimonials = [], style = {} } = data;

  const layoutClasses = {
    grid: 'grid grid-cols-1 md:grid-cols-3 gap-8',
    carousel: 'flex overflow-x-auto space-x-8 snap-x',
    masonry: 'columns-1 md:columns-2 lg:columns-3 space-y-8',
  };

  return (
    <section
      className="py-20 md:py-24"
      style={{
        backgroundColor: style.backgroundColor || '',
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6">
        {headline && (
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-cormorant font-bold text-white mb-4"
              dangerouslySetInnerHTML={{ __html: headline || '' }}
            />
          </div>
        )}

        <div className={layoutClasses[layout]}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white/10 border-gold/20 ${layout === 'carousel' ? 'min-w-[350px] snap-start' : ''}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mb-2 object-cover"
                      />
                    )}
                    <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                    {testimonial.role && (
                      <CardDescription className="text-gold/80">{testimonial.role}</CardDescription>
                    )}
                  </div>
                  {style.showQuoteMarks !== false && (
                    <Quote className="w-8 h-8 text-gold/30" />
                  )}
                </div>
                {style.showRatings !== false && testimonial.rating && (
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < (testimonial.rating || 0) ? 'fill-gold text-gold' : 'text-gold/30'}`}
                      />
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div
                  className="text-text-light/90 font-inter leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: testimonial.quote || '' }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
