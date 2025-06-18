'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Monitor, Brain, Camera, BarChart3, MapPin, AlertTriangle, Settings, FileText, ExternalLink, Download } from 'lucide-react'
import Link from 'next/link'

const VSLMonitoringPage = () => {
  const features = [
    {
      icon: Camera,
      title: 'CCTV 영상 분석',
      description: '기존 CCTV 영상을 활용하여 VSL 표출 상태를 실시간으로 모니터링합니다.'
    },
    {
      icon: Brain,
      title: 'Edge AI 처리',
      description: '현장에서 CNN 딥러닝을 통한 이미지 분류로 정상/불량을 자동 판별합니다.'
    },
    {
      icon: Monitor,
      title: '실시간 대시보드',
      description: 'VSL 전체 현황과 통계 정보를 한눈에 확인할 수 있는 대시보드를 제공합니다.'
    },
    {
      icon: MapPin,
      title: '지도 기반 모니터링',
      description: '지도에서 VSL 위치와 상태를 색상으로 구분하여 시각적으로 표시합니다.'
    },
    {
      icon: AlertTriangle,
      title: '자동 알림 시스템',
      description: '불량 발생 시 즉시 알림을 통해 신속한 대응이 가능합니다.'
    },
    {
      icon: Settings,
      title: '통합 관리 시스템',
      description: '1000대 VSL을 효율적으로 관리할 수 있는 통합 모니터링 시스템입니다.'
    }
  ]

  const benefits = [
    '통신 비용 80% 절감',
    'VSL 관리 효율성 90% 향상',
    '고장 감지 시간 95% 단축',
    '인력 운영 비용 60% 절약',
    '데이터 처리 속도 3-5초 이내'
  ]

  const systemComponents = [
    { component: '영상변환장치', description: 'CCTV 영상 수신 및 정지영상 변환' },
    { component: '데이터처리장치', description: '전체 시스템 제어 및 데이터 관리' },
    { component: 'AI처리장치', description: 'CNN 기반 이미지 분류 및 상태 판별' }
  ]

  const monitoringFeatures = [
    { feature: '대시보드', description: '기본정보, 통계정보, 이벤트 목록 표시' },
    { feature: '지도 조회', description: '지역별 VSL 상태 시각화' },
    { feature: '상태 목록', description: 'VSL 전체 목록 및 속성별 정렬' },
    { feature: '개별 조회', description: '개별 VSL 상세 정보 및 비교 분석' },
    { feature: 'AI 통계', description: '추론 결과 통계 및 성능 분석' }
  ]

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
      <section className="bg-gradient-to-br from-teal-500 to-blue-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Edge AI 기반 VSL 상태감시 모니터링 시스템
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              CCTV 영상과 Edge AI 기술을 활용하여 VSL의 동작 및 표출상태를 
              실시간으로 모니터링하는 혁신적인 관리 시스템
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/#contact"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                문의하기
              </Link>
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
                VSL 관리의 혁신적 변화
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  기존 CCTV 영상 전송 방식의 높은 통신 비용 문제를 해결하기 위해 
                  Edge AI 기술을 도입한 VSL 상태감시 시스템입니다.
                </p>
                <p>
                  1000대 VSL의 동작 및 표출상태를 현장에서 실시간으로 모니터링하여 
                  고장 여부를 즉시 파악할 수 있습니다.
                </p>
                <p>
                  CNN 딥러닝 기술을 활용하여 정상/불량을 자동으로 분류하고, 
                  통합 대시보드를 통해 효율적인 관리가 가능합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-8 text-white"
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

      {/* Problem & Solution */}
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
              문제점과 해결방안
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기존 VSL 관리의 한계를 Edge AI 기술로 해결합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">현재 문제점</h3>
              <div className="space-y-3 text-gray-600">
                <p>• VSL 관리 수량(1000대) 증가로 고장여부 파악 어려움</p>
                <p>• CCTV 영상 전송 비용 발생</p>
                <p>• 영상 전송이 어려운 구간 존재</p>
                <p>• 수동 점검으로 인한 시간과 인력 낭비</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">해결방안</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Edge AI 기술로 현장에서 실시간 처리</p>
                <p>• CNN 딥러닝을 통한 자동 정상/불량 분류</p>
                <p>• 통신 비용 대폭 절감</p>
                <p>• 3-5초 이내 신속한 상태 판별</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
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
              시스템 구성
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              영상변환장치, 데이터처리장치, AI처리장치로 구성된 통합 시스템
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {systemComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{component.component}</h3>
                <p className="text-gray-600">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              핵심 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Edge AI 기술을 활용한 VSL 모니터링 시스템의 주요 기능입니다.
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-teal-600" />
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

      {/* Monitoring Features */}
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
              모니터링 시스템 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VSL 상태를 효율적으로 관리할 수 있는 다양한 모니터링 기능을 제공합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoringFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.feature}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
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
              기술 사양
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              시스템 성능과 처리 능력을 보장하는 기술적 특징들입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { spec: '처리 속도', value: '3-5초', description: 'VSL 이미지 식별 및 AI 처리' },
              { spec: '관리 용량', value: '12-20개소', description: '1분 주기 통합관리 가능' },
              { spec: '해상도', value: '720p', description: '1280×720 충분한 판독 품질' },
              { spec: '압축 방식', value: 'H.264', description: '30fps 스트리밍 처리' }
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-bold text-teal-600 mb-2">{spec.value}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.spec}</h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Plan PDF Section */}
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
              시범사업계획서
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Edge AI 기반 VSL 상태감시 모니터링 시스템의 상세한 시범사업계획을 확인하세요.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Edge AI 기반 VSL 상태감시 모니터링 시스템 시범사업계획서</h3>
                    <p className="text-sm text-gray-600">CCTV 영상과 CNN 딥러닝을 활용한 VSL 모니터링 시스템의 상세한 시범사업 계획</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="/documents/vsl-cnn-cctvimage.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    새 창에서 보기
                  </a>
                  <a
                    href="/documents/vsl-cnn-cctvimage.pdf"
                    download="VSL_모니터링_시범사업계획서.pdf"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                  >
                    <Download size={16} className="mr-1" />
                    다운로드
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">시범사업계획서 미리보기</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• <strong>사업명:</strong> Edge AI 기반 VSL 상태감시 모니터링 시스템 시범사업</p>
                  <p>• <strong>사업기간:</strong> 2024년 ~ 2025년</p>
                  <p>• <strong>사업규모:</strong> VSL 1000대 관리</p>
                  <p>• <strong>핵심기술:</strong> CNN 딥러닝, Edge AI, CCTV 영상 분석</p>
                  <p>• <strong>기대효과:</strong> 통신 비용 80% 절감, 관리 효율성 90% 향상</p>
                  <p className="text-blue-600 font-medium">전체 내용은 위의 "새 창에서 보기" 또는 "다운로드" 버튼을 통해 확인하세요.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              VSL 모니터링 시스템 개발을 시작하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              DoIoT와 함께 Edge AI 기술로 VSL 관리의 새로운 시대를 열어가세요. 
              개발 계획 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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

export default VSLMonitoringPage 