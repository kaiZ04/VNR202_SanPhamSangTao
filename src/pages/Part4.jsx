import Header from '../components/Header'

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
      title: "Tuy nhiên, hiệu lực – hiệu quả còn hạn chế, còn quan liêu, tham nhũng, lãng phí.",
      side: "right"
    },
    {
      id: 3,
      title: "Quyền làm chủ của nhân dân được mở rộng.",
      side: "left"
    },
    {
      id: 4,
      title: "Bộ máy nhà nước từng bước được kiện toàn, hệ thống pháp luật ngày càng hoàn thiện.",
      side: "right"
    },
    {
      id: 5,
      title: "Đạt nhiều tiến bộ quan trọng trong thời kỳ Đổi mới.",
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
    "Nâng cao chất lượng, kiến toàn tổ chức nhân sự Quốc hội",
    "Tiếp tục cải cách hành chính nhà nước",
    "Đẩy mạnh cải cách tư pháp",
    "Tăng cường sự lãnh đạo của Đảng gắn với dân bộ môn nhân dân hiệu lực, hiệu quả"
  ]

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="part4-header">
          <h1 className="part4-main-title">Xây dựng và hoàn thiện nhà nước pháp quyền xã hội chủ nghĩa Việt Nam</h1>
          <p className="part4-subtitle">QUÁ TRÌNH XÂY DỰNG VÀ HOÀN THIỆN NHÀ NƯỚC CHXHCN VIỆT NAM</p>
        </div>

        {/* Roadmap Section */}
        <section className="part4-roadmap">
          <div className="roadmap-container">
            <img src="/src/assets/images/road.png" alt="Roadmap" className="roadmap-image" />
            
            <div className="roadmap-items">
              {roadmapItems.map((item) => (
                <div key={item.id} className={`roadmap-item roadmap-${item.side}`}>
                  <div className="roadmap-box">
                    {item.title}
                    {item.details && item.details.map((detail, idx) => (
                      <div key={idx} className="roadmap-detail">{detail}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives Cards */}
        <section className="part4-objectives">
          <h2 className="objectives-title">NHÀ NƯỚC CHXHCN VIỆT NAM</h2>
          
          <div className="objectives-grid">
            {objectives.map((item) => (
              <div key={item.id} className="objective-card">
                <div className="card-number">{String(item.id).padStart(2, '0')}</div>
                <div className="card-title">{item.title}</div>
                <div className="card-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tasks List */}
        <section className="part4-tasks">
          <h2 className="tasks-title">NHIỆM VỤ VÀ GIẢI PHÁP CHỦ YẾU</h2>
          
          <div className="tasks-list">
            {tasks.map((task, index) => (
              <div key={index} className="task-item">
                <div className="task-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="task-text">{task}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
