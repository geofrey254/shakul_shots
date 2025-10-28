"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Camera, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@shakul.com",
      href: "mailto:hello@studio.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 701 943829",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, KE",
      href: "#"
    }
  ];

  

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .input-focus-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          background: white;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .input-wrapper:focus-within .input-focus-line {
          transform: scaleX(1);
        }

        .contact-card {
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <section className="bg-black px-6 md:px-12 lg:px-16 py-20 text-white border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className="flex items-center gap-1 mb-6 text-sm tracking-wider text-gray-400"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <span>06</span>
            <span className="text-zinc-600">//</span>
            <span className="font-medium">CONTACT US</span>
          </div>

          {/* Title */}
          <div className="mb-16">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-tight mb-6"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
            >
              Let's Create{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-400">
                Something Beautiful
              </span>
            </h2>
            <p
              className="text-gray-400 text-base md:text-lg max-w-2xl"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
            >
              Have a project in mind? We'd love to hear about it. Get in touch and let's make it happen.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div
              className="space-y-8"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
            >
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.href}
                    className="contact-card flex items-center gap-4 p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                      <info.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-zinc-800">
                <p className="text-sm text-gray-500 mb-4">Follow us</p>
                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Camera className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-8 border-t border-zinc-800">
                <p className="text-sm text-gray-500 mb-2">Business Hours</p>
                <p className="text-white">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400 text-sm mt-1">Weekend shoots by appointment</p>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="space-y-6"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
            >
              <div className="space-y-6">
                {/* Name */}
                <div className="input-wrapper relative">
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                  <div className="input-focus-line"></div>
                </div>

                {/* Email */}
                <div className="input-wrapper relative">
                  <label className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                  <div className="input-focus-line"></div>
                </div>

                {/* Phone */}
                <div className="input-wrapper relative">
                  <label className="block text-sm text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors"
                    placeholder="+254 700-0000"
                  />
                  <div className="input-focus-line"></div>
                </div>

             

                {/* Message */}
                <div className="input-wrapper relative">
                  <label className="block text-sm text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                  <div className="input-focus-line"></div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-black py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}