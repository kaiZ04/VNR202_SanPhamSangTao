import Header from '../components/Header'

export default function Part2() {
  const timelineItems = [
    "Kiên định độc lập dân tộc gắn liền với CNXH, giữ vững vai trò lãnh đạo của Đảng.",
    "Đổi mới toàn diện nhưng có trọng tâm, lấy đổi mới kinh tế làm trung tâm.",
    "Phát triển kinh tế thị trường định hướng XHCN, gắn tăng trưởng với tiến bộ, công bằng xã hội.",
    "Phát huy đại đoàn kết toàn dân tộc và sức mạnh con người.  ",
    "Mở rộng hợp tác quốc tế, kết hợp sức mạnh dân tộc với sức mạnh thời đại."
  ]

  const strategyPoints = [
    {
      id: 1,
      text: "Giữ vững độc lập, tự chủ, đồng thời mở rộng hợp tác quốc tế; lấy nội lực là chính, kết hợp tranh thủ ngoại lực.",
    },
    {
      id: 2,
      text: "CNH–HĐH là sự nghiệp của toàn dân, của mọi thành phần kinh tế; trong đó kinh tế nhà nước giữ vai trò chủ đạo.",
    },
    {
      id: 3,
      text: "Con người là yếu tố cơ bản của phát triển nhanh và bền vững",
    },
    {
      id: 4,
      text: "Khoa học – công nghệ là động lực then chốt, kết hợp truyền thống với hiện đại, đi nhanh vào hiện đại ở khâu quyết định.",
    },
    {
      id: 5,
      text: "Lấy hiệu quả kinh tế – xã hội làm tiêu chuẩn lựa chọn phương án phát triển và công nghệ.",
    },
    {
      id: 6,
      text: "Kết hợp phát triển kinh tế với quốc phòng, an ninh, bảo đảm ổn định chính trị – xã hội.",
    },
  ]

  return (
    <>
      <Header />
      <div className="part2-modern-container">
        {/* Header Section */}
        <div className="part2-header-section">
          <div className="part2-badge">PHẦN 2</div>
          <h1 className="part2-main-title">Tổng kết 10 năm Đổi mới (1986-1996)</h1>
        </div>

        {/* Summary Box */}
        <div className="part2-summary-box">
          <p>
            Sau 10 năm Đổi mới, đất nước thoát khỏi khủng hoảng kinh tế – xã hội, đạt nhiều thành tựu quan trọng; con đường đi lên chủ nghĩa xã hội ngày càng rõ ràng, tạo tiền đề để chuyển sang thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa. Tuy còn một số hạn chế, nhưng về tổng thể, đường lối Đổi mới là đúng đắn, phù hợp thực tiễn.</p>
        </div>

        {/* Timeline Section */}
        <div className="part2-timeline-wrapper">
          <div className="part2-timeline-line"></div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className={`part2-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="part2-timeline-dot"></div>
              <div className="part2-timeline-card">
                {item}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="part2-section-divider"></div>

        {/* Strategy Section */}
        <div className="part2-strategy-section">
          <h2 className="part2-strategy-title">Quan điểm công nghiệp hóa - hiện đại hóa thời kỳ mới (Đại hội VIII)</h2>
          
          <div className="part2-strategy-intro">
            <p>Đại hội VIII xác định công nghiệp hóa, hiện đại hóa là nhiệm vụ trung tâm của thời kỳ quá độ, với các quan điểm cơ bản sau:</p>
          </div>

          <div className="part2-sticky-grid">
            {strategyPoints.map((point) => (
              <div key={point.id} className="part2-sticky-note">
                <div className="part2-sticky-pin"></div>
                <div className="part2-sticky-content">
                  <div className="part2-sticky-number">{point.id}</div>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
