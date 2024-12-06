
const Cart = ({cart}) => {
  return (
    <div>
      Cart Products
      {
        cart.map((product)=>(
            <div><h3>{product.name}</h3>
            <h3>{product.author}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default Cart
