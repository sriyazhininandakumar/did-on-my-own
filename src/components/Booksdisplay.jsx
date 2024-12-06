import React from 'react'
import './Booksdisplay.css'
const Booksdisplay = ({product,cart,setcart}) => {
    const addCart=()=>{
        setcart([...cart, product])
    
      };
      const removeCart=()=>{
        setcart(cart.filter((remove)=>remove.id!==product.id));
      };
  return (
    <div>
       
     <div className='container'>
     <div className='images'> <img src={product.img} alt="" /></div>
      <div className='content'>
      <h3>name:{product.name}</h3>
      <h3>author:{product.author}</h3>
      {cart.includes(product)?
      <button className='btnRemove' onClick={removeCart}>Remove from Cart</button>:
        <button onClick={addCart}>Add to Cart</button>

      } </div>
     </div>
    </div>
  )
}

export default Booksdisplay
