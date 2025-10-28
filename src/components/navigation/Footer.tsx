import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/white.png"
            width={100}
            height={50}
            alt="shakul logo"
            className="mb-6"
          />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 gap-4">
          <p className="text-gray-500 text-xs">© 2025 Shakul. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-gray-500 hover:text-white transition-colors text-xs">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-500 hover:text-white transition-colors text-xs">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
