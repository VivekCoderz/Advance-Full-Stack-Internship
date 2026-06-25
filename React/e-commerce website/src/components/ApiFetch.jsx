import React, { useEffect, useState } from 'react'

const ApiFetch = () => {
    const [user,setUser] = useState([])
    const [search,setSearch] = useState(null)
    useEffect(()=>{
        const data = fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((d)=>{
            return d.json()
        })
        .then((d)=>{
            console.log(d)
            setUser(d)
        })
        .catch((err)=>{
            setUser([])
            console.log(err)
        })
    },[])
    console.log(user)
  return (
    <div>
        <h1>User details</h1>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}} value={search} />
      {
        user.filter((us)=>{
            return us.name.toLowerCase().startsWith(search)
        }).map((e)=>{
            return (
                <div>{e.name}</div>
            )
        })
      }
    </div>
  )
}

export default ApiFetch