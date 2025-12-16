import Header from '../components/Header'

export default function Part1() {
  return (
    <>
      <Header />

      <div className="page-container">
        <h1 className="part-title">BỐI CẢNH VÀ ĐẠI HỘI VIII - MỞ ĐẦU THỜI KỲ MỚI</h1>

        {/* Yellow Section */}
        <section className="content-section yellow-bg">
          <h2 className="section-title">Mở đầu giai đoạn (từ 1996)</h2>
          
          <div className="items-grid">
            <div className="content-item yellow-item">
              <span className="item-dot"></span>
              <p>Bối cảnh chung: cách mạng KH–CN phát triển mạnh; chủ nghĩa xã hội hiện thực làm vào thời đại trào ─ tác động môi trường quốc tế.</p>
            </div>

            <div className="content-item yellow-item">
              <span className="item-dot"></span>
              <p>Việt Nam sau 10 năm Đổi mới (1986–1996): có thành tựu bước đầu (Kinh tế–Chính trị–Xã hội...), phát bao vẫy có lập; những vấn nạn, kém phát triển, còn nhiều tiêu cực của giai quyết.</p>
            </div>
          </div>
        </section>

        {/* Blue Section */}
        <section className="content-section blue-bg">
          <h2 className="section-title">Đại hội VIII (6/1996): Bầu mục và quyết định chính</h2>
          
          <div className="items-grid">
            <div className="content-item blue-item">
              <span className="item-check">✓</span>
              <p>Thời gian – địa điểm: Hà Nội, 28/6–1/7/1996.</p>
            </div>

            <div className="content-item blue-item">
              <span className="item-check">✓</span>
              <p>Quy mô: 1.198 đại biểu, đại diện hơn 2,1 triệu đảng viên.</p>
            </div>

            <div className="content-item blue-item">
              <span className="item-check">✓</span>
              <p>Thông qua văn kiến chính trị quan trọng; bầu đông chỉ Độ Mười tiếp tục làm Tổng Bí thư.</p>
            </div>

            <div className="content-item blue-item">
              <span className="item-check">✓</span>
              <p>Mục tiêu/độc lập trung quốc được nhân hành: "Dân giàu, nước mạnh, xã hội công bằng, văn minh."</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}