'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquirySection from '@/components/InquirySection';
import AsSeenIn from '@/components/AsSeenIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Star, Heart, Shield, Target, Diamond } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: 'Alexandra Highvale',
      role: 'Founder & Creative Director',
      bio: 'With over 15 years of experience in luxury event planning, Alexandra brings a unique blend of creativity and precision to every celebration.',
      expertise: ['Creative Vision', 'Design Direction', 'Client Relations']
    },
    {
      name: 'Michael Chen',
      role: 'Senior Event Producer',
      bio: 'Michael\'s meticulous attention to detail and vendor relationships ensure flawless execution of every event.',
      expertise: ['Logistics Management', 'Vendor Relations', 'Timeline Coordination']
    },
    {
      name: 'Isabella Martinez',
      role: 'Lead Wedding Planner',
      bio: 'Isabella specializes in creating romantic, personalized weddings that reflect each couple\'s unique love story.',
      expertise: ['Wedding Design', 'Couple Consultation', 'Day-of Coordination']
    },
    {
      name: 'David Thompson',
      role: 'Corporate Events Director',
      bio: 'David brings corporate celebrations to life with innovative concepts and seamless execution.',
      expertise: ['Corporate Strategy', 'Brand Integration', 'Large-scale Events']
    },
    {
      name: 'Sophie Laurent',
      role: 'Design & Florals Specialist',
      bio: 'Sophie\'s artistic eye transforms spaces into breathtaking environments that captivate and inspire.',
      expertise: ['Floral Design', 'Spatial Planning', 'Color Theory']
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager',
      bio: 'James ensures every logistical detail is perfectly orchestrated from conception to completion.',
      expertise: ['Operations', 'Budget Management', 'Risk Assessment']
    }
  ];

  const values = [
    {
      icon: <Diamond className="w-8 h-8 text-gold" />,
      title: 'Excellence',
      description: 'Unwavering commitment to perfection in every aspect of your celebration.'
    },
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: 'Discretion',
      description: 'Professionalism and privacy throughout the entire planning process.'
    },
    {
      icon: <Star className="w-8 h-8 text-gold" />,
      title: 'Quality',
      description: 'A standard that defines every decision we make for your event.'
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: 'Passion',
      description: 'Genuine love for creating moments that matter and memories that last.'
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: 'Precision',
      description: 'Meticulous attention to detail that ensures flawless execution.'
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: 'Innovation',
      description: 'Creative solutions that push boundaries and exceed expectations.'
    }
  ];

  const milestones = [
    { year: '2010', event: 'Highvale Events founded in Colorado Springs' },
    { year: '2013', event: 'Expanded to serve Denver and Aspen markets' },
    { year: '2015', event: 'Named "Best Event Planner" by Colorado Weddings Magazine' },
    { year: '2018', event: 'Launched destination wedding services' },
    { year: '2020', event: 'Adapted with innovative virtual and hybrid events' },
    { year: '2024', event: 'Celebrating 500+ successful events and counting' }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
            The Highvale<br />
            <span className="text-gold italic">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-10 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in animation-delay-200">
            Rooted in Colorado Springs, inspired by destinations near and far.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-6">
                Our <span className="text-gold italic">Story</span>
              </h2>
              <p className="text-sage/70 font-inter leading-relaxed mb-6">
                Highvale Events was founded with a singular vision: to create celebrations that transcend the ordinary.
                What began as a passion project in 2010 has evolved into Colorado's premier event planning company,
                known for transforming dreams into extraordinary realities.
              </p>
              <p className="text-sage/70 font-inter leading-relaxed mb-6">
                Guided by a deep appreciation for artistry, precision, and personalization, we craft experiences that
                reflect the essence of each client's story. Our approach combines timeless elegance with innovative
                design, ensuring every event is as unique as the people we serve.
              </p>
              <p className="text-sage/70 font-inter leading-relaxed">
                Whether orchestrating an intimate gathering in the heart of Colorado or a grand celebration across the
                globe, we bring grace and excellence to every detail. Our commitment to perfection and genuine passion
                for celebration has earned us the trust of discerning clients who seek nothing less than extraordinary.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-sage rounded-lg p-8 text-white">
                <h3 className="text-2xl font-cormorant font-semibold mb-4">500+</h3>
                <p className="font-inter text-text-light/80">Successful Events</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-cormorant font-semibold text-gold mb-2">14</h3>
                  <p className="font-inter text-sm text-sage/70">Years of Excellence</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-cormorant font-semibold text-gold mb-2">98%</h3>
                  <p className="font-inter text-sm text-sage/70">Client Satisfaction</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-cormorant font-semibold text-gold mb-2">25+</h3>
                <p className="font-inter text-sm text-sage/70">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Our <span className="text-gold italic">Journey</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gold/30"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1">
                  <div className={`${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <p className="text-2xl font-cormorant font-bold text-gold mb-2">{milestone.year}</p>
                    <p className="text-sage/70 font-inter">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-sage mb-4">
              Meet Our <span className="text-gold italic">Team</span>
            </h2>
            <p className="text-lg text-sage/70 max-w-2xl mx-auto font-inter">
              Dedicated professionals passionate about creating extraordinary celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="h-32 bg-gradient-sage rounded-lg mb-4"></div>
                  <CardTitle className="text-xl text-sage">{member.name}</CardTitle>
                  <p className="text-gold text-sm font-inter">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sage/70 font-inter text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="text-xs font-inter text-sage/60 bg-gold/10 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-24 bg-gradient-sage">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white mb-4">
              Our Core <span className="text-gold italic">Values</span>
            </h2>
            <p className="text-lg text-text-light/80 max-w-2xl mx-auto font-inter">
              The principles that guide every decision and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-cormorant font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-text-light/70 font-inter text-sm">
                  {value.description}
                </p>
              </div>
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
