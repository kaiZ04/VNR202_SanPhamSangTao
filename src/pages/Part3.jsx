import Header from '../components/Header'
import { useState } from 'react'

export default function Part3() {
  const [expanded, setExpanded] = useState(1)

  const items = [
    {
      id: 1,
      title: "Triển khai sau Đại hội VIII: trọng tâm phát triển kinh tế",
      contents: [
        "Xác định: phát triển kinh tế là nhiệm vụ trọng tâm; huy động nguồn lực, nâng hiệu quả, tăng sức cạnh tranh.",
        "Nhấn mạnh: phát triển theo cơ chế thị trường nhưng Nhà nước quản lý, điều tiết theo định hướng xã hội chủ nghĩa; xuất khẩu quan trọng nhưng không coi nhẹ thị trường trong nước.",
        "Gắn phát triển kinh tế với công bằng xã hội."
      ]
    },
    {
      id: 2,
      title: "Nhiệm vụ và giải pháp chủ yếu",
      contents: [
        "Cơ cấu & đầu tư: chuyển dịch cơ cấu kinh tế, điều chỉnh cơ cấu đầu tư.",
        "Nông nghiệp/nông thôn: phát triển theo hướng công nghiệp hóa – hiện đại hóa.",
        "Doanh nghiệp: đổi mới, phát triển và nâng hiệu quả quản lý các loại hình doanh nghiệp.",
        "Tài chính – tiền tệ: lành mạnh hoá hệ thống, thực hành tiết kiệm.",
        "Xã hội & quản trị: việc làm, xoá đói giảm nghèo; tăng cường lãnh đạo của Đảng, quản lý của Nhà nước; phát huy quyền làm chủ của nhân dân."
      ]
    },
    {
      id: 3,
      title: "Kết quả nổi bật đến năm 2000",
      contents: [
        "Vượt qua khủng hoảng tài chính khu vực (từ 7/1997).",
        "Đến năm 2000: GDP tăng bình quân khoảng 7%/năm; giá trị sản xuất công nghiệp tăng bình quân 13,5%/năm; dịch vụ, xuất–nhập khẩu phát triển; nhiều chỉ tiêu chủ yếu đạt/vượt kế hoạch."
      ]
    }
  ]

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id)
  }

  return (
    <>
      <Header />
      <div className="part3-modern-container">
        <div className="part3-header">
          <div className="part3-badge">PHẦN 3</div>
          <h1 className="part3-main-title">PHÁT TRIỂN KINH TẾ VÀ NHỮNG KẾT QUẢ THỰC TIỄN</h1>
        </div>

        <div className="part3-accordion-list">
          {items.map((item) => (
            <div key={item.id} className="part3-accordion-item">
              <button 
                className={`part3-accordion-header ${expanded === item.id ? 'active' : ''}`}
                onClick={() => toggleExpand(item.id)}
              >
                <div className="part3-accordion-number">{item.id}</div>
                <div className="part3-accordion-title">{item.title}</div>
                <div className={`part3-accordion-icon ${expanded === item.id ? 'rotate' : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>

              <div className={`part3-accordion-content ${expanded === item.id ? 'expanded' : ''}`}>
                <div className="part3-content-inner">
                  {item.contents.map((content, idx) => (
                    <div key={idx} className="part3-content-box">
                      {content}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
