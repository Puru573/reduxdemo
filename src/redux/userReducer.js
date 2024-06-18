import * as actionTypes from './action';
const initialState={
    loading:false,
    error:'',
    user:[]
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_REQ :
            return{
                ...state,loading:true
            }
        case actionTypes.FETCH_SUCC:
            return{
                ...state,loading:false, user:[...action.payload]
            }

        case actionTypes.FETCH_FAIL:
            return{
                ...state,loading:false,error:action.payload
            }
        default:
            return state
    }
}

export default userReducer;