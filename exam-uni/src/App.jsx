import { useState } from 'react'
import './App.css'

function App() {
  
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')  
 const [password, setPassword] = useState('')
 const [submitted, setSubmitted] = useState(false)
 const [ocultar, setOcultar] = useState(false)

 const getname = (e) => {
   setName(e.target.value)
 }


 const getpasssword=(e)=>{
   setPassword(e.target.value)
 }
 const getOcultar = (e) => {
   e.preventDefault()
   if(name === ''&& password.length < 6){
     console.log('Name is required')
     console.log('Password must be at least 6 characters')
     return
   }
   setSubmitted(true)
   
 };
 if(submitted){
   return(
     <div>
       <p>Name:{name}</p>
       <p>Email: {email}</p>
       <p>Password: {password}</p>
     </div>
   );
 }
 return (
  <>
    <div>
     <form>
      Name:
      <input onChange={getname} type="text" name="name" value={name} />
      <br />
      Email:
      <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" value={email} />
      <br />
      Password:
      <input onChange={getpasssword} type="password" name="password" value={password} />
      <br />
      <button type="submit" onClick={getOcultar}>Submit</button>
     </form>
     <div>
      {name === '' && <p>Name is required</p>}
      {password.length > 0 && password.length < 6 && <p>Password must be at least 6 characters</p>}
     </div>
    </div>
  </>
 )

}

export default App

