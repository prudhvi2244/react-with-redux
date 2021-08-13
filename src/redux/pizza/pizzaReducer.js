import { BUY_PIZZA } from "./pizzaTypes"

const initialState={
    numOfPizzas:55
}

export const pizzaReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case BUY_PIZZA:
            return{
                numOfPizzas:state.numOfPizzas-1
            }
        default:
            return state
    }
}