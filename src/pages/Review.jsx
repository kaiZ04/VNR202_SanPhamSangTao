import Header from '../components/Header'
import { useState } from 'react'

export default function Review() {
  const [mode, setMode] = useState(null) // 'quiz' or 'mindmap'
  const [expandedNodes, setExpandedNodes] = useState({}) // Track all expanded nodes by ID
  const [showBranches, setShowBranches] = useState(false) // Whether to show main branches

  const mindmapData = {
    title: "ÔN TẬP KIẾN THỨC",
    branches: [
      {
        id: "part1",
        title: "Phần 1: Bối cảnh & Đại hội VIII (1996)",
        color: "#e91e63",
        children: [
          {
            id: "part1-1",
            title: "Bối cảnh quốc tế",
            children: [
              { id: "part1-1-1", title: "Cách mạng KH-CN phát triển mạnh" },
              { id: "part1-1-2", title: "CNXH hiện thực thoái trào" },
              { id: "part1-1-3", title: "Tác động sâu sắc đến môi trường quốc tế" }
            ]
          },
          {
            id: "part1-2",
            title: "Bối cảnh trong nước",
            children: [
              {
                id: "part1-2-1",
                title: "10 năm Đổi mới (1986-1996)",
                children: [
                  { id: "part1-2-1-1", title: "Thành tựu bước đầu KT-CT-XH" },
                  { id: "part1-2-1-2", title: "Phá bao vây, cô lập" },
                  { id: "part1-2-1-3", title: "Vẫn nghèo, kém phát triển" },
                  { id: "part1-2-1-4", title: "Tồn tại tiêu cực cần giải quyếth" }
                ]
              }
            ]
          },
          {
            id: "part1-3",
            title: "Đại hội VIII",
            children: [
              { id: "part1-3-1", title: "Thời gian: 28/6 - 1/7/1996" },
              { id: "part1-3-2", title: "Địa điểm: Hà Nội" },
              { id: "part1-3-3", title: "Quy mô: 1.198 đại biểu - 2.1 triệu đảng viên" },
              { id: "part1-3-4", title: "Tổng bí thư: Đỗ Mười" },
              { id: "part1-3-5", title: "Mục tiêu tổng quát: Dân giàu, nước mạnh, xã hội công bằng, văn minh" }
            ]
          }
        ]
      },
      {
        id: "part2",
        title: "Phần 2: Tổng kết Đổi mới & CNH-HĐH",
        color: "#ff6b6b",
        children: [
          {
            id: "part2-1",
            title: "Tổng kết 1986-1996",
            children: [
              {
                id: "part2-1-1",
                title: "Sáu bài học kinh nghiệm",
                children: [
                  { id: "part2-1-1-1", title: "Kiên định độc lập dân tộc gắn CNXH" },
                  { id: "part2-1-1-2", title: "Vai trò lãnh đạo của Đảng" },
                  { id: "part2-1-1-3", title: "Đổi mới toàn diện - kinh tế là trung tâm" },
                  { id: "part2-1-1-4", title: "KTTT định hướng XHCN" },
                  { id: "part2-1-1-5", title: "Đại đoàn kết toàn dân" },
                  { id: "part2-1-1-6", title: "Hội nhập & hợp tác quốc tế" }
                ]
              },
              {
                id: "part2-2",
                title: "Quan điểm CNH-HĐH"
              }
            ]
          }
        ]
      },
      {
        id: "part3",
        title: "Phần 3: Phát triển kinh tế & kết quả",
        color: "#2196f3",
        children: [
          {
            id: "part3-1",
            title: "Triển khai sau Đại hội VIII",
            children: [
              { id: "part3-1-1", title: "Phát triển KT là nhiệm vụ trọng tâm" },
              { id: "part3-1-2", title: "Có chế thị trường cơ quan lý Nhà nước" },
              { id: "part3-1-3", title: "Xuất khẩu + thị trường trong nước" },
              { id: "part3-1-4", title: "Gắn tăng trưởng với công bằng XH" }
            ]
          },
          {
            id: "part3-2",
            title: "Nhiệm vụ & giải pháp",
            children: [
              {
                id: "part3-2-1",
                title: "Cơ cấu & đầu tư",
                children: [
                  { id: "part3-2-1-1", title: "Chuyển dịch cơ cấu KT" },
                  { id: "part3-2-1-2", title: "Điều chỉnh cơ cấu đầu tư" }
                ]
              },
              {
                id: "part3-2-2",
                title: "Nông nghiệp - nông thôn",
                children: [
                  { id: "part3-2-2-1", title: "CNH-HĐH nông nghiệp" }
                ]
              },
              {
                id: "part3-2-3",
                title: "Doanh nghiệp",
                children: [
                  { id: "part3-2-3-1", title: "Đổi mới & nâng hiệu quả quản lý" }
                ]
              },
              {
                id: "part3-2-4",
                title: "Tài chính - tiền tệ",
                children: [
                  { id: "part3-2-4-1", title: "Lành mạnh hóa hệ thống" },
                  { id: "part3-2-4-2", title: "Thực hành tiết kiệm" }
                ]
              },
              {
                id: "part3-2-5",
                title: "Xã hội & quản trị",
                children: [
                  { id: "part3-2-5-1", title: "Việc làm" },
                  { id: "part3-2-5-2", title: "Xóa đói giảm nghèo" },
                  { id: "part3-2-5-3", title: "Tăng cường lãnh đạo của Đảng" }
                ]
              }
            ]
          },
          {
            id: "part3-3",
            title: "Kết quả đến năm 2000",
            children: [
              { id: "part3-3-1", title: "Vượt khủng hoảng tài chính 1997" },
              { id: "part3-3-2", title: "GDP ~7%/năm" },
              { id: "part3-3-3", title: "Công nghiệp ~13.5%/năm" },
              { id: "part3-3-4", title: "Dịch vụ & XNK phát triển" }
            ]
          }
        ]
      },
      {
        id: "part4",
        title: "Phần 4: Nhà nước pháp quyền XHCN",
        color: "#4caf50",
        children: [
          {
            id: "part4-1",
            title: "Quá trình xây dựng",
            children: [
              { id: "part4-1-1", title: "Bộ máy được kiện toàn" },
              { id: "part4-1-2", title: "Hệ thống pháp luật hoàn thiện" },
              { id: "part4-1-3", title: "Mở rộng quyền làm chủ của nhân dân" },
              { id: "part4-1-4", title: "Hạn chế: quan liêu, tham nhũng" }
            ]
          },
          {
            id: "part4-2",
            title: "Trung ương 3 khóa VIII (1997)",
            children: [
              {
                id: "part4-2-1",
                title: "Nghị quyết 03-NQ/HNTW"
              },
              {
                id: "part4-2-2",
                title: "Mục tiêu: Nhà nước trong sạch, vững mạnh"
              },
              {
                id: "part4-2-3",
                title: "Ba yêu cầu lớn",
                children: [
                  {
                    id: "part4-2-3-1",
                    title: "Phát huy dân chủ",
                    children: [
                      { id: "part4-2-3-1-1", title: "Dân chủ đại diện" },
                      { id: "part4-2-3-1-2", title: "Dân chủ trực tiếp" }
                    ]
                  },
                  {
                    id: "part4-2-3-2",
                    title: "Nhà nước hiệu lực, hiệu quả"
                  },
                  {
                    id: "part4-2-3-3",
                    title: "Tăng cường lãnh đạo của Đảng"
                  }
                ]
              },
              {
                id: "part4-2-4",
                title: "Nhiệm vụ & giải pháp",
                children: [
                  { id: "part4-2-4-1", title: "Mở rộng dân chủ XHCN" },
                  { id: "part4-2-4-2", title: "Nâng cao chất lượng Quốc hội" },
                  { id: "part4-2-4-3", title: "Cải cách hành chính" },
                  { id: "part4-2-4-4", title: "Cải cách tư pháp" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "part5",
        title: "Phần 5: Công tác cán bộ & xây dựng Đảng",
        color: "#ff9800",
        children: [
          {
            id: "part5-1",
            title: "Công tác cán bộ",
            children: [
              { id: "part5-1-1", title: "Khâu then chốt của CNH-HĐH" },
              { id: "part5-1-2", title: "Phẩm chất chính trị vững vàng" },
              { id: "part5-1-3", title: "Năng lực chuyên môn" },
              { id: "part5-1-4", title: "Gắn bó với nhân dân" }
            ]
          },
          {
            id: "part5-2",
            title: "Tiêu chuẩn cán bộ",
            children: [
              { id: "part5-2-1", title: "Yêu nước, phục vụ nhân dân" },
              { id: "part5-2-2", title: "Kiên định độc lập dân tộc & CNXH" },
              { id: "part5-2-3", title: "Đạo đức cách mạng" },
              { id: "part5-2-4", title: "Không tham nhũng" },
              { id: "part5-2-5", title: "Kỷ luật, trung thực" },
              { id: "part5-2-6", title: "Có trình độ & sức khỏe" },
              { id: "part5-2-7", title: "Đức là gốc" }
            ]
          },
          {
            id: "part5-3",
            title: "Xây dựng, chỉnh đốn Đảng",
            children: [
              {
                id: "part5-3-1",
                title: "Trung ương 4 khóa VIII (1997)",
                children: [
                  { id: "part5-3-1-1", title: "Tổng Bí thư: Lê Khả Phiêu" }
                ]
              },
              {
                id: "part5-3-2",
                title: "Trung ương 6 (lần 2) khóa VIII (1999), NQ 10-NQ/TW"
              },
              {
                id: "part5-3-3",
                title: "Trọng tâm: tư phê bình & phê bình"
              }
            ]
          },
          {
            id: "part5-4",
            title: "Yêu cầu lớn",
            children: [
              { id: "part5-4-1", title: "Thông nhất tư tưởng & hành động" },
              { id: "part5-4-2", title: "Đẩy lui nguy cơ" },
              { id: "part5-4-3", title: "Đảng viên nêu gương" },
              {
                id: "part5-4-4",
                title: "Nguyên tắc",
                children: [
                  { id: "part5-4-4-1", title: "Chủ nghĩa Mác-Lênin" },
                  { id: "part5-4-4-2", title: "Tư tưởng Hồ Chí Minh" },
                  { id: "part5-4-4-3", title: "Tập trung dân chủ" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "part6",
        title: "Phần 6: Hệ thống chính trị, dân chủ & con người",
        color: "#ffd700",
        children: [
          {
            id: "part6-1",
            title: "Kiến toàn hệ thống chính trị",
            children: [
              { id: "part6-1-1", title: "Trung ương đến cơ sở" },
              { id: "part6-1-2", title: "Đổi mới Quốc hội, Chính phủ, địa phương" },
              {
                id: "part6-1-3",
                title: "Chỉ thị 30-CT/TW (1998)",
                children: [
                  { id: "part6-1-3-1", title: "Dân chủ ở cơ sở" }
                ]
              }
            ]
          },
          {
            id: "part6-2",
            title: "Giáo dục - đào tạo",
            children: [
              { id: "part6-2-1", title: "Quốc sách hàng đầu" },
              { id: "part6-2-2", title: "Con người vừa hồng vừa chuyên" },
              { id: "part6-2-3", title: "Học tập suốt đời" }
            ]
          },
          {
            id: "part6-3",
            title: "Khoa học - công nghệ",
            children: [
              { id: "part6-3-1", title: "Động lực CNH-HĐH" },
              { id: "part6-3-2", title: "Nghiên cứu & ứng dụng" },
              { id: "part6-3-3", title: "Tiếp thu tinh hoa nhân loại" }
            ]
          },
          {
            id: "part6-4",
            title: "Văn hóa",
            children: [
              { id: "part6-4-1", title: "Nền tảng tinh thần xã hội" },
              { id: "part6-4-2", title: "Mục tiêu & động lực phát triển" },
              { id: "part6-4-3", title: "Bản sắc dân tộc" }
            ]
          },
          {
            id: "part6-5",
            title: "Nhiệm vụ văn hóa",
            children: [
              { id: "part6-5-1", title: "Phát triển con người toàn diện" },
              { id: "part6-5-2", title: "Môi trường văn hóa lành mạnh" },
              { id: "part6-5-3", title: "Bảo tồn di sản" },
              { id: "part6-5-4", title: "Hợp tác quốc tế" },
              { id: "part6-5-5", title: "Chống diễn biến hòa bình" }
            ]
          }
        ]
      }
    ]
  }

  const questions = [
    {
      id: 1,
      question: "Câu 1: Sau 10 năm thực hiện công cuộc Đổi mới (1986–1996), tình hình Việt Nam được đánh giá như thế nào?",
      options: [
        "A. Đã trở thành nước công nghiệp phát triển",
        "B. Thoát khỏi khủng hoảng nhưng vẫn còn nghèo, kém phát triển",
        "C. Lâm vào khủng hoảng kinh tế – xã hội nghiêm trọng",
        "D. Không còn chịu tác động của bối cảnh quốc tế"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Câu 2: Đại hội đại biểu toàn quốc lần thứ VIII của Đảng (1996) được xem là dấu mốc quan trọng vì lý do nào sau đây?",
      options: [
        "A. Chính sách toàn diện công cuộc Đổi mới",
        "B. Đề ra mục tiêu tổng quát cho thời kỳ phát triển mới",
        "C. Thay đổi chế độ chính trị ở Việt Nam",
        "D. Xóa bỏ vai trò lãnh đạo của Đảng"
      ],
      correct: 1
    },
    {
      id: 3,
      question: "Câu 3: Bài học kinh nghiệm nào được xem là cốt lõi sau 10 năm thực hiện đường lối Đổi mới (1986–1996)?",
      options: [
        "A. Phát triển kinh tế tư bản chủ nghĩa",
        "B. Kiên định độc lập dân tộc gắn liền với chủ nghĩa xã hội",
        "C. Ưu tiên đổi mới chính trị trước kinh tế",
        "D. Tách rời tăng trưởng kinh tế với công bằng xã hội"
      ],
      correct: 1
    },
    {
      id: 4,
      question: "Câu 4: Theo Đại hội VIII, yếu tố nào được xác định là động lực then chốt của công nghiệp hóa – hiện đại hóa?",
      options: [
        "A. Lao động thủ công",
        "B. Tài nguyên thiên nhiên",
        "C. Khoa học – công nghệ",
        "D. Viện trợ nước ngoài"
      ],
      correct: 2
    },
    {
      id: 5,
      question: "Câu 5: Sau Đại hội VIII, phát triển kinh tế được xác định là nhiệm vụ như thế nào?",
      options: [
        "A. Nhiệm vụ phụ, sau ổn định chính trị",
        "B. Nhiệm vụ lâu dài nhưng không cấp bách",
        "C. Nhiệm vụ trọng tâm của toàn bộ thời kỳ",
        "D. Nhiệm vụ riêng của Nhà nước"
      ],
      correct: 2
    },
    {
      id: 6,
      question: "Câu 6: Đến năm 2000, nền kinh tế Việt Nam đạt kết quả nổi bật nào sau đây?",
      options: [
        "A. GDP tăng trưởng âm",
        "B. Không vượt qua được khủng hoảng tài chính khu vực",
        "C. GDP tăng bình quân khoảng 7%/năm",
        "D. Công nghiệp và dịch vụ suy giảm mạnh"
      ],
      correct: 2
    },
    {
      id: 7,
      question: "Câu 7: Hội nghị Trung ương 3 khóa VIII (1997) ban hành nghị quyết nào liên quan đến xây dựng Nhà nước?",
      options: [
        "A. Nghị quyết 10-NQ/TW",
        "B. Nghị quyết 03-NQ/HNTW",
        "C. Chỉ thị 30-CT/TW",
        "D. Nghị quyết Đại hội IX"
      ],
      correct: 1
    },
    {
      id: 8,
      question: "Câu 8: Sau Đại hội VIII, công tác cán bộ được xác định là khâu then chốt vì lý do nào?",
      options: [
        "A. Quyết định sự thành bại của công nghiệp hóa – hiện đại hóa",
        "B. Thay thế hoàn toàn vai trò của quần chúng",
        "C. Giảm vai trò lãnh đạo của Đảng",
        "D. Chỉ phục vụ mục tiêu trước mắt"
      ],
      correct: 0
    },
    {
      id: 9,
      question: "Câu 9: Nguyên tắc nào được nhấn mạnh trong xây dựng, chỉnh đốn Đảng giai đoạn 1997–1999?",
      options: [
        "A. Tập trung quyền lực cá nhân",
        "B. Tự phê bình và phê bình",
        "C. Thỏa hiệp với các nguy cơ",
        "D. Giảm kỷ luật trong Đảng"
      ],
      correct: 1
    },
    {
      id: 10,
      question: "Câu 10: Quan điểm nào sau đây phản ánh đúng vai trò của văn hóa trong thời kỳ đổi mới và hội nhập?",
      options: [
        "A. Văn hóa chỉ là lĩnh vực phụ trợ cho kinh tế",
        "B. Văn hóa là nền tảng tinh thần, vừa là mục tiêu vừa là động lực phát triển",
        "C. Văn hóa chỉ phục vụ tuyên truyền",
        "D. Văn hóa không liên quan đến phát triển con người"
      ],
      correct: 1
    }
  ]

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (questionId, optionIndex) => {
    if (!submitted) {
      setAnswers({ ...answers, [questionId]: optionIndex })
    }
  }

  const handleSubmit = () => {
    let correctCount = 0
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        correctCount++
      }
    })
    setScore(correctCount)
    setSubmitted(true)
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToMenu = () => {
    setMode(null)
    setAnswers({})
    setSubmitted(false)
    setScore(0)
    setShowBranches(false)
    setExpandedNodes({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRootClick = () => {
    setShowBranches(!showBranches)
    if (!showBranches) {
      setExpandedNodes({})
    }
  }

  const toggleNode = (nodeId) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }))
  }

  const renderNode = (node, level = 0, parentColor) => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expandedNodes[node.id]
    const color = node.color || parentColor
    
    // Calculate background color based on level (lighter as level increases)
    const getBackgroundColor = () => {
      if (level === 1) return color // Full color for main branches
      if (level === 2) return `${color}20` // 12.5% opacity
      if (level === 3) return `${color}15` // 8% opacity
      if (level >= 4) return `${color}0D` // 5% opacity
      return 'white'
    }

    return (
      <div key={node.id} className={`mindmap-node level-${level}`} style={{ marginLeft: level > 0 ? '20px' : '0' }}>
        <div
          className={`node-content ${hasChildren ? 'has-children' : 'leaf-node'} ${isExpanded ? 'expanded' : ''}`}
          style={{
            borderLeftColor: color,
            background: getBackgroundColor()
          }}
          onClick={() => hasChildren && toggleNode(node.id)}
        >
          <span className="node-bullet" style={{ background: color }}></span>
          <span className="node-title" style={{ color: level === 1 ? 'white' : '#333' }}>
            {node.title}
          </span>
          {hasChildren && (
            <span className="expand-icon" style={{ color: 'white' }}>
              {isExpanded ? '▼' : '▶'}
            </span>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="node-children">
            {node.children.map(child => renderNode(child, level + 1, color))}
          </div>
        )}
      </div>
    )
  }

  const getOptionClass = (questionId, optionIndex, isCorrect) => {
    if (!submitted) {
      return answers[questionId] === optionIndex ? 'quiz-option selected' : 'quiz-option'
    }

    if (isCorrect) {
      return 'quiz-option correct'
    }

    if (answers[questionId] === optionIndex && !isCorrect) {
      return 'quiz-option incorrect'
    }

    return 'quiz-option'
  }

  return (
    <>
      <Header />

      {!mode ? (
        <div className="review-menu-container">
          <div className="review-menu-header">
            <div className="review-badge">ÔN TẬP & TỔNG HỢP</div>
            <h1 className="review-menu-title">ÔN TẬP KIẾN THỨC</h1>
            <p className="review-menu-subtitle">Chọn phương thức ôn tập phù hợp với bạn</p>
          </div>

          <div className="review-menu-options">
            <div className="review-option-card quiz-card" onClick={() => setMode('quiz')}>
              <div className="option-icon">📝</div>
              <h2 className="option-title">LÀM QUIZ</h2>
              <p className="option-description">Kiểm tra kiến thức của bạn với 10 câu hỏi trắc nghiệm về Đại hội VIII</p>
              <button className="option-button">Bắt đầu làm quiz →</button>
            </div>

            <div className="review-option-card mindmap-card" onClick={() => setMode('mindmap')}>
              <div className="option-icon">🗺️</div>
              <h2 className="option-title">XEM MINDMAP</h2>
              <p className="option-description">Xem sơ đồ tư duy tổng hợp toàn bộ kiến thức Đại hội VIII</p>
              <button className="option-button">Xem mindmap →</button>
            </div>
          </div>
        </div>
      ) : mode === 'mindmap' ? (
        <div className="mindmap-container">
          <div className="mindmap-header">
            <button className="back-button" onClick={handleBackToMenu}>← Quay lại</button>
            <h1 className="mindmap-title">SƠ ĐỒ TƯ DUY - ĐẠI HỘI VIII</h1>
          </div>
          <div className="mindmap-content">
            <div className="mindmap-image-wrapper">
              <img 
                src="./assets/images/Quiz, mindmap- Linh.png" 
                alt="Sơ đồ tư duy Đại hội VIII & Thời kì đẩy mạnh đổi mới" 
                className="mindmap-image"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="quiz-container">
          <div className="quiz-header">
            <button className="back-button" onClick={handleBackToMenu}>← Quay lại</button>
            <h1 className="quiz-title">ÔN TẬP KIẾN THỨC</h1>
            <p className="quiz-subtitle">Hoàn thành tất cả các câu hỏi về Đại hội VIII để xem kết quả về điểm số</p>
          </div>

          <div className="quiz-questions">
            {questions.map((q) => (
              <div key={q.id} className="quiz-question">
                <h3 className="question-text">{q.question}</h3>
                <div className="quiz-options">
                  {q.options.map((option, index) => (
                    <button
                      key={index}
                      className={getOptionClass(q.id, index, index === q.correct)}
                      onClick={() => handleAnswer(q.id, index)}
                      disabled={submitted}
                    >
                      {option}
                      {submitted && index === q.correct && (
                        <span className="check-icon">✓</span>
                      )}
                      {submitted && answers[q.id] === index && index !== q.correct && (
                        <span className="cross-icon">✗</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {!submitted && (
            <div className="quiz-submit">
              <button
                className="submit-button"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < questions.length}
              >
                Nộp bài
              </button>
            </div>
          )}

          {submitted && (
            <div className="quiz-result">
              <h2 className="result-title">KẾT QUẢ CỦA BẠN</h2>
              <div className="result-score">
                <span className="score-number">{score}/{questions.length}</span>
              </div>
              <div className="result-percentage">
                Bạn đã trả lời đúng {score} câu trên {questions.length} câu ({Math.round((score / questions.length) * 100)}%)
              </div>
              <button className="reset-button" onClick={handleReset}>
                Làm lại
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
