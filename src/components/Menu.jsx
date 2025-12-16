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
      </div>
    </>
  )
}