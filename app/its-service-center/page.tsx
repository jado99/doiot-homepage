'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Wrench, Settings, Clock, Shield, Users, Monitor, FileText, ExternalLink, Download } from 'lucide-react'
import Link from 'next/link'

const ITSServiceCenterPage = () => {
  const features = [
    {
      icon: Wrench,
      title: '전문 수리 서비스',
      description: 'ITS 관련 전자제품의 전문적인 진단 및 수리 서비스 제공'
    },
    {
      icon: Settings,
      title: '부품 교체',
      description: '정품 부품을 사용한 정확한 부품 교체 및 호환성 보장'
    },
    {
      icon: Clock,
      title: '신속 수리',
      description: '빠른 진단과 수리로 최소한의 다운타임으로 서비스 복구'
    },
    {
      icon: Shield,
      title: '품질 보증',
      description: '수리 완료 후 품질 검증 및 보증 서비스 제공'
    },
    {
      icon: Users,
      title: '기술 지원',
      description: '수리 전후 기술 상담 및 사용법 안내 서비스'
    },
    {
      icon: Monitor,
      title: '원격 진단',
      description: '원격으로 문제를 진단하여 수리 시간 단축'
    }
  ]

  const services = [
    'ITS 전자제품 진단 및 수리',
    '부품 교체 및 업그레이드',
    '소프트웨어 문제 해결',
    '하드웨어 고장 수리',
    '정기 점검 및 유지보수',
    '긴급 수리 서비스',
    '수리 후 품질 검증',
    '기술 상담 및 교육'
  ]

  const benefits = [
    '전문 기술로 정확한 진단과 수리',
    '정품 부품 사용으로 신뢰성 보장',
    '신속한 수리로 업무 중단 최소화',
    '수리 후 품질 보증으로 안심',
    '비용 효율적인 수리 서비스',
    '기술 지원으로 사용법 개선'
  ]

  const systemComponents = [
    { component: '진단 시스템', description: '전문 진단 장비를 통한 정확한 문제 파악' },
    { component: '수리 작업장', description: '전문 도구와 장비를 갖춘 수리 환경' },
    { component: '부품 관리', description: '정품 부품 재고 관리 및 공급 시스템' },
    { component: '품질 검증', description: '수리 완료 후 품질 테스트 및 검증' }
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
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                <Wrench size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ITS 서비스 센터
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              ITS 관련 전자제품의 전문적인 진단과 수리 서비스를 제공하는 
              신뢰할 수 있는 서비스 센터
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
                전문 수리 서비스
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ITS 서비스 센터는 교통정보시스템 관련 전자제품의 
                  전문적인 진단과 수리 서비스를 제공합니다.
                </p>
                <p>
                  고장난 ITS 장비를 정확히 진단하고, 정품 부품을 사용하여 
                  신뢰성 있는 수리 서비스를 제공합니다.
                </p>
                <p>
                  신속한 수리와 품질 보증으로 고객의 업무 중단을 최소화하고 
                  안정적인 시스템 운영을 지원합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">주요 서비스</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              ITS 서비스 센터의 혜택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전문적인 수리 서비스로 얻을 수 있는 다양한 혜택들입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
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
              서비스 구성
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ITS 서비스 센터의 핵심 구성 요소들입니다.
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
              ITS 서비스 센터의 주요 기능들을 통해 신뢰할 수 있는 수리 서비스를 제공합니다.
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

      {/* PDF Section */}
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
              관련 자료
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ITS 서비스 센터 운영에 대한 자세한 정보를 확인하세요.
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <FileText className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">ITS 서비스 센터 운영 계획서</h3>
                  <p className="text-gray-600">전자제품 수리 서비스 센터 운영 방안</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">주요 내용</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• ITS 서비스 센터 운영 체계 및 조직 구성</li>
                <li>• 전자제품 진단 및 수리 프로세스</li>
                <li>• 부품 관리 및 재고 시스템</li>
                <li>• 품질 관리 및 보증 체계</li>
                <li>• 고객 서비스 및 기술 지원 방안</li>
                <li>• 수리 후 품질 검증 시스템</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/documents/its-service-center.pdf"
                download
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Download size={20} className="mr-2" />
                PDF 다운로드
              </a>
              <a
                href="/documents/its-service-center.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <ExternalLink size={20} className="mr-2" />
                새 창에서 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              ITS 서비스 센터를 이용해보세요
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              DoIoT의 전문 기술로 안정적이고 신뢰할 수 있는 수리 서비스를 제공합니다.
            </p>
            <Link 
              href="/#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              문의하기
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ITSServiceCenterPage 