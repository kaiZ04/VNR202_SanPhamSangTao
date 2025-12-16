import Header from '../components/Header'

export default function Part6() {
  return (
    <>
      <Header/>
      <div className="bg-white pt-24">
        {/* Header Section */}
        <div className="pt-8 pb-4 px-4 md:px-8 max-w-6xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-black px-7 py-2.5 rounded-full tracking-wider shadow-lg shadow-red-600/30 mb-4">PHẦN 6</div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            HỆ THỐNG CHÍNH TRỊ, DÂN CHỦ<br />
            VÀ PHÁT TRIỂN CON NGƯỜI
          </h1>
        </div>

        <div className="px-4 md:px-8 py-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-[180px]">

            {/* Blue Box - row 1, col 1-2 */}
            <div className="md:col-span-2 bg-[#215a83] rounded-3xl p-6 text-white font-bold text-lg md:text-2xl flex items-center justify-center">
              <p className="text-center">
                Kiện toàn bộ máy chính trị và mở rộng dân chủ
              </p>
            </div>

            {/* Image - row 1, col 3 */}
            <div className="bg-gray-300 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/assets/images/part6_1.png"
                alt="Hội nghị"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Red Box - col 4, span 2 rows */}
            <div className="md:row-span-2 bg-[#e92b2b] rounded-3xl p-6 text-white font-bold text-lg md:text-2xl flex items-center justify-center">
              <p className="text-center">
                Ban hành Chỉ thị 30-CT/TW (1998) về thực hiện Quy chế dân chủ ở cơ sở, phát huy quyền làm chủ của nhân dân.
              </p>
            </div>

            {/*Image - row 2, col 1 */}
            <div className="bg-gray-300 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/assets/images/part6_2.png"
                alt="Nhân dân"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Yellow Box - row 2, col 2-3 */}
            <div className="md:col-span-2 bg-[#fad20c] rounded-3xl p-6 text-white font-bold text-lg md:text-2xl flex items-center justify-center">
              <p className="text-center">
                Đổi mới phương thức hoạt động của Quốc hội, Chính phủ, chính quyền địa phương, Mặt trận và các đoàn thể.
              </p>
            </div>

          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 py-12 max-w-6xl mx-auto">
          {/* Left - Yellow Box */}
          <div className="bg-[#e92b2b] rounded-3xl p-6 text-gray-900 font-bold text-sm flex flex-col items-center justify-center min-h-[200px]">
            <h3 className="text-[#FFF6B7] text-xl md:text-5xl font-black mb-4 text-center">Giáo dục - đào tạo</h3>
            <p className="text-center text-white text-left">
              Giáo dục là quốc sách hàng đầu, nhằm xây dựng con người Việt Nam vừa “hồng” vừa “chuyên”.<br /><br />
              Khuyến khích học tập suốt đời, giúp giáo dục với phát triển kinh tế - xã hội.
            </p>
          </div>

          {/* Right - Blue Box with dots and Science & Tech */}
          <div className="space-y-4">
            {/* Dots Section */}
            <div className="bg-black rounded-3xl p-4 flex justify-center gap-3 items-center min-h-[50px]">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>

            {/* Science & Tech Box */}
            <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold flex flex-col items-center justify-center min-h-[140px]">
              <h3 className="text-[#FFF6B7] text-xl md:text-4xl font-black mb-4 text-center">Khoa học - công nghệ</h3>
              <p className="text-sm text-center leading-tight text-left">
                Khoa học - công nghệ là động lực của CNH - HĐH.<br /><br />
                Đẩy mạnh nghiên cứu, ứng dụng khoa học vào sản xuất, quản lý.<br /><br />
                Xây dựng tiềm lực khoa học - công nghệ quốc gia, tiếp thu tinh hoa nhân loại.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="px-4 md:px-8 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Left Column - Blue Boxes Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[110px]">
              <p className="text-center">Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu vừa là động lực phát triển.</p>
            </div>
            <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[110px]">
              <p className="text-center">Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.</p>
            </div>
            <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[110px]">
              <p className="text-center">Gắn phát triển kinh tế với phát triển văn hóa và con người.</p>
            </div>
            <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[110px]">
              <p className="text-center">Mở rộng giao lưu quốc tế, tiếp thu có chọn lọc tinh hoa văn hóa thế giới.</p>
            </div>
            <div className="md:col-span-2 bg-[#e92b2b] rounded-3xl p-6 text-white flex items-center min-h-[80px]">
              <div className="w-full flex items-center">
                <div className="flex-1 h-[3px] bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rotate-45 -ml-2 rounded-[2px]"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Large Yellow Box */}
          <div className="bg-[#fad20c] rounded-3xl p-8 text-white font-black text-4xl flex flex-col items-center justify-center min-h-[500px]">
            <p className="text-center leading-tight">
              VĂN HÓA - NỀN<br />
              TẢNG TINH THẦN<br />
              CỦA XÃ HỘI
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Grid Section */}
      <div className="px-4 md:px-8 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[100px]">
            <p className="text-center text-lg md:text-xl">Xây dựng con người Việt Nam phát triển toàn diện.</p>
          </div>
          <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[100px]">
            <p className="text-center text-lg md:text-xl">Xây dựng môi trường văn hóa lành mạnh.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[100px]">
            <p className="text-center text-lg md:text-xl">Bảo tồn và phát huy di sản văn hóa dân tộc.</p>
          </div>
          <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[100px]">
            <p className="text-center text-lg md:text-xl">Phát triển giáo dục, khoa học - công nghệ.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[100px]">
            <p className="text-center text-lg md:text-xl">Mở rộng hợp tác quốc tế về văn hóa.</p>
          </div>
          <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[100px]">
            <p className="text-center text-lg md:text-xl">Chống lợi dụng văn hóa để thực hiện “diễn biến hòa bình”.</p>
          </div>
        </div>

        {/* Final Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#fad20c] rounded-3xl p-6 text-gray-900 font-black text-2xl flex items-center justify-center min-h-[130px]">
            <p className="text-center leading-tight text-[#215a83] text-left text-xl md:text-3xl">
              NHIỆM VỤ XÂY<br />
              DỰNG VÀ PHÁT TRIỂN<br />
              VĂN HÓA
            </p>
          </div>
          <div className="bg-[#215a83] rounded-3xl p-6 text-white font-bold text-sm flex items-center justify-center min-h-[130px]">
            <p className="text-center text-lg md:text-xl">Khẳng định xây dựng văn hóa là sự nghiệp của toàn dân dưới sự lãnh đạo của Đảng.</p>
          </div>
        </div>
      </div>
    </>
  )
}
