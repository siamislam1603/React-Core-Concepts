import React, { useReducer } from 'react';

const ReducerCount = () => {
    const initialState={count:0};
    // Here action is a object which contains action type mandatorily and we can also send extra stuff.
    const reducer=(state,action)=>{
        console.log(state);// here state=initialState which we send in the useReducer parameter
        switch(action.type){
            case 'INCREMENT':
                return {count: state.count+1};
            case 'DECREMENT':
                return {count:state.count-1};
            default:
                return state;
        }
    }
    const [state,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <h2>Change count using useReducer: {state.count}</h2>
            <button onClick={()=>dispatch({type:'INCREMENT'})} style={{marginRight:'10px'}}>Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
        </div>
    );
};

export default ReducerCount;