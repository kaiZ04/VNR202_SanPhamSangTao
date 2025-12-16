import Header from '../components/Header'
import roadImage from '../assets/images/road.png'

export default function Part4() {
  const roadmapItems = [
    {
      id: 1,
      title: "Hội nghị Trung ương 3 khóa VIII (1997):",
      details: [
        "1. Ban hành Nghị quyết 03-NQ/HNTW",
        "2. Mục tiêu: phát huy quyền làm chủ của nhân dân, xây dựng Nhà nước trong sạch, vững mạnh"
      ],
      side: "left"
    },
    {
      id: 2,
      title: "Tuy nhiên, hiệu lực – hiệu quả còn hạn chế, còn quan liêu, tham nhũng, lãng phí",
      side: "right"
    },
    {
      id: 3,
      title: "Quyền làm chủ của nhân dân được mở rộng",
      side: "left"
    },
    {
      id: 4,
      title: "Bộ máy nhà nước từng bước được kiện toàn, hệ thống pháp luật ngày càng hoàn thiện",
      side: "right"
    },
    {
      id: 5,
      title: "Đạt nhiều tiến bộ quan trọng trong thời kỳ Đổi mới",
      side: "left"
    }
  ]

  const objectives = [
    {
      id: 1,
      title: "Phát huy quyền làm chủ của nhân dân",
      desc: "Dân chủ hóa trong từng lĩnh vực"
    },
    {
      id: 2,
      title: "Xây dựng Nhà nước trong sạch, vững mạnh",
      desc: "Nâng cao chất lượng và hiệu quả công tác"
    },
    {
      id: 3,
      title: "Tăng cường sự lãnh đạo của Đảng",
      desc: "Giải pháp về nhân lực"
    }
  ]

  const tasks = [
    "Mở rộng dân chủ xã hội chủ nghĩa trong xây dựng và quản lý nhà nước",
    "Nâng cao chất lượng, kiện toàn tổ chức Quốc hội",
    "Tiếp tục cải cách hành chính nhà nước",
    "Đẩy mạnh cải cách tư pháp",
    "Tăng cường sự lãnh đạo của Đảng gắn với xây dựng bộ máy nhà nước hiệu lực, hiệu quả",
  ]

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="part4-header">
          <div className="part4-badge">PHẦN 4</div>
          <h1 className="part4-main-title">Xây dựng và hoàn thiện nhà nước pháp quyền xã hội chủ nghĩa Việt Nam</h1>
          <p className="part4-subtitle">QUÁ TRÌNH XÂY DỰNG VÀ HOÀN THIỆN NHÀ NƯỚC CHXHCN VIỆT NAM</p>
        </div>

        {/* Roadmap Section */}
        <section className="part4-roadmap-modern">
          <div className="roadmap-header-modern">
            <h2 className="roadmap-title-modern">QUÁ TRÌNH XÂY DỰNG VÀ HOÀN THIỆN<br/>NHÀ NƯỚC CHXHCN VIỆT NAM</h2>
          </div>

          <div className="roadmap-journey">
            {/* SVG Road Path - centered */}
            <svg className="road-path" viewBox="0 0 600 950" preserveAspectRatio="none">
              {/* Main curved road */}
              <path 
                d="M 270 55 Q 320 100, 330 198 Q 335 280, 270 374 Q 240 480, 330 588 Q 360 720, 275 840" 
                className="road-track"
                fill="none"
                stroke="#facc15"
                strokeWidth="8"
                strokeLinecap="round"
              />
              
              {/* Milestone dots - aligned with content */}
              <circle cx="270" cy="55" r="10" className="milestone-dot" />
              <circle cx="330" cy="198" r="10" className="milestone-dot" />
              <circle cx="270" cy="374" r="10" className="milestone-dot" />
              <circle cx="330" cy="588" r="10" className="milestone-dot" />
              <circle cx="275" cy="840" r="10" className="milestone-dot" />
            </svg>

            {/* Roadmap Content Items */}
            <div className="roadmap-content-items">
              {roadmapItems.map((item, index) => (
                <div key={item.id} className={`roadmap-content-box roadmap-${item.side} roadmap-position-${index + 1}`}>
                  <div className="content-box-inner">
                    <div className="box-connector"></div>
                    <div className="box-content">
                      <h3 className="box-title">{item.title}</h3>
                      {item.details && (
                        <ul className="box-details">
                          {item.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives Cards */}
        <section className="part4-objectives-modern">
          <h2 className="objectives-title-modern">NHÀ NƯỚC CHXHCN VIỆT NAM</h2>
          
          <div className="objectives-grid-modern">
            {objectives.map((item) => (
              <div key={item.id} className="objective-card-modern">
                <div className="card-number-modern">{String(item.id).padStart(2, '0')}</div>
                <div className="card-content-modern">
                  <h3 className="card-title-modern">{item.title}</h3>
                  <p className="card-desc-modern">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tasks List */}
        <section className="part4-tasks-modern">
          <h2 className="tasks-title-modern">NHIỆM VỤ VÀ GIẢI PHÁP CHỦ YẾU</h2>
          
          <div className="tasks-list-modern">
            {tasks.map((task, index) => (
              <div key={index} className="task-item-modern">
                <div className="task-number-modern">{String(index + 1).padStart(2, '0')}</div>
                <div className="task-text-modern">{task}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
