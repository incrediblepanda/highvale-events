'use client';

import React from 'react';

interface ContentBlockProps {
  data: {
    headline?: string;
    content?: string;
    layout?: 'single-column' | 'two-column' | 'sidebar-left' | 'sidebar-right';
    style?: {
      padding?: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      };
      backgroundColor?: string;
      maxWidth?: number;
    };
  };
}

export default function ContentBlock({ data }: ContentBlockProps) {
  const { headline, content, layout = 'single-column', style = {} } = data;

  const layoutClasses = {
    'single-column': 'max-w-4xl mx-auto',
    'two-column': 'grid grid-cols-1 md:grid-cols-2 gap-8',
    'sidebar-left': 'grid grid-cols-1 md:grid-cols-3 gap-8',
    'sidebar-right': 'grid grid-cols-1 md:grid-cols-3 gap-8',
  };

  const renderContent = () => {
    if (layout === 'single-column') {
      return (
        <div className={layoutClasses[layout]}>
          {headline && (
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-8">
              {headline}
            </h2>
          )}
          <div
            className="prose prose-lg prose-sage max-w-none font-inter"
            dangerouslySetInnerHTML={{ __html: content || '' }}
          />
        </div>
      );
    }

    if (layout === 'two-column') {
      return (
        <>
          {headline && (
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-8 col-span-full">
              {headline}
            </h2>
          )}
          <div className={layoutClasses[layout]}>
            <div
              className="prose prose-lg prose-sage max-w-none font-inter"
              dangerouslySetInnerHTML={{ __html: content || '' }}
            />
          </div>
        </>
      );
    }

    if (layout === 'sidebar-left' || layout === 'sidebar-right') {
      const sidebarFirst = layout === 'sidebar-left';
      return (
        <>
          {headline && (
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-8">
              {headline}
            </h2>
          )}
          <div className={layoutClasses[layout]}>
            <div className={sidebarFirst ? 'md:col-span-1' : 'md:col-span-2'}>
              {/* This would be sidebar content in a real implementation */}
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="font-cormorant text-xl font-semibold text-sage mb-4">Quick Links</h3>
                <div className="space-y-2 text-sage/70 font-inter text-sm">
                  <p>Sidebar content here</p>
                </div>
              </div>
            </div>
            <div className={sidebarFirst ? 'md:col-span-2' : 'md:col-span-1'}>
              <div
                className="prose prose-lg prose-sage max-w-none font-inter"
                dangerouslySetInnerHTML={{ __html: content || '' }}
              />
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <section
      className="py-20 md:py-24"
      style={{
        backgroundColor: style.backgroundColor || '#FBFAF7',
        paddingTop: style.padding?.top || 80,
        paddingBottom: style.padding?.bottom || 96,
        paddingLeft: style.padding?.left || 0,
        paddingRight: style.padding?.right || 0,
      }}
    >
      <div
        className="mx-auto px-6"
        style={{
          maxWidth: style.maxWidth ? `${style.maxWidth}px` : '1180px',
        }}
      >
        {renderContent()}
      </div>
    </section>
  );
}
