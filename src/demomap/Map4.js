import React from 'react'

const Map4 = () => {
    const data=[
        {
            id:1,name:"John", city:"Lucknow", age:22,
            
        },
        {
            id:2,name:"Ram", city:"Kanpur", age:23,
        },
        {
            id:3,name:"Sameer",city:"Saharanpur", age:24,
        }
    ]
  return (
    <div>
      {
        data.map((Map4)=>(
       
        <div>{Map4.name}</div> 
            

        )

        )

        

        
      }
</div>
  )
    }


export default Map4
