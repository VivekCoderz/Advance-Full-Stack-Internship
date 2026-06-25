import React from "react";

const IndiviualCard = ({pro, increaseQuantity, addCart}) => {

return (
<div
style={{
  width:"220px",
  background:"#fff",
  borderRadius:"16px",
  overflow:"hidden",
  boxShadow:"0 4px 15px rgba(0,0,0,0.12)",
  transition:"0.3s",
}}

onMouseEnter={(e)=>{
 e.currentTarget.style.transform="translateY(-6px)"
}}

onMouseLeave={(e)=>{
 e.currentTarget.style.transform="translateY(0)"
}}
>


{/* Image */}

<div
style={{
 height:"170px",
 background:"#f3f4f6",
 position:"relative"
}}
>

<img
src={pro.imageURL}
alt="product"
style={{
 width:"100%",
 height:"100%",
 objectFit:"cover"
}}
/>


<span
style={{
 position:"absolute",
 top:"10px",
 left:"10px",
 background:"#ef4444",
 color:"white",
 fontSize:"11px",
 padding:"5px 8px",
 borderRadius:"15px"
}}
>
{pro.discount} OFF
</span>


</div>



{/* Content */}

<div
style={{
padding:"12px"
}}
>


<h3
style={{
fontSize:"16px",
margin:"0 0 5px",
color:"#222"
}}
>
{pro.name}
</h3>



<p
style={{
fontSize:"12px",
color:"#666",
height:"32px",
overflow:"hidden",
margin:"5px 0"
}}
>
{pro.description}
</p>



<div
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}
>


<span
style={{
background:"#16a34a",
color:"white",
fontSize:"11px",
padding:"4px 8px",
borderRadius:"10px"
}}
>
⭐ {pro.reviews}
</span>


<span
style={{
fontSize:"12px",
color:"green"
}}
>
Stock {pro.stoke}
</span>


</div>




{/* Price */}

<div
style={{
marginTop:"8px"
}}
>

<span
style={{
fontSize:"19px",
fontWeight:"700"
}}
>
₹{pro.price}
</span>


<span
style={{
fontSize:"12px",
marginLeft:"8px",
color:"gray",
textDecoration:"line-through"
}}
>
₹{pro.oldPrice}
</span>

</div>




{/* Quantity */}

<div
style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"15px",
margin:"10px 0"
}}
>

<button style={btn}
onClick={()=>{
 if(pro.quantity>0)
 increaseQuantity(pro.id,-1)
}}
>
-
</button>


<b>
{pro.quantity}
</b>


<button style={btn}
onClick={()=>{
increaseQuantity(pro.id,1)
}}
>
+
</button>


</div>




<button
onClick={()=>addCart(pro.id)}
style={{
width:"100%",
padding:"9px",
border:"none",
borderRadius:"20px",
background:"#2563eb",
color:"white",
fontWeight:"600",
cursor:"pointer",
fontSize:"13px"
}}
>
🛒 Add Cart
</button>



</div>

</div>

)

}


const btn={
width:"30px",
height:"30px",
borderRadius:"50%",
border:"none",
background:"#e5e7eb",
fontSize:"18px",
cursor:"pointer"
}


export default IndiviualCard;