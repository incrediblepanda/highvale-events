'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AsSeenIn from '@/components/AsSeenIn';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Mail, Phone, Calendar, Users, Heart } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    venue: '',
    budget: '',
    message: '',
    howHeard: ''
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
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will be in touch within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-sage"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="relative z-10 max-w-[1180px] mx-auto px-6 text-center pt-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-bold text-white mb-6 leading-tight animate-fade-in">
            Let's Create Your<br />
            <span className="text-gold italic">Perfect Event</span>
          </h1>
          <p className="text-lg md:text-xl text-text-light mb-10 max-w-2xl mx-auto font-inter leading-relaxed animate-fade-in animation-delay-200">
            Start your journey with a personalized consultation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-cormorant font-bold text-sage mb-6">
                Get in <span className="text-gold italic">Touch</span>
              </h2>
              <p className="text-sage/70 font-inter mb-8">
                We're here to bring your vision to life. Reach out to start planning your extraordinary event.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <h3 className="font-inter font-semibold text-sage mb-1">Visit Our Studio</h3>
                    <p className="text-sage/70 font-inter text-sm">
                      123 Highvale Avenue<br />
                      Colorado Springs, CO 80903
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <h3 className="font-inter font-semibold text-sage mb-1">Office Hours</h3>
                    <p className="text-sage/70 font-inter text-sm">
                      Monday - Friday: 9AM - 6PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <h3 className="font-inter font-semibold text-sage mb-1">Email Us</h3>
                    <p className="text-sage/70 font-inter text-sm">
                      info@highvaleevents.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <h3 className="font-inter font-semibold text-sage mb-1">Call Us</h3>
                    <p className="text-sage/70 font-inter text-sm">
                      (719) 555-0100
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Notice */}
              <Card className="mt-8 p-6 bg-sage text-text-light">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <h3 className="font-inter font-semibold mb-2">Our Promise</h3>
                    <p className="text-text-light/80 font-inter text-sm">
                      We respond to all inquiries within 24 hours. Your dream event deserves our immediate attention.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-xl bg-white">
                <h2 className="text-3xl font-cormorant font-bold text-sage mb-6">
                  Event Inquiry <span className="text-gold italic">Form</span>
                </h2>
                <p className="text-sage/70 font-inter mb-8">
                  Tell us about your vision and we'll craft an unforgettable experience.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
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
                        className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
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
                        className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
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
                        className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
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
                        className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Event Details */}
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
                        className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Celebration</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="gala">Gala Dinner</option>
                        <option value="other">Other Private Event</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sage font-inter text-sm font-medium mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
                      />
                    </div>
                  </div>

                  {/* Guest Count and Venue */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sage font-inter text-sm font-medium mb-2">
                        Estimated Guest Count
                      </label>
                      <input
                        type="text"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
                        placeholder="Number of guests"
                      />
                    </div>
                    <div>
                      <label className="block text-sage font-inter text-sm font-medium mb-2">
                        Venue (if selected)
                      </label>
                      <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
                        placeholder="Venue name or 'Undecided'"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sage font-inter text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                      <option value="tbd">To Be Determined</option>
                    </select>
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
                      rows={5}
                      className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter resize-none"
                      placeholder="Share your ideas, themes, must-haves, or any special requirements for your event..."
                    />
                  </div>

                  {/* How did you hear about us */}
                  <div>
                    <label className="block text-sage font-inter text-sm font-medium mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold font-inter"
                    >
                      <option value="">Please select</option>
                      <option value="google">Google Search</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="referral">Friend/Family Referral</option>
                      <option value="vendor">Vendor Referral</option>
                      <option value="venue">Venue Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Privacy Notice */}
                  <div className="bg-cream p-4 rounded-md">
                    <p className="text-sage/60 font-inter text-xs">
                      By submitting this form, you agree to our privacy policy and consent to receive communications from Highvale Events.
                      Your information will be handled securely through our HoneyBook CRM system.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button type="submit" variant="gold" shape="pill" size="lg" className="px-12">
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <AsSeenIn />

      <Footer />
    </div>
  );
}
