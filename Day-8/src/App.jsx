import './App.css'
import { Cards } from './Components/Cards';
import { Counter } from './Counter';
import { ToggleMessage } from './ToggleMessage';
function Para(){
  return <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero laboriosam id sequi doloremque natus necessitatibus tempora. Natus, eum eveniet laudantium placeat aliquam ut vitae ullam ex corrupti voluptatum maxime. Molestias.</p>;
}
function App() {
  return (
    <div>
      <h1>Day 8</h1>
      <Para /> <br /><br />
      <h1> Day 9</h1>
      <Cards title = "Card 1" description="This is the first Card" />
      <Cards title = "Card 2" description="This is the Second Card" />
      <Cards title = "Card 3" description="This is the Third Card" />

      <h1>Day 10</h1>
      <Counter />

      <h1>Day 11</h1>
      <ToggleMessage />
    </div>
  )
}

export default App
