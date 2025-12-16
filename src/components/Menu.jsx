import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Icon 3 gạch */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <div className={`sidebar ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Trang chủ</Link>
        <Link to="/part1" onClick={() => setOpen(false)}>Phần 1</Link>
        <Link to="/part2" onClick={() => setOpen(false)}>Phần 2</Link>
        <Link to="/part3" onClick={() => setOpen(false)}>Phần 3</Link>
        <Link to="/part4" onClick={() => setOpen(false)}>Phần 4</Link>
        <Link to="/part5" onClick={() => setOpen(false)}>Phần 5</Link>
        <Link to="/part6" onClick={() => setOpen(false)}>Phần 6</Link>
        <Link to="/part7" onClick={() => setOpen(false)}>AI hỗ trợ học tập</Link>
        <Link to="/review" onClick={() => setOpen(false)}>Ôn tập</Link>
      </div>
    </>
  )
}