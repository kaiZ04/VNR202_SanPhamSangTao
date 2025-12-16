import Header from '../components/Header'

export default function Part5() {
  return (
    <>
      <Header />
      <div className="bg-white pt-24">
        {/* Header Section */}
        <div className="pt-8 pb-4 px-4 md:px-8 max-w-6xl mx-auto">
          <p className="text-sm font-bold text-gray-800 mb-2">PHẦN 5</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            CÔNG TÁC CÁN BỘ VÀ<br />
            XÂY DỰNG, CHỈNH ĐỐN ĐẢNG
          </h1>
        </div>

        {/* Section 1: Hero Grid */}
        <div className="relative px-4 md:px-8 py-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
            {/* Yellow Box - Left */}
            <div className="md:col-span-1 md:row-span-2 bg-[#fad20c] rounded-3xl p-6 flex flex-col space-y-2">
              <h3 className="text-sm font-bold text-white mb-2">
                TIÊU ĐỀ
              </h3>
              <h2 className="text-white font-black text-xl md:text-3xl leading-tight mb-6">
                Công tác cán bộ trong thời kỳ đây mạnh CĐH - HĐH
              </h2>
              <p className="text-white font-semibold text-sm leading-relaxed mb-6">
                Sau Đại hội VIII (1996), Đảng xác định công tác cán bộ là khâu then chốt của sự nghiệp công nghiệp hóa, hiện đại hóa.
              </p>
              <div className="w-full h-full object-contain bg-[#fad20c]">
                <img
                  src="/assets/images/part5_1.png"
                  alt="Lịch sử"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Blue Box - Top Right */}
            <div className="md:col-span-2 bg-[#215a83] rounded-3xl p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold mb-2">TIÊU ĐỀ</h3>
                  <h2 className="text-xl md:text-3xl font-black mb-4">Mục tiêu</h2>
                  <p className="text-sm leading-relaxed">
                    Xây dựng đội ngũ cán bộ các cấp có phẩm chất chính trị vững vàng, năng lực chuyên môn, đủ số lượng, đồng bộ về cơ cấu.
                  </p>
                </div>
              </div>
            </div>

            {/* Red Box - Middle Bottom */}
            <div className="md:col-span-1 bg-[#e92b2b] rounded-3xl p-6 text-white flex flex-col justify-between">
              <div></div>
              <p className="text-sm font-bold leading-tight mb-8">
                Cán bộ phải giỏi về lý luận chính trị, đặc biệt yêu cầu chất lượng cao.
              </p>
            </div>

            {/* Dark Box - Bottom Right */}
            <div
              className="md:col-span-1 rounded-3xl overflow-hidden
             flex items-end justify-center
             bg-cover bg-center text-white"
              style={{
                backgroundImage: 'url(/assets/images/part5_2.png)',
              }}
            >
              <p className="m-4 text-xs text-center bg-black/50 px-3 py-2 rounded">
                Đồng chí Đỗ Mười chúc mừng đồng chí Lê Khả Phiêu được bầu làm Tổng Bí thư BCHTƯ Đảng tại Hội nghị lần thứ 4, BCHTƯ khóa VIII.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Standards Header */}
        <div className="px-4 md:px-8 py-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-black text-[#215a83] leading-tight">
              TIÊU CHUẨN CHỦ YẾU<br />
              ĐỐI VỚI ĐỘI NGŨ CÁN BỘ
            </h2>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-5 h-5 bg-[#fad20c] rounded-full"></div>
              <div className="w-6 h-5 bg-[#e92b2b] rounded-full"></div>
              <div className="w-5 h-5 bg-[#215a83] rounded-full"></div>
              <div className="w-5 h-5 bg-[#fad20c] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Section 3: Standards Grid */}
        <div className="px-4 md:px-8 pb-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            <div className="bg-[#fad20c] rounded-3xl p-6 text-white font-bold text-sm leading-tight flex items-center justify-center min-h-[120px]">
              Yêu nước, tận tụy phục vụ nhân dân.
            </div>

            <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm leading-tight flex items-center justify-center min-h-[120px]">
              Kiên định mục tiêu độc lập dân tộc gắn liền với CNXH.
            </div>

            <div className="bg-[#fad20c] rounded-3xl p-6 text-white font-bold text-sm leading-tight flex items-center justify-center min-h-[120px]">
              Có đạo đức cách mạng: cần, kiệm, liêm, chính, chí công vô tư.
            </div>

            <div className="bg-[#e92b2b] rounded-3xl p-6 text-white font-bold text-sm leading-tight flex items-center justify-center min-h-[120px]">
              Không tham nhũng, kiên quyết đấu tranh chống tham nhũng.
            </div>

            <div className="md:col-span-1 bg-[#fad20c] rounded-3xl p-6 text-white font-bold text-sm leading-tight flex items-center justify-center min-h-[120px]">
              Có ý thức tổ chức kỷ luật, trung thực, không cơ hội.
            </div>

            <div className="md:col-span-2 bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm leading-tight flex items-center justify-center min-h-[120px]">
              Có trình độ lý luận chính trị, văn hóa, chuyên môn; đủ năng lực và sức khỏe.
            </div>

            <div className="bg-[#fad20c] rounded-3xl p-6 text-white font-bold text-sm leading-tight flex items-center justify-center min-h-[120px]">
              Coi trọng cả đức và tài, lấy đức làm gốc.
            </div>

          </div>
        </div>

        {/* Section 4: Timeline Banner */}
        <div className="px-4 md:px-8 py-8 max-w-6xl mx-auto">
          <div
            className="rounded-3xl p-8 relative overflow-hidden min-h-[200px] flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: 'url(/assets/images/part5_3.png)',
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <h2 className="text-2xl md:text-3xl font-black text-white text-center relative z-10">
              CÔNG TẠC XÂY DỰNG ĐẢNG [1997 - 1999]
            </h2>
          </div>
        </div>

        {/* Section 5: Timeline Events Grid */}
        <div className="px-4 md:px-8 py-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-[#fad20c] rounded-3xl p-6 text-gray-900 font-bold text-sm leading-tight min-h-[160px] flex flex-col items-center justify-center">
              <p className="text-center">
                Đẩy mạnh xây dựng, chỉnh đốn Đảng nhằm khắc phục những hạn chế trong quá trình đổi mới.
              </p>
            </div>

            {/* Card 2 - With Image */}
            <div className="bg-[#fad20c] rounded-3xl p-6 text-gray-900 font-bold text-sm leading-tight min-h-[160px] flex flex-col items-center justify-center">
              <div className="w-16 h-20 bg-[#fad20c] rounded mb-3 overflow-hidden flex-shrink-0">
                <img src="/assets/images/part5_khaphieu.png" alt="Lê Khả Phiêu" className="w-full h-full object-cover" />
              </div>
              <p className="text-center">
                Hội nghị Trung ương 4 khóa VIII (1997) báo cáo Lê Khả Phiêu làm Tổng Bí thư.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fad20c] rounded-3xl p-6 text-gray-900 font-bold text-sm leading-tight min-h-[160px] flex flex-col items-center justify-center">
              <p className="text-center">
                Hội nghị Trung ương 6 (lần 2) khóa VIII (1998) ban hành Nghị quyết 10-NQ/TW về các vấn đề cơ bản trong xây dựng Đảng.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#fad20c] rounded-3xl p-6 text-gray-900 font-bold text-sm leading-tight min-h-[160px] flex flex-col items-center justify-center">
              <p className="text-center">
                Trong lâm: tư phê bình và phê bình, nâng cao sức chiến đấu của Đảng.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Bottom Blue Section */}
        <div className="bg-[#215a83] px-4 md:px-8 py-12 mt-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#fad20c] text-center mb-12 leading-tight">
              NHỮNG YÊU CẦU LỚN<br />
              TRONG XÂY DỰNG, CHỈNH ĐỐN ĐẢNG
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Yellow Buttons */}
              <div className="space-y-4 bg-[#fff] rounded-3xl p-6">
                <div className="text-[#e92b2b] text-xl md:text-5xl font-black mb-6">
                  Kiên định các<br />
                  nguyên tắc:
                </div>

                <button className="w-full bg-[#fad20c] text-gray-900 font-bold py-4 px-4 rounded-full text-sm text-center hover:shadow-lg transition-all">
                  Độc lập dân tộc gắn liền với CNXH.
                </button>
                <button className="w-full bg-[#fad20c] text-gray-900 font-bold py-4 px-4 rounded-full text-sm text-center hover:shadow-lg transition-all">
                  Chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh.
                </button>
                <button className="w-full bg-[#fad20c] text-gray-900 font-bold py-4 px-4 rounded-full text-sm text-center hover:shadow-lg transition-all">
                  Vai trò lãnh đạo quy nhất của Đảng.
                </button>
                <button className="w-full bg-[#fad20c] text-gray-900 font-bold py-4 px-4 rounded-full text-sm text-center hover:shadow-lg transition-all">
                  Nhà nước của dân, do dân, vì dân.
                </button>
                <button className="w-full bg-[#fad20c] text-gray-900 font-bold py-4 px-4 rounded-full text-sm text-center hover:shadow-lg transition-all">
                  Nguyên tắc tập trung dân chủ.
                </button>
              </div>

              {/* Right Column - White Boxes */}
              <div className="grid grid-rows-3 gap-6 h-full">
                <div className="bg-white rounded-3xl p-6 text-[#215a83] font-bold text-center text-xl md:text-2xl leading-tight flex items-center justify-center min-h-[80px]">
                  <p>Tăng cường sự thống nhất trong Đảng về tư tưởng và hành động.</p>
                </div>

                <div className="bg-white rounded-3xl p-6 text-[#215a83] font-bold text-center text-xl md:text2xl leading-tight flex items-center justify-center min-h-[80px]">
                  <p>Kiên quyết đấu tranh đẩy lùi các nguy cơ.</p>
                </div>

                <div className="bg-white rounded-3xl p-6 text-[#215a83] font-bold text-center text-xl md:text-2xl leading-tight flex items-center justify-center min-h-[80px]">
                  <p>
                    Đảng viên nêu cao tinh thần tự giác, chấp hành cương lĩnh,
                    điều lệ Đảng và pháp luật Nhà nước.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
