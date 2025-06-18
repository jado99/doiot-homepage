'use client'

import { motion } from 'framer-motion'
import { Building, Settings, BarChart3, Shield, Zap, TrendingUp, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function IndustrialIoTPlatform() {
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
      <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              산업 IoT
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              제조업과 산업 현장에 IoT 기술을 적용하여 생산성과 효율성을 극대화합니다.
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
              산업 현장의 모든 요소를 IoT로 연결하여 스마트 팩토리를 구현합니다.
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
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">설비 모니터링</h3>
              <p className="text-gray-600">
                생산 설비의 상태를 실시간으로 모니터링하여 
                이상 징후를 조기에 발견하고 대응합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">예측 정비</h3>
              <p className="text-gray-600">
                AI 기반 예측 분석으로 설비 고장을 사전에 예측하여 
                계획적이고 효율적인 정비를 수행합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">품질 관리</h3>
              <p className="text-gray-600">
                생산 과정의 모든 단계를 실시간으로 감시하여 
                품질 기준을 만족하는 제품을 생산합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">자동화 시스템</h3>
              <p className="text-gray-600">
                IoT 센서와 AI를 활용하여 생산 공정을 자동화하고 
                인적 오류를 최소화합니다.
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
              산업 IoT의 혜택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IoT 기술 도입으로 얻을 수 있는 구체적인 비즈니스 가치입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6"
            >
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">생산성 향상</h3>
              <p className="text-gray-700">
                자동화와 최적화를 통해 생산성을 20-30% 향상시키고 
                운영 효율성을 극대화합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6"
            >
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">비용 절감</h3>
              <p className="text-gray-700">
                예측 정비로 정비 비용을 15-25% 절감하고 
                설비 가동률을 향상시킵니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6"
            >
              <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">품질 향상</h3>
              <p className="text-gray-700">
                실시간 모니터링으로 불량률을 50% 이상 감소시키고 
                제품 품질을 일관되게 유지합니다.
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
              산업 IoT 솔루션의 핵심 기술과 구성 요소입니다.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">센서 네트워크</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 온도/습도 센서</li>
                  <li>• 진동 센서</li>
                  <li>• 압력 센서</li>
                  <li>• 전류/전압 센서</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">통신 프로토콜</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Modbus TCP</li>
                  <li>• OPC UA</li>
                  <li>• MQTT</li>
                  <li>• LoRaWAN</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">데이터 분석</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 실시간 스트리밍</li>
                  <li>• 머신러닝</li>
                  <li>• 예측 분석</li>
                  <li>• 이상 감지</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">보안</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 데이터 암호화</li>
                  <li>• 디바이스 인증</li>
                  <li>• 접근 제어</li>
                  <li>• 위협 탐지</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              스마트 팩토리 구축을 시작하세요
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              DoIoT의 산업 IoT 솔루션으로 생산성과 효율성을 극대화하세요.
              전문 팀이 맞춤형 솔루션을 제공해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
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