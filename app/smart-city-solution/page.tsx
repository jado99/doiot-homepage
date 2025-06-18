'use client'

import { motion } from 'framer-motion'
import { Building2, TrafficCone, Leaf, Zap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SmartCitySolution() {
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
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              스마트 시티 솔루션
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              도시 인프라를 IoT 기술로 연결하여 효율적이고 지속가능한 스마트 시티를 구축합니다.
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
              스마트 시티 구축을 위한 핵심 IoT 기술과 솔루션을 제공합니다.
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrafficCone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">교통 관리</h3>
              <p className="text-gray-600">
                실시간 교통 정보 수집과 분석으로 
                교통 흐름을 최적화하고 혼잡을 줄입니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">환경 모니터링</h3>
              <p className="text-gray-600">
                대기질, 소음, 온도 등을 실시간으로 모니터링하여 
                환경 데이터를 수집하고 분석합니다.
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
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">에너지 관리</h3>
              <p className="text-gray-600">
                스마트 그리드와 에너지 효율화 기술로 
                도시의 에너지 사용을 최적화합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">공공 안전</h3>
              <p className="text-gray-600">
                CCTV, 센서 네트워크를 활용하여 
                도시의 안전을 실시간으로 감시합니다.
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
              스마트 시티의 혜택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IoT 기술을 활용한 스마트 시티 구축으로 얻을 수 있는 다양한 혜택들입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6"
            >
              <TrafficCone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">교통 효율성</h3>
              <p className="text-gray-700">
                교통 흐름 최적화로 통행 시간을 20-30% 단축하고 
                교통 혼잡을 크게 줄입니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6"
            >
              <Leaf className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">환경 개선</h3>
              <p className="text-gray-700">
                실시간 환경 모니터링으로 대기질을 개선하고 
                지속가능한 도시 환경을 조성합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6"
            >
              <Zap className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">에너지 절약</h3>
              <p className="text-gray-700">
                스마트 에너지 관리로 도시 전체의 
                에너지 사용량을 15-25% 절약합니다.
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
              스마트 시티 솔루션의 핵심 기술과 구성 요소입니다.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">센서 네트워크</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 교통 센서</li>
                  <li>• 환경 센서</li>
                  <li>• 에너지 센서</li>
                  <li>• 보안 센서</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">통신 프로토콜</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• LoRaWAN</li>
                  <li>• NB-IoT</li>
                  <li>• 5G</li>
                  <li>• Wi-Fi 6</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">데이터 분석</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 실시간 분석</li>
                  <li>• AI/ML</li>
                  <li>• 예측 모델링</li>
                  <li>• 시각화</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">플랫폼</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 클라우드 기반</li>
                  <li>• API 제공</li>
                  <li>• 확장 가능</li>
                  <li>• 보안 강화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              스마트 시티 구축을 시작하세요
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              DoIoT의 스마트 시티 솔루션으로 미래 지향적인 도시를 만들어보세요.
              전문 팀이 맞춤형 솔루션을 제공해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
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