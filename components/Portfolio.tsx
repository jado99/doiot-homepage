'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Link from 'next/link'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: '터널화재 신속감지 시스템',
      description: 'AI 기반 IoT 센서를 활용한 실시간 화재 감지 및 신속 대응 시스템',
      category: '시범사업',
      image: '🔥',
      color: 'from-red-500 to-orange-600',
      link: '/tunnel-fire-detection',
      technologies: ['IoT', '센서', '실시간 모니터링', '안전 솔루션'],
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'VMS AI 자동생성 시스템',
      description: '생성형 AI를 이용한 VMS 표출문자 자동생성 시스템',
      category: '시범사업',
      image: '🤖',
      color: 'from-blue-500 to-purple-600',
      link: '/vms-ai-generation',
      technologies: ['생성형 AI', 'GAN', 'DOT 회피', 'VMS'],
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Edge AI VSL 모니터링',
      description: 'Edge AI 기반 VSL 상태감시 모니터링 시스템',
      category: '시범사업',
      image: '📊',
      color: 'from-indigo-500 to-blue-600',
      link: '/edge-ai-vsl-monitoring',
      technologies: ['Edge AI', 'CNN 딥러닝', 'CCTV 분석', 'VSL 관리'],
      github: '#',
      featured: true
    },
    {
      id: 4,
      title: '차량 추적관리시스템',
      description: 'IoT 기반 차량 위치 추적 및 관리 시스템',
      category: '사업',
      image: '🚗',
      color: 'from-green-500 to-teal-600',
      link: '/vehicle-tracking-system',
      technologies: ['AI 추적', '위험 감지', '속도 분석', '터널 안전'],
      github: '#',
      featured: true
    },
    {
      id: 5,
      title: '경광등 원격관리 시스템',
      description: 'IoT 기술을 활용한 경광등, 비상벨 원격관리 시스템',
      category: '사업',
      image: '🚨',
      color: 'from-orange-500 to-red-600',
      link: '/emergency-light-system',
      technologies: ['IoT 제어', 'LoRaWAN', '원격관리', '2차 사고 예방'],
      github: '#',
      featured: true
    },
    {
      id: 6,
      title: '위험상황 경고용 무선스피커',
      description: 'IoT 기술을 활용한 위험 시설 음성 경고 시스템',
      category: '사업',
      image: '🔊',
      color: 'from-green-500 to-emerald-600',
      link: '/wireless-speaker-system',
      technologies: ['음성 경고', 'IoT 통신', 'LoRa', 'LTE'],
      github: '#',
      featured: true
    },
    {
      id: 7,
      title: '스마트 시티 IoT 플랫폼',
      description: '도시 인프라를 연결하는 통합 IoT 플랫폼으로, 교통, 환경, 에너지 관리를 실시간으로 모니터링하고 최적화합니다.',
      category: '스마트 시티',
      image: '/api/placeholder/600/400',
      technologies: ['IoT', 'React', 'Node.js', 'MongoDB', 'AWS'],
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 8,
      title: '산업용 센서 네트워크',
      description: '제조업체를 위한 실시간 센서 데이터 수집 및 분석 시스템으로, 생산성 향상과 예측 유지보수를 지원합니다.',
      category: '산업 IoT',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes'],
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 9,
      title: '웨어러블 헬스 디바이스',
      description: '건강 모니터링을 위한 스마트 웨어러블 디바이스로, 심박수, 혈압, 수면 패턴을 실시간으로 추적합니다.',
      category: '웨어러블',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Firebase', 'TensorFlow', 'BLE', 'Android'],
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 10,
      title: '스마트 홈 자동화',
      description: 'IoT 센서와 AI를 활용한 스마트 홈 자동화 시스템으로, 에너지 효율성과 편의성을 극대화합니다.',
      category: '스마트 홈',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Express.js', 'SQLite', 'MQTT', 'Raspberry Pi'],
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 11,
      title: '데이터 분석 대시보드',
      description: 'IoT 센서 데이터를 실시간으로 분석하고 시각화하는 대시보드로, 비즈니스 인사이트를 제공합니다.',
      category: '데이터 분석',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'Pandas', 'Redis'],
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 12,
      title: '환경 모니터링 시스템',
      description: '대기질, 소음, 온도 등을 실시간으로 모니터링하는 환경 감시 시스템입니다.',
      category: '환경 IoT',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'InfluxDB', 'Grafana'],
      link: '#',
      github: '#',
      featured: false
    }
  ]

  const categories = ['전체', '시범사업', '사업', '스마트 시티', '산업 IoT', '웨어러블', '스마트 홈', '데이터 분석', '환경 IoT']

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            DoIoT 포트폴리오
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DoIoT가 성공적으로 완료한 프로젝트들과 주요사업들을 소개합니다. 
            다양한 분야에서 IoT 기술을 활용한 혁신적인 솔루션을 제공하고 있습니다.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            주요사업
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                      <div className="text-lg opacity-90">{project.category}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.link}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      <Eye size={16} />
                      <span>상세보기</span>
                    </Link>
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>코드 보기</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              DoIoT와 함께 프로젝트를 시작하세요
            </h3>
            <p className="text-lg mb-6 opacity-90">
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
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              문의하기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 