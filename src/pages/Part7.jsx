import Header from '../components/Header'
import chatGPT from '../assets/images/chatGPT.png'
import gemini from '../assets/images/Gemini.png'
import cursor from '../assets/images/Cursor.png'
import part7_1 from '../assets/images/part7_1.png'
import part7_2 from '../assets/images/part7_2.png'
import part7_3 from '../assets/images/part7_3.png'
import part7_4 from '../assets/images/part7_4.png'
import aiEducation from '../assets/images/tri_tue_nhan_tao_ai_trong_giao_duc.png'

export default function Part7() {
  return (
    <>
      <Header/>
      <div className="bg-white pt-24 pb-12">
        {/* Header Section */}
        <div className="px-4 md:px-8 py-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-2 bg-[#215a83] rounded-3xl p-8 text-white font-black text-2xl md:text-4xl flex items-center justify-center min-h-[280px]">
              <p className="text-center leading-tight text-xl md:text-6xl">
                BÁO CÁO DỰ ÁN<br />
                ỨNG DỤNG AI HỖ<br />
                TRỢ HỌC TẬP
              </p>
            </div>
            <div className="bg-[#e92b2b] rounded-3xl min-h-[280px] overflow-hidden">
              <img src={aiEducation} alt="AI Hỗ trợ Học tập" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Yellow Info Box */}
          <div className="bg-[#fad20c] rounded-3xl p-6 mb-8">
            <p className="text-white font-bold text-sm md:text-base">
              Trong quá trình thực hiện đề tài, nhóm/cá nhân có sử dụng các công cụ trí tuệ nhân tạo (AI) nhằm hỗ trợ tìm kiếm thông tin, tóm tắt nội dung và gợi ý ý tưởng.
            </p>
          </div>

          {/* AI Tools Section */}
          <div className="mb-8">
            <h2 className="text-[#e92b2b] font-black text-xl md:text-5xl md:text-4xl mb-6 text-center">
              CÔNG CỤ AI ĐƯỢC SỬ DỤNG
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Chat GPT */}
              <div className="bg-[#215a83] rounded-3xl p-6 text-white min-h-[200px]">
                <h3 className="text-[#fad20c] font-black text-xl md:text-2xl mb-4">CHAT GPT</h3>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2">
                    <img src={chatGPT} alt="ChatGPT" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-sm leading-tight">
                  Được sử dụng để hỗ trợ tổng hợp kiến thức, tóm tắt văn bản, gợi ý cách diễn đạt và kiểm tra logic nội dung.
                </p>
              </div>

              {/* Gemini/Google AI */}
              <div className="bg-[#215a83] rounded-3xl p-6 text-white min-h-[200px]">
                <h3 className="text-[#fad20c] font-black text-xl md:text-2xl mb-4">GEMINI<br />GOOGLE AI</h3>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2">
                    <img src={gemini} alt="Gemini" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-sm leading-tight">
                  Được dùng để tra cứu thông tin, so sánh và đối chiếu các khái niệm từ nhiều nguồn khác nhau.
                </p>
              </div>

              {/* Cursor AI */}
              <div className="bg-[#215a83] rounded-3xl p-6 text-white min-h-[200px]">
                <h3 className="text-[#fad20c] font-black text-xl md:text-2xl mb-4">CURSOR AI</h3>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2">
                    <img src={cursor} alt="Cursor" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-sm leading-tight">
                  Được sử dụng trong quá trình viết và kiểm tra mã code, gợi ý cấu trúc hàm và tối ưu thuật toán.
                </p>
              </div>
            </div>
          </div>

          {/* Principles Section */}
          <div className="mb-8">
            <h2 className="text-[#215a83] font-black text-xl md:text-5xl md:text-4xl mb-6 text-center">
              NGUYÊN TẮC SỬ DỤNG
            </h2>
            
            {/* Principle 1 */}
            <div className="bg-[#fad20c] rounded-3xl p-6 mb-4 min-h-[140px] flex items-center">
              <div className="flex-1">
                <h3 className="text-[#e92b2b] font-black text-xl md:text-2xl mb-2">AI chỉ là trợ lý</h3>
                <p className="text-white font-bold text-sm">
                  Các công cụ AI chỉ đóng vai trò trợ lý hỗ trợ, không phải tác giả.
                </p>
              </div>
              <div className="w-48 h-48 ml-4 bg-white rounded-2xl overflow-hidden hidden md:block">
                <img src={part7_1} alt="AI Assistant" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-[#fad20c] rounded-3xl p-6 mb-4 min-h-[140px] flex items-center">
              <div className="w-48 h-48 mr-4 bg-white rounded-2xl overflow-hidden hidden md:block">
                <img src={part7_2} alt="Verification" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#e92b2b] font-black text-xl md:text-2xl mb-2">Kiểm chứng nghiêm ngặt</h3>
                <p className="text-white font-bold text-sm">
                  Mọi thông tin được kiểm chứng lại dựa trên giáo trình, tài liệu học thuật, và các nguồn uy tín liên quan.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-[#fad20c] rounded-3xl p-6 mb-4 min-h-[140px] flex items-center">
              <div className="flex-1">
                <h3 className="text-[#e92b2b] font-black text-xl md:text-2xl mb-2">Trách nhiệm hoàn toàn</h3>
                <p className="text-white font-bold text-sm">
                  Kết quả cuối cùng được chỉnh sửa, biên tập và chịu trách nhiệm hoàn toàn bởi nhóm/cá nhân thực hiện.
                </p>
              </div>
              <div className="w-48 h-48 ml-4 bg-white rounded-2xl overflow-hidden hidden md:block">
                <img src={part7_3} alt="Responsibility" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Academic Commitment */}
          <div className="bg-[#e92b2b] rounded-3xl p-8 min-h-[400px] flex items-center">
            <div className="flex-1">
              <h3 className="text-[#fad20c] font-black text-3xl md:text-4xl mb-6">CAM KẾT HỌC THUẬT</h3>
              <p className="text-white font-bold text-sm md:text-base leading-relaxed mb-6">
                Chúng tôi cam kết rằng tất cả nội dung trong đề tài này đã được nghiên cứu, kiểm chứng và chỉnh sửa một cách nghiêm túc. Các công cụ AI được sử dụng như một phương tiện hỗ trợ, nhưng toàn bộ trách nhiệm về tính chính xác, độ tin cậy và chất lượng của nội dung thuộc về nhóm/cá nhân thực hiện.
              </p>
              <div className="bg-white rounded-2xl p-4 inline-block">
                <p className="text-[#e92b2b] font-black text-sm">
                  Mọi thông tin đều được kiểm chứng từ nguồn học thuật uy tín và tài liệu chính thống.
                </p>
              </div>
            </div>
            <div className="w-64 h-64 ml-6 bg-white rounded-2xl overflow-hidden hidden md:block">
              <img src={part7_4} alt="Academic Commitment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
