import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Home from './Home';
import ForgotPassword from './components/Auth/ForgotPassword';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router>
    <div className="App">
      <HelmetProvider>
      <Header />
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<ForgotPassword />} />
      </Routes>
      <Footer />
      </HelmetProvider>

    </div>
  </Router>
  );
}

export default App;
