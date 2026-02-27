import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
function App() {

  return (
    <>
    
    <BrowserRouter>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About Me</Link>
    </nav>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;

