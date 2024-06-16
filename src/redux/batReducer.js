let initialState={
    bat:20
}

const batreducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Buy_Bat':
            return{...state,bat:state.bat-1} //immutqable change
        default :
        return state
    }
}

export default batreducer;

// reducer kya he ek state ko define krne vala ek component he jisme hum component ki initialvalue he vo define kr rhe he