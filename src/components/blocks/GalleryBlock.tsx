'use client';

import React, { useState } from 'react';

interface GalleryBlockProps {
  data: {
    headline?: string;
    layout?: 'grid' | 'masonry' | 'carousel' | 'lightbox';
    columns?: '2' | '3' | '4' | '5' | '6';
    images?: Array<{
      image: string;
      caption?: string;
      alt?: string;
    }>;
    style?: {
      imageSpacing?: number;
      imageEffect?: 'none' | 'zoom' | 'fade' | 'grayscale' | 'blur';
      showCaptions?: boolean;
      imageBorderRadius?: 'none' | 'small' | 'medium' | 'large' | 'round';
    };
  };
}

export default function GalleryBlock({ data }: GalleryBlockProps) {
  const { headline, layout = 'grid', columns = '3', images = [], style = {} } = data;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const columnClasses = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    '5': 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5',
    '6': 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6',
  };

  const radiusClasses = {
    none: 'rounded-none',
    small: 'rounded',
    medium: 'rounded-lg',
    large: 'rounded-xl',
    round: 'rounded-full',
  };

  const effectClasses = {
    none: '',
    zoom: 'hover:scale-110',
    fade: 'hover:opacity-75',
    grayscale: 'hover:grayscale',
    blur: 'hover:blur-sm',
  };

  const renderGallery = () => {
    if (layout === 'masonry') {
      return (
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4" style={{ columnGap: `${style.imageSpacing || 16}px` }}>
          {images.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={img.image}
                alt={img.alt || img.caption || ''}
                className={`w-full transition-all duration-300 ${radiusClasses[style.imageBorderRadius || 'medium']} ${effectClasses[style.imageEffect || 'none']}`}
              />
              {style.showCaptions && img.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-inter">{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (layout === 'carousel') {
      return (
        <div className="overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img.image}
                  alt={img.alt || img.caption || ''}
                  className={`h-64 w-auto transition-all duration-300 ${radiusClasses[style.imageBorderRadius || 'medium']} ${effectClasses[style.imageEffect || 'none']}`}
                />
                {style.showCaptions && img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                    <p className="text-white text-sm font-inter">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Default grid layout
    return (
      <div
        className={`grid ${columnClasses[columns]} gap-${style.imageSpacing || 4}`}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => layout === 'lightbox' && setSelectedImage(index)}
          >
            <img
              src={img.image}
              alt={img.alt || img.caption || ''}
              className={`w-full h-full object-cover transition-all duration-300 ${radiusClasses[style.imageBorderRadius || 'medium']} ${effectClasses[style.imageEffect || 'none']}`}
            />
            {style.showCaptions && img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-inter">{img.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 md:py-24 bg-cream">
      <div className="max-w-[1180px] mx-auto px-6">
        {headline && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage">
              {headline}
            </h2>
          </div>
        )}

        {renderGallery()}

        {/* Lightbox Modal */}
        {layout === 'lightbox' && selectedImage !== null && (
          <div
            className="fixed inset-0 bg-charcoal/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <img
                src={images[selectedImage].image}
                alt={images[selectedImage].alt || images[selectedImage].caption || ''}
                className="max-w-full max-h-[90vh] object-contain"
              />
              {images[selectedImage].caption && (
                <p className="text-white text-center mt-4 font-inter">
                  {images[selectedImage].caption}
                </p>
              )}
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-gold"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
