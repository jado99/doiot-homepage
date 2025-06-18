# DoIoT 홈페이지

DoIoT의 공식 홈페이지입니다. IoT 기술을 활용한 혁신적인 솔루션을 제공하는 전문 기업의 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 프로젝트 구조

```
doiot_homepage/
├── app/
│   ├── globals.css                    # 전역 스타일
│   ├── layout.tsx                     # 루트 레이아웃
│   ├── page.tsx                       # 메인 페이지
│   ├── privacy-policy/                # 개인정보처리방침
│   ├── terms-of-service/              # 이용약관
│   ├── smart-city-solution/           # 스마트시티 솔루션
│   ├── industrial-iot-platform/       # 산업용 IoT 플랫폼
│   ├── wearable-device/               # 웨어러블 디바이스
│   ├── data-analytics/                # 데이터 분석
│   ├── security-solutions/            # 보안 솔루션
│   ├── iot-consulting/                # IoT 컨설팅
│   ├── tunnel-fire-detection/         # 터널화재 신속감지
│   ├── vms-ai-generation/             # VMS AI 문자생성
│   ├── vsl-monitoring/                # VSL 모니터링
│   ├── vehicle-tracking-system/       # 차량 추적관리시스템
│   ├── emergency-light-system/        # 비상조명시스템
│   ├── wireless-speaker-system/       # 무선스피커시스템
│   ├── cctv-image-enhancement/        # CCTV 화질개선
│   └── its-service-center/            # ITS 서비스 센터
├── components/
│   ├── Header.tsx                     # 헤더 컴포넌트
│   ├── Hero.tsx                       # 히어로 섹션
│   ├── About.tsx                      # 회사소개 섹션
│   ├── Services.tsx                   # 서비스 섹션
│   ├── Contact.tsx                    # 연락처 섹션
│   ├── Footer.tsx                     # 푸터 컴포넌트
│   └── PDFViewer.tsx                  # PDF 뷰어 컴포넌트
├── public/
│   ├── images/                        # 이미지 파일들
│   ├── icons/                         # SVG 아이콘들
│   ├── documents/                     # PDF 문서들
│   ├── robots.txt                     # 검색엔진 크롤링 설정
│   ├── sitemap.xml                    # 사이트맵
│   └── favicon.ico                    # 사이트 아이콘
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
├── DEPLOYMENT.md                      # 배포 가이드
└── README.md
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

```bash
# .env.local 파일 생성
NEXT_PUBLIC_SITE_URL=https://www.doiot.co.kr
NEXT_PUBLIC_COMPANY_NAME=DoIoT
NEXT_PUBLIC_CONTACT_EMAIL=jado9982@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=010-2203-7337
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3003](http://localhost:3003)을 열어 확인하세요.

### 4. 프로덕션 빌드

```bash
npm run build
npm start
```

## 🎨 주요 기능

### 📱 반응형 디자인

- 모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 경험
- Tailwind CSS를 활용한 유연한 레이아웃
- 터치 친화적인 인터페이스

### ✨ 애니메이션 효과

- Framer Motion을 활용한 부드러운 스크롤 애니메이션
- 인터랙티브한 호버 효과
- 로딩 애니메이션
- 페이지 전환 효과

### 🎯 섹션 구성

1. **Hero Section**: 강력한 첫인상과 CTA 버튼
2. **About Section**: 회사 소개 및 통계 정보
3. **Services Section**: 6가지 주요 서비스 소개
4. **Major Projects Section**: 8가지 주요사업 포트폴리오
5. **Contact Section**: 문의 폼 및 연락처 정보
6. **Footer**: 추가 정보 및 법적 링크

### 📄 상세 페이지

- **서비스 페이지**: 6개 서비스별 상세 정보
- **프로젝트 페이지**: 8개 주요사업별 상세 정보
- **법적 페이지**: 개인정보처리방침, 이용약관

### 🔧 기술적 특징

- TypeScript로 타입 안정성 보장
- Next.js App Router 활용
- SEO 최적화 (메타데이터, Open Graph, sitemap)
- 접근성 고려 (ARIA 라벨, 키보드 네비게이션)
- PDF 뷰어 기능
- 이미지 최적화

## 📝 커스터마이징

### 색상 변경

`tailwind.config.js`에서 브랜드 색상을 수정할 수 있습니다:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',  // 메인 브랜드 색상
    600: '#2563eb',
  }
}
```

### 콘텐츠 수정

각 컴포넌트 파일에서 텍스트, 이미지, 링크 등을 수정할 수 있습니다.

### 애니메이션 조정

`app/globals.css`에서 애니메이션 효과를 커스터마이징할 수 있습니다.

## 🚀 배포

### Vercel 배포 (권장)

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 연결
3. 환경 변수 설정
4. 자동 배포 설정

### 다른 플랫폼

```bash
npm run build
```

빌드된 파일을 원하는 호스팅 서비스에 업로드

자세한 배포 가이드는 `DEPLOYMENT.md`를 참조하세요.

## 📊 SEO 최적화

- 메타데이터 설정
- Open Graph 태그
- Twitter Card 태그
- sitemap.xml
- robots.txt
- 구조화된 데이터 (Schema.org)

## 🔒 보안 및 법적 준수

- 개인정보처리방침 (필수)
- 이용약관
- HTTPS 강제 적용
- 보안 헤더 설정
- XSS 방지

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요.

- **이메일**: jado9982@gmail.com
- **전화**: 010-2203-7337
- **주소**: 용인시 기흥구 중부대로 184, 힉스유타워 A동 317-2호

## 📄 라이선스

이 프로젝트는 DoIoT의 내부 사용을 위한 프로젝트입니다.

---

© 2024 DoIoT. All rights reserved.
