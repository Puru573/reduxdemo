import React, { useState } from 'react'
import { connect } from 'react-redux'

function Ball(props) {
    const [qty,setQty]=useState(0);
  return (
    <div>
      <h1>Ball:{props.ball}</h1>
      <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)}></input>
      <button onClick={()=>props.buyBall(qty)}>button</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {ball:state.ball.ball}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        buyBall: (qty)=>dispatch({type:"Buy_Ball",payload:qty})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ball)
