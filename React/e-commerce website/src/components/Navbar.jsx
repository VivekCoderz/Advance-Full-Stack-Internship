import { Link } from "react-router-dom";

function Navbar({showCart, setShowCart, cart}) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
        padding: "12px 40px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}
    >

      {/* Logo */}
      <div>
        <h1
          style={{
            margin: 0,
            color: "#2563eb",
            fontSize: "30px",
            fontWeight: "800",
            cursor: "pointer"
          }}
        >
          Shop<span style={{color:"#111"}}>X</span>
        </h1>
      </div>


      {/* Search */}
      <div
        style={{
          display:"flex",
          alignItems:"center",
          width:"45%"
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          style={{
            width:"100%",
            height:"40px",
            border:"1px solid #ccc",
            borderRight:"none",
            borderRadius:"25px 0 0 25px",
            padding:"0 20px",
            fontSize:"16px",
            outline:"none"
          }}
        />

        <button
          style={{
            height:"42px",
            padding:"0 25px",
            border:"none",
            background:"#2563eb",
            color:"white",
            fontSize:"16px",
            borderRadius:"0 25px 25px 0",
            cursor:"pointer"
          }}
        >
          Search
        </button>
      </div>


      {/* Links */}
      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"25px",
          fontSize:"16px",
          fontWeight:"500"
        }}
      >

        <Link
          to="/home"
          style={{
            textDecoration:"none",
            color:"#333"
          }}
        >
          Home
        </Link>


        <button
          onClick={()=>setShowCart(!showCart)}
          style={{
            border:"none",
            background:"#111827",
            color:"white",
            padding:"10px 18px",
            borderRadius:"25px",
            cursor:"pointer",
            fontSize:"15px"
          }}
        >
          🛒 Cart ({cart.length})
        </button>


        <Link
          to="/contact"
          style={{
            textDecoration:"none",
            color:"#333"
          }}
        >
          Contact
        </Link>


      </div>

    </nav>
  )
}

export default Navbar;