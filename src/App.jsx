import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart'
function App() {
 const[cart,setcart]=useState([]);
 

  return (
    <>
       <BrowserRouter>
       <Header/>
       <Routes>
      <Route path="/" element={<Home cart={cart} setcart={setcart} />}/>
      <Route path="/Cart" element={<Cart cart={cart}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
