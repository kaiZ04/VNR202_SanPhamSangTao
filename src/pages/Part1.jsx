import Header from '../components/Header'

export default function Part1() {
  return (
    <>
      <Header />

      <div className="part1-modern-container">
        {/* Header Section */}
        <div className="part1-header-section">
          <div className="part1-badge">PHẦN 1</div>
          <h1 className="part1-main-title">
            BỐI CẢNH VÀ ĐẠI HỘI VIII<br />
            MỞ ĐẦU THỜI KỲ MỚI
          </h1>
        </div>

        {/* Yellow Context Section */}
        <section className="part1-context-section">
          <div className="part1-section-header yellow-header">
            <h2 className="part1-section-title">Mở đầu giai đoạn (từ 1996)</h2>
          </div>
          
          <div className="part1-yellow-box">
            <div className="part1-context-item">
              <div className="part1-bullet">●</div>
              <p>Bối cảnh chung: cách mạng KH–CN phát triển mạnh; chủ nghĩa xã hội hiện thực lâm vào thoái trào → tác động môi trường quốc tế.</p>
            </div>

            <div className="part1-context-item">
              <div className="part1-bullet">●</div>
              <p>Việt Nam sau 10 năm Đổi mới (1986–1996): có thành tựu bước đầu (Kinh tế–Chính trị–Xã hội…), phá bao vây cô lập; nhưng vẫn nghèo, kém phát triển, còn nhiều tiêu cực cần giải quyết.</p>
            </div>
          </div>
        </section>

        {/* Blue Congress Section */}
        <section className="part1-congress-section">
          <div className="part1-section-header blue-header">
            <h2 className="part1-section-title">Đại hội VIII (6/1996): Dấu mốc và quyết định chính</h2>
          </div>
          
          <div className="part1-blue-box">
            <div className="part1-congress-item">
              <div className="part1-checkmark">✓</div>
              <p>Thời gian – địa điểm: Hà Nội, 28/6–1/7/1996.</p>
            </div>

            <div className="part1-congress-item">
              <div className="part1-checkmark">✓</div>
              <p>Quy mô: 1.198 đại biểu, đại diện hơn 2,1 triệu đảng viên.</p>
            </div>

            <div className="part1-congress-item">
              <div className="part1-checkmark">✓</div>
              <p>Thông qua văn kiện chính trị quan trọng; bầu đồng chí Đỗ Mười tiếp tục làm Tổng Bí thư.</p>
            </div>

            <div className="part1-congress-item">
              <div className="part1-checkmark">✓</div>
              <p>Mục tiêu/đặc trưng tổng quát được nhấn mạnh: "Dân giàu, nước mạnh, xã hội công bằng, văn minh."</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
