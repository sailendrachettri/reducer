import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageResize from './components/ImageResize';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage';
import WordtoPdf from './components/WordtoPdf';
import PdfToOdt from './components/PdfToOdt';
import OdtToPdf from './components/OdtToPdf';
import PdfToWord from './components/PdfToWord';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/reducer' element={<ImageResize />} />
        <Route path='/wordtopdf' element={<WordtoPdf />} />
        <Route path='/pdftoword' element={<PdfToWord />} />
        <Route path='/odttopdf' element={<OdtToPdf />} />
        <Route path='/pdftoodt' element={<PdfToOdt />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
