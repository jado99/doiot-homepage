'use client'

import { useState, useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const contactRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // 페이지 로딩 시뮬레이션
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (window.location.hash === '#contact' && contactRef.current) {
      // 페이지 로딩 완료 후 스크롤
      const timer = setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        // 해시 제거
        window.history.replaceState(null, '', window.location.pathname);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">
            <span className="text-gray-900">D</span>
            <span className="text-teal-500">o</span>
            <span className="text-gray-900">I</span>
            <span className="text-teal-500">o</span>
            <span className="text-gray-900">T</span>
          </h2>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      
      {/* 통합된 주요사업 섹션 */}
      <section id="pilot-projects" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              주요사업
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              DoIoT의 혁신적인 시범사업들과 주요 사업들을 자세히 살펴보세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* 터널화재 신속감지 시스템 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">🔥</div>
                  <div className="text-base sm:text-lg font-semibold">터널화재 신속감지</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    터널화재 신속감지 시스템
                  </h3>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    시범사업
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  AI와 IoT 기술을 활용한 터널 화재 신속 감지로 
                  인명과 시설을 보호하는 혁신적인 안전 솔루션
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    AI 기술
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    IoT 센서
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    실시간 모니터링
                  </span>
                </div>
                <Link 
                  href="/tunnel-fire-detection"
                  className="inline-block bg-red-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* VMS AI 문자생성 시스템 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">🤖</div>
                  <div className="text-base sm:text-lg font-semibold">VMS AI 문자생성</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    VMS AI 문자생성 시스템
                  </h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    시범사업
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  생성형 AI 기술로 DOT 불량을 회피하고 가독성 높은 문자를 
                  자동으로 생성하는 혁신적인 VMS 솔루션
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    생성형 AI
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    DOT 회피
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    VMS
                  </span>
                </div>
                <Link 
                  href="/vms-ai-generation"
                  className="inline-block bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* VSL 모니터링 시스템 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">📺</div>
                  <div className="text-base sm:text-lg font-semibold">VSL 모니터링</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    VSL 상태감시 모니터링 시스템
                  </h3>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    시범사업
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  Edge AI 기술로 CCTV 영상을 현장에서 분석하여 
                  VSL 상태를 실시간으로 모니터링하는 시스템
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-teal-100 text-teal-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Edge AI
                  </span>
                  <span className="bg-teal-100 text-teal-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    CNN 딥러닝
                  </span>
                  <span className="bg-teal-100 text-teal-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    CCTV 분석
                  </span>
                </div>
                <Link 
                  href="/vsl-monitoring"
                  className="inline-block bg-teal-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* 차량 추적관리시스템 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">🚗</div>
                  <div className="text-base sm:text-lg font-semibold">차량 추적관리</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    차량 추적관리시스템
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    사업
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  AI 기술로 터널 내 차량을 실시간 추적하고 
                  위험 요소를 감지하여 안전사고를 사전 방지
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    AI 추적
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    위험 감지
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    속도 분석
                  </span>
                </div>
                <Link 
                  href="/vehicle-tracking-system"
                  className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* 경광등, 비상벨 원격관리 시스템 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">🚨</div>
                  <div className="text-base sm:text-lg font-semibold">경광등 원격관리</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    경광등, 비상벨 원격관리 시스템
                  </h3>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    사업
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  IoT 기술로 경광등과 비상벨을 원격제어하여 
                  2차 사고를 사전에 예방하는 안전 솔루션
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    IoT 제어
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    LoRaWAN
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    원격관리
                  </span>
                </div>
                <Link 
                  href="/emergency-light-system"
                  className="inline-block bg-orange-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* 위험상황 경고용 무선스피커 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">🔊</div>
                  <div className="text-base sm:text-lg font-semibold">무선스피커</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    위험상황 경고용 무선스피커
                  </h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    사업
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  IoT 기술로 위험 시설에 음성 경고를 제공하여 
                  접근자의 사고를 사전에 예방하는 안전 솔루션
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    음성 경고
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    IoT 통신
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    LoRa
                  </span>
                </div>
                <Link 
                  href="/wireless-speaker-system"
                  className="inline-block bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* CCTV 화질개선용 영상개선기 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">📹</div>
                  <div className="text-base sm:text-lg font-semibold">CCTV 화질개선</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    CCTV 화질개선용 영상개선기
                  </h3>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    사업
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  안개, 저조도, 황사 등으로 인한 흐린 영상을 
                  선명하게 개선하는 혁신적인 영상처리 솔루션
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    256단계 필터
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    HD급 안개제거
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    3D 노이즈제거
                  </span>
                </div>
                <Link 
                  href="/cctv-image-enhancement"
                  className="inline-block bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* ITS 서비스 센터 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">🔧</div>
                  <div className="text-base sm:text-lg font-semibold">ITS 서비스 센터</div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    ITS 서비스 센터
                  </h3>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-auto">
                    사업
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  ITS 관련 전자제품의 전문적인 진단과 수리 서비스를 제공하는 
                  신뢰할 수 있는 서비스 센터
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-100 text-cyan-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    전문 수리
                  </span>
                  <span className="bg-cyan-100 text-cyan-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    부품 교체
                  </span>
                  <span className="bg-cyan-100 text-cyan-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    품질 보증
                  </span>
                </div>
                <Link 
                  href="/its-service-center"
                  className="inline-block bg-cyan-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                DoIoT와 함께 프로젝트를 시작하세요
              </h3>
              <p className="text-base sm:text-lg mb-6 opacity-90 px-4">
                IoT 기술로 혁신적인 솔루션을 만들어보세요. 
                DoIoT의 전문 팀이 성공적인 프로젝트 완료를 도와드립니다.
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
          </div>
        </div>
      </section>
      
      {/* Contact 섹션 */}
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </main>
  )
} 