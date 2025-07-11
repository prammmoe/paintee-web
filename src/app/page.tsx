// src/app/page.tsx
'use client'
// src/app/page.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Moon, Sun } from 'lucide-react';
import { Nunito } from 'next/font/google';
import Link from 'next/link';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${nunito.className} ${
      isDark 
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white' 
        : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`relative z-50 px-6 py-6 transition-colors duration-300 ${
        isDark ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logopaintee.png"
              alt="Paintee Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`transition-colors ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Home</a>
            <a href="#features" className={`transition-colors ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Features</a>
            <a href="#about" className={`transition-colors ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>About</a>
            <Link href="/contact" className={`transition-colors ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link href="https://apps.apple.com/id/app/paintee/id6747776188">
            <button className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                : 'bg-gray-900 hover:bg-gray-800 text-white'
            }`}>
              Download App
            </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-black leading-tight">
                  <span className={`block ${isDark ? 'text-white' : 'text-gray-900'}`}>DISCOVER</span>
                  <span className={`block ${isDark ? 'text-white' : 'text-gray-900'}`}>YOUR</span>
                  <span className={`block ${isDark ? 'text-white' : 'text-gray-900'}`}>FACE PAINTING</span>
                </h1>

                <p className={`text-lg max-w-xl leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  We have the largest selection of unique face painting designs. 
                  Try our easy and quick AR face painting app for any 
                  creative expression.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/support">
                    <button className={`group px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 ${
                      isDark 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}>
                      <span>Get Support</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content - Mobile Phone Display */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <Image
                      src="/Home.png"
                      alt="Home Screen"
                      width={433}
                      height={886}
                      className="rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
