import { useState } from "react";
import "./Counter.scss";
import minus from "../../assets/minus-solid.svg"
import plus from "../../assets/plus-solid.svg"

const Counter = () => {
  // create a state for keeping track of count - each time the component is rendered, it keeps track of its own state, per employee
  const [ counter, setCounter ] = useState<number>(0)
  // that last bit initialises the counter vriable in state with number 0

const handleIncrement = () => {
    setCounter(counter + 1)   
  }

const handleDecrement = () => {
if (counter === 0) {
    // disable counter button
  } else {
    setCounter(counter - 1)   
  }
}

  return (
    <div className="counter">
      <img src={minus} alt="" className="counter__control--minus" onClick={handleDecrement}/>
    <img />
    {counter}
    <img src={plus} alt="" className="counter__control--plus" onClick={handleIncrement}/>
    </div>
  );
};

export default Counter;
