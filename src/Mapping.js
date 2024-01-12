import React from 'react'

const Mapping = () => {
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
    //  const index =2
  return (
   

    
<div className='grid grid-cols-4 bg-blue-500 gap-2'>



     <p>Pankaj</p>  
    
    <p>Name: {data[0].name}</p>
     <p>Age: {data[0].age}</p> 
     <p>City: {data[0].city}</p>  

<p>Amir</p>
    <p>Name:{data[1].name}</p>
    <p>Age:{data[1].age}</p>
    <p>City:{data[1].city}</p> 

<p>Perwez</p>
    <p>Name:{data[2].name}</p>
    <p>Age:{data[2].age}</p>
    <p>City:{data[2].city}</p> 
    <p></p>

    </div>
    
  )
}

export default Mapping;
