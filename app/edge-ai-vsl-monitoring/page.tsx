'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Eye, Brain, Cpu, Wifi, Shield, AlertTriangle, Camera, Monitor, Settings } from 'lucide-react'
import Link from 'next/link'

const EdgeAIVSLMonitoringPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Edge AI 처리',
      description: 'CCTV 영상을 현장에서 실시간으로 분석하여 VSL 상태를 감지합니다.'
    },
    {
      icon: Camera,
      title: 'CCTV 연동',
      description: '기존 CCTV 시스템과 연동하여 추가 설치 없이 모니터링이 가능합니다.'
    },
    {
      icon: Cpu,
      title: '실시간 분석',
      description: 'Edge 컴퓨팅으로 지연 없이 즉시 분석 결과를 제공합니다.'
    },
    {
      icon: Monitor,
      title: 'VSL 상태 감지',
      description: 'VSL의 정상/불량 상태를 정확하게 판단하고 알림을 제공합니다.'
    },
    {
      icon: Wifi,
      title: '무선 통신',
      description: 'WiFi, LTE 등 다양한 통신방식으로 원격 모니터링을 지원합니다.'
    },
    {
      icon: Settings,
      title: '원격 제어',
      description: '중앙 제어실에서 모든 VSL 상태를 실시간으로 모니터링합니다.'
    }
  ]

  const benefits = [
    'VSL 상태 실시간 모니터링',
    'Edge AI로 빠른 처리 속도',
    '기존 CCTV 활용 가능',
    '정확한 상태 판단',
    '원격 관리 시스템'
  ]

  const systemArchitecture = [
    { component: 'CCTV 카메라', description: '기존 CCTV 시스템과 연동' },
    { component: 'Edge AI 모듈', description: '현장에서 실시간 영상 분석' },
    { component: '통신 모듈', description: 'WiFi, LTE 등 무선 통신' },
    { component: '중앙 제어 시스템', description: '원격 모니터링 및 관리' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200">
            <ArrowLeft size={20} className="mr-2" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/icons/edge-ai-vsl-monitoring.svg" alt="Edge AI VSL 모니터링 시스템" className="w-32 h-32" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Edge AI VSL 모니터링 시스템
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Edge AI 기술로 CCTV 영상을 현장에서 분석하여 
              VSL 상태를 실시간으로 모니터링하는 혁신적인 시스템
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                개발 계획 상담
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                기술 데모 요청
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                VSL 상태의 실시간 감시
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Edge AI 기술을 활용하여 CCTV 영상을 현장에서 실시간으로 분석하고 
                  VSL(Variable Speed Limit) 상태를 정확하게 감지합니다.
                </p>
                <p>
                  기존 CCTV 시스템과 연동하여 추가 설치 없이 
                  즉시 VSL 모니터링 시스템을 구축할 수 있습니다.
                </p>
                <p>
                  Edge 컴퓨팅으로 지연 없는 실시간 분석을 제공하여 
                  신속한 대응이 가능합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">주요 개선 효과</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              시스템 구성
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Edge AI 기반 VSL 모니터링 시스템의 핵심 구성 요소
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemArchitecture.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{component.component}</h3>
                <p className="text-gray-600">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              핵심 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Edge AI 기술을 활용한 VSL 모니터링의 주요 기능
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              기술적 특징
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              안정적이고 효율적인 VSL 모니터링을 위한 기술적 특징들
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Edge AI 기술</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>CNN 딥러닝:</strong> 영상 분석을 위한 컨볼루션 신경망</p>
                <p>• <strong>실시간 처리:</strong> 지연 없는 즉시 분석 결과 제공</p>
                <p>• <strong>정확도 향상:</strong> 95% 이상의 VSL 상태 판단 정확도</p>
                <p>• <strong>자동 학습:</strong> 지속적인 데이터 수집으로 성능 개선</p>
                <p>• <strong>에지 컴퓨팅:</strong> 클라우드 의존성 없는 독립적 처리</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">모니터링 기능</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>상태 감지:</strong> VSL 정상/불량 상태 실시간 판단</p>
                <p>• <strong>알림 시스템:</strong> 이상 상태 발생 시 즉시 알림</p>
                <p>• <strong>데이터 저장:</strong> 분석 결과 및 이력 데이터 저장</p>
                <p>• <strong>원격 접근:</strong> 웹 기반 원격 모니터링 인터페이스</p>
                <p>• <strong>통계 분석:</strong> VSL 상태 통계 및 리포트 생성</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Edge AI VSL 모니터링 시스템을 시작하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              DoIoT와 함께 Edge AI 기술로 VSL 모니터링의 새로운 시대를 열어가세요. 
              개발 계획 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                개발 계획 상담
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                기술 데모 요청
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default EdgeAIVSLMonitoringPage 