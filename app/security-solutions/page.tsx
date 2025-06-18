'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, AlertTriangle, Users, Zap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SecuritySolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
            <ArrowLeft size={20} className="mr-2" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              보안 솔루션
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              IoT 환경에서 발생할 수 있는 보안 위협을 방지하는 종합적인 보안 솔루션을 제공합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              주요 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IoT 환경의 다양한 보안 위협에 대응하는 종합적인 보안 기능을 제공합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">네트워크 보안</h3>
              <p className="text-gray-600">
                IoT 디바이스 간 통신을 암호화하고 
                무단 접근을 차단하여 네트워크 보안을 강화합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">디바이스 인증</h3>
              <p className="text-gray-600">
                IoT 디바이스의 신원을 검증하고 
                승인된 디바이스만 네트워크에 접속할 수 있도록 합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">데이터 암호화</h3>
              <p className="text-gray-600">
                센서 데이터와 통신 내용을 암호화하여 
                데이터 유출을 방지하고 개인정보를 보호합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">위협 탐지</h3>
              <p className="text-gray-600">
                AI 기반 이상 탐지로 보안 위협을 실시간으로 감지하고 
                즉시 대응 조치를 취합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              보안 솔루션의 혜택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              종합적인 보안 솔루션으로 IoT 환경의 안전성을 보장합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6"
            >
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">위협 방지</h3>
              <p className="text-gray-700">
                사전 보안 조치로 90% 이상의 보안 위협을 
                사전에 차단하고 방지합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6"
            >
              <Lock className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">데이터 보호</h3>
              <p className="text-gray-700">
                민감한 데이터를 암호화하여 
                데이터 유출 위험을 최소화합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6"
            >
              <AlertTriangle className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">신속 대응</h3>
              <p className="text-gray-700">
                실시간 모니터링과 자동 대응으로 
                보안 사고 발생 시 즉시 대응합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              기술 사양
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              보안 솔루션의 핵심 기술과 구성 요소입니다.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">암호화</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• AES-256</li>
                  <li>• RSA-2048</li>
                  <li>• TLS 1.3</li>
                  <li>• ECC</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">인증</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• OAuth 2.0</li>
                  <li>• JWT</li>
                  <li>• 2FA</li>
                  <li>• Biometric</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">위협 탐지</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• IDS/IPS</li>
                  <li>• SIEM</li>
                  <li>• AI 분석</li>
                  <li>• 행동 분석</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">접근 제어</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• RBAC</li>
                  <li>• Zero Trust</li>
                  <li>• VPN</li>
                  <li>• Firewall</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              보안 솔루션을 시작하세요
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              DoIoT의 보안 솔루션으로 IoT 환경의 안전성을 보장하세요.
              전문 팀이 맞춤형 보안 솔루션을 제공해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                문의하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 