import React from 'react'
import { connect } from 'react-redux';
import { buyBat } from '../redux/actionCreator';

function Bat(props) {
  return (
    <div>
        <h1>Bat : {props.bat}</h1>
      <button onClick={()=>props.buyBat()}>button</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        bat:state.bat.bat
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyBat:()=>dispatch(buyBat())
    }
}

// mapStateToProps work is to accesss the atate value which is avaliable from the global store. to the bat component
// mapDispatchToprops work is to send the action from component to reducer to change the state value in the reducer.
 

export default connect(mapStateToProps,mapDispatchToProps)(Bat)
