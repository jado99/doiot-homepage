'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Monitor, Palette, Settings, Zap, Eye, FileText, ExternalLink, Download } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const VMSAIGenerationPage = () => {
  const features = [
    {
      icon: Brain,
      title: '생성형 AI 기술',
      description: 'GAN, CGAN, Pix2Pix, Transformer 등 최신 AI 모델을 활용한 문자 생성 시스템'
    },
    {
      icon: Monitor,
      title: 'DOT 불량 회피',
      description: 'BMP 파일 분석을 통한 DOT 불량 상태 파악 및 자동 회피 알고리즘 적용'
    },
    {
      icon: Palette,
      title: '다양한 글자체',
      description: '기존 VMS 운영 글자체에 다양성을 부여하여 예쁘게 표출'
    },
    {
      icon: Settings,
      title: '자동 문자 생성',
      description: '깨진 문자 인식 및 인근 LED로 재생성하여 가독성 향상'
    },
    {
      icon: Zap,
      title: '실시간 처리',
      description: '실시간으로 DOT 상태를 분석하고 최적화된 문자를 생성'
    },
    {
      icon: Eye,
      title: '사용자 선택',
      description: 'AI가 생성한 적정 문구 중 사용자가 선택하여 표출 가능'
    }
  ]

  const improvements = [
    '깨진 상태로 문안 표출 (현재)',
    '깨진 부분을 수정하여 생성된 문안 표출 (개발)',
    'AI 모델을 통한 최적화된 문자 생성',
    '사용자 선택 기반 표출 시스템'
  ]

  const dotStatus = [
    { status: '정상 상태', color: '검정색(0,0,0)', description: '해당 픽셀에 이상이 없을 경우' },
    { status: 'Red Dot 불량', color: '빨간색(255,0,0)', description: '빨간색(R)이 고장난 경우' },
    { status: 'Green Dot 불량', color: '녹색(0,255,0)', description: '녹색(G)이 고장난 경우' },
    { status: 'Blue Dot 불량', color: '파란색(0,0,255)', description: '파란색(B)이 고장난 경우' },
    { status: '화이트 불량', color: '하얀색(255,255,255)', description: 'R, G, B가 모두 불량일 경우' }
  ]

  const examples = [
    { word: '소', fix: "'ㅗ' 부분을 두껍게 생성" },
    { word: '통', fix: "글자를 약간 작게(폰트 축소), 우측으로 Shift" },
    { word: '원', fix: "'o' 부분을 약간 위로 Shift" },
    { word: '활', fix: "글자를 약간 작게, 'ㅏ'와 'ㄹ'을 좌측으로 Shift" }
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
      <section className="bg-gradient-to-br from-purple-500 to-blue-600 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/icons/vms-ai-generation.svg" alt="VMS AI 자동생성 시스템" className="w-32 h-32" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              VMS AI 자동생성 시스템
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              생성형 AI 기술로 DOT 불량을 회피하고 
              가독성 높은 VMS 표출문자를 자동으로 생성하는 혁신적인 솔루션
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/#contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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
                VMS 표출의 혁신적 개선
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  생성형 인공지능(AI) 기술을 활용하여 기존 VMS 운영 글자체에 
                  다양성을 부여하고 DOT 불량을 회피하는 알고리즘을 적용합니다.
                </p>
                <p>
                  깨진 문자를 인식하고 인근 LED로 재생성하여 
                  가독성을 크게 향상시킵니다.
                </p>
                <p>
                  한글 2,350 완성형 코드(KS X1001)와 11,172 유니코드를 
                  완벽하게 지원합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">개선 방안</h3>
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

      {/* Current Issues */}
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
              현재 문제점
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DOT 불량으로 인한 VMS 표출 문제를 AI 기술로 해결합니다.
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">DOT 불량 현상</h3>
              <div className="space-y-3 text-gray-600">
                <p>• 개별 DOT 불량</p>
                <p>• 한줄 DOT 불량</p>
                <p>• 여러줄 DOT 불량 (1글자 무조건 Shift)</p>
                <p>• 글자 깨짐 현상 발생</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">해결 방안</h3>
              <div className="space-y-3 text-gray-600">
                <p>• BMP 파일을 통한 DOT 상태 분석</p>
                <p>• AI 기반 문자 재생성</p>
                <p>• 불량 부분 제외한 최적화</p>
                <p>• 실시간 처리 및 표출</p>
              </div>
            </motion.div>
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
              최신 AI 기술을 활용한 VMS 문자 생성 시스템의 주요 기능입니다.
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
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
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

      {/* DOT Status Analysis */}
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
              DOT 상태 분석
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BMP 파일을 통한 DOT 불량 상태 파악 및 색상별 분석 시스템
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dotStatus.map((status, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{status.status}</h3>
                <p className="text-sm font-medium text-gray-700 mb-1">{status.color}</p>
                <p className="text-sm text-gray-600">{status.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
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
              문자 수정 예시
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI가 깨진 문자를 인식하고 최적화된 형태로 재생성하는 예시입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-gray-900 mb-3">{example.word}</div>
                <p className="text-sm text-gray-600">{example.fix}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
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
              기술 사양
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VMS AI 자동생성 시스템의 상세한 기술 사양을 확인하세요.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI 모델</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• GAN (Generative Adversarial Network)</li>
                <li>• CGAN (Conditional GAN)</li>
                <li>• Pix2Pix</li>
                <li>• Transformer</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">지원 문자</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 한글 2,350 완성형 (KS X1001)</li>
                <li>• 한글 11,172 유니코드</li>
                <li>• 영문, 숫자, 특수문자</li>
                <li>• 다양한 글자체 지원</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">처리 성능</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 실시간 DOT 상태 분석</li>
                <li>• 자동 문자 생성 및 최적화</li>
                <li>• 사용자 선택 기반 표출</li>
                <li>• 고가용성 시스템</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Plan PDF Section */}
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
              시범사업계획서
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VMS AI 자동생성 시스템의 상세한 시범사업계획을 확인하세요.
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
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">VMS AI 자동생성 시스템 시범사업계획서</h3>
                    <p className="text-sm text-gray-600">생성형 AI 기술을 활용한 VMS 표출 문자 자동생성 시스템의 상세한 시범사업 계획</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="/documents/vms-ai-generation-plan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    새 창에서 보기
                  </a>
                  <a
                    href="/documents/vms-ai-generation-plan.pdf"
                    download="VMS_AI_자동생성_시범사업계획서.pdf"
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
                  <p>• <strong>사업명:</strong> VMS AI 자동생성 시스템 시범사업</p>
                  <p>• <strong>사업기간:</strong> 2024년 ~ 2025년</p>
                  <p>• <strong>사업규모:</strong> VMS 10개소</p>
                  <p>• <strong>핵심기술:</strong> 생성형 AI, DOT 불량 회피 알고리즘</p>
                  <p>• <strong>기대효과:</strong> VMS 가독성 향상, DOT 불량 문제 해결</p>
                  <p className="text-blue-600 font-medium">전체 내용은 위의 "새 창에서 보기" 또는 "다운로드" 버튼을 통해 확인하세요.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              VMS AI 문자생성 시스템 개발을 시작하세요
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              DoIoT와 함께 AI 기술로 VMS 표출의 새로운 시대를 열어가세요. 
              개발 계획 상담을 통해 최적의 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
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

export default VMSAIGenerationPage 