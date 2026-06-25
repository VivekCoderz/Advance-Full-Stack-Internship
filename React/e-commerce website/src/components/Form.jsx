import React, { useState } from "react";

const Form = () => {

  const inputStyle = {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
  };


  const labelStyle = {
    fontWeight: "600",
    color: "#333",
  };


  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  };


  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    address: "",
    mobileNumber: "",
    course: "",
    skills: [],
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(userData.firstName!="") return 
    if(userData.firstName.length<3) return 
    for(let i = 0;i<userData.firstName.length;i++){
      if(userData.firstName[i]>='0' && userData.firstName[i]<='9') return
    }
    
    if(userData.lastName!="") return 
    if(userData.lastName.length<2) return 
    for(let i = 0;i<userData.lastName.length;i++){
      if(userData.lastName[i]>='0' && userData.lastName[i]<='9') return
    }
    
    if(!(userData.email.includes('@') && (userData.email.includes('.com') || userData.email.includes('.in')))) return 
    
    if(userData.password!="") return 
    if(userData.password.length<8) return 
    let u = false,l = false, n = false
    for(let i = 0;i<userData.password.length;i++){
      if(userData.password[i]>='0' && userData.password[i]<='9') n = true;
      if(userData.password[i]>='A' && userData.password[i]<='Z') u = true;
      if(userData.password[i]>='a' && userData.password[i]<='z') l = true;
    }
    if(!u) return 
    if(!l) return 
    if(!n) return 


    if(userData.confirmPassword=="") return 
    if(userData.confirmPassword!=userData.password) return 


    if(userData.age=="") return 
    if(!userData.age.isNaN(Number(userData.age))) return 

    if(!(Number(userData.age)>18 & Number(userData.age)<60)) return 








    
    console.log(userData);
  };


  const handleChange = (e) => {

    const {name, value, type, checked} = e.target;
    if(type === "checkbox" && name === "skills"){

      setUserData({
        ...userData,
        skills: checked
        ? [...userData.skills,value]
        : userData.skills.filter((skill)=>skill !== value)
      })

    }
    else{

      setUserData({
        ...userData,
        [name]:value
      })

    }

  };



  return (

    <div
      style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg,#667eea,#764ba2)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"20px"
      }}
    >


      <div
        style={{
          width:"450px",
          background:"#fff",
          padding:"35px",
          borderRadius:"20px",
          boxShadow:"0 15px 35px rgba(0,0,0,0.2)"
        }}
      >


        <h2
          style={{
            textAlign:"center",
            color:"#444"
          }}
        >
          Student Registration Form
        </h2>



        <form
          onSubmit={handleSubmit}
          style={{
            display:"flex",
            flexDirection:"column",
            gap:"18px"
          }}
        >



        <div style={boxStyle}>
          <label style={labelStyle}>
            First Name
          </label>

          <input
            name="firstName"
            style={inputStyle}
            placeholder="Enter first name"
            onChange={handleChange}
          />
        </div>



        <div style={boxStyle}>
          <label style={labelStyle}>
            Last Name
          </label>

          <input
            name="lastName"
            style={inputStyle}
            placeholder="Enter last name"
            onChange={handleChange}
          />
        </div>



        <div style={boxStyle}>
          <label style={labelStyle}>
            Email
          </label>

          <input
            name="email"
            type="email"
            style={inputStyle}
            placeholder="Enter email"
            onChange={handleChange}
          />

        </div>



        <div style={boxStyle}>

          <label style={labelStyle}>
            Password
          </label>

          <input
            name="password"
            type="password"
            style={inputStyle}
            placeholder="Enter password"
            onChange={handleChange}
          />

        </div>




        <div style={boxStyle}>

          <label style={labelStyle}>
            Confirm Password
          </label>

          <input
            name="confirmPassword"
            type="password"
            style={inputStyle}
            placeholder="Confirm password"
            onChange={handleChange}
          />

        </div>




        <div style={boxStyle}>

          <label style={labelStyle}>
            Mobile Number
          </label>


          <input
            name="mobileNumber"
            type="tel"
            style={inputStyle}
            placeholder="Enter mobile number"
            onChange={handleChange}
          />

        </div>




        <div>

          <label style={labelStyle}>
            Gender :
          </label>


          <div>

            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />

            Male


            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />

            Female


            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
            />

            Other


          </div>

        </div>




        <div style={boxStyle}>

          <label style={labelStyle}>
            Course
          </label>


          <select
            name="course"
            style={inputStyle}
            onChange={handleChange}
          >

            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>

          </select>

        </div>




        <div>


          <label style={labelStyle}>
            Skills
          </label>


          <br/>
          <br/>


          <input
            name="skills"
            value="HTML"
            type="checkbox"
            onChange={handleChange}
            />
          HTML

            <br/>

          <input
            name="skills"
            value="CSS"
            type="checkbox"
            onChange={handleChange}
            />
          CSS
            <br/>


          <input
            name="skills"
            value="Javascript"
            type="checkbox"
            onChange={handleChange}
            />
          Javascript
          <br/>


          <input
            name="skills"
            value="React"
            type="checkbox"
            onChange={handleChange}
            />
          React
            <br/>


        </div>





        <div style={boxStyle}>


          <label style={labelStyle}>
            Address
          </label>


          <textarea
            name="address"
            style={inputStyle}
            onChange={handleChange}
          />


        </div>





        <button

          type="submit"

          style={{
            padding:"13px",
            border:"none",
            borderRadius:"12px",
            background:"#667eea",
            color:"white",
            fontSize:"17px",
            cursor:"pointer"
          }}

        >

          Register

        </button>



        </form>


      </div>


    </div>

  )
}


export default Form;