
import React, { useContext, useEffect } from "react";
import { StoreProvider } from "../context/Store";
export default () => {
    const { state, setName } = useContext(StoreProvider);
    console.log(state);
    // useEffect(() => {
    //     setName()
    // })
    const handle = () => { setName("jop") }
    return (
        <h1>
            {state.name}
            <button onClick={handle}>
                click me dude
            </button>
        </h1>
    )
}