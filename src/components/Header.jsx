import { Link } from 'react-router-dom'
import { useState } from 'react'
import homeIcon from '../assets/images/home icon.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Header bar with home button and menu icon */}
      <header className="header">
        <Link to="/" className="header-home">
          <img src={homeIcon} alt="Home" className="home-icon-img" />
        </Link>
        <div className="header-menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </header>

      {/* Overlay */}
      {open && <div className="header-overlay" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <nav className={`header-sidebar ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Trang chủ</Link>
        <Link to="/part1" onClick={() => setOpen(false)}>Phần 1</Link>
        <Link to="/part2" onClick={() => setOpen(false)}>Phần 2</Link>
        <Link to="/part3" onClick={() => setOpen(false)}>Phần 3</Link>
        <Link to="/part4" onClick={() => setOpen(false)}>Phần 4</Link>
        <Link to="/part5" onClick={() => setOpen(false)}>Phần 5</Link>
        <Link to="/part6" onClick={() => setOpen(false)}>Phần 6</Link>
        <Link to="/part7" onClick={() => setOpen(false)}>AI hỗ trợ học tập</Link>
        <Link to="/review" onClick={() => setOpen(false)}>Ôn tập kiến thức</Link>
      </nav>
    </>
  )
}
