'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Volume2, Wifi, Shield, AlertTriangle, MapPin, Radio, Bell, Settings } from 'lucide-react'
import Link from 'next/link'

const WirelessSpeakerSystemPage = () => {
  const features = [
    {
      icon: Volume2,
      title: '음성 경고 시스템',
      description: '위험 시설에 접근 시 음성표출을 통한 실시간 정보 제공으로 사고를 사전에 예방합니다.'
    },
    {
      icon: Wifi,
      title: '다양한 통신방식',
      description: 'LoRa, LTE 등 다양한 통신방식을 적용하여 안정적인 무선 통신을 제공합니다.'
    },
    {
      icon: Shield,
      title: '사전 경고 기능',
      description: '위험 또는 출입금지 시설에 접근하기 전에 음성으로 정보를 제공합니다.'
    },
    {
      icon: AlertTriangle,
      title: '다양한 위험 시설 대응',
      description: '특고압, 쓰레기 투기장소, 자살소동, 가스맨홀, 혐오시설 등에 적용 가능합니다.'
    },
    {
      icon: MapPin,
      title: '건설현장 특화',
      description: '건설현장, 작업장 등 다양한 환경에 최적화된 설계로 안전성을 극대화합니다.'
    },
    {
      icon: Settings,
      title: '원격 제어 시스템',
      description: 'IoT 기술을 활용한 원격 제어로 상황에 맞는 음성 메시지를 실시간으로 전송합니다.'
    }
  ]

  const benefits = [
    '사고 예방율 85% 향상',
    '작업자 안전성 대폭 개선',
    '음성 경고로 즉시 인지',
    '다양한 통신방식 지원',
    '원격 제어로 효율적 운영'
  ]

  const targetFacilities = [
    { facility: '특고압 시설', description: '고압 전기 시설 접근 시 음성 경고' },
    { facility: '쓰레기 투기장소', description: '무단 투기 방지를 위한 음성 안내' },
    { facility: '자살소동', description: '위험 상황 발생 시 즉시 경고' },
    { facility: '가스맨홀', description: '가스 누출 위험 시 음성 경고' },
    { facility: '혐오시설', description: '접근 금지 구역 음성 안내' }
  ]

  const systemComponents = [
    { component: '무선스피커', description: 'IoT 기술이 적용된 고품질 음성 출력 장치' },
    { component: '통신 모듈', description: 'LoRa, LTE 등 다양한 통신방식 지원' },
    { component: '센서 시스템', description: '접근 감지 및 상황 인식 센서' },
    { component: '제어 시스템', description: '원격 제어 및 음성 메시지 관리' }
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
      <section className="bg-gradient-to-br from-green-500 to-emerald-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/icons/wireless-speaker-system.svg" alt="위험상황 경고용 무선스피커" className="w-32 h-32" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              위험상황 경고용 무선스피커
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              IoT 기술을 활용한 음성 경고 시스템으로 위험 시설 접근 시 
              실시간 정보 제공을 통해 사고를 사전에 예방하는 혁신적인 안전 솔루션
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/#contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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
                안전의 새로운 기준
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  건설현장, 작업장 등 위험 및 출입금지 시설에 IoT 기술을 활용한 
                  음성 경고 시스템으로 접근자의 안전을 보호합니다.
                </p>
                <p>
                  특고압, 쓰레기 투기장소, 자살소동, 가스맨홀, 혐오시설 등 
                  다양한 위험 환경에 적용 가능한 범용적인 솔루션입니다.
                </p>
                <p>
                  LoRa, LTE 등 다양한 통신방식을 지원하여 
                  안정적이고 효율적인 무선 통신을 제공합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white"
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
              위험 시설의 안전 관리를 IoT 기술로 해결합니다.
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
                <p>• 위험 시설 작업자 주의 환기 시설 부족</p>
                <p>• 쓰레기 투기 방지 시설 부족</p>
                <p>• 접근자 사전 경고 시스템 미흡</p>
                <p>• 위험 상황 즉시 대응 어려움</p>
                <p>• 다양한 위험 시설 대응 한계</p>
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
                <p>• 음성표출을 통한 실시간 정보 제공</p>
                <p>• IoT 기술 활용한 원격 제어 시스템</p>
                <p>• 다양한 통신방식(LoRa, LTE) 지원</p>
                <p>• 접근자 사전 경고로 사고 예방</p>
                <p>• 범용적인 위험 시설 대응</p>
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
              IoT 기술을 활용한 위험상황 경고용 무선스피커 시스템의 핵심 구성 요소
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
              IoT 기술을 활용한 위험상황 경고용 무선스피커의 주요 기능
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
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
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

      {/* Target Facilities */}
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
              적용 대상 시설
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 위험 시설에 적용 가능한 범용적인 안전 솔루션
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetFacilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.facility}</h3>
                <p className="text-gray-600">{facility.description}</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">통신 기술</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>LoRa 통신:</strong> 장거리, 저전력 무선 통신으로 안정적인 연결</p>
                <p>• <strong>LTE 통신:</strong> 고속 데이터 전송으로 실시간 음성 전송</p>
                <p>• <strong>다중 통신:</strong> 상황에 맞는 최적의 통신방식 선택</p>
                <p>• <strong>무선 제어:</strong> 원격에서 실시간으로 음성 메시지 제어</p>
                <p>• <strong>안정성:</strong> 통신 장애 시 자동 복구 기능</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">음성 시스템</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>고품질 음성:</strong> 명확하고 이해하기 쉬운 음성 출력</p>
                <p>• <strong>다국어 지원:</strong> 다양한 언어로 음성 메시지 제공</p>
                <p>• <strong>실시간 전송:</strong> 상황 발생 시 즉시 음성 경고</p>
                <p>• <strong>맞춤형 메시지:</strong> 시설별 특성에 맞는 음성 메시지</p>
                <p>• <strong>음량 조절:</strong> 환경에 따른 자동 음량 조절</p>
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
              IoT 기반 위험상황 경고용 무선스피커로 달성할 수 있는 구체적인 효과
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '안전성 향상',
                description: '사고 예방율 85% 향상으로 작업자 안전이 대폭 개선됩니다.',
                icon: Shield
              },
              {
                title: '즉시 인지',
                description: '음성 경고로 위험 상황을 즉시 인지하여 신속한 대응이 가능합니다.',
                icon: Volume2
              },
              {
                title: '원격 제어',
                description: 'IoT 기술로 원격에서 실시간 제어하여 효율적인 운영이 가능합니다.',
                icon: Radio
              },
              {
                title: '범용성',
                description: '다양한 위험 시설에 적용 가능한 범용적인 솔루션입니다.',
                icon: MapPin
              },
              {
                title: '통신 안정성',
                description: 'LoRa, LTE 등 다양한 통신방식으로 안정적인 연결을 보장합니다.',
                icon: Wifi
              },
              {
                title: '비용 효율성',
                description: '기존 시설 대비 설치 및 운영 비용을 절약할 수 있습니다.',
                icon: Settings
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
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              위험상황 경고용 무선스피커 개발을 시작하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              DoIoT와 함께 IoT 기술로 안전의 새로운 시대를 열어가세요. 
              개발 계획 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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

export default WirelessSpeakerSystemPage 