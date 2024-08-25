import { useState } from "react"

export default function Player(){
  const playerStyle = {
    border: '2px solid purple',
    margin: '10px',
    borderRadius: '15px'
  }

  const [count, setCount] = useState(11);

  const handleAdd = () => {
    setCount(count+1)
  }
  const handleRemove = () => {
    setCount(count-1)
  }
  return (
    <div style={playerStyle}>
      <h3>Player: {count}</h3>
      <button onClick={handleAdd}>Add Player</button>
      <button onClick={handleRemove}>Remove Player</button>
    </div>
  )
}