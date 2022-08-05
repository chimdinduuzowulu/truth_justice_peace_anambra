import logo from './logo.svg';
import Index from './pages/Index';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' exact element={<Index />} />
        <Route path='/index' exact element={<Index />} />
        <Route path='/contact' exact element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
