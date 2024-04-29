import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageResize from './components/ImageResize';

function App() {
  return (
    <>
      <ToastContainer />
      <ImageResize />
    </>
  );
}

export default App;
