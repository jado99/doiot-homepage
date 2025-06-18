'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Camera, Eye, Zap, Settings, Monitor, Filter, FileText, ExternalLink, Download } from 'lucide-react'
import Link from 'next/link'

const CCTVImageEnhancementPage = () => {
  const features = [
    {
      icon: Filter,
      title: '256단계 자동 필터',
      description: '안개 농도와 어두운 정도에 따른 256단계 필터가 자동으로 설정되어 세밀한 영상 보정이 가능합니다.'
    },
    {
      icon: Camera,
      title: '다채널 영상 개선',
      description: '제어 PC/영상저장서버(NVR) 후단에 설치하여 다채널 영상 개선이 가능합니다.'
    },
    {
      icon: Eye,
      title: 'HD급 안개 제거',
      description: 'HD급 안개 제거 전용 알고리즘을 적용한 고성능 FPGA 솔루션을 사용합니다.'
    },
    {
      icon: Zap,
      title: '3D 노이즈 제거',
      description: '3D Noise Reduction Filter를 적용하여 노이즈를 최소화합니다.'
    },
    {
      icon: Settings,
      title: '자동 모드',
      description: 'Auto Mode로 안개 농도/어두운 정도에 따른 256단계 필터 자동 설정이 가능합니다.'
    },
    {
      icon: Monitor,
      title: '에너지 효율성',
      description: '카메라별 1:1 부착 설치 대비 상당한 에너지/비용 절감 효과를 제공합니다.'
    }
  ]

  const improvements = [
    '안개, 눈, 비, 황사 등으로 인한 Color 정복원',
    '저조도 환경에서의 영상 개선',
    '스모그, 안개 등으로 인한 흐린 영상 선명화',
    '열화상카메라의 최소온도분해능(MRTD) 향상',
    '배경과 타겟의 온도 차이가 작은 경우 영상 개선'
  ]

  const products = [
    { 
      name: 'HVH-200', 
      type: 'DVR 서버 부착형',
      description: '서버 후단에 설치하여 다채널 영상 개선',
      features: ['다채널 지원', '서버 통합', '중앙 관리']
    },
    { 
      name: 'HVS-100', 
      type: '현장 카메라 부착형',
      description: '개별 카메라에 직접 부착하여 영상 개선',
      features: ['1:1 설치', '현장 처리', '독립 운영']
    }
  ]

  const useCases = [
    '도로 CCTV 화질 개선',
    '터널 내 영상 선명화',
    '항만/공항 보안 영상 개선',
    '산업시설 모니터링',
    '교통관리 시스템',
    '보안 감시 시스템'
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
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                <Camera size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CCTV 화질개선용 영상개선기
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              안개, 저조도, 황사 등으로 인한 흐린 영상을 
              선명하게 개선하는 혁신적인 영상처리 솔루션
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/#contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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
                CCTV 영상의 새로운 기준
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  기존 CCTV 운영에서 저조도, 안개 등으로 인해 잘 보이지 않는 문제를 
                  카메라 변경 없이 영상개선기 추가로 해결합니다.
                </p>
                <p>
                  256단계의 Defog Filter 및 Low Light Filter를 보유하여 
                  안개 농도와 어두운 정도에 따른 자동 보정이 가능합니다.
                </p>
                <p>
                  HD급 안개 제거 전용 알고리즘과 3D Noise Reduction Filter를 적용하여 
                  최고 품질의 영상을 제공합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">주요 개선 효과</h3>
              <div className="space-y-3">
                {improvements.map((improvement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span className="text-sm">{improvement}</span>
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
              기존 CCTV의 한계를 영상개선기로 해결합니다.
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
                <p>• 저조도 환경에서 영상이 잘 보이지 않음</p>
                <p>• 안개, 눈, 비, 황사로 인한 영상 흐림</p>
                <p>• Color 정보가 흐리게 된 영상</p>
                <p>• 카메라 교체 시 높은 비용 발생</p>
                <p>• 열화상카메라의 온도분해능 한계</p>
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
                <p>• 256단계 자동 필터로 세밀한 영상 보정</p>
                <p>• HD급 안개 제거 전용 알고리즘 적용</p>
                <p>• 3D Noise Reduction Filter로 노이즈 최소화</p>
                <p>• 카메라 변경 없이 영상개선기 추가 설치</p>
                <p>• 열화상카메라의 MRTD 향상</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
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
              제품 라인업
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              설치 환경에 맞는 최적의 영상개선기를 선택하세요.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-indigo-600 font-semibold">{product.type}</p>
                </div>
                <p className="text-gray-600 mb-6 text-center">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
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
              최첨단 영상처리 기술을 활용한 혁신적인 기능들을 제공합니다.
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
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
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

      {/* Use Cases */}
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
              적용 분야
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 환경에서 CCTV 영상 개선이 필요한 곳에 적용 가능합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{useCase}</h3>
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
              고성능 영상처리를 위한 기술적 특징들입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { spec: '필터 단계', value: '256단계', description: 'Defog Filter 및 Low Light Filter' },
              { spec: '처리 방식', value: 'FPGA', description: '고성능 FPGA 솔루션 적용' },
              { spec: '노이즈 제거', value: '3D Filter', description: '3D Noise Reduction Filter' },
              { spec: '자동 모드', value: 'Auto Mode', description: '안개 농도/어두운 정도 자동 감지' }
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-bold text-indigo-600 mb-2">{spec.value}</div>
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
              CCTV 화질개선용 영상개선기의 상세한 시범사업계획을 확인하세요.
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
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">CCTV 화질개선용 영상개선기 시범사업계획서</h3>
                    <p className="text-sm text-gray-600">안개, 저조도, 황사 등으로 인한 흐린 영상을 선명하게 개선하는 영상처리 솔루션의 상세한 시범사업 계획</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="/documents/cctv-color-filter.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    새 창에서 보기
                  </a>
                  <a
                    href="/documents/cctv-color-filter.pdf"
                    download="CCTV_화질개선_시범사업계획서.pdf"
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
                  <p>• <strong>사업명:</strong> CCTV 화질개선용 영상개선기 시범사업</p>
                  <p>• <strong>사업기간:</strong> 2024년 12월 24일</p>
                  <p>• <strong>사업규모:</strong> 다채널 영상 개선 시스템</p>
                  <p>• <strong>핵심기술:</strong> 256단계 필터, HD급 안개 제거, 3D 노이즈 제거</p>
                  <p>• <strong>기대효과:</strong> 영상 선명도 향상, 에너지/비용 절감</p>
                  <p className="text-blue-600 font-medium">전체 내용은 위의 "새 창에서 보기" 또는 "다운로드" 버튼을 통해 확인하세요.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              CCTV 화질개선용 영상개선기 시범사업을 시작하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              DoIoT와 함께 CCTV 영상의 새로운 기준을 만들어가세요. 
              시범사업 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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

export default CCTVImageEnhancementPage 