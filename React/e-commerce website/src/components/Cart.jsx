import React from 'react'

const Cart = ({pr,updateCardQantity}) => {
  return (
    <div
      style={{
        display:"flex",
        alignItems:"center",
        gap:"15px",
        borderBottom:"1px solid #ddd",
        paddingBottom:"15px"
      }}
    >
      <img
        src={pr.imageURL}
        style={{
          width:"70px",
          height:"70px",
          borderRadius:"10px"
        }}
      />

      <div>
        <h4>{pr.name}</h4>
        <p>{pr.price}</p>
        <div>
          <button onClick={()=>{updateCardQantity(pr.id,-1)}}>-</button>
          <span style={{margin:"0 10px"}}>{pr.quantity}</span>
          <button  onClick={()=>{updateCardQantity(pr.id)}}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Cart