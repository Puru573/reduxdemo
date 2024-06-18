import React, {useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../redux/actionCreator';

function User({userData,fetchData}) {
    useEffect(() => {
       fetchData();
    }, [])
    return (
        <div>
            {
                userData.loading ?
                    <div>Loading....</div> :
                    userData.error ? <h1>{userData.error}</h1> :
                        userData.user.map((val) => (
                            <div key={val.id}>
                                {val.name}
                            </div>
                        ))
            }

        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        userData:state.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchData:()=>dispatch(fetchUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)
