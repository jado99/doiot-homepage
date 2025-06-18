import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DoIoT - IoT 기술 전문 기업',
  description: 'DoIoT는 IoT 기술을 활용한 혁신적인 솔루션을 제공하는 전문 기업입니다. 스마트 시티, 산업 IoT, 웨어러블 디바이스, 데이터 분석 서비스를 제공합니다.',
  keywords: 'IoT, 스마트 시티, 산업 IoT, 웨어러블, 데이터 분석, DoIoT',
  authors: [{ name: 'DoIoT' }],
  creator: 'DoIoT',
  publisher: 'DoIoT',
  robots: 'index, follow',
  openGraph: {
    title: 'DoIoT - IoT 기술 전문 기업',
    description: 'IoT 기술을 활용한 혁신적인 솔루션을 제공하는 전문 기업',
    url: 'https://www.doiot.co.kr',
    siteName: 'DoIoT',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DoIoT - IoT 기술 전문 기업',
    description: 'IoT 기술을 활용한 혁신적인 솔루션을 제공하는 전문 기업',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 