import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import MyOrders from './pages/MyOrders';
import OrderSummary from './pages/OrderSummary';
import DeliveryDetails from './pages/DeliveryDetails';  
import PaymentOption from './pages/PaymentOption';  



function App() {
  return (
    <BrowserRouter >
    <main className='h-screen flex flex-col justify-between'>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Home />} />
        <Route path="/MyOrders" element={<MyOrders/>} />
        <Route path="/OrderSummary" element={<OrderSummary/>} />
        <Route path="/DeliveryDetails" element={<DeliveryDetails/>} />
        <Route path="/PaymentOption" element={<PaymentOption/>} />
      </Routes>
      <Footer /> 
    </main>
    </BrowserRouter>
  );
}

export default App;
