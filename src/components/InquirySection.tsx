'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Send } from 'lucide-react';

export default function InquirySection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be replaced with HoneyBook integration
    console.log('Quick inquiry submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: ''
    });
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-sage relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>

      <div className="max-w-[1180px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-white mb-4">
            Start Your <span className="text-gold italic">Journey</span> With Us
          </h2>
          <p className="text-lg text-text-light/80 max-w-2xl mx-auto font-inter">
            Tell us about your vision and we'll bring it to life with elegance and precision.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 md:p-10 bg-white/95 backdrop-blur-sm shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sage font-inter text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter transition-all"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sage font-inter text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter transition-all"
                  placeholder="Your last name"
                />
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sage font-inter text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sage font-inter text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Event Details Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sage font-inter text-sm font-medium mb-2">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter transition-all"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="private">Private Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sage font-inter text-sm font-medium mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sage font-inter text-sm font-medium mb-2">
                Tell Us About Your Vision *
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter resize-none transition-all"
                placeholder="Share your ideas, themes, or any special requirements for your event..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button type="submit" variant="gold" shape="pill" size="lg" className="px-10 flex items-center gap-2 mx-auto">
                <Send className="w-4 h-4" />
                Send Inquiry
              </Button>
              <p className="text-sage/60 font-inter text-xs mt-4">
                We'll respond within 24 hours • Your information is secure
              </p>
            </div>
          </form>
        </Card>

        {/* Additional CTA */}
        <div className="text-center mt-10">
          <p className="text-text-light/80 font-inter mb-4">
            Prefer to speak with us directly?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" shape="pill" size="sm" className="border-white text-white hover:bg-white/10">
              Call (719) 555-0100
            </Button>
            <Link href="/contact">
              <Button variant="outline" shape="pill" size="sm" className="border-white text-white hover:bg-white/10">
                View Full Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
