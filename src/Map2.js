import React from 'react'

const Map2 = () => {

    const data=[
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
    
  return (

    <div className='grid grid-cols-3 gap-2'>
     
       <p>Name:{data[2]?.name}</p> 
       <p>Age:{data[0]?.age}</p> 
       <p>City:{data[1]?.city}</p> 
    </div>
  )
}

export default Map2;
