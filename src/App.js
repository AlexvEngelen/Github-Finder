import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar title='Github Finder' />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
