import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {decrement,increment} from '../redux/Action/actions'
function Counter() {
    
    const initialState = useSelector((store)=>{
        return store.reducer;
    });
    const dispatch = useDispatch();
  return (
    <div>
        <p>
            <button onClick={()=>dispatch(decrement(5))} className="btn">-</button>
            {initialState} 
            <button onClick={()=>dispatch(increment(5))} className="btn">+</button>
        </p>
    </div>
  )
}

export default Counter