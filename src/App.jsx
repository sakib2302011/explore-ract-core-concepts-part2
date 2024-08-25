import './App.css'
import Counter from './counter'
import Player from './players';
import Users from './users';
import Friends from './friends';
function App() {
  
  function handleClick(){
    alert('Button clicked');
  }
  const handleClick2 = () => {
    alert('Button 2 clicked');
  }
  const addToFive = (num) => {
    alert(num+5);
  }
  return (
    <>
    <h3>Explore React Core Concept Part 2</h3>
    <Friends></Friends>
    
    {/* <Users></Users>
    <Player></Player>
    <Counter></Counter>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick2}>Click 2</button>
    <button onClick={()=> {alert('Button 3 clicked')}}>Click 3</button>

    <button onClick={()=> addToFive(4)}>Add Four</button> */}
    </>
  )
}

export default App
