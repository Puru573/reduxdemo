let initialState={
    ball:20
}

const ballReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Buy_Ball":
            return {...state, ball:state.ball-action.payload}
        
            default:
                return state;
    }
}

export default ballReducer;