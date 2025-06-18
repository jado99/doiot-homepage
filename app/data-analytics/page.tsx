'use client'

import { motion } from 'framer-motion'
import { Database, BarChart3, TrendingUp, Eye, Shield, Zap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function DataAnalytics() {
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
      <section className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Database className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              데이터 분석
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              IoT 센서에서 수집된 데이터를 분석하여 가치 있는 인사이트를 제공합니다.
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
              빅데이터 분석 기술을 활용하여 IoT 데이터의 숨겨진 가치를 발견합니다.
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
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">실시간 분석</h3>
              <p className="text-gray-600">
                스트리밍 데이터를 실시간으로 처리하여 
                즉시 대응이 필요한 상황을 감지합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">예측 모델링</h3>
              <p className="text-gray-600">
                머신러닝 알고리즘을 활용하여 미래 트렌드를 
                예측하고 사전 대응 방안을 제시합니다.
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
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">시각화</h3>
              <p className="text-gray-600">
                복잡한 데이터를 직관적인 차트와 그래프로 
                표현하여 이해하기 쉽게 만듭니다.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">보고서 생성</h3>
              <p className="text-gray-600">
                자동화된 보고서 생성으로 정기적인 
                데이터 분석 결과를 체계적으로 제공합니다.
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
              데이터 분석의 혜택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              체계적인 데이터 분석으로 얻을 수 있는 비즈니스 가치입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6"
            >
              <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">의사결정 지원</h3>
              <p className="text-gray-700">
                데이터 기반의 객관적인 분석으로 
                정확하고 신속한 의사결정을 지원합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6"
            >
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">위험 예측</h3>
              <p className="text-gray-700">
                이상 패턴을 조기에 감지하여 
                잠재적 위험을 사전에 예방합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6"
            >
              <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">성과 최적화</h3>
              <p className="text-gray-700">
                데이터 분석을 통한 프로세스 최적화로 
                운영 효율성과 성과를 향상시킵니다.
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
              데이터 분석 플랫폼의 핵심 기술과 구성 요소입니다.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">데이터 처리</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Apache Spark</li>
                  <li>• Apache Kafka</li>
                  <li>• Apache Flink</li>
                  <li>• Real-time Streaming</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">머신러닝</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• TensorFlow</li>
                  <li>• PyTorch</li>
                  <li>• Scikit-learn</li>
                  <li>• AutoML</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">시각화</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Tableau</li>
                  <li>• Power BI</li>
                  <li>• D3.js</li>
                  <li>• Grafana</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">데이터 저장</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                  <li>• InfluxDB</li>
                  <li>• Redis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              데이터 분석을 시작하세요
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              DoIoT의 데이터 분석 솔루션으로 숨겨진 인사이트를 발견하세요.
              전문 팀이 맞춤형 분석 솔루션을 제공해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
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