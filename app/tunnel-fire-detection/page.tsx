'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Flame, Clock, Shield, AlertTriangle, Users, Zap, FileText, ExternalLink, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const TunnelFireDetectionPage = () => {
  const features = [
    {
      icon: Flame,
      title: 'AI 기반 화재 감지',
      description: '인공지능 기술을 활용하여 화재를 10초 이내에 신속하게 감지합니다.'
    },
    {
      icon: Clock,
      title: '실시간 모니터링',
      description: '24시간 실시간 모니터링으로 화재 발생 시 즉시 대응합니다.'
    },
    {
      icon: Shield,
      title: '유독가스 감지',
      description: '화재와 함께 발생하는 유독가스를 감지하여 대피 안내를 제공합니다.'
    },
    {
      icon: AlertTriangle,
      title: '자동 경보 시스템',
      description: '화재 발생 시 자동으로 경보를 발령하고 초기 진화를 유도합니다.'
    },
    {
      icon: Users,
      title: '대피 안내 시스템',
      description: '화재 상황에 맞는 최적의 대피 경로를 안내하여 인명 피해를 최소화합니다.'
    },
    {
      icon: Zap,
      title: 'IoT 센서 네트워크',
      description: '다양한 IoT 센서를 활용한 포괄적인 화재 감지 네트워크를 구축합니다.'
    }
  ]

  const benefits = [
    '화재 감지 시간 1분 → 10초 단축',
    '인명 피해 최소화',
    '시설 및 차량 피해 감소',
    '초기 진화 성공률 향상',
    '대피 안내로 안전성 강화'
  ]

  const marketInfo = [
    { title: '개발 배경', content: '고속도로 터널화재 연평균 14회 이상, 전기차 화재 가능성 증가' },
    { title: '틈새시장', content: '3등급 사고 잦은 자동화재탐지설비 미설치 터널에 우선 적용' },
    { title: '고객특성', content: '교통안전 OECD TOP5 달성을 위해 2차 사고예방 노력' }
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
      <section className="bg-gradient-to-br from-red-500 to-orange-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/icons/tunnel-fire-detection.svg" alt="터널화재 감지 시스템" className="w-32 h-32" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              터널화재 신속감지 시스템
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              IoT 센서와 AI 기술을 활용한 실시간 화재 감지로 
              터널 내 인명과 시설을 보호하는 혁신적인 안전 솔루션
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/#contact"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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
                터널 안전의 새로운 패러다임
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  DoIoT의 터널화재 신속감지 시스템은 AI와 IoT 기술을 융합하여 
                  기존 화재 감지 시간을 획기적으로 단축합니다.
                </p>
                <p>
                  고속도로 터널의 연평균 14회 이상 발생하는 화재 사고를 
                  사전에 예방하고 신속하게 대응할 수 있는 솔루션을 제공합니다.
                </p>
                <p>
                  특히 전기차 화재 가능성 증가와 인력 부족 문제를 해결하여 
                  터널 안전을 한 단계 업그레이드합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">핵심 개선 효과</h3>
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

      {/* Market Analysis */}
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
              시장 분석 및 기회
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              터널 안전 시장의 현황과 DoIoT의 차별화된 접근 방식을 소개합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-600 leading-relaxed">{info.content}</p>
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
              AI와 IoT 기술을 활용한 혁신적인 터널 화재 감지 기능을 제공합니다.
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
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-600" />
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

      {/* System Architecture & Images Section */}
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
              시스템 구조도 및 시각 자료
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              터널화재 신속감지 시스템의 구조와 작동 원리를 시각적으로 확인하세요.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                시스템 구조도
              </h3>
              <p className="text-gray-600 mb-6">
                IoT 센서 네트워크, AI 분석 엔진, 실시간 모니터링 시스템이 
                유기적으로 연결되어 터널 내 화재를 신속하게 감지하고 대응합니다.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Image 
                  src="/images/tunnel-fire-system-diagram.png" 
                  alt="터널화재 감지 시스템 구조도"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                센서 배치도
              </h3>
              <p className="text-gray-600 mb-6">
                터널 내 최적의 위치에 배치된 다양한 센서들이 
                화재 발생 시 즉시 신호를 감지하여 중앙 제어실로 전송합니다.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Image 
                  src="/images/sensor-layout-diagram.png" 
                  alt="터널 센서 배치도"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">화재 감지 센서</h3>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <Image 
                  src="/images/fire-detection-sensor.jpg" 
                  alt="화재 감지 센서"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600">
                열감지, 연기감지, 가스감지 센서가 통합된 고성능 화재 감지 장치
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI 분석 엔진</h3>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <Image 
                  src="/images/ai-analysis-engine.png" 
                  alt="AI 분석 엔진"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600">
                실시간 데이터 분석을 통해 화재 위험을 정확하게 판단하는 AI 시스템
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">모니터링 대시보드</h3>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <Image 
                  src="/images/monitoring-dashboard.png" 
                  alt="모니터링 대시보드"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600">
                터널 전체 상황을 실시간으로 모니터링하는 직관적인 대시보드
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Business */}
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
              유사 사업분야 진출
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              터널화재 감지 기술을 기반으로 확장 가능한 사업 영역을 제시합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '환경모니터링', description: '대기질, 소음, 온도 등 환경 요소 실시간 모니터링' },
              { title: '원격감시시스템', description: '다양한 시설의 원격 감시 및 제어 시스템' },
              { title: 'YOLO 인식 시스템', description: '포트홀, 안전모, 주차공간 등 AI 기반 객체 인식' }
            ].map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{business.title}</h3>
                <p className="text-gray-600">{business.description}</p>
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
              터널화재 신속감지 시스템의 상세한 시범사업계획을 확인하세요.
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
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">터널화재 신속감지 시스템 시범사업계획서</h3>
                    <p className="text-sm text-gray-600">AI와 IoT 기술을 활용한 터널 안전 솔루션의 상세한 시범사업 계획</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="/documents/tunnel-fire-detection-plan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    새 창에서 보기
                  </a>
                  <a
                    href="/documents/tunnel-fire-detection-plan.pdf"
                    download="터널화재_신속감지_시범사업계획서.pdf"
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
                  <p>• <strong>사업명:</strong> 터널화재 신속감지 시스템 시범사업</p>
                  <p>• <strong>사업기간:</strong> 2024년 ~ 2025년</p>
                  <p>• <strong>사업규모:</strong> 고속도로 터널 3개소</p>
                  <p>• <strong>핵심기술:</strong> AI 기반 화재 감지, IoT 센서 네트워크</p>
                  <p>• <strong>기대효과:</strong> 화재 감지 시간 1분 → 10초 단축</p>
                  <p className="text-blue-600 font-medium">전체 내용은 위의 "새 창에서 보기" 또는 "다운로드" 버튼을 통해 확인하세요.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              터널화재 신속감지 시스템 시범사업에 참여하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              DoIoT와 함께 터널 안전의 새로운 시대를 열어가세요. 
              시범사업 참여를 통해 혁신적인 안전 솔루션을 경험해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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

export default TunnelFireDetectionPage 