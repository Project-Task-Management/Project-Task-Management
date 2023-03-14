import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Anmeldung = () => {
  return (
    <div className='regst'>
    <form>
 
 <h2>Login</h2>    
 

 
 <div>
 <label >E-mail</label>
 <input className='input-feld' type="email"  name=''  placeholder='Ihr E-mail'/>
 </div>   
 <div>
 <label >Password</label>
 <input className='input-feld' type="password" placeholder='password' />
 </div>

 
 <div>
   
 <Button className='bt'>Anmelden</Button> 
 </div>
 
 </form>   
 <div>
   <p>haven't  an account ?<span><Link to="/registierung">Registeren  here</Link> </span></p>
   
 </div>
     </div>
  )
}

export default Anmeldung