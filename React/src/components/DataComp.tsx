import { useState } from "react"
import { data } from "../data/dataset";


const DataComp = () => {
    
  const [product,setProduct]=useState(data);

  return (
    <div>
            <h1>Data Comp</h1>
       <h1>------------------------------</h1>


            {product.map((pro,index)=>{

                return <>
                
                    <h1 key={index.id} >{pro.fname} </h1>
                </>


            })}  
            



    </div>



  )
}

export default DataComp