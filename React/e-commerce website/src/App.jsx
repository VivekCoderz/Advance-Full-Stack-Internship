import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

import cardData from './data/cardData.js'
import products from './data/products.js'
function App() {
  return (
    <div>
      <Navbar/>
      <hr />
      <h1>All Products</h1>
      <div style={{
        margin : "0px 100px",
        display : "flex",
        flexWrap : 'wrap',
        gap : '20px',
        margin : "40px 0px",
        justifyContent : "center",
        alignItems : "center"
      }}>
        {
          cardData.map((card)=><Card cards={card}/>)
        }
      </div>

        <hr />

     <div style={{
    margin: "40px 0px",
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    flexWrap: "nowrap",
    padding: "10px"
}}>

{
 products.map((pro)=>(
    <div 
      key={pro.id}
      style={{
        width:"180px",
        flexShrink:0,
        padding:"10px"
      }}
    >

      <img 
        src={pro.imageURL} 
        alt="hello"
        style={{
          height:"200px",
          width:"100%",
          objectFit:"cover",
          borderRadius:"8px"
        }}
      />

      <p style={{color:"blue",margin:"0px",fontSize:"14px"}}>{pro.description}</p>
      <p style={{color:"blue",margin:"0px",fontSize:"14px"}}>{pro.reviews}</p>
      <span style={{color:"red",margin:"0px",fontSize:"16px"}}>-{pro.discount}</span>
      <span style={{color:"black",margin:"0px",fontSize:"16px"}}> <sup>₹</sup>{pro.price}<sup>00</sup></span>
      <p style={{color:"gray",margin:"0px",fontSize:"12px"}}>M.R.P: <span style={{textDecoration:"line-through",color:"gray",
    fontSize:"14px"}}>₹{pro.oldPrice}</span></p>
   <p style={{
     margin:"5px 0",
     fontSize:"14px"
    }}>
    <span style={{
      color:"#00a650",
      fontWeight:"bold",
      paddingRight : "8px",
    }}>
      ✓prime  
    </span>
    
    <span>
       FREE Delivery
    </span>
  </p>
      <p style={{color:"black",margin:"0px",fontSize:"14px",fontWeight:"700"}}>{pro.deliveryDate}</p>


    </div>
 ))
}

</div>

    </div>
  )
}

export default App
