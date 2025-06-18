'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: '이메일',
      content: 'jado9982@gmail.com',
      description: '문의사항이 있으시면 언제든 연락주세요'
    },
    {
      icon: Phone,
      title: '전화번호',
      content: '010-2203-7337',
      description: '평일 08:00 - 22:00'
    },
    {
      icon: MapPin,
      title: '주소',
      content: '용인시 기흥구 중부대로 184, 힉스유타워 A동 317-2호',
      description: '경부고속도로 수원톨게이트에서 5분 거리'
    },
    {
      icon: Clock,
      title: '영업시간',
      content: '평일 09:00 - 18:00',
      description: '토요일, 일요일 휴무'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직
    console.log('Form submitted')
  }

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
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
            DoIoT와 함께하세요
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            IoT 기술로 더 나은 미래를 만들어가고 싶으시다면, 
            언제든 DoIoT에 연락해주세요.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              연락처 정보
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-900 font-medium mb-1 text-sm sm:text-base">
                      {info.content}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-xl"
            >
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                DoIoT 소개
              </h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                DoIoT는 AI 기반 IoT 기술을 활용한 혁신적인 솔루션을 제공하는 전문 기업입니다. 
                스마트 건설, 스마트 시티, 산업 IoT, 웨어러블 디바이스 등 다양한 분야에서 
                최고의 서비스를 제공하고 있습니다.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-xs sm:text-sm text-gray-500">전문 인력</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-xs sm:text-sm text-gray-500">완료 프로젝트</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-xs sm:text-sm text-gray-500">업계 경력</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              문의하기
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  성명 *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                  placeholder="example@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  회사명
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                  placeholder="회사명을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  관심 서비스
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                >
                  <option value="">서비스를 선택해주세요</option>
                  <option value="smart-city">스마트 시티</option>
                  <option value="industrial-iot">산업 IoT</option>
                  <option value="wearable">웨어러블 디바이스</option>
                  <option value="data-analysis">데이터 분석</option>
                  <option value="consulting">IoT 컨설팅</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base resize-none"
                  placeholder="문의하실 내용을 자세히 작성해주세요."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
              >
                문의하기
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 