'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Users } from 'lucide-react'
import Link from 'next/link'

const TermsOfServicePage = () => {
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

      {/* Content */}
      <div className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText size={32} className="text-blue-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                이용약관
              </h1>
              <p className="text-gray-600">
                최종 업데이트: 2024년 12월 19일
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle size={24} className="mr-2 text-blue-600" />
                  제1조 (목적)
                </h2>
                <p className="text-gray-700">
                  이 약관은 DoIoT(이하 "회사")가 제공하는 IoT 솔루션 및 서비스의 이용과 관련하여 
                  회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users size={24} className="mr-2 text-blue-600" />
                  제2조 (정의)
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. "서비스"란</h3>
                    <p className="text-gray-700 text-sm">
                      회사가 제공하는 IoT 솔루션, 스마트시티 솔루션, 산업용 IoT 플랫폼, 
                      데이터 분석, 보안 솔루션, 클라우드 플랫폼 등 모든 서비스를 의미합니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. "이용자"란</h3>
                    <p className="text-gray-700 text-sm">
                      회사의 서비스를 이용하는 고객을 의미합니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3. "계약"이란</h3>
                    <p className="text-gray-700 text-sm">
                      회사와 이용자 간에 서비스 제공에 관한 계약을 의미합니다.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  제3조 (서비스의 제공)
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    회사는 다음과 같은 서비스를 제공합니다:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>스마트시티 IoT 솔루션</li>
                    <li>산업용 IoT 플랫폼</li>
                    <li>웨어러블 디바이스 솔루션</li>
                    <li>데이터 분석 및 인사이트 제공</li>
                    <li>IoT 보안 솔루션</li>
                    <li>클라우드 플랫폼 서비스</li>
                    <li>IoT 컨설팅 서비스</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  제4조 (서비스 이용)
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    서비스 이용은 다음과 같은 절차로 진행됩니다:
                  </p>
                  <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                    <li>서비스 문의 및 상담</li>
                    <li>요구사항 분석 및 제안서 작성</li>
                    <li>계약 체결</li>
                    <li>서비스 개발 및 구현</li>
                    <li>서비스 제공 및 유지보수</li>
                  </ol>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle size={24} className="mr-2 text-blue-600" />
                  제5조 (이용자의 의무)
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    이용자는 다음 사항을 준수해야 합니다:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>서비스 이용 시 관련 법령 및 이 약관을 준수할 것</li>
                    <li>회사의 지적재산권을 침해하지 않을 것</li>
                    <li>서비스의 정상적인 운영을 방해하는 행위를 하지 않을 것</li>
                    <li>회사가 제공하는 서비스의 보안을 침해하지 않을 것</li>
                    <li>계약서에 명시된 비용을 정기적으로 납부할 것</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  제6조 (회사의 의무)
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    회사는 다음 사항을 준수합니다:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>안정적이고 지속적인 서비스 제공</li>
                    <li>이용자의 개인정보 보호</li>
                    <li>서비스 품질 향상을 위한 지속적인 개선</li>
                    <li>이용자의 문의사항에 대한 신속한 응답</li>
                    <li>계약서에 명시된 서비스 수준의 유지</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  제7조 (서비스 중단)
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    회사는 다음의 경우 서비스를 중단할 수 있습니다:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>서비스 점검, 보수, 교체가 필요한 경우</li>
                    <li>천재지변, 전쟁, 폭동, 테러 등 불가항력적 사유가 있는 경우</li>
                    <li>전기통신사업법에 따른 기간통신사업자의 서비스 중단이 있는 경우</li>
                    <li>기타 회사가 서비스 제공이 불가능하다고 판단하는 경우</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  제8조 (책임제한)
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    회사는 다음의 경우 책임을 지지 않습니다:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>천재지변, 전쟁, 폭동, 테러 등 불가항력적 사유로 인한 서비스 중단</li>
                    <li>이용자의 귀책사유로 인한 서비스 이용의 장애</li>
                    <li>이용자가 제공한 정보의 오류, 누락, 변조로 인한 손해</li>
                    <li>제3자가 제공하는 서비스의 장애</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  제9조 (분쟁해결)
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    서비스 이용과 관련하여 발생한 분쟁은 다음과 같이 해결합니다:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>회사와 이용자는 분쟁 발생 시 상호 협의를 통해 해결합니다.</li>
                    <li>협의가 이루어지지 않을 경우, 회사의 주소지 관할법원에서 해결합니다.</li>
                    <li>본 약관은 대한민국 법률에 따라 해석됩니다.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  제10조 (약관의 변경)
                </h2>
                <p className="text-gray-700">
                  회사는 필요한 경우 이 약관을 변경할 수 있으며, 변경된 약관은 
                  회사 웹사이트에 공지함으로써 효력이 발생합니다. 
                  이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  부칙
                </h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    <strong>제1조 (시행일)</strong><br/>
                    이 약관은 2024년 12월 19일부터 시행합니다.<br/><br/>
                    <strong>제2조 (연락처)</strong><br/>
                    회사명: DoIoT<br/>
                    대표: DoIoT 대표<br/>
                    주소: 용인시 기흥구 중부대로 184, 힉스유타워 A동 317-2호<br/>
                    이메일: jado9982@gmail.com
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfServicePage 