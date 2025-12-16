import Header from '../components/Header'
import { useState } from 'react'

export default function Review() {
  const questions = [
    {
      id: 1,
      question: "Câu 1: Sau 10 năm Đổi mới (1986-1996), mục đích Việt Nam theo định hướng phát triển nào sau đây?",
      options: [
        "A. Đẩy nhanh công cuộc công nghiệp hoá hiện đại hoá",
        "B. Phát triển kinh tế hàng hoá nhiều thành phần, vận hành theo cơ chế thị trường",
        "C. Lấy văn hoá làm nền tảng xây dựng đất nước và xã hội",
        "D. Xây dựng nền kinh tế độc lập, tự chủ về chủ quyền quốc gia"
      ],
      correct: 0
    },
    {
      id: 2,
      question: "Câu 2: Dựa vào sự kiện nào quyết định việc ĐHVIII của Đảng (1996) được xem là điểm mốc quan trọng của đổi mới sau đây?",
      options: [
        "A. Chính sách toàn diện công cuộc Đổi mới",
        "B. Đề ra nguyên tắc và phương pháp phát triển kinh tế",
        "C. Thực hiện phát triển nền kinh tế Việt Nam",
        "D. Bổ sung và cụ thể hóa đào tạo Đảng"
      ],
      correct: 1
    },
    {
      id: 3,
      question: "Câu 3: Đối tượng kinh nghiệm nào được xem là cốt lõi trong Đại hội Đảng lần thứ VIII (năm 1996)?",
      options: [
        "A. Phát triển kinh tế xã hội với tốc độ cao và bền vững",
        "B. Kiên định đường lối đổi mới với các phương pháp thực hiện",
        "C. Lấy văn hoá làm căn cơ xây dựng nền tảng xã hội",
        "D. Thực hiện công tác đổi mới về xây dựng cũng như quản lý Đảng"
      ],
      correct: 1
    },
    {
      id: 4,
      question: "Câu 4: Theo Đại hội VIII, yếu tố nào sau đây được coi là động lực then chốt của công nghiệp hóa - hiện đại hóa?",
      options: [
        "A. Lao động trí tuệ cao",
        "B. Trí nguyên khoa học kỹ thuật",
        "C. Khoa học - công nghệ",
        "D. Văn hoá của người dân"
      ],
      correct: 2
    },
    {
      id: 5,
      question: "Câu 5: Sau Đại hội VIII, phát triển kinh tế Việt Nam đã đạt được những xu hướng chủ yếu nào sau đây?",
      options: [
        "A. Nhắm vào xây dựng nền dân chủ mới",
        "B. Nhắm vào sự phát triển văn hóa văn hóa tinh thần",
        "C. Nhắm vào xây dựng văn hóa xã hội giáo dục chất lượng cao",
        "D. Nhắm vào công nghiệp hóa hiện đại hóa"
      ],
      correct: 3
    },
    {
      id: 6,
      question: "Câu 6: Đến năm 2000, nền kinh tế Việt Nam đã đạt mức tăng trưởng GDP năm trung bình cao nhất là bao nhiêu?",
      options: [
        "A. GDP tăng trưởng lên",
        "B. Không xuất sản phẩm không ổn định nào ra nước ngoài",
        "C. GDP tăng tốc xuất khẩu hàng hoá Việt Nam",
        "D. Công nghiệp hóa nông nghiệp và dịch vụ được nâng cao"
      ],
      correct: 2
    },
    {
      id: 7,
      question: "Câu 7: Hội nghị Trung ương 3 khóa VIII (1997) ban hành quyết số nào theo quốc đào sau đây đáng được chú ý?",
      options: [
        "A. Nghị quyết số 160-TW",
        "B. Nghị quyết số 160-NHTW",
        "C. Chi thị 90-CT/TW",
        "D. Nghị quyết Đại hội IX"
      ],
      correct: 1
    },
    {
      id: 8,
      question: "Câu 8: Sau Đại hội VIII, công tác cán bộ được xem như là bánh đà để Đảng thực hiện mất của nhà cái?",
      options: [
        "A. Quyền hạn vào hành bức của các tổ chức Nhà nước - Nền đảo Nhà nước",
        "B. Tuyên bố theo hỗn trợ trẻ em nhà dân dạng",
        "C. Giảm nén yếu kém đạo đức của Đảng",
        "D. Chỉ phục vụ cho hiến khánh nhất"
      ],
      correct: 0
    },
    {
      id: 9,
      question: "Câu 9: Nguyên tắc nào được đảm bảo trong chính sách đấy đáng, thành đức không phép được phát triển? - 1997?",
      options: [
        "A. Tiếp cảng quyền lực các dân tộc",
        "B. Tuyển bầu ra ứng cử viên",
        "C. Thúc đẩy đổi mới trong xã hội",
        "D. Giảm bớt phát triển Đảng"
      ],
      correct: 1
    },
    {
      id: 10,
      question: "Câu 10: Quan điểm nào sau đây phản ánh đúng nhất về các nền tảng trong văn hóa văn hoá trực nghệp để đổi mới xã hội cho nông dân?",
      options: [
        "A. Văn hoá tính kĩ năng nào cũng sau thay đổi cho bánh học về lí",
        "B. Văn hóa là nền tảng văn thiết nhằm xây dựng những chữa trị để nhu cầu cơ động được phát triển",
        "C. Văn hoá trở về về phục vụ hệ truyền thuyết",
        "D. Văn hoá làm cơ yếu lại cho người dân quan dần đạo được trình lập của những người"
      ],
      correct: 1
    }
  ]

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (questionId, optionIndex) => {
    if (!submitted) {
      setAnswers({ ...answers, [questionId]: optionIndex })
    }
  }

  const handleSubmit = () => {
    let correctCount = 0
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        correctCount++
      }
    })
    setScore(correctCount)
    setSubmitted(true)
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getOptionClass = (questionId, optionIndex, isCorrect) => {
    if (!submitted) {
      return answers[questionId] === optionIndex ? 'quiz-option selected' : 'quiz-option'
    }
    
    if (isCorrect) {
      return 'quiz-option correct'
    }
    
    if (answers[questionId] === optionIndex && !isCorrect) {
      return 'quiz-option incorrect'
    }
    
    return 'quiz-option'
  }

  return (
    <>
      <Header />
      <div className="quiz-container">
        <div className="quiz-header">
          <h1 className="quiz-title">ÔN TẬP KIẾN THỨC</h1>
          <p className="quiz-subtitle">Hoàn thành tất cả các câu hỏi về Đại hội VIII để xem kết quả về điểm số</p>
        </div>

        <div className="quiz-questions">
          {questions.map((q) => (
            <div key={q.id} className="quiz-question">
              <h3 className="question-text">{q.question}</h3>
              <div className="quiz-options">
                {q.options.map((option, index) => (
                  <button
                    key={index}
                    className={getOptionClass(q.id, index, index === q.correct)}
                    onClick={() => handleAnswer(q.id, index)}
                    disabled={submitted}
                  >
                    {option}
                    {submitted && index === q.correct && (
                      <span className="check-icon">✓</span>
                    )}
                    {submitted && answers[q.id] === index && index !== q.correct && (
                      <span className="cross-icon">✗</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!submitted && (
          <div className="quiz-submit">
            <button 
              className="submit-button" 
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < questions.length}
            >
              Nộp bài
            </button>
          </div>
        )}

        {submitted && (
          <div className="quiz-result">
            <h2 className="result-title">KẾT QUẢ CỦA BẠN</h2>
            <div className="result-score">
              <span className="score-number">{score}/{questions.length}</span>
            </div>
            <div className="result-percentage">
              Bạn đã trả lời đúng {score} câu trên {questions.length} câu ({Math.round((score/questions.length)*100)}%)
            </div>
            <button className="reset-button" onClick={handleReset}>
              Làm lại
            </button>
          </div>
        )}
      </div>
    </>
  )
}
