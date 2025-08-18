'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ServicesBlockProps {
  data: {
    headline?: string;
    subheadline?: string;
    columns?: '1' | '2' | '3' | '4' | '6';
    services?: Array<{
      title: string;
      description: string;
      image?: string;
      buttonText?: string;
      buttonLink?: string;
    }>;
    style?: {
      backgroundColor?: string;
      padding?: {
        top?: number;
        bottom?: number;
      };
      cardStyle?: 'minimal' | 'shadow' | 'border' | 'gradient';
      imagePosition?: 'top' | 'left' | 'right' | 'background';
    };
  };
}

export default function ServicesBlock({ data }: ServicesBlockProps) {
  const { headline, subheadline, columns = '3', services = [], style = {} } = data;

  const columnClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    '6': 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6',
  };

  const cardStyles = {
    minimal: 'bg-white',
    shadow: 'bg-white shadow-lg hover:shadow-xl',
    border: 'bg-white border border-sage/20',
    gradient: 'bg-gradient-to-br from-white to-cream',
  };

  return (
    <section
      className="py-20 md:py-24"
      style={{
        backgroundColor: style.backgroundColor || '#FBFAF7',
        paddingTop: style.padding?.top || 80,
        paddingBottom: style.padding?.bottom || 96,
      }}
    >
      <div className="max-w-[1180px] mx-auto px-6">
        {(headline || subheadline) && (
          <div className="text-center mb-16">
            {headline && (
              <h2
                className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4"
                dangerouslySetInnerHTML={{ __html: headline || '' }}
              />
            )}
            {subheadline && (
              <p className="text-lg text-sage/70 max-w-2xl mx-auto font-inter">
                {subheadline}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${columnClasses[columns]} gap-8`}>
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-full">
              <Card className={`flex flex-col h-full overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${cardStyles[style.cardStyle || 'shadow']}`}>
                {/* Image handling based on position */}
                {service.image && style.imagePosition === 'top' && (
                  <div className="h-48 bg-gradient-sage relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {style.imagePosition === 'background' && service.image && (
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                )}

                <div className="flex flex-col flex-grow p-6 relative">
                  {style.imagePosition === 'left' && service.image && (
                    <div className="flex items-start mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-16 h-16 rounded-lg mr-4 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-cormorant font-semibold text-sage mb-2">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  )}

                  {style.imagePosition !== 'left' && (
                    <h3 className="text-2xl font-cormorant font-semibold text-sage mb-2">
                      {service.title}
                    </h3>
                  )}

                  <div
                    className="text-sage/70 font-inter text-sm leading-relaxed mb-6 flex-grow"
                    dangerouslySetInnerHTML={{ __html: service.description || '' }}
                  />

                  {service.buttonText && service.buttonLink && (
                    <Link href={service.buttonLink} className="block">
                      <Button variant="gold" shape="pill" size="sm" className="w-full">
                        {service.buttonText}
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
