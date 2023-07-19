import { MovementsContext } from "../context/MovementContext";
import { useContext } from "react";

export const useMovementsContext = () => {
    const context = useContext(MovementsContext)

    if (!context) {
        throw Error('useMovementsContext must be used inside a MovementsContextProvider.')
    }

    return context
};