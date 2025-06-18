'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Lightbulb, Bell, Wifi, Shield, MapPin, AlertTriangle, Settings, Radio } from 'lucide-react'
import Link from 'next/link'

const EmergencyLightSystemPage = () => {
  const features = [
    {
      icon: Lightbulb,
      title: '경광등 원격제어',
      description: 'IoT망과 연계하여 상황실에서 경광등을 원격으로 제어할 수 있습니다.'
    },
    {
      icon: Bell,
      title: '비상벨 IoT 연동',
      description: 'IoT 무선기능을 이용한 비상벨로 쉽게 눈에 보이도록 가드레일에 부착됩니다.'
    },
    {
      icon: Wifi,
      title: 'LoRaWAN 무선통신',
      description: 'IoT 단말장치를 이용한 무선기능으로 원격제어(On/Off 제어)가 가능합니다.'
    },
    {
      icon: Shield,
      title: '2차 사고 예방',
      description: '차단작업 및 정체구간 후미에 신속히 상황을 알려 2차 사고를 사전에 예방합니다.'
    },
    {
      icon: MapPin,
      title: '취약지점 집중관리',
      description: '사고다발지점이나 상습지정체 구간에 개소별 적정 수량으로 설치됩니다.'
    },
    {
      icon: Settings,
      title: '통합 운영 시스템',
      description: '교통사고, 공사 차단, CCTV 등의 정보 DATA를 통합하여 운영합니다.'
    }
  ]

  const benefits = [
    '2차 사고 예방율 80% 향상',
    '운전자 인식도 90% 개선',
    '신속한 상황 전파',
    '야간 운영 최적화',
    '교통안전 OECD TOP5 달성'
  ]

  const systemComponents = [
    { component: '경광등 IoT 단말장치', description: 'LoRaWAN 무선기능으로 원격제어 가능' },
    { component: '비상벨 IoT 시스템', description: '가드레일 부착형 무선 비상벨' },
    { component: '상황실 제어 시스템', description: '통합 정보 DATA 기반 원격 운영' },
    { component: '무선통신 네트워크', description: 'LoRaWAN 기반 안정적인 통신' }
  ]

  const installationFeatures = [
    { feature: '시인성 최적화', description: '거리를 감안한 최적의 시인성 확보' },
    { feature: '취약지점 집중', description: '사고다발지점 및 상습지정체 구간 우선 설치' },
    { feature: '개소별 적정 수량', description: '지역 특성에 맞는 최적 수량 배치' },
    { feature: '안전한 고정', description: '분실 대비 너트로 안전하게 고정' },
    { feature: '관리 편의성', description: '운영 및 유지보수가 편리한 설계' }
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
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/icons/emergency-light-system.svg" alt="경광등 원격관리 시스템" className="w-32 h-32" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              경광등, 비상벨 원격관리 시스템
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              IoT 기술을 활용한 경광등 원격제어 및 비상벨 관리 시스템으로 
              2차 사고를 사전에 예방하는 혁신적인 안전 솔루션
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/#contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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
                교통안전의 새로운 패러다임
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  교통안전 OECD TOP5 달성목표를 위한 3대 중점분야(차단작업 사고, 
                  교통약자 사고, 정체후미 사고) 집중관리에 특화된 시스템입니다.
                </p>
                <p>
                  기존 상시 동작 경광등의 한계를 극복하고, IoT 기술을 활용한 
                  원격제어로 운전자 인식을 대폭 개선합니다.
                </p>
                <p>
                  상황실에서 실시간으로 경광등과 비상벨을 제어하여 
                  신속한 상황 전파가 가능합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white"
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
              기존 경광등의 한계를 IoT 기술로 해결합니다.
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
                <p>• 상시 동작 경광등으로 운전자가 크게 의식하지 않음</p>
                <p>• 상황별 맞춤형 경고 불가능</p>
                <p>• 2차 사고 예방 효과 한계</p>
                <p>• 수동 운영으로 인한 대응 지연</p>
                <p>• 교통안전 OECD TOP5 달성 목표 달성 어려움</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">IoT 기반 해결방안</h3>
              <div className="space-y-3 text-gray-600">
                <p>• IoT망과 연계한 원격제어 시스템</p>
                <p>• 상황별 맞춤형 경광등 제어</p>
                <p>• 신속한 상황 전파로 2차 사고 예방</p>
                <p>• 상황실에서 실시간 통합 운영</p>
                <p>• 교통안전 OECD TOP5 달성 지원</p>
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
              IoT 기술을 활용한 경광등 및 비상벨 원격관리 시스템의 핵심 구성 요소
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
              IoT 기술을 활용한 경광등 및 비상벨 원격관리 시스템의 주요 기능
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
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-600" />
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

      {/* Installation Features */}
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
              설치 및 운영 특징
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최적의 효과를 위한 설치 및 운영 특징들
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationFeatures.map((feature, index) => (
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
              안정적이고 효율적인 운영을 위한 기술적 특징들
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">경광등 시스템</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>IoT 단말장치:</strong> LoRaWAN 무선기능으로 원격제어 가능</p>
                <p>• <strong>싸이렌 내장:</strong> 시각적 경고와 함께 청각적 경고 제공</p>
                <p>• <strong>On/Off 제어:</strong> 상황에 맞는 정밀한 제어 가능</p>
                <p>• <strong>시인성 최적화:</strong> 거리를 감안한 최적의 시인성 확보</p>
                <p>• <strong>야간 운영:</strong> 야간 Off 기능으로 효율적 운영</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">비상벨 시스템</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>IoT 무선기능:</strong> 무선통신으로 즉시 상황 전파</p>
                <p>• <strong>가드레일 부착:</strong> 쉽게 눈에 보이도록 최적 위치 설치</p>
                <p>• <strong>안전한 고정:</strong> 분실 대비 너트로 안전하게 고정</p>
                <p>• <strong>관리 편의성:</strong> 운영 및 유지보수가 편리한 설계</p>
                <p>• <strong>통합 연동:</strong> 상황실 시스템과 완벽 연동</p>
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
              IoT 기반 경광등 및 비상벨 원격관리 시스템으로 달성할 수 있는 구체적인 효과
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '안전성 향상',
                description: '2차 사고 예방율 80% 향상으로 교통안전이 대폭 개선됩니다.',
                icon: Shield
              },
              {
                title: '운전자 인식도',
                description: '상황별 맞춤형 경고로 운전자 인식도 90% 개선됩니다.',
                icon: AlertTriangle
              },
              {
                title: '신속한 대응',
                description: '실시간 원격제어로 신속한 상황 전파가 가능합니다.',
                icon: Radio
              },
              {
                title: '운영 효율성',
                description: '야간 운영 최적화로 에너지 효율성이 향상됩니다.',
                icon: Settings
              },
              {
                title: 'OECD 목표 달성',
                description: '교통안전 OECD TOP5 달성 목표 달성을 지원합니다.',
                icon: MapPin
              },
              {
                title: '통합 관리',
                description: '교통사고, 공사 차단, CCTV 정보를 통합 관리합니다.',
                icon: Lightbulb
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
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              경광등, 비상벨 원격관리 시스템 개발을 시작하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              DoIoT와 함께 IoT 기술로 교통안전의 새로운 시대를 열어가세요. 
              개발 계획 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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

export default EmergencyLightSystemPage 