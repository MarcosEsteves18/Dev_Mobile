import React, { createContext, useReducer} from "react"
import cars from '../data/cars'


const initialStage = {cars}
const CarroContext = createContext({})

const actions = {

}

export const CarroProvider = props =>{
    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state, action) : state 
    }

    const [state, dispatch] = useReducer(reducer, initialStage)

    return(
        <CarroContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {props.children}
        </CarroContext.Provider>
    )
}

export default CarroContext