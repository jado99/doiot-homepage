'use client'

import { motion } from 'framer-motion'
import { Cloud, Server, Database, Zap, Shield, TrendingUp, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function IoTConsulting() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              클라우드 플랫폼
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              IoT 디바이스와 데이터를 관리할 수 있는 안정적이고 확장 가능한 클라우드 플랫폼을 제공합니다.
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
              IoT 생태계를 위한 종합적인 클라우드 플랫폼 서비스를 제공합니다.
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
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">디바이스 관리</h3>
              <p className="text-gray-600">
                수천 개의 IoT 디바이스를 중앙에서 관리하고 
                원격으로 제어할 수 있는 플랫폼을 제공합니다.
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
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">데이터 저장</h3>
              <p className="text-gray-600">
                대용량 IoT 데이터를 안전하게 저장하고 
                고성능 데이터베이스로 빠른 검색을 지원합니다.
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
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">API 제공</h3>
              <p className="text-gray-600">
                RESTful API와 SDK를 통해 
                다양한 애플리케이션과 쉽게 연동할 수 있습니다.
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
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">확장성</h3>
              <p className="text-gray-600">
                자동 스케일링으로 트래픽 증가에 따라 
                자동으로 리소스를 확장하여 안정성을 보장합니다.
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
              클라우드 플랫폼의 혜택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              클라우드 기반 IoT 플랫폼으로 얻을 수 있는 다양한 혜택들입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6"
            >
              <Cloud className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">비용 효율성</h3>
              <p className="text-gray-700">
                초기 인프라 투자 없이 사용한 만큼만 
                비용을 지불하는 경제적인 운영이 가능합니다.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">안정성</h3>
              <p className="text-gray-700">
                99.9% 이상의 가용성을 보장하여 
                중단 없는 서비스를 제공합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6"
            >
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">확장성</h3>
              <p className="text-gray-700">
                비즈니스 성장에 따라 자동으로 확장되어 
                언제든지 새로운 디바이스를 추가할 수 있습니다.
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
              클라우드 플랫폼의 핵심 기술과 구성 요소입니다.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">인프라</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• AWS/Azure/GCP</li>
                  <li>• Kubernetes</li>
                  <li>• Docker</li>
                  <li>• Microservices</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">데이터베이스</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                  <li>• Redis</li>
                  <li>• InfluxDB</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">API</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• RESTful API</li>
                  <li>• GraphQL</li>
                  <li>• WebSocket</li>
                  <li>• MQTT</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">보안</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• SSL/TLS</li>
                  <li>• OAuth 2.0</li>
                  <li>• API Key</li>
                  <li>• Rate Limiting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              클라우드 플랫폼을 시작하세요
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              DoIoT의 클라우드 플랫폼으로 IoT 생태계를 구축하세요.
              전문 팀이 맞춤형 클라우드 솔루션을 제공해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200"
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