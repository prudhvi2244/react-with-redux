import {createStore,combineReducers} from 'redux'
import { iceCreamReducer } from './icecream/icecreamReducer'
import { pizzaReducer } from './pizza/pizzaReducer'

const rootReducer=combineReducers({
    pizza:pizzaReducer,
    icecream:iceCreamReducer
})

export const store=createStore(rootReducer)