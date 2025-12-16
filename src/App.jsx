import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Part1 from './pages/Part1'
import Part2 from './pages/Part2'
import Part3 from './pages/Part3'
import Part4 from './pages/Part4'
import Part5 from './pages/Part5'
import Part6 from './pages/Part6'
import Part7 from './pages/Part7'
import Review from './pages/Review'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/part1" element={<Part1 />} />
      <Route path="/part2" element={<Part2 />} />
      <Route path="/part3" element={<Part3 />} />
      <Route path="/part4" element={<Part4 />} />
      <Route path="/part5" element={<Part5 />} />
      <Route path="/part6" element={<Part6 />} />
      <Route path="/part7" element={<Part7 />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  )
}

export default App