import { useState } from 'react';
import './index.css'

function App() {

  const [count,setCount] = useState(0);

  function incrementbtn(){
            
      setCount(count+1); 
  }

  
  return (
    <>
      
      <div className='bg-blue-300 text-white'>

        <button onClick={incrementbtn} >+</button>

         <h1  >Hello World! {count}</h1>
      </div>
     
      
    </> 
  )
}

export default App


