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
      <section className="hero" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="hero-content">
          <div className="hero-dots-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="hero-subtitle">
            <p>ĐẢNG CỘNG SẢN VIỆT NAM</p>
            <p>ĐẠI HỘI VIII</p>
          </div>

          <h1 className="hero-title">ĐẠI HỘI VIII</h1>

          <div className="hero-line"></div>

          <div className="hero-dots-bottom">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* HÀNH TRÌNH LỊCH SỬ (dùng bg2) */}
      <section className="history" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="history-inner">
          <h2>HÀNH TRÌNH LỊCH SỬ</h2>

          <div className="card-list">
            <Link to="/part1" className="card blue">
              <h3>PHẦN 1</h3>
              <p className="card-subtitle">BỐI CẢNH VÀ ĐẠI HỘI VIII</p>
              <p className="card-desc">Sau 10 năm Đổi mới, dự thảo từng bước trở thành hiện thực với những đặc thù riêng. Hậu Đổi mới.</p>
            </Link>

            <div className="card blue">
              <h3>PHẦN 2</h3>
              <p className="card-subtitle">TỔNG KẾT ĐỔI MỚI VÀ ĐỊNH HƯỚNG CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA</p>
              <p className="card-desc">Từ 10 năm Đổi mới (1986–1996), những cải cách sâu sắc học, kinh nghiệm từ Đại hội VIII về công nghiệp hóa, hiện đại hóa, năng lực cạnh tranh.</p>
            </div>

            <div className="card blue">
              <h3>PHẦN 3</h3>
              <p className="card-subtitle">PHÁT TRIỂN KINH TẾ VÀ NHỮNG KẾT QUẢ THỰC TIỄN</p>
              <p className="card-desc">Sau Đại hội VIII, đường lối phát triển kinh tế từ lý thuyết hiện thực hóa được với các chính sách hợp lý về tài chính, tài nguyên, năng lực cạnh tranh năm 2000.</p>
            </div>

            <div className="card blue">
              <h3>PHẦN 4</h3>
              <p className="card-subtitle">XÂY DỰNG VÀ HOÀN THIỆN NHÀ NƯỚC PHÁP QUYỀN THEO NGUYÊN SÁC CHỦ NGHĨA</p>
              <p className="card-desc">Quá trình xây dựng Nhà nước Công hoa CHXHCN Việt Nam chiến lược hoàn thiện từ các quy chế ổn định pháp lý thực hành những cơ chế mới của nước.</p>
            </div>

            <div className="card blue">
              <h3>PHẦN 5</h3>
              <p className="card-subtitle">CÔNG TÁC CÁN BỘ VÀ XÂY DỰNG, CHỈNH ĐỐN ĐẢNG</p>
              <p className="card-desc">Sau Đại hội VIII, Đảng có công lao với các cán bộ về vấn đề lý thuyết, chỉnh đốn Đảng về tổ chức cán bộ kỷ luật và ứng dụng cơ cấu lãnh đạo Đảng.</p>
            </div>

            <div className="card blue">
              <h3>PHẦN 6</h3>
              <p className="card-subtitle">HỆ THỐNG CHÍNH TRỊ, DÂN CHỦ VÀ PHÁT TRIỂN CON NGƯỜI</p>
              <p className="card-desc">Sau Đại hội VIII, Đảng cho hướng hành động lâm dâm để nhìn thấy - phát triển với vai trò lãnh đạo của Đảng, từng chính sách xã hội về bảo vệ nước.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÔN TẬP KIẾN THỨC (dùng bg3) */}
      <section className="review" style={{ backgroundImage: `url(${bg3})` }}>
        <div className="review-inner">
          <h2>ÔN TẬP KIẾN THỨC</h2>
          <div className="review-content">
            <p>Phần này giúp ôn tập lại những kiến thức quan trọng từ các phần trước.</p>
          </div>
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
