'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Download, Play, Moon, Sun } from 'lucide-react';
import { Nunito } from 'next/font/google';

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
            <a href="#contact" className={`transition-colors ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>Contact</a>
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
            
            <button className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                : 'bg-gray-900 hover:bg-gray-800 text-white'
            }`}>
              Download App
            </button>
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
                  creative expression. 24-hour support is always happy 
                  to answer all your questions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className={`group px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}>
                    <span>Get Started</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="pt-8">
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  The mobile app is available now
                </p>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}>
                    <Play className="w-6 h-6" />
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}>
                    <Download className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Mobile Phone Display */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                {/* Main Phone Display */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <Image
                      src="/home.png"
                      alt="Home Screen"
                      width={433}
                      height={886}
                      className="rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>

                {/* Overlapping Phone Display */}
                <div className="absolute -top-8 -right-8 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/design.png"
                      alt="Design Screen"
                      width={217}
                      height={443}
                      className="rounded-2xl shadow-xl"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-16 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`relative px-6 py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Why artists choose{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Paintee
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Powerful features designed to unleash your creativity and bring your artistic vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`group relative rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50 hover:border-purple-500/50' 
                : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Face-Aligned Guides
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Get perfectly placed guide dots and outlines based on your face. No more guessing — just follow and paint.
              </p>
            </div>

            <div className={`group relative rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50 hover:border-purple-500/50' 
                : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Beginner-Friendly
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Paintee is made for everyone. Whether you're a kid or an adult, painting on your face has never been this easy.
              </p>
            </div>

            <div className={`group relative rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/50 hover:border-purple-500/50' 
                : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Smart AR Technology
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Powered by AR and face tracking, Paintee ensures your designs stay in place as you move — just like magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative px-6 py-12 transition-colors duration-300 ${
        isDark ? 'bg-gray-950 border-t border-gray-800' : 'bg-gray-900'
      } text-white`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Image
                src="/logopaintee.png"
                alt="Paintee Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2025 Paintee. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}