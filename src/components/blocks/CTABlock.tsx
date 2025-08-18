'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CTABlockProps {
  data: {
    headline?: string;
    text?: string;
    buttons?: Array<{
      label: string;
      link: string;
      style: 'primary' | 'secondary' | 'outline';
    }>;
    style?: {
      backgroundStyle?: 'solid' | 'gradient' | 'image';
      backgroundColor?: string;
      backgroundImage?: string;
      textAlign?: 'left' | 'center' | 'right';
    };
  };
}

export default function CTABlock({ data }: CTABlockProps) {
  const { headline, text, buttons = [], style = {} } = data;

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const buttonVariants = {
    primary: 'gold',
    secondary: 'outline',
    outline: 'outline',
  } as const;

  const getBackgroundStyle = () => {
    if (style.backgroundStyle === 'gradient') {
      return 'bg-gradient-sage';
    }
    if (style.backgroundStyle === 'image' && style.backgroundImage) {
      return '';
    }
    return '';
  };

  return (
    <section
      className={`py-20 md:py-24 relative overflow-hidden ${getBackgroundStyle()}`}
      style={{
        backgroundColor: style.backgroundStyle === 'solid' ? style.backgroundColor : undefined,
      }}
    >
      {/* Background Image */}
      {style.backgroundStyle === 'image' && style.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${style.backgroundImage})` }}
        />
      )}

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className={`max-w-[1180px] mx-auto px-6 relative z-10 ${alignmentClasses[style.textAlign || 'center']}`}>
        {headline && (
          <h2
            className="text-4xl md:text-5xl font-cormorant font-bold text-white mb-6"
            dangerouslySetInnerHTML={{ __html: headline || '' }}
          />
        )}

        {text && (
          <div
            className="text-lg text-text-light/80 max-w-3xl mx-auto mb-10 font-inter leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text || '' }}
          />
        )}

        {buttons.length > 0 && (
          <div className={`flex flex-col sm:flex-row gap-4 ${style.textAlign === 'center' ? 'justify-center' : style.textAlign === 'right' ? 'justify-end' : 'justify-start'}`}>
            {buttons.map((button, index) => (
              <Link key={index} href={button.link}>
                <Button
                  variant={buttonVariants[button.style]}
                  shape="pill"
                  size="lg"
                >
                  {button.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
