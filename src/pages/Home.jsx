import Header from '../components/Header'
import { Link } from 'react-router-dom'

import bg1 from '../assets/images/trang chủ 1.png'
import bg2 from '../assets/images/trang chủ 2.png'
import bg3 from '../assets/images/trang chủ 3.png'

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO / BANNER */}
      <section className="hero-modern" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content-modern">
          <div className="hero-badge">
            <div className="badge-icon">🏛️</div>
            <div className="badge-text">
              <p className="text-xs md:text-sm tracking-wider">ĐẢNG CỘNG SẢN VIỆT NAM</p>
              <p className="text-xs md:text-sm font-bold">ĐẠI HỘI VIII</p>
            </div>
          </div>

          <h1 className="hero-title-modern">ĐẠI HỘI VIII</h1>
          
          <div className="hero-underline"></div>
        </div>
      </section>

      {/* HÀNH TRÌNH LỊCH SỬ */}
      <section className="journey-section" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="journey-overlay"></div>
        <div className="journey-container">
          <h2 className="journey-title">
            <span className="title-accent">✦</span>
            HÀNH TRÌNH LỊCH SỬ
            <span className="title-accent">✦</span>
          </h2>

          <div className="journey-grid">
            <Link to="/part1" className="journey-card">
              <div className="card-number">PHẦN 1</div>
              <h3 className="card-title">BỐI CẢNH VÀ<br/>ĐẠI HỘI VIII</h3>
              <p className="card-description">
                Sau 10 năm Đổi mới, Đại hội VIII (1996) của Đảng đánh dấu việc xác định mục tiêu cho giai đoạn phát triển mới của đất nước.
              </p>
            </Link>

            <Link to="/part2" className="journey-card">
              <div className="card-number">PHẦN 2</div>
              <h3 className="card-title">TỔNG KẾT ĐỔI MỚI VÀ ĐỊNH HƯỚNG CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA</h3>
              <p className="card-description">
                Từ 10 năm Đổi mới (1986–1996), Đảng rút ra sáu bài học kinh nghiệm và Đại hội VIII đề ra các quan điểm cơ bản về công nghiệp hóa, hiện đại hóa đất nước trong thời kỳ mới.
              </p>
            </Link>
            
            <Link to="/part3" className="journey-card">
              <div className="card-number">PHẦN 3</div>
              <h3 className="card-title">PHÁT TRIỂN KINH TẾ VÀ NHỮNG KẾT QUẢ THỰC TIỄN</h3>
              <p className="card-description">
                Sau Đại hội VIII, đường lối phát triển kinh tế được triển khai đồng bộ với các nhiệm vụ, giải pháp trọng tâm và đạt nhiều kết quả nổi bật đến năm 2000.
              </p>
            </Link>

            <Link to="/part4" className="journey-card">
              <div className="card-number">PHẦN 4</div>
              <h3 className="card-title">XÂY DỰNG VÀ HOÀN THIỆN NHÀ NƯỚC PHÁP QUYỀN XÃ HỘI CHỦ NGHĨA</h3>
              <p className="card-description">
                Quá trình xây dựng Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam đặt ra ba yêu cầu lớn, cùng các nhiệm vụ và giải pháp nhằm nâng cao hiệu lực, hiệu quả hoạt động của bộ máy nhà nước.
              </p>
            </Link>

            <Link to="/part5" className="journey-card">
              <div className="card-number">PHẦN 5</div>
              <h3 className="card-title">CÔNG TÁC CÁN BỘ VÀ XÂY DỰNG, CHỈNH ĐỐN ĐẢNG</h3>
              <p className="card-description">
                Sau Đại hội VIII, Đảng coi công tác cán bộ và xây dựng, chỉnh đốn Đảng là then chốt, nhằm xây dựng đội ngũ cán bộ có đức, có tài, gắn bó với nhân dân và nâng cao sức chiến đấu, vai trò lãnh đạo của Đảng trong thời kỳ CNH–HĐH.
              </p>
            </Link>

            <Link to="/part6" className="journey-card">
              <div className="card-number">PHẦN 6</div>
              <h3 className="card-title">HỆ THỐNG CHÍNH TRỊ, DÂN CHỦ VÀ PHÁT TRIỂN CON NGƯỜI</h3>
              <p className="card-description">
                Sau Đại hội VIII, Đảng chú trọng kiện toàn bộ máy chính trị, mở rộng dân chủ, coi giáo dục – đào tạo, khoa học – công nghệ và văn hóa là nền tảng, động lực quan trọng cho phát triển bền vững đất nước.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ÔN TẬP KIẾN THỨC */}
      <section className="review-modern" style={{ backgroundImage: `url(${bg3})` }}>
        <div className="review-overlay"></div>
        <div className="review-container">
          <h2 className="review-title-modern">ÔN TẬP KIẾN THỨC</h2>
          <Link to="/review" className="review-button">
            <span>Bắt đầu ôn tập</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER / TEAM */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="brand">
            <div className="big">VNR202</div>
            <div className="group">NHÓM 7</div>
          </div>

          <div className="members">
            <div className="member">Mỹ Linh<br/><span>SS180850</span></div>
            <div className="member">Thanh Như<br/><span>SS181119</span></div>
            <div className="member">Xuân Thùy<br/><span>SS181119</span></div>
            <div className="member">Phát Đạt<br/><span>SE180169</span></div>
          </div>
        </div>
      </footer>
    </>
  )
}
