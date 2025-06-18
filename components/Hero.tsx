'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 sm:w-80 h-60 sm:h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">IoT</span> 기술로
            <br />
            미래를 만듭니다
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            DoIoT는 AI 기반 IoT 기술을 활용한 혁신적인 솔루션을 제공하는 전문 기업입니다.
            <br className="hidden sm:block" />
            스마트 시티부터 산업 IoT까지, 모든 것을 연결하는 미래를 만들어갑니다.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-500 mb-4 text-sm sm:text-base">더 알아보기</p>
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowDown size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 