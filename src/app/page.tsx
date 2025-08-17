'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Luxury Weddings',
      description: 'Create the wedding of your dreams with our meticulous attention to detail and creative vision.',
      href: '/weddings',
      buttonText: 'Plan Your Wedding'
    },
    {
      title: 'Bachelorette Parties',
      description: 'Celebrate the bride-to-be with an unforgettable experience tailored to her unique style and personality.',
      href: '/private-events',
      buttonText: 'Start Planning'
    },
    {
      title: 'Party Planning',
      description: 'From intimate gatherings to grand celebrations, we bring your special occasions to life with elegance.',
      href: '/private-events',
      buttonText: 'Explore Options'
    }
  ];

  const processSteps = [
    {
      number: 'Phase 1',
      title: 'Discovery',
      description: 'We begin with understanding your vision, style, and unique requirements for your celebration.'
    },
    {
      number: 'Phase 2',
      title: 'Planning',
      description: 'Detailed planning of logistics, timelines, and vendor selection tailored to your needs.'
    },
    {
      number: 'Phase 3',
      title: 'Design',
      description: 'Our creative team brings your vision to life with bespoke design concepts and styling.'
    },
    {
      number: 'Phase 4',
      title: 'Execution',
      description: 'Flawless delivery of your event with our dedicated team managing every detail.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & Michael',
      eventType: 'Wedding',
      content: 'Highvale Events transformed our wedding into the most magical day of our lives. Every detail was perfect and their team made everything seamless.'
    },
    {
      name: 'Emma T.',
      eventType: 'Bachelorette Party',
      content: 'The most incredible bachelorette weekend! They thought of everything and created memories that will last a lifetime.'
    },
    {
      name: 'The Johnson Family',
      eventType: 'Anniversary Celebration',
      content: 'Our 25th anniversary party exceeded every expectation. The attention to detail and personal touches made it truly special.'
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I book for my wedding?',
      answer: 'We recommend booking 12-18 months in advance for weddings to ensure availability and ample planning time. However, we can accommodate shorter timelines depending on the season and our availability.'
    },
    {
      question: 'What is included in your wedding planning services?',
      answer: 'Our comprehensive wedding planning includes venue selection, vendor management, design and décor, timeline creation, budget management, and full day-of coordination. We handle every detail so you can enjoy your engagement and wedding day.'
    },
    {
      question: 'Do you offer different planning packages?',
      answer: 'Yes! We offer full-service planning, partial planning, and day-of coordination packages. Each can be customized to meet your specific needs and budget. We\'ll discuss the best option during your consultation.'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-sage"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-[1180px] mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cormorant font-bold text-white mb-6 leading-tight animate-fade-in">
            Creating <span className="text-gold italic">Unforgettable</span><br />
            Moments That Matter
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-10 max-w-2xl mx-auto font-inter leading-relaxed animate-fade-in animation-delay-200">
            From intimate gatherings to grand celebrations, we transform your vision into extraordinary experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Link href="/weddings">
              <Button variant="gold" shape="pill" size="lg">
                Start Planning Your Event
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" shape="pill" size="lg">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gold rotate-90" />
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Our <span className="text-gold italic">Services</span>
            </h2>
            <p className="text-lg text-sage/70 max-w-2xl mx-auto font-inter">
              We specialize in creating memorable celebrations tailored to your unique vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col h-full">
                <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                  {/* Placeholder Image - extends to card edges */}
                  <div className="h-48 bg-gradient-sage relative overflow-hidden">
                    <div className="absolute inset-0 bg-charcoal/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white/50 font-inter text-sm">Image Placeholder</p>
                    </div>
                  </div>

                  {/* Card Content with flex-grow to push button to bottom */}
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-2xl font-cormorant font-semibold text-sage mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sage/70 font-inter text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Link href={service.href} className="block">
                      <Button variant="gold" shape="pill" size="sm" className="w-full">
                        {service.buttonText}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-24 bg-gradient-sage">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white mb-4">
              Our <span className="text-gold italic">Process</span>
            </h2>
            <p className="text-lg text-text-light/80 max-w-2xl mx-auto font-inter">
              A seamless journey from concept to celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line (hidden on mobile and last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gold/30 -z-10"></div>
                )}

                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold">
                    <span className="text-xl font-cormorant font-bold text-gold">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-light/70 font-inter text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-24 bg-gradient-split">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white mb-4">
              Client <span className="text-gold italic">Love</span>
            </h2>
            <p className="text-lg text-text-light/80 max-w-2xl mx-auto font-inter">
              Hear from those who've experienced the Highvale difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-gold/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gold/80">{testimonial.eventType}</CardDescription>
                    </div>
                    <div className="text-gold text-2xl">"</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light/90 font-inter leading-relaxed">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Frequently Asked <span className="text-gold italic">Questions</span>
            </h2>
            <p className="text-lg text-sage/70 max-w-2xl mx-auto font-inter">
              Common questions about planning your perfect celebration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-10">
              <Link href="/faq">
                <Button variant="outline" shape="pill" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
                  Have More Questions? Click Here
                </Button>
              </Link>
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
