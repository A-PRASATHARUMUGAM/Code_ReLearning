import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };
  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };


const [user,setUser]=useState([]);
const [loading,setLoading] = useState(true);

 useEffect(() => {
    console.log("UseEffect Mounted");
    setTimeout(() => {
    fetchUsers()
      setLoading(false)
    }, 2000);
   
  },[]);

  const fetchUsers = async () => {

    try{
      const users = await fetch("https://api.github.com/users")
      .then(res=>res.json())
         console.log(users);
       setUser(users)
    }
    catch(error){
      console.log(error)
    }

  }

if(loading){

  return (
    <>
      Loading.....   
    </>
  )
}

if(!loading){
  return (
    <div>
      <hr />
      <h1>UseEffect</h1>
      <hr />

      <h1>Counter1 : {count1}</h1>
      <button onClick={handleIncrement1}>+</button>

      <h1>Counter2 : {count2}</h1>
      <button onClick={handleIncrement2}>+</button>

      <h1>User List</h1>
      <hr />
      {user.map((user)=>{

        const {login,id} =user;

        return <div key={id}>  

          <ul>

            <li>Id: {id}</li> 
            <li>Name: {login}</li>

          </ul>
  
            </div>

      })}
      
    </div>
  );

}


};

export default UseEffect;
