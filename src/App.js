import './App.css';
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer';
import ImageResize from './components/ImageResize';
import Homepage from './components/Homepage';
import PngToJpeg from './components/ImgConverter/PngToJpeg';
import JpegToPng from './components/ImgConverter/JpegToPng';
import PngToWebp from './components/ImgConverter/PngToWebp';
import WebpToPng from './components/ImgConverter/WebpToPng';
import JpegToWebp from './components/ImgConverter/JpegToWebp';
import WebpToJpeg from './components/ImgConverter/WebpToJpeg';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/reducer' element={<ImageResize />} />
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
