'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'
import Link from 'next/link'

const PrivacyPolicyPage = () => {
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
                  <Shield size={32} className="text-blue-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                개인정보처리방침
              </h1>
              <p className="text-gray-600">
                최종 업데이트: 2024년 12월 19일
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye size={24} className="mr-2 text-blue-600" />
                  1. 개인정보의 처리 목적
                </h2>
                <p className="text-gray-700 mb-4">
                  DoIoT(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 
                  다음의 목적 이외의 용도로는 이용하지 않습니다.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>고객 문의 및 상담 서비스 제공</li>
                  <li>IoT 솔루션 및 서비스 제공</li>
                  <li>마케팅 및 광고에의 활용 (동의 시)</li>
                  <li>서비스 개선 및 신규 서비스 개발</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database size={24} className="mr-2 text-blue-600" />
                  2. 수집하는 개인정보 항목
                </h2>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">필수 수집 항목:</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>성명</li>
                    <li>이메일 주소</li>
                    <li>문의 내용</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">선택 수집 항목:</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>회사명</li>
                    <li>관심 서비스 분야</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock size={24} className="mr-2 text-blue-600" />
                  3. 개인정보의 보유 및 이용기간
                </h2>
                <p className="text-gray-700 mb-4">
                  회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
                  단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>고객 문의 관련:</strong> 문의 완료 후 3년간 보관</li>
                  <li><strong>계약 관련:</strong> 계약 완료 후 5년간 보관</li>
                  <li><strong>세법 관련:</strong> 5년간 보관</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. 개인정보의 파기절차 및 방법
                </h2>
                <p className="text-gray-700 mb-4">
                  회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 
                  지체없이 해당 개인정보를 파기합니다.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">전자적 파일 형태:</h3>
                    <p className="text-gray-700 text-sm">
                      복구 및 재생이 불가능한 방법으로 영구 삭제
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">종이에 출력된 개인정보:</h3>
                    <p className="text-gray-700 text-sm">
                      분쇄기로 분쇄하거나 소각을 통한 파기
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. 개인정보의 제3자 제공
                </h2>
                <p className="text-gray-700 mb-4">
                  회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 
                  정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 
                  개인정보를 제3자에게 제공합니다.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. 정보주체의 권리·의무 및 그 행사방법
                </h2>
                <p className="text-gray-700 mb-4">
                  정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>개인정보 열람요구</li>
                  <li>오류 등이 있을 경우 정정 요구</li>
                  <li>삭제요구</li>
                  <li>처리정지 요구</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. 개인정보 보호책임자
                </h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-2">
                    <strong>개인정보 보호책임자</strong>
                  </p>
                  <p className="text-gray-700 text-sm">
                    성명: DoIoT 대표<br/>
                    연락처: jado9982@gmail.com<br/>
                    주소: 용인시 기흥구 중부대로 184, 힉스유타워 A동 317-2호
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. 개인정보처리방침의 변경
                </h2>
                <p className="text-gray-700">
                  이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 
                  삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage 