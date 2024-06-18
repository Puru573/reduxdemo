import * as actionTypes from "./action.js";
export const buyBat=()=>{
    return{
        type:actionTypes.BUY_BAT
    }
}

export const buyBall=(qty)=>{
    return {
        type:actionTypes.BUY_BALL,
        payload:qty
    }
}

const fetchReq=()=>{
    return {
        type:actionTypes.FETCH_REQ
    }
}

const fetchSuc=(users)=>{
    return{
        type: actionTypes.FETCH_SUCC,
        payload:users
    }
}

const fetchFail=(error)=>{
    return{
        type:actionTypes.FETCH_FAIL,
        payload:error.message
    }
}

export const fetchUser=()=>{   //we have dispatch it coz of redux as i said that we can perform async ans await task using thunk
    return async(dispatch)=>{
        dispatch(fetchReq())
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/user");
            let finalRes=await res.json();
            if (!finalRes.ok){
                throw new Error(`Error! Status ${res.status}`)
            }
            dispatch(fetchSuc(finalRes));
        }
        catch(error){
            console.log("error",error);
            dispatch(fetchFail(error));
        }
    }
}