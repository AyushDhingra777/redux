import React from 'react'
import { increment, decrement, reset } from '../actions/countAction'
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        centralCount: state
    }
}
const dispatchStatetoProps = (dispatch) => {
    return {
        plus: () => dispatch(increment()),
        minus: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}


function CounterComponent(props) {
    return (
        <div>
            <button onClick={props.plus}>+</button>
            <h1>{props.centralCount}</h1>
            <button onClick={props.minus}>-</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}
export default connect(mapStateToProps, dispatchStatetoProps)(CounterComponent)