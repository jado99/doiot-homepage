'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: '회사소개', href: '#about' },
      { name: '팀 소개', href: '#' },
      { name: '채용정보', href: '#' },
      { name: '뉴스', href: '#' }
    ],
    services: [
      { name: '스마트 시티', href: '#services' },
      { name: '산업 IoT', href: '#services' },
      { name: '웨어러블', href: '#services' },
      { name: '데이터 분석', href: '#services' }
    ],
    support: [
      { name: '고객지원', href: '#' },
      { name: '문의하기', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: '개발자 문서', href: '#' }
    ],
    legal: [
      { name: '개인정보처리방침', href: '/privacy-policy' },
      { name: '이용약관', href: '/terms-of-service' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">D</span>
              <span className="text-teal-400">o</span>
              <span className="text-white">I</span>
              <span className="text-teal-400">o</span>
              <span className="text-white">T</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ai 기반 IoT 기술을 활용한 혁신적인 솔루션을 제공하는 전문 기업입니다. 
              더 나은 미래를 만들어갑니다.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">jado9982@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">010-2203-7337</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">용인시 기흥구 중부대로 184, 힉스유타워 A동 317-2호</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">회사</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">서비스</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">지원</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4">법적 고지</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">뉴스레터 구독</h4>
              <p className="text-gray-300 text-sm">
                최신 IoT 기술 소식과 DoIoT의 업데이트를 받아보세요.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="이메일 주소"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                구독
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} DoIoT. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 