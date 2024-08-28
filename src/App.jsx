import { useState } from 'react'
import './App.css'

function App() {

  const [counting, setCounting] = useState(0)

  let [msg, setMsg] = useState("")


  const addValues = () => {
    if (counting >= 20) {
      console.log("the values is not greaterthen 20");
      msg = "the values is not greaterthen 20"
      setMsg(msg)
    }
    else {
      setCounting(counting + 1)
    }

  }

  const removeClick = () => {
    if (counting <= 0) {
      console.log("the values is not negative");
      msg = "the values is not negative"
      setMsg(msg)
    }
    else {
      setCounting(counting - 1)
    }
  }



  return (
    <>
      <h1>Counter functions are used{msg}</h1>
      <h2>Counter values:{counting}</h2>

      <button onClick={addValues}>Add values</button>
      <button onClick={removeClick}>Remove values</button>
    </>
  )
}

export default App
