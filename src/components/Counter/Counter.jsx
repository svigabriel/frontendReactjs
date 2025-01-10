//import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/features/Counter/counterSlice.js'

const Counter =() => {
  const count = useSelector((state) => state.counter.value)
  const islogged = useSelector((state) => state.counter.islogged)
  
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <span>{islogged}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
export default Counter