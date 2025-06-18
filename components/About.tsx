'use client'

import { motion } from 'framer-motion'
import { Users, Award, Clock, Target } from 'lucide-react'

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '5+',
      label: '전문 인력',
      description: 'IoT 전문가들로 구성된 팀'
    },
    {
      icon: Award,
      number: '10+',
      label: '완료 프로젝트',
      description: '다양한 분야의 성공적인 프로젝트'
    },
    {
      icon: Clock,
      number: '5+',
      label: '업계 30년 경력',
      description: 'IoT 분야에서의 풍부한 경험'
    },
    {
      icon: Target,
      number: '95%',
      label: '고객 만족도',
      description: '높은 고객 만족도와 신뢰'
    }
  ]

  const values = [
    {
      title: '혁신',
      description: '최신 AI기술을 활용한 혁신적인 솔루션 개발',
      color: 'bg-blue-500'
    },
    {
      title: '신뢰',
      description: '고객과의 신뢰 관계 구축을 최우선으로',
      color: 'bg-green-500'
    },
    {
      title: '품질',
      description: '최고 품질의 서비스와 제품 제공',
      color: 'bg-purple-500'
    },
    {
      title: '성장',
      description: '지속적인 기술 발전과 성장 추구',
      color: 'bg-orange-500'
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            DoIoT 소개
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            AI 기반 IoT 기술을 활용한 혁신적인 솔루션을 제공하는 전문 기업으로, 
            더 안전하고 편리한 미래를 만들어갑니다.
          </p>
        </motion.div>

        {/* Company Description */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              IoT 기술의 선두주자
            </h3>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base">
              <p>
                DoIoT는 2024년 설립 이후 AI 기반 IoT 기술 분야에서 지속적인 혁신을 이어가고 있습니다. 
                스마트 건설, 스마트 시티, 산업 IoT, 웨어러블 디바이스 등 다양한 분야에서 최고의 솔루션을 제공하고 있습니다.
              </p>
              <p>
                우리는 최신 AI기술 트렌드를 반영한 혁신적인 제품과 서비스를 개발하여, 
                고객의 디지털 전환을 성공적으로 지원합니다.
              </p>
              <p>
                전문성과 창의성을 바탕으로 한 DoIoT만의 차별화된 솔루션으로, 
                더 나은 미래를 만들어가겠습니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
              <h4 className="text-xl sm:text-2xl font-bold mb-4">DoIoT의 미션</h4>
              <p className="text-base sm:text-lg leading-relaxed">
                "AI 기반 IoT 기술을 통해 사람들의 삶을 더욱 편리하고 스마트하게 만들어, 
                지속 가능한 미래를 구현하는 것입니다."
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 sm:p-4 shadow-lg">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">2024</div>
                <div className="text-xs sm:text-sm text-gray-600">설립년도</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mb-3 sm:mb-4">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            DoIoT의 핵심 가치
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${value.color} rounded-lg mb-3 sm:mb-4 flex items-center justify-center`}>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded"></div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h4>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 