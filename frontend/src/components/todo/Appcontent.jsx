import React from 'react'

function Appcontent(props) {
  console.log(props.test);
  
  return (
    <>  
    <h1>No todo</h1>
    <div>
   
    {props.test.map((element, index) => (
                    <p key={index}>{element.title}</p>
                ))}
    </div>
    </>
  )
}

export default Appcontent