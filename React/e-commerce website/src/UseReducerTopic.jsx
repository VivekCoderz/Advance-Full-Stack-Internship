import React, { useReducer } from 'react'
import { cartreducer, initialState } from './CartReducer';
import products from './data/products';
// import UserContext from './UserContext';
// import Navbar from './Navbar';
// import CounterUsingUseReducer from './CounterUsingUseReducer';
// import products from './Product';
// import { cartReducer,initialState } from './CartReducer';
const useReducerTopic = () => {
  const [state,dispatch]= useReducer(cartreducer,initialState);
  return (
    <div>
        <h1> Shopping Cart</h1>
        <h2> Total : Rs {state.total}</h2>
        {
          products.map((product)=>(
            <div key={product.id}
             style={{
              border:"1px solid gray",
              padding:15,
              marginBottom:15
             }}
            >

              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={()=>dispatch({
                type:"Add_Item",
                payload:product
              })}>Add to Cart</button>
              <button onClick={()=>dispatch({
                type:"Inrease_qty",
                payload:product
              })}>Increase quantity</button>
            </div>
          ))
        }
        <h2> Cart </h2>
        {state.cart.map((item)=>(
          <div key={item.id}>
            {item.name}
            {"-"}
            Qty : {item.quantity}

          </div>
        ))}
    </div>
  )
}

export default useReducerTopic