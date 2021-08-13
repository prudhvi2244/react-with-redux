import React from 'react'
import {connect} from 'react-redux'
import {buyPizza} from '../redux/pizza/pizzaAction'
function PizzaContainer(props) {
    return (
        <div>
            <h3>Orde Pizza Online ,Use Promo Code 'HAPPYWEEKEND'</h3>
            <hr/>
            <h4>Available Pizzas: {props.numOfPizzas}</h4>
            <button onClick={props.buyPizza} className='mt-2 btn btn-success'>Buy Pizza</button>
        </div>
    )
}

const mapStateToProps=(state)=>
{
  return{
        numOfPizzas:state.pizza.numOfPizzas
}
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        buyPizza:()=>dispatch(buyPizza())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(PizzaContainer)
