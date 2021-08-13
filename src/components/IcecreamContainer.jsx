import React from 'react'
import {connect} from 'react-redux'
import { buyIcecream } from '../redux/icecream/icecreamAction'
import {useState} from 'react'
function IcecreamContainer(props) {

    const [count,setCount]=useState(0)

    return (
        <div>
            <h3>Buy Icreams and Mix with Pizza</h3>
            <hr/>
             <input value={count} onChange={e=>setCount(e.target.value)}  className='form-control' />
            <h4>Available IceCreams: {props.numOfIcecreams} </h4>
            <button onClick={()=>props.buyIcecream(count)} className='mt-2 btn btn-success'>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps=(state)=>
{
    return{
        numOfIcecreams:state.icecream.numOfIcecreams
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return {
        buyIcecream:(num)=>dispatch(buyIcecream(num))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)
