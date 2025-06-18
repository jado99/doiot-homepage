'use client'

import { motion } from 'framer-motion'
import { Smartphone, Heart, Activity, Bell, BarChart3, Users, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function WearableDevice() {
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
      <section className="bg-gradient-to-br from-pink-500 to-purple-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              웨어러블 디바이스
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              개인 건강과 생활을 향상시키는 스마트 웨어러블 솔루션을 개발합니다.
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
              웨어러블 디바이스의 핵심 기능들을 통해 건강한 라이프스타일을 지원합니다.
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">건강 모니터링</h3>
              <p className="text-gray-600">
                심박수, 혈압, 혈중 산소 포화도를 실시간으로 측정하여 
                건강 상태를 지속적으로 모니터링합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">피트니스 추적</h3>
              <p className="text-gray-600">
                걸음 수, 칼로리 소모, 운동 강도 등을 추적하여 
                개인 맞춤형 피트니스 목표를 달성합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">알림 시스템</h3>
              <p className="text-gray-600">
                스마트폰 알림, 건강 경고, 운동 리마인더 등을 
                실시간으로 받아 편리한 생활을 지원합니다.
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
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">데이터 분석</h3>
              <p className="text-gray-600">
                수집된 건강 데이터를 AI로 분석하여 
                개인 맞춤형 건강 인사이트를 제공합니다.
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
              웨어러블 디바이스의 혜택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              스마트 웨어러블 기술로 얻을 수 있는 건강과 생활의 개선 효과입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6"
            >
              <Heart className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">건강 관리</h3>
              <p className="text-gray-700">
                24시간 건강 모니터링으로 질병을 조기에 발견하고 
                예방 의학을 실현합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6"
            >
              <Activity className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">운동 동기부여</h3>
              <p className="text-gray-700">
                실시간 피트니스 추적으로 운동 동기를 부여하고 
                건강한 라이프스타일을 형성합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6"
            >
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">편의성</h3>
              <p className="text-gray-700">
                스마트폰 연동으로 언제 어디서나 건강 정보를 확인하고 
                편리한 생활을 즐길 수 있습니다.
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
              웨어러블 디바이스의 핵심 기술과 구성 요소입니다.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">센서</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 심박수 센서</li>
                  <li>• 가속도계</li>
                  <li>• 자이로스코프</li>
                  <li>• GPS</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">통신</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Bluetooth 5.0</li>
                  <li>• Wi-Fi</li>
                  <li>• NFC</li>
                  <li>• LTE (선택)</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">배터리</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 7일 사용</li>
                  <li>• 무선 충전</li>
                  <li>• 고속 충전</li>
                  <li>• 배터리 최적화</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">보안</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 생체 인증</li>
                  <li>• 데이터 암호화</li>
                  <li>• 개인정보 보호</li>
                  <li>• 안전 인증</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              스마트 웨어러블을 시작하세요
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              DoIoT의 웨어러블 디바이스로 건강한 라이프스타일을 만들어보세요.
              개인 맞춤형 건강 솔루션을 제공해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
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