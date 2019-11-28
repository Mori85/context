import React, { createContext, useReducer } from 'react';


export const StoreProvider = createContext();

export const Store = ({ children }) => {
    const initialState = {
        name: "Moteza",
        lastName: "jenab"
    }



    // reducer send state by default  
    const reducer = (state, action) => {
        console.log(action.payload);
        console.log(action.type);
        switch (action.type) {
            case "setName":
                return ({ ...state, name: action.payload })
            default:
                return state
        }

    }



    //  action
    const setName = (name = "") => {
        dispatch({ type: "setName", payload: name })
        // these are what we have in action 
    }

    //first we call dispatch and it call reducer 
    const [state, dispatch] = useReducer(reducer, initialState);
    return (

        <StoreProvider.Provider value={{ state, setName }} >
            {children}
        </StoreProvider.Provider>


    )

}