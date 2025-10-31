/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Loader2 } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

interface ContactProps {
  block:{
    sectionTitle: string;
    sectionParagraph: string;
    email: string;
    phoneNumber?: string;
    location?: string;
    instagramLink?: string;
    facebookLink?: string;
    tiktokLink?: string;
  }
}

export default function Contact({ block }:ContactProps) {
  const [formData, setFormData] = useState<any>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formLoading, setFormLoading] = useState(true)
  const [formError, setFormError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    const loadForm = async () => {
      try {
        const res = await fetch('/api/get-form')
        if (!res.ok) throw new Error('Failed to load form')
        const data = await res.json()
        setFormData({
          ...data,
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        setFormError(null)
      } catch (error) {
        console.error('Could not load form data:', error)
        setFormError('Unable to load form. Please refresh the page.')
      } finally {
        setFormLoading(false)
      }
    }
    
    loadForm()
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    let isValid = true

    if (!formData.name?.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!formData.message?.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) return

    const payload = {
      form: formData.id,
      submissionData: [
        { field: 'name', value: formData.name },
        { field: 'email', value: formData.email },
        { field: 'phone', value: formData.phone },
        { field: 'message', value: formData.message }
      ],
    }

    setSubmitting(true)
    setErrors({})
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({
          ...formData,
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ form: 'There was a problem submitting your form. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

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

        @keyframes spin {
          to {
            transform: rotate(360deg);
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

        .spinner {
          animation: spin 1s linear infinite;
        }
      `}</style>

      <section id='contact' className="bg-black px-6 md:px-12 lg:px-8 2xl:px-16 py-20 text-white border-t border-zinc-800">
        <div className="max-w-6xl 2xl:max-w-full mx-auto">
          {/* Header */}
          <div
            className="flex items-center gap-1 mb-6 text-sm tracking-wider text-gray-400"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <span>06</span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="font-medium">CONTACT US</span>
          </div>

          {/* Title */}
          <div className="mb-16">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-tight mb-6"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
            >
              Let&apos;s Create{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-400">
                Something Beautiful
              </span>
            </h2>
            <p
              className="text-gray-400 text-base md:text-lg max-w-2xl"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
            >
              Have a project in mind? We{"'"}d love to hear about it. Get in touch and let{"'"}s make it happen.
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
                <Link
                  href={`mailto:${block.email}`}
                  className="contact-card flex items-center gap-4 p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 group"
                >
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-white font-medium">{block.email}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </Link>

                <Link
                  href={`tel:${block.phoneNumber}`}
                  className="contact-card flex items-center gap-4 p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 group"
                >
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <p className="text-white font-medium">{block.phoneNumber}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </Link>

                <Link
                  href="#"
                  className="contact-card flex items-center gap-4 p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 group"
                >
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <MapPin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Location</p>
                    <p className="text-white font-medium">{block.location}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </Link>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-zinc-800">
                <p className="text-sm text-gray-500 mb-4">Follow us</p>
                <div className="flex gap-3">
                  <Link
                    href={block.instagramLink || '#'}
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href={block.tiktokLink || '#'}
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <FaFacebook className="w-5 h-5" />
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
              {formLoading ? (
                // Form Loading State
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader2 className="w-10 h-10 text-gray-400 spinner mb-4" />
                  <p className="text-gray-400">Loading form...</p>
                </div>
              ) : formError ? (
                // Form Error State
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border border-red-900 flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <p className="text-red-400 text-center">{formError}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-zinc-900 text-white rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors"
                  >
                    Refresh Page
                  </button>
                </div>
              ) : (
                // Form Ready State
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Success Message */}
                  {success && (
                    <div className="p-4 bg-zinc-900 border border-green-900 rounded-lg">
                      <p className="text-green-400 text-sm">
                        ✓ Message sent successfully! We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  {/* General Error */}
                  {errors.form && (
                    <div className="p-4 bg-zinc-900 border border-red-900 rounded-lg">
                      <p className="text-red-400 text-sm">{errors.form}</p>
                    </div>
                  )}

                  {/* Name */}
                  <div className="input-wrapper relative">
                    <label className="block text-sm text-gray-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={submitting}
                      className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors disabled:opacity-50"
                      placeholder="John Doe"
                    />
                    <div className="input-focus-line"></div>
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="input-wrapper relative">
                    <label className="block text-sm text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={submitting}
                      className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                    <div className="input-focus-line"></div>
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
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
                      disabled={submitting}
                      className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors disabled:opacity-50"
                      placeholder="+254 700-0000"
                    />
                    <div className="input-focus-line"></div>
                  </div>

                  {/* Message */}
                  <div className="input-wrapper relative">
                    <label className="block text-sm text-gray-400 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={submitting}
                      rows={4}
                      className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none disabled:opacity-50"
                      placeholder="Tell us about your project..."
                    />
                    <div className="input-focus-line"></div>
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-white text-black py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 spinner" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We{"'"}ll get back to you within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}