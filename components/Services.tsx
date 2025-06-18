'use client'

import { motion } from 'framer-motion'
import { Wifi, Building, Smartphone, Database, Shield, Cloud } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: '스마트 시티 솔루션',
      description: '도시 인프라를 IoT 기술로 연결하여 효율적이고 지속가능한 스마트 시티를 구축합니다.',
      features: ['교통 관리 시스템', '환경 모니터링', '에너지 관리', '공공 안전'],
      href: '/smart-city-solution'
    },
    {
      icon: Building,
      title: '산업 IoT',
      description: '제조업과 산업 현장에 IoT 기술을 적용하여 생산성과 효율성을 극대화합니다.',
      features: ['설비 모니터링', '예측 정비', '품질 관리', '자동화 시스템'],
      href: '/industrial-iot-platform'
    },
    {
      icon: Smartphone,
      title: '웨어러블 디바이스',
      description: '개인 건강과 생활을 향상시키는 스마트 웨어러블 솔루션을 개발합니다.',
      features: ['건강 모니터링', '피트니스 추적', '알림 시스템', '데이터 분석'],
      href: '/wearable-device'
    },
    {
      icon: Database,
      title: '데이터 분석',
      description: 'IoT 센서에서 수집된 데이터를 분석하여 가치 있는 인사이트를 제공합니다.',
      features: ['실시간 분석', '예측 모델링', '시각화', '보고서 생성'],
      href: '/data-analytics'
    },
    {
      icon: Shield,
      title: '보안 솔루션',
      description: 'IoT 환경에서 발생할 수 있는 보안 위협을 방지하는 종합적인 보안 솔루션을 제공합니다.',
      features: ['네트워크 보안', '디바이스 인증', '데이터 암호화', '위협 탐지'],
      href: '/security-solutions'
    },
    {
      icon: Cloud,
      title: '클라우드 플랫폼',
      description: 'IoT 디바이스와 데이터를 관리할 수 있는 안정적이고 확장 가능한 클라우드 플랫폼을 제공합니다.',
      features: ['디바이스 관리', '데이터 저장', 'API 제공', '확장성'],
      href: '/iot-consulting'
    }
  ]

  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            우리의 서비스
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            IoT 기술을 활용한 다양한 솔루션으로 고객의 디지털 전환을 지원합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">주요 기능:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs sm:text-sm text-gray-600 flex items-center">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                href={service.href}
                className="mt-4 sm:mt-6 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm transition-colors duration-200 inline-flex items-center"
              >
                자세히 보기 →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              맞춤형 IoT 솔루션이 필요하신가요?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
              고객의 특정 요구사항에 맞는 맞춤형 IoT 솔루션을 개발해드립니다. 
              전문 팀과 함께 최적의 솔루션을 찾아보세요.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
            >
              문의하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 