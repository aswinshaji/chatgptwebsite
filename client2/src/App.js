import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import ChatBot from './pages/ChatBot';
import JSConverter from './pages/JSConverter';
import SciFiImage from './pages/SciFiImage';

function App() {
  return (
    <>
    <Navbar/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/summary" element={<Summary/>}/>
      <Route path="/paragraph" element={<Paragraph/>}/>
      <Route path="/chatbot" element={<ChatBot/>}/>
      <Route path="/js-converter" element={<JSConverter/>}/>
      <Route path="/scifi-image" element={<SciFiImage/>}/>
    </Routes>
    </>
  );
}

export default App;
