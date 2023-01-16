const intialValue = 0;
export const reducer = (state = intialValue,action)=>{
      switch(action.type){
        case "INCREMENT":
             return state + action.payload;
        case "DECREMENT":
            return  state - action.payload;
        default:
            return state; 
      }
}