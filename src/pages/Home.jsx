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
            HÀNH TRÌNH LỊCH SỬ
            <span className="title-accent">✦</span>
          </h2>

          <div className="journey-grid">
            <Link to="/part1" className="journey-card">
              <div className="card-number">PHẦN 1</div>
              <h3 className="card-title">BỐI CẢNH VÀ<br/>ĐẠI HỘI VIII</h3>
              <p className="card-description">
                Sau 10 năm Đổi mới, Đại hội VIII mở ra bước ngoặt của Đảng trong việc xác định phương hướng phát triển đất nước.
              </p>
            </Link>

            <Link to="/part2" className="journey-card">
              <div className="card-number">PHẦN 2</div>
              <h3 className="card-title">TỔNG KẾT ĐỔI MỚI VÀ ĐỊNH HƯỚNG CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA</h3>
              <p className="card-description">
                Từ 10 năm Đổi mới (1986–1996), Đảng đã rút ra những kinh nghiệm quý báu về công nghiệp hóa, hiện đại hóa đất nước.
              </p>
            </Link>
            
            <Link to="/part3" className="journey-card">
              <div className="card-number">PHẦN 3</div>
              <h3 className="card-title">PHÁT TRIỂN KINH TẾ VÀ NHỮNG KẾT QUẢ THỰC TIỄN</h3>
              <p className="card-description">
                Sau Đại hội VIII, đường lối phát triển kinh tế từ lý thuyết được hiện thực hóa qua các chính sách phát triển bền vững đến năm 2000.
              </p>
            </Link>

            <Link to="/part4" className="journey-card">
              <div className="card-number">PHẦN 4</div>
              <h3 className="card-title">XÂY DỰNG VÀ HOÀN THIỆN NHÀ NƯỚC PHÁP QUYỀN XÃ HỘI CHỦ NGHĨA</h3>
              <p className="card-description">
                Quá trình xây dựng Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam đã có những bước tiến quan trọng về thể chế và pháp luật.
              </p>
            </Link>

            <Link to="/part5" className="journey-card">
              <div className="card-number">PHẦN 5</div>
              <h3 className="card-title">CÔNG TÁC CÁN BỘ VÀ XÂY DỰNG, CHỈNH ĐỐN ĐẢNG</h3>
              <p className="card-description">
                Sau Đại hội VIII, Đảng đã có những bước đi đổi mới về công tác cán bộ, chỉnh đốn tổ chức và kỷ luật Đảng.
              </p>
            </Link>

            <Link to="/part6" className="journey-card">
              <div className="card-number">PHẦN 6</div>
              <h3 className="card-title">HỆ THỐNG CHÍNH TRỊ, DÂN CHỦ VÀ PHÁT TRIỂN CON NGƯỜI</h3>
              <p className="card-description">
                Sau Đại hội VIII, Đảng đã đề ra những định hướng phát triển hệ thống chính trị và xây dựng văn hóa con người Việt Nam.
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
