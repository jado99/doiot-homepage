'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Eye, Car, Gauge, Wifi, Shield, AlertTriangle, MapPin, Radio, Bell, Settings } from 'lucide-react'
import Link from 'next/link'

const VehicleTrackingSystemPage = () => {
  const features = [
    {
      icon: Car,
      title: '차량 추적',
      description: '터널 내 차량의 위치와 움직임을 실시간으로 추적합니다.'
    },
    {
      icon: Gauge,
      title: '속도 분석',
      description: '차량의 속도를 분석하여 위험 상황을 사전에 감지합니다.'
    },
    {
      icon: Shield,
      title: '위험 감지',
      description: 'AI 기술로 차량 간 거리, 속도 등 위험 요소를 감지합니다.'
    },
    {
      icon: AlertTriangle,
      title: '사고 예방',
      description: '위험 상황 발생 시 즉시 알림으로 사고를 사전에 방지합니다.'
    },
    {
      icon: MapPin,
      title: '위치 추적',
      description: '터널 내 차량의 정확한 위치를 실시간으로 추적합니다.'
    },
    {
      icon: Settings,
      title: '원격 관리',
      description: '중앙 제어실에서 모든 차량 상태를 실시간으로 모니터링합니다.'
    }
  ]

  const benefits = [
    '사고 감지 시간 90% 단축',
    '위험 상황 신속 대응',
    '고객 불편 최소화',
    'AI 기술 활용 최적화',
    '터널 안전성 대폭 향상'
  ]

  const detectionFeatures = [
    { feature: '차량 추적', description: '차량번호, 속도, 크기 기반 개별 차량 추적' },
    { feature: '위험 감지', description: '차선변경, 과속, 정지, 사고, 역주행 감지' },
    { feature: '속도 분석', description: '지점별, 구간별 주행속도 실시간 분석' },
    { feature: '위험 예지', description: '급정지, 고장, 갓길대피, 화재 등 사전 감지' },
    { feature: '상태 표시', description: '개별 차량별 색상 구분으로 상태 시각화' }
  ]

  const systemComponents = [
    { component: '영상 수집 모듈', description: 'CCTV 영상 실시간 수집 및 전처리' },
    { component: 'AI 분석 엔진', description: '차량 추적 및 위험 요소 감지 알고리즘' },
    { component: '데이터 처리 시스템', description: '속도 분석 및 상태 정보 처리' },
    { component: '대시보드 시스템', description: '실시간 모니터링 및 알림 시스템' }
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
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/icons/vehicle-tracking-system.svg" alt="차량 추적관리시스템" className="w-32 h-32" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              차량 추적관리시스템
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              AI 기술을 활용한 터널 내 차량 실시간 추적 및 
              위험 요소 감지로 안전사고를 사전에 방지하는 시스템
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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
                  기존 CCTV 영상과 최신 AI 기술을 결합하여 터널 내 위험 요인 및 
                  사고 발생을 신속히 감지하는 차량 추적관리 시스템입니다.
                </p>
                <p>
                  상황실 근무자의 한계를 극복하고, AI 알고리즘을 통한 자동화된 
                  감지로 사고 등 위험 상황을 사전에 방지합니다.
                </p>
                <p>
                  컴퓨터 성능과 AI 기술의 급격한 발전을 활용하여 
                  실시간 차량 추적 및 위험 요소 감지가 가능합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
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

      {/* Current Issues & Solutions */}
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
              현재 문제점과 해결방안
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              상황실 근무자의 한계를 AI 기술로 해결합니다.
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
                <p>• 상황실 근무자의 전체 CCTV 관리 한계</p>
                <p>• 상황 파악 지연으로 인한 늦장 대응</p>
                <p>• 고객 불편 초래</p>
                <p>• 수동 감시로 인한 인적 오류</p>
                <p>• 위험 상황 사전 감지 어려움</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI 기반 해결방안</h3>
              <div className="space-y-3 text-gray-600">
                <p>• AI 알고리즘을 이용한 자동 차량 추적</p>
                <p>• 실시간 위험 요소 자동 감지</p>
                <p>• 신속한 상황 파악 및 대응</p>
                <p>• 24시간 자동 모니터링</p>
                <p>• 사고 예방을 위한 사전 경고</p>
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
              AI 기술을 활용한 차량 추적관리 시스템의 핵심 구성 요소
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              AI 기술을 활용한 차량 추적 및 위험 감지 시스템의 주요 기능
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
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

      {/* Detection Features */}
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
              감지 기능 상세
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 알고리즘이 감지하는 다양한 위험 요소와 분석 기능
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detectionFeatures.map((feature, index) => (
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
              차량 추적 및 위험 감지를 위한 고도화된 AI 기술
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">차량 추적 분석</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>속도 분석:</strong> 지점정보(CCTV frame간의 속도), 구간정보(CCTV 간의 속도) 파악</p>
                <p>• <strong>크기 분석:</strong> 차량 크기를 통한 차종 및 상태 판별</p>
                <p>• <strong>차량번호 인식:</strong> 개별 차량 식별 및 추적</p>
                <p>• <strong>위치 추적:</strong> 현재위치와 상태를 실시간 표시</p>
                <p>• <strong>색상 구분:</strong> 개인별 다양한 색깔로 정상, 특이 분석</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">위험 요소 감지</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>주행 패턴:</strong> 차선변경, 과속, 정지(지정체), 역주행 감지</p>
                <p>• <strong>사고 감지:</strong> 충돌, 추돌 등 사고 상황 즉시 감지</p>
                <p>• <strong>위험 예지:</strong> 급정지, 고장, 갓길대피, 화재(연기, 불꽃) 감지</p>
                <p>• <strong>이상 요소:</strong> 사람, 동물, 비상등, 방향지시등, 브레이크등 깜빡임 감지</p>
                <p>• <strong>시간 제한:</strong> 속도에 따른 시간제한 설정으로 과다한 계산시간 방지</p>
              </div>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              시스템 도입 효과
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI 기반 차량 추적관리 시스템으로 달성할 수 있는 구체적인 효과
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '안전성 향상',
                description: '사고 감지 시간 90% 단축으로 신속한 대응이 가능합니다.',
                icon: Shield
              },
              {
                title: '운영 효율성',
                description: '24시간 자동 모니터링으로 인력 운영 비용을 절약합니다.',
                icon: Settings
              },
              {
                title: '고객 만족도',
                description: '신속한 상황 파악으로 고객 불편을 최소화합니다.',
                icon: Car
              },
              {
                title: '사전 예방',
                description: '위험 요소를 사전에 감지하여 사고를 예방합니다.',
                icon: AlertTriangle
              },
              {
                title: '데이터 활용',
                description: '수집된 데이터를 통한 교통 패턴 분석이 가능합니다.',
                icon: Eye
              },
              {
                title: '확장성',
                description: '다양한 터널 및 도로 환경에 적용 가능합니다.',
                icon: MapPin
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              차량 추적관리시스템 시범사업을 시작하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              DoIoT와 함께 AI 기술로 터널 안전의 새로운 시대를 열어가세요. 
              시범사업 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                문의하기
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VehicleTrackingSystemPage 