import React from "react"

function Map(){
    const data=   [
        {
            
             name:'Pankaj',
     age:23,
     city:"Lucknow"
     }, 
     
     {
         name:'Amir',
     age:21,
     city:"Balrampur"
     },
     {
         name:'Perwez',
     age:22,
     city: "Kushinager"

     }
     ] 
     
    
    return(
        <div>
{data.map((i)=>{
            return(
                <div className='flex flex-col h-52 gap-2 p-2 bg-blue-200 shadow rounded-md'>
                    <p>{i?.name}</p>
                    <p>Name:{i?.name}</p>
                </div>
            )
         }
    
         )
        } 
        </div>
        
    )
}
export default Map;