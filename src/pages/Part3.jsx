import Header from '../components/Header'
import { useState } from 'react'

export default function Part3() {
  const [expanded, setExpanded] = useState(null)

  const items = [
    {
      id: 1,
      title: "Triển khai sau Đại hội VIII: trong tâm phát triển kinh tế",
      contents: [
        "Xác định: phát triển kinh tế là nhiệm vụ trong tâm; huy động nguồn lực, nâng hiệu quả, tăng sức cạnh tranh.",
        "Nhân mạnh: phát triển theo cơ chế thị trường nhưng Nhà nước quản lý, điều tiết theo định hướng xã hội chủ nghĩa; xuất khẩu quan trọng những không cơi nhe thị trường trong nước.",
        "Gắn phát triển kinh tế với công bằng xã hội."
      ]
    },
    {
      id: 2,
      title: "Nhiệm vụ và giải pháp chủ yếu",
      contents: [
        "Cơ cấu & đầu tư chuyên dịch cơ cấu kinh tế, điều chỉnh cơ cấu đầu tư.",
        "Nông nghiệp/nông thôn: phát triển theo hướng công nghiệp hóa – hiện đại hóa.",
        "Doanh nghiệp: đổi mới, phát triển và nâng hiệu quả quản lý các loại hình doanh nghiệp.",
        "Tài chính – tiền tệ: làm mạnh hóa hệ thống, thực hành tiết kiệm.",
        "Xã hội & quản trị: việc làm, xoá đói giảm nghèo; tăng cường lãnh đạo của Đảng, quản lý của Nhà nước; phát huy quyền làm chủ của nhân dân."
      ]
    },
    {
      id: 3,
      title: "Kết quả nối bật đến năm 2000",
      contents: [
        "Vượt qua khủng hoảng tài chính khu vực (từ 7/1997).",
        "Đến năm 2000: GDP tăng bình quân khoảng 7%/năm; giá trị sản xuất công nghiệp tăng bình quân 13,5%/năm; dịch vụ, xuất–nhập khẩu phát triển; nhiều chỉ tiêu chủ yếu đạt/vượt kế hoạch."
      ]
    }
  ]

  return (
    <>
      <Header />
      <div className="page-container">
        <section className="details">
          <div className="details-inner">
            <h2 className="details-title">PHÁT TRIỂN KINH TẾ VÀ NHỮNG KẾT QUẢ THỰC TIỄN</h2>

            <div className="accordion-list">
              {items.map((item) => (
                <div key={item.id} className={`accordion-wrapper ${expanded === item.id ? 'expanded' : ''}`}>
                  <div 
                    className="accordion-item"
                    onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                  >
                    <div className="num">{item.id}</div>
                    <div className="acc-body">{item.title}</div>
                    <div className={`acc-arrow ${expanded === item.id ? 'open' : ''}`}>˅</div>
                  </div>

                  {expanded === item.id && (
                    <div className="accordion-content">
                      {item.contents.map((content, idx) => (
                        <div key={idx} className="content-item">
                          {content}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
