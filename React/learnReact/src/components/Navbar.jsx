function Navbar(){
    return (
        <div 
        style={
            {
                display : "flex",
                justifyContent : "space-between",
                alignItems : "center",
                // width : '100vw',
                backgroundColor : "whitesmoke",
                padding : "0px 20px",
                // height : '40px'
            }
        }>
            <h1 style={{
                color : "blue"
            }}>
                L O G O
            </h1>
            
            <div className="SearchArea">
                <input style={{
                    width : '500px',
                    height : '30px',
                    outline : "none",
                    border : '2px solid black',
                    borderRadius :  '20px',
                    padding : '5px 10px',
                    fontSize : '17px'
                }} type="text"  placeholder="Search product"/>
                <button style={{
                    margin : "0px 20px",
                    padding : "10px",
                    borderRadius : "10px",
                    backgroundColor : "blue",
                    color : "white"
                }}>Search</button>
            </div>
            
            <div style={{
                display : "flex",
                gap : "20px",
                fontSize : "17px"

            }} className="navButton">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}

export default Navbar