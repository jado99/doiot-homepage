'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Users, TrendingUp, Shield, Zap, Database } from 'lucide-react'
import Link from 'next/link'

const SmartCityIoTPage = () => {
  const features = [
    {
      icon: MapPin,
      title: '실시간 교통 관리',
      description: '교통 신호 최적화 및 교통량 분석으로 도시 교통을 효율적으로 관리합니다.'
    },
    {
      icon: Users,
      title: '시민 서비스 향상',
      description: '공공 서비스의 디지털화로 시민의 편의성을 극대화합니다.'
    },
    {
      icon: TrendingUp,
      title: '데이터 기반 의사결정',
      description: '실시간 데이터 수집 및 분석으로 효율적인 도시 계획을 수립합니다.'
    },
    {
      icon: Shield,
      title: '안전한 도시 환경',
      description: 'CCTV와 센서를 활용한 범죄 예방 및 응급 상황 대응 시스템을 구축합니다.'
    },
    {
      icon: Zap,
      title: '에너지 효율성',
      description: '스마트 그리드와 LED 조명으로 도시의 에너지 소비를 최적화합니다.'
    },
    {
      icon: Database,
      title: '통합 관리 플랫폼',
      description: '모든 도시 인프라를 하나의 플랫폼에서 통합 관리합니다.'
    }
  ]

  const benefits = [
    '교통 혼잡도 30% 감소',
    '에너지 사용량 25% 절약',
    '응급 상황 대응 시간 50% 단축',
    '시민 만족도 40% 향상',
    '운영 비용 20% 절감'
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
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              스마트 시티 IoT 플랫폼
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              IoT 기술을 활용한 미래형 도시 구축으로 시민의 삶의 질을 향상시키고 
              지속 가능한 도시 발전을 실현합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                무료 상담 신청
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                데모 시연 요청
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
                미래를 선도하는 스마트 시티 IoT 플랫폼
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  DoIoT의 스마트 시티 IoT 플랫폼은 IoT 센서, 빅데이터 분석, AI 기술을 
                  융합하여 도시의 모든 영역을 연결하고 최적화합니다.
                </p>
                <p>
                  교통, 에너지, 환경, 안전, 행정 서비스 등 도시 인프라 전반에 걸쳐 
                  실시간 모니터링과 자동화된 제어 시스템을 구축합니다.
                </p>
                <p>
                  시민 중심의 서비스 설계로 도시의 경쟁력을 향상시키고, 
                  지속 가능한 발전을 위한 기반을 마련합니다.
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
              <h3 className="text-2xl font-bold mb-4">주요 성과</h3>
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
              스마트 시티 구축을 위한 다양한 IoT 기술과 솔루션을 제공합니다.
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

      {/* Technology Stack */}
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
              기술 스택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 IoT 기술과 플랫폼을 활용하여 안정적이고 확장 가능한 
              스마트 시티 솔루션을 구축합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: '센서 기술', items: ['IoT 센서', 'LPWAN', '5G', 'LoRaWAN'] },
              { category: '데이터 처리', items: ['빅데이터', '실시간 분석', 'AI/ML', '클라우드'] },
              { category: '플랫폼', items: ['AWS IoT', 'Azure IoT', 'Google Cloud', 'Kubernetes'] },
              { category: '보안', items: ['암호화', '인증', '접근 제어', '모니터링'] }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
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
              스마트 시티 IoT 플랫폼 구축을 시작하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              DoIoT의 전문 팀과 함께 미래형 도시를 만들어가세요. 
              무료 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                무료 상담 신청
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                기술 문서 다운로드
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SmartCityIoTPage 