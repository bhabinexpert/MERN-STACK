import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [message, setMessage] = useState()

  const onIncreaseButtonCLick = ()=>{
    setCount(count + 1)
    setMessage('')
  }

  const onDecreaseButtonClick = ()=>{
    setCount(count -1)
    if(count <= 0){
      setCount(count)
      setMessage("The value can't be decreased anymore..")

    }
  }
  
  
  

  return (
    <>
    <h1 style={{color:"blueviolet"}}> This is React Project</h1>
    <h3 style={{color:"GrayText"}}> Count Value :{count}</h3>

    <h3 id='message'> {message}</h3>

    
    
    <button onClick={onIncreaseButtonCLick}> Upvote</button>
    <button onClick = {onDecreaseButtonClick} style = {{marginLeft:"14px"}}> Decrease</button>
      
    </>
  )
}

export default App
