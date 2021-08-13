import { BUY_ICECREAM } from "./icecreamTypes"
import {buyIcecream} from './icecreamAction'

const initialState={
    numOfIcecreams:20
}

export const iceCreamReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return {
                numOfIcecreams:state.numOfIcecreams-action.payload
            }
        default:
            return state
    }
}