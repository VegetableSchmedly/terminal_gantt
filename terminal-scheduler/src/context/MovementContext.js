import { createContext, useReducer } from "react";

export const MovementsContext = createContext()

export const movementsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_MOVEMENTS': 
        return {
            movements: action.payload
        }
        case 'CREATE_MOVEMENT':
            return {
                movements: [action.payload, ...state.movements]
            }
        case 'DELETE_MOVEMENT':
            return {
                movements: state.movements.filter((m) => m._id !== action.payload._id)
            }
        default:
            return state
            
    }
}

export const MovementsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movementsReducer, {
        movements: null
    })


    return(
        <MovementsContext.Provider value={{...state, dispatch}}>
            { children }
        </MovementsContext.Provider>
    )
}