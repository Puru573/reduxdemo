import * as actionTypes from "./action"
let initialState={
    ball:20
}

const ballReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.BUY_BALL :
            return {...state, ball:state.ball-action.payload}
        
            default:
                return state;
    }
}

export default ballReducer;