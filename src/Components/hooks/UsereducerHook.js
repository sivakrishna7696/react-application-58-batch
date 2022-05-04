import React,{useReducer} from 'react'

function UsereducerHook() {
    // reducer will update the state based on your action
    const reducer = (currentState,action) =>{
        console.log(action)
            switch(action){
                case "INCREMENT":
                    return currentState + 1

                    case "DECREMENT":
                        return currentState - 1

                default:
                    return currentState;

            }
    }

   const [count,dispatch] =  useReducer(reducer,0)
  return (
    <div>
        <p>count:{count}</p>
        <button className='btn btn-info me-4' onClick={()=>{dispatch("INCREMENT")}}>Increment</button>
        <button onClick={()=>{dispatch("DECREMENT")}} className='btn btn-info'>Decrement</button>
    </div>
  )
}

export default UsereducerHook