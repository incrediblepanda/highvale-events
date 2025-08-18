'use client';

import React from 'react';
import { tinaField } from 'tinacms/dist/react';

// Import block components
import HeroBlock from './HeroBlock';
import ServicesBlock from './ServicesBlock';
import TestimonialsBlock from './TestimonialsBlock';
import CTABlock from './CTABlock';
import ContentBlock from './ContentBlock';
import GalleryBlock from './GalleryBlock';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BlockRenderer = ({ blocks }: { blocks: any[] }) => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {blocks?.map((block: any, index: number) => {
        const blockProps = {
          data: block,
          key: index,
          'data-tina-field': tinaField(block),
        };

        switch (block.__typename) {
          case 'PageBlocksHero':
            return <HeroBlock key={index} data={block} />;
          case 'PageBlocksServices':
            return <ServicesBlock key={index} data={block} />;
          case 'PageBlocksTestimonials':
            return <TestimonialsBlock key={index} data={block} />;
          case 'PageBlocksCta':
            return <CTABlock key={index} data={block} />;
          case 'PageBlocksContent':
            return <ContentBlock key={index} data={block} />;
          case 'PageBlocksGallery':
            return <GalleryBlock key={index} data={block} />;
          default:
            return null;
        }
      })}
    </>
  );
};
