'use client'

import { useState } from 'react'
import { Download, ExternalLink, FileText } from 'lucide-react'

interface PDFViewerProps {
  title: string
  description: string
  pdfUrl: string
  fileName: string
}

const PDFViewer = ({ title, description, pdfUrl, fileName }: PDFViewerProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
            >
              <ExternalLink size={16} className="mr-1" />
              새 창에서 보기
            </a>
            <a
              href={pdfUrl}
              download={fileName}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
            >
              <Download size={16} className="mr-1" />
              다운로드
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">PDF 로딩 중...</p>
            </div>
          </div>
        )}
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className="w-full h-96 border-0"
          onLoad={() => setIsLoading(false)}
          title={title}
        />
      </div>
    </div>
  )
}

export default PDFViewer 