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
import PngToJpeg from './components/imgPages/PngToJpeg';
import JpegToPng from './components/imgPages/JpegToPng';
import PngToWebp from './components/imgPages/PngToWebp';
import WebpToPng from './components/imgPages/WebpToPng';
import JpegToWebp from './components/imgPages/JpegToWebp';
import WebpToJpeg from './components/imgPages/WebpToJpeg';

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
        <Route path='/pngtojpeg' element={<PngToJpeg />} />
        <Route path='/jpegtopng' element={<JpegToPng />} />
        <Route path='/pngtowebp' element={<PngToWebp />} />
        <Route path='/webptopng' element={<WebpToPng />} />
        <Route path='/jpegtowebp' element={<JpegToWebp />} />
        <Route path='/webptojpeg' element={<WebpToJpeg />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
