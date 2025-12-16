import Header from '../components/Header'

export default function Part2() {
  const timelineItems = [
    "Kinh tế đạc lập, làm chủ với CHXH, đạo lý, vững vàng dân tộc và ổn định chủ quyền quốc gia Đảng.",
    "Đổi mới toàn diện những cơ trọng lĩnh vực theo mục tiêu và lộ trình trong tâm.",
    "Phát triển kinh tế hồi thị trường xã hội, quản lý chuyền sâu theo những bước hiện tại vì, công pháp an ninh quốc.",
    "Phát huy dân chủ kết toàn diện vào lực, nền mạnh cảnh cần.",
    "Mở rộng hợp tác quốc tế, kết hợp sức mạnh dân tộc với sức mạnh thời đại."
  ]

  const strategyPoints = [
    {
      id: 1,
      text: "Giữ vững mục tiêu, độc lập dân tộc và CNXH, nắm vững hai nhiệm vụ chiến lược xây dựng và bảo vệ Tổ quốc, kiên trì chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh.",
    },
    {
      id: 2,
      text: "CNHH tạo nghề phải giúp quan toán dân chủ, công mạng thâm phá trạch liên xử trong đổi khuân nóng của Nhà nước giải vọt.",
    },
    {
      id: 3,
      text: "Con người là yếu tố cơ bản của phát triển nhanh và bền vững.",
    },
    {
      id: 4,
      text: "Khoa học – công nghệ là động lực then chốt, kết hợp truyền thống dân tộc với ứng dụng kỹ thêm hiện đại ủ khóa quyết định.",
    },
    {
      id: 5,
      text: "Lấy hiệu quả kinh tế - xã hội làm tiêu chuẩn Lựa chọn phương án phát triển và cộng nghệ.",
    },
    {
      id: 6,
      text: "Kết hợp phát triển kinh tế với quốc phòng, an ninh, bảo đảm độc lập, chủ quyền và phúc lợi - an ninh.",
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
            Sau 10 năm Đổi mới, đất nước đã đạt những thành tựu to lớn về mọi lĩnh vực kinh tế – xã hội nhờ đường lối đúng đắn của Đảng, sự nỗ lực phấn đấu của toàn dân tộc. Đất nước từ khó khăn đã có những chuyển biến tích cực, mở ra một thời kỳ mới đầy hy vọng và phát triển.</p>
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
