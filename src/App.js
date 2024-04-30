import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageResize from './components/ImageResize';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ToastContainer />
      <ImageResize />
      <Footer />
    </>
  );
}

export default App;
