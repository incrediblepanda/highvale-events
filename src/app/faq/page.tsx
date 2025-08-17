'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Calendar, DollarSign, MapPin, Users } from 'lucide-react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');

  const faqCategories = [
    { id: 'general', label: 'General Questions', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'planning', label: 'Planning Process', icon: <Calendar className="w-4 h-4" /> },
    { id: 'pricing', label: 'Pricing & Payments', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'logistics', label: 'Logistics', icon: <MapPin className="w-4 h-4" /> },
    { id: 'services', label: 'Services', icon: <Users className="w-4 h-4" /> }
  ];

  const faqs = {
    general: [
      {
        question: 'How far in advance should I book your services?',
        answer: 'We recommend 12 to 18 months for weddings and 3 to 6 months for private events. However, we understand that timelines can vary and we\'ll do our best to accommodate your needs based on our availability. For corporate events, 2-4 months is typically sufficient, though large-scale galas may require more time.'
      },
      {
        question: 'Do you plan events outside Colorado Springs?',
        answer: 'Yes! While we\'re based in Colorado Springs, we serve clients throughout Colorado including Denver, Aspen, Vail, and Boulder. We also offer destination event planning services nationwide and internationally. Additional travel fees may apply for events outside our primary service area.'
      },
      {
        question: 'What makes Highvale Events different from other planners?',
        answer: 'Our commitment to excellence, attention to detail, and personalized approach set us apart. With over 14 years of experience, 500+ successful events, and a team of dedicated professionals, we bring both creativity and precision to every celebration. We don\'t just plan events; we craft experiences that reflect your unique story.'
      },
      {
        question: 'Can you work with my preferred vendors?',
        answer: 'Absolutely! While we have established relationships with premium vendors we trust, we\'re happy to work with vendors you prefer. We\'ll coordinate with them to ensure seamless service and can even help vet new vendors if needed.'
      }
    ],
    planning: [
      {
        question: 'What is included in your full-service planning?',
        answer: 'Full-service planning includes initial consultation, concept creation, venue selection, complete vendor management, design development, budget management, timeline creation, RSVP management, rehearsal coordination, and complete day-of coordination. We handle every detail from start to finish, allowing you to enjoy the journey.'
      },
      {
        question: 'How many meetings will we have during the planning process?',
        answer: 'This varies based on your package and event complexity. Full-service clients typically have 8-12 meetings, partial planning clients have 4-6 meetings, and day-of coordination includes 2-3 meetings. We\'re always available via phone and email between scheduled meetings.'
      },
      {
        question: 'Do you help with design and décor?',
        answer: 'Yes! Our team includes design specialists who will work with you to create a cohesive aesthetic for your event. From color palettes and floral design to lighting and table settings, we ensure every visual element aligns with your vision.'
      },
      {
        question: 'Can you help us stay within our budget?',
        answer: 'Budget management is one of our core services. We\'ll help you allocate funds effectively, suggest cost-saving alternatives without compromising quality, negotiate with vendors on your behalf, and track all expenses to ensure you stay within your budget.'
      }
    ],
    pricing: [
      {
        question: 'How are your services priced?',
        answer: 'Our pricing is transparent and based on the scope of services, event size, and complexity. Wedding planning starts at $3,500 for day-of coordination, $7,500 for partial planning, and $15,000 for full planning. Private events and corporate events are custom quoted based on your specific needs.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans to make our services accessible. Typically, we require a 25% deposit to secure your date, with the balance divided into monthly payments leading up to your event. We can customize a payment schedule that works for you.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'Never. We believe in complete transparency. Our contracts clearly outline all fees, and any additional services or expenses are discussed and approved by you before we proceed. Travel fees for events outside our service area are disclosed upfront.'
      },
      {
        question: 'What\'s included in the pricing?',
        answer: 'Our quoted price includes all planning services, coordination, and our time. Vendor fees, venue costs, and other event expenses are separate and paid directly to those providers. We\'ll help you understand and manage all costs associated with your event.'
      }
    ],
    logistics: [
      {
        question: 'Do you handle venue selection?',
        answer: 'Yes! We\'ll help you find the perfect venue based on your vision, guest count, and budget. We have relationships with premier venues throughout Colorado and can negotiate contracts on your behalf. We\'ll accompany you on venue tours and help you make the best choice.'
      },
      {
        question: 'How do you handle day-of coordination?',
        answer: 'Our team arrives early to oversee setup, coordinate with all vendors, manage the timeline, handle any issues that arise, and ensure smooth transitions throughout your event. You and your guests can relax and enjoy while we handle all the details behind the scenes.'
      },
      {
        question: 'What if something goes wrong on the event day?',
        answer: 'Our experienced team is prepared for any situation. We have contingency plans for common issues and the expertise to handle unexpected challenges discreetly. We maintain an emergency kit, have vendor backup options, and our team\'s quick thinking ensures your guests never know if something doesn\'t go as planned.'
      },
      {
        question: 'How many team members will be at my event?',
        answer: 'This depends on your event size and complexity. Typically, we have a lead coordinator and 1-3 assistants. For weddings over 150 guests or complex corporate events, we may have additional team members to ensure flawless execution.'
      }
    ],
    services: [
      {
        question: 'Do you offer day-of coordination services?',
        answer: 'Yes! Our day-of coordination (actually month-of) service is perfect for couples who\'ve planned their wedding but want professional execution. We\'ll review all your plans, create a detailed timeline, coordinate with vendors, and manage your entire wedding day.'
      },
      {
        question: 'Can you help with corporate events?',
        answer: 'Absolutely! We specialize in corporate galas, product launches, company celebrations, team building events, and executive retreats. Our corporate division understands the unique needs of business events and ensures your brand is perfectly represented.'
      },
      {
        question: 'Do you provide floral design services?',
        answer: 'Yes, we have an in-house floral design specialist who can create stunning arrangements for your event. We can also work with external florists if you have a specific vendor in mind or particular style preference.'
      },
      {
        question: 'Can you help with destination events?',
        answer: 'Yes! We love destination events and have experience planning celebrations across the country and internationally. We\'ll handle all logistics, vendor coordination, and guest management to ensure your destination event is as smooth as a local one.'
      }
    ]
  };

  const currentFAQs = faqs[activeCategory as keyof typeof faqs] || [];

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
            Your Questions,<br />
            <span className="text-gold italic">Expertly Answered</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-10 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in animation-delay-200">
            Planning a celebration should be exciting, not overwhelming. Here are answers to our most frequently asked questions.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white sticky top-[100px] z-40 shadow-sm">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-inter text-sm transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-sage text-white shadow-lg'
                    : 'bg-white text-sage border border-sage/20 hover:border-gold hover:text-gold'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-[900px] mx-auto px-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {currentFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:text-gold py-6">
                  <span className="font-cormorant text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="font-inter text-sage/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Still Have <span className="text-gold italic">Questions</span>?
            </h2>
            <p className="text-lg text-sage/70 mb-10 max-w-2xl mx-auto font-inter">
              We're here to help! Reach out for a personalized consultation and let's discuss your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-10">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-cormorant font-semibold text-sage mb-2">Schedule a Call</h3>
                <p className="text-sage/70 font-inter text-sm">Book a free 30-minute consultation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-cormorant font-semibold text-sage mb-2">Meet In Person</h3>
                <p className="text-sage/70 font-inter text-sm">Visit our Colorado Springs studio</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-cormorant font-semibold text-sage mb-2">Email Us</h3>
                <p className="text-sage/70 font-inter text-sm">Get answers within 24 hours</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" shape="pill" size="lg">
                Request a Consultation
              </Button>
              <Button variant="outline" shape="pill" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
                Download Planning Guide
              </Button>
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
