'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface HeroBlockProps {
  data: {
    headline?: string;
    tagline?: string;
    text?: string;
    backgroundImage?: string;
    style?: {
      textAlign?: 'left' | 'center' | 'right';
      height?: 'auto' | 'screen' | 'large' | 'medium' | 'small';
      padding?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      };
      margin?: {
        top?: number;
        bottom?: number;
      };
      backgroundColor?: string;
      textColor?: string;
      overlayOpacity?: string;
    };
    actions?: Array<{
      label: string;
      link: string;
      style: 'primary' | 'secondary' | 'outline' | 'ghost';
    }>;
  };
}

export default function HeroBlock({ data }: HeroBlockProps) {
  const { headline, tagline, text, backgroundImage, style = {}, actions = [] } = data;

  const heightClasses = {
    auto: 'min-h-[400px]',
    screen: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
    small: 'min-h-[40vh]',
  };

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const buttonVariants = {
    primary: 'gold',
    secondary: 'outline',
    outline: 'outline',
    ghost: 'ghost',
  } as const;

  return (
    <section
      className={`relative ${heightClasses[style.height || 'screen']} flex items-center justify-center overflow-hidden`}
      style={{
        paddingTop: style.padding?.top || 0,
        paddingBottom: style.padding?.bottom || 0,
        paddingLeft: style.padding?.left || 0,
        paddingRight: style.padding?.right || 0,
        marginTop: style.margin?.top || 0,
        marginBottom: style.margin?.bottom || 0,
      }}
    >
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: style.backgroundColor || '' }}
        />
      )}

      {/* Overlay */}
      {style.overlayOpacity && (
        <div
          className="absolute inset-0 bg-charcoal"
          style={{ opacity: style.overlayOpacity }}
        />
      )}

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className={`relative z-10 max-w-[1180px] mx-auto px-6 ${alignmentClasses[style.textAlign || 'center']}`}>
        {headline && (
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold mb-6 leading-tight animate-fade-in"
            style={{ color: style.textColor || 'white' }}
            dangerouslySetInnerHTML={{ __html: headline || '' }}
          />
        )}

        {tagline && (
          <p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-inter leading-relaxed animate-fade-in animation-delay-200"
            style={{ color: style.textColor || 'rgba(233, 237, 241, 0.8)' }}
          >
            {tagline}
          </p>
        )}

        {text && (
          <div
            className="prose prose-lg mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-200"
            style={{ color: style.textColor || 'rgba(233, 237, 241, 0.8)' }}
            dangerouslySetInnerHTML={{ __html: text || '' }}
          />
        )}

        {actions.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            {actions.map((action, index) => (
              <Link key={index} href={action.link}>
                <Button
                  variant={buttonVariants[action.style]}
                  shape="pill"
                  size="lg"
                >
                  {action.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-gold rotate-90" />
      </div>
    </section>
  );
}
