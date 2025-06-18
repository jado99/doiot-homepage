# DoIoT 홈페이지 배포 가이드

## 1. 배포 준비사항

### 필수 파일 확인

- ✅ `robots.txt` - 검색엔진 크롤링 설정
- ✅ `sitemap.xml` - 사이트맵 (SEO 최적화)
- ✅ `favicon.ico` - 사이트 아이콘
- ✅ `privacy-policy` - 개인정보처리방침 (법적 필수)
- ✅ `terms-of-service` - 이용약관 (권장)

### 환경 변수 설정

```bash
# .env.local 파일 생성
NEXT_PUBLIC_SITE_URL=https://www.doiot.co.kr
NEXT_PUBLIC_COMPANY_NAME=DoIoT
NEXT_PUBLIC_CONTACT_EMAIL=jado9982@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=010-2203-7337
```

## 2. 권장 배포 플랫폼

### Vercel (추천)

```bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. 프로젝트 빌드
npm run build

# 3. 배포
vercel --prod
```

### Netlify

```bash
# 1. 빌드 명령어 설정
npm run build

# 2. 배포 디렉토리
.next

# 3. 환경 변수 설정
NEXT_PUBLIC_SITE_URL=https://www.doiot.co.kr
```

### AWS Amplify

```bash
# 1. 빌드 설정
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
```

## 3. 도메인 설정

### DNS 레코드 설정

```
# A 레코드 (IPv4)
@ -> [배포 플랫폼 IP]

# CNAME 레코드
www -> [배포 플랫폼 도메인]

# MX 레코드 (이메일용)
@ -> [이메일 서버]

# TXT 레코드 (검증용)
@ -> [검증 코드]
```

### SSL 인증서

- 대부분의 배포 플랫폼에서 자동으로 제공
- Let's Encrypt 무료 인증서 사용 가능

## 4. SEO 최적화

### 메타데이터 확인

- 각 페이지의 title, description 설정
- Open Graph 태그 설정
- Twitter Card 태그 설정

### 성능 최적화

```bash
# 이미지 최적화
- Next.js Image 컴포넌트 사용
- WebP 포맷 사용
- 적절한 이미지 크기 설정

# 번들 최적화
- 코드 스플리팅
- 지연 로딩
- 캐싱 설정
```

## 5. 모니터링 설정

### Google Analytics

```javascript
// _app.tsx 또는 layout.tsx에 추가
import Script from "next/script";

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>;
```

### Google Search Console

- 사이트맵 제출
- 검색 성능 모니터링
- 색인 생성 요청

## 6. 백업 및 유지보수

### 정기 백업

- 코드 저장소 (Git)
- 데이터베이스 (있는 경우)
- 업로드된 파일

### 업데이트 계획

- 의존성 패키지 정기 업데이트
- 보안 패치 적용
- 콘텐츠 정기 업데이트

## 7. 법적 준수사항

### 개인정보보호법

- ✅ 개인정보처리방침 필수
- ✅ 쿠키 정책 (필요시)
- ✅ 개인정보 수집 동의 (필요시)

### 전자상거래법

- ✅ 사업자 정보 표시
- ✅ 이용약관
- ✅ 환불 정책 (상품 판매시)

## 8. 성능 체크리스트

### Core Web Vitals

- LCP (Largest Contentful Paint) < 2.5초
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

### 모바일 최적화

- 반응형 디자인 확인
- 터치 타겟 크기 (44px 이상)
- 폰트 크기 가독성

## 9. 보안 설정

### 보안 헤더

```javascript
// next.config.js
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];
```

### 환경 변수 보안

- 민감한 정보는 환경 변수로 관리
- .env 파일을 .gitignore에 추가
- 프로덕션 환경 변수는 배포 플랫폼에서 설정

## 10. 긴급 대응

### 사이트 다운 시

1. 배포 플랫폼 상태 확인
2. 로그 확인
3. 롤백 (필요시)
4. 고객에게 공지

### 보안 이슈 시

1. 즉시 사이트 접근 차단
2. 취약점 분석
3. 패치 적용
4. 재배포

---

## 배포 완료 후 체크리스트

- [ ] 모든 페이지 정상 로드 확인
- [ ] 모바일 반응형 확인
- [ ] 폼 제출 테스트
- [ ] 링크 동작 확인
- [ ] 이미지 로드 확인
- [ ] SEO 메타데이터 확인
- [ ] 법적 페이지 접근 확인
- [ ] 성능 테스트 (PageSpeed Insights)
- [ ] 보안 스캔
- [ ] 백업 설정 확인
