import Header from '../components/Header'

export default function Part2() {
  const notes = [
    {
      id: 1,
      description: "Giữ vững mục tiêu độc lập dân tộc & CNXH, nắm vững hai nhiệm vụ chiến lược xây dựng & bảo vệ Tổ quốc, kiên trì chủ nghĩa Mác–Lênin, tư tưởng HCM.",
      rotation: -3,
      delay: 0,
    },
    {
      id: 2,
      description: "Kết hợp đổi mới kinh tế với đổi mới chính trị; lấy đổi mới kinh tế làm trọng tâm, đồng thời từng bước đổi mới chính trị.",
      rotation: 2,
      delay: 1,
    },
    {
      id: 3,
      description: "Phát triển kinh tế hàng hoá nhiều thành phần theo cơ chế thị trường có quản lý của Nhà nước, định hướng XHCN. Gắn tăng trưởng với tiến bộ & công bằng xã hội, giữ gìn bản sắc văn hoá, bảo vệ môi trường.",
      rotation: -2,
      delay: 2,
    },
    {
      id: 4,
      description: "Mở rộng và tăng cường khối đại đoàn kết toàn dân, phát huy sức mạnh của cả dân tộc.",
      rotation: 3,
      delay: 3,
    },
    {
      id: 5,
      description: "Mở rộng hợp tác quốc tế, tranh thủ sự đồng tình, ủng hộ và giúp đỡ của nhân dân thế giới, kết hợp sức mạnh của dân tộc với sức mạnh thời đại.",
      rotation: -1,
      delay: 4,
    },
    {
      id: 6,
      description: "Tăng cường vai trò lãnh đạo của Đảng, coi xây dựng Đảng là nhiệm vụ then chốt.",
      rotation: 2,
      delay: 5,
    },
  ]

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="part-header">
          <span className="part-label">ĐẠI HỘI VIII</span>
          <h1 className="part-title">TỔNG KẾT 10 NĂM ĐỔI MỚI (1986-1996)</h1>
        </div>

        {/* Yellow intro box */}
        <section className="intro-section yellow-bg">
          <p>Sơ 10 năm Đổi mới, đất nước trải qua những bước tiến lớn về tất cả lĩnh vực kinh tế, chính trị, xã hội, văn hóa. Đất nước từ tình trạng khó khăn trở nên có những thành tựu đáng kể, đặc biệt là những dấu hiệu khả quan trong phát triển kinh tế hàng năm, năm này năm kia, có những con số tốt về GDP phát triển, có những mục tiêu rõ rằng đang được thực hiện trên toàn quốc.</p>
        </section>

        {/* Timeline section */}
        <section className="timeline-section">
          <h2>Những thay đổi chính trong 10 năm Đổi mới</h2>
          
          <div className="timeline-container">
            <div className="timeline-row">
              <div className="timeline-item left">
                <div className="timeline-box">
                  <p>Kiến thức lịch sử ban đầu gồi liên liên với CHNN, và sự độc lập các công Đảng.</p>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-row">
              <div className="timeline-item right">
                <div className="timeline-box">
                  <p>Độ mở ban đầu của sở dân sàn chủng hữu ích trên Trung tâm.</p>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-row">
              <div className="timeline-item left">
                <div className="timeline-box">
                  <p>Phát triển kinh tế khi nâng một sì nét ở nước ngoài trong những khả năng hợp tác thương mại lên, công bằng có hộ.</p>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-row">
              <div className="timeline-item right">
                <div className="timeline-box">
                  <p>Phát huy độc lập khi toàn diện vào vấc nạn mặc cảnh can.</p>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-row">
              <div className="timeline-item left">
                <div className="timeline-box">
                  <p>Mở rộng hợp tác quốc tế, kêu gọi sáng tạo chuyên môn của dân tộc chúng tôi.</p>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </section>

        <div className="timeline-divider"></div>

        {/* Development strategy section - Sticky notes style */}
        <section className="strategy-section">
          <div className="text-center mb-12">
            <h2 className="strategy-title">Quan điểm công nghiệp hóa - hiện đại hóa thời kỳ mới (Đại hội VIII)</h2>
            
            <div className="strategy-header yellow-bg">
              <p>Đại hội VIII xác định công nghiệp hóa, hiện đại hóa là nhiệm vụ trung tâm của thời kỳ quá độ, với các quan điểm cơ bản sau:</p>
            </div>
          </div>

          <div className="sticky-notes-container">
            {notes.map((note) => (
              <div
                key={note.id}
                className="sticky-note-wrapper"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${note.delay * 0.1}s both`,
                }}
              >
                <div
                  className="sticky-note"
                  style={{
                    transform: `rotate(${note.rotation}deg)`,
                  }}
                >
                  {/* Pin */}
                  <div className="sticky-pin">
                    <div className="sticky-pin-head"></div>
                    <div className="sticky-pin-line"></div>
                  </div>

                  {/* Note Content */}
                  <div className="sticky-note-content">
                    <p className="sticky-note-description">{note.description}</p>
                  </div>

                  {/* Decorative shadow */}
                  <div className="sticky-note-shadow"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
