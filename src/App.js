import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './pages/UserDashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position='bottom-center'/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/about" element={<About/>} />
      {/* <Route path="/eodsms" element={<SendSms/>}/> */}
    
      <Route path="/user" element={<PrivateRoute/>}>
        <Route path="dashboard" element={<UserDashboard/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
